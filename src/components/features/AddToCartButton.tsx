'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  className?: string;
}

export default function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  // 상품 추가 처리
  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    
    // 애니메이션을 위해 일정 시간 후 상태 초기화
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };
  
  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center gap-2 transition-all duration-300 ${
        isAdded 
          ? 'bg-green-500 text-white' 
          : 'bg-[#FF4500] text-white hover:bg-[#ff5720]'
      } ${className}`}
      disabled={isAdded}
    >
      {isAdded ? (
        <span>장바구니에 추가됨</span>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          <span>장바구니 담기</span>
        </>
      )}
    </button>
  );
} 