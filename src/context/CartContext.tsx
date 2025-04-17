'use client';

import React, { createContext, useReducer, useContext, useEffect } from 'react';

// 장바구니 아이템 인터페이스
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// 장바구니 상태 인터페이스
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// 액션 타입
type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// 초기 상태
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// 리듀서 함수
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // 이미 있는 상품이면 수량만 증가
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        // 새 상품 추가
        const newItem: CartItem = {
          ...action.payload,
          quantity: 1,
        };
        
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // 수량이 0 이하면 상품 제거
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id } });
      }
      
      const item = state.items.find(item => item.id === id);
      
      if (!item) return state;
      
      const quantityDiff = quantity - item.quantity;
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalPrice: state.totalPrice + (item.price * quantityDiff),
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

// Context 생성
interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider 컴포넌트
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // 로컬 스토리지에서 장바구니 데이터 로드
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const { items, totalItems, totalPrice } = JSON.parse(savedCart);
      
      // 저장된 장바구니 데이터를 리듀서 상태로 복원
      items.forEach((item: CartItem) => {
        dispatch({ 
          type: 'ADD_ITEM', 
          payload: { 
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
          } 
        });

        // 수량 설정 (기본값은 1이므로 1개 이상이면 수량 업데이트)
        if (item.quantity > 1) {
          dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: item.id, quantity: item.quantity }
          });
        }
      });
    }
  }, []);
  
  // 장바구니 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
  
  // Context 값
  const value = {
    ...state,
    addItem: (item: Omit<CartItem, 'quantity'>) => 
      dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id: string) => 
      dispatch({ type: 'REMOVE_ITEM', payload: { id } }),
    updateQuantity: (id: string, quantity: number) => 
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
    clearCart: () => 
      dispatch({ type: 'CLEAR_CART' }),
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 사용하기 쉬운 커스텀 훅
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 