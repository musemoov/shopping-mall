'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, X, Trash2, Plus, Minus, ArrowRight, CreditCard, Check, Smartphone, BanknoteIcon } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<'card' | 'phone' | 'cash'>('card');
  
  // 결제 모달 닫기
  const closeModal = () => {
    setShowPaymentModal(false);
    setPaymentStatus(null);
  };
  
  // 결제 처리 시뮬레이션
  const simulatePayment = () => {
    setPaymentStatus('pending');
    
    // 2초 후 성공 상태로 변경 (실제 결제는 진행되지 않음)
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };
  
  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-[1200px] py-20 px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-3">장바구니가 비어있습니다</h1>
            <p className="text-gray-600 mb-8 max-w-md">
              장바구니에 상품을 추가하면 여기에 표시됩니다.<br /> 쇼핑을 계속하시겠습니까?
            </p>
            <Link 
              href="/shop" 
              className="px-6 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#ff5720] transition-colors font-medium"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] py-12 px-4">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            장바구니 <span className="text-[#FF4500]">({totalItems})</span>
          </h1>
          
          {isConfirmingClear ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">정말 비우시겠습니까?</span>
              <button 
                onClick={() => clearCart()}
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
              >
                비우기
              </button>
              <button 
                onClick={() => setIsConfirmingClear(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm hover:bg-gray-300 transition-colors"
              >
                취소
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsConfirmingClear(true)}
              className="flex items-center gap-1 px-4 py-2 text-gray-500 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>장바구니 비우기</span>
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">상품</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">수량</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-gray-700">가격</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 mr-4">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <Link 
                              href={`/shop/${item.id}`}
                              className="text-gray-900 font-medium hover:text-[#FF4500] transition-colors"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <button 
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="mx-3 w-8 text-center font-bold text-[#FF4500]">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-[#FF4500]">
                        ￦{(item.price * item.quantity).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">주문 요약</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">상품 금액</span>
                  <span className="font-medium text-[#FF4500]">￦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배송비</span>
                  <span className="font-medium text-[#FF4500]">무료</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">총 결제금액</span>
                    <span className="text-[#FF4500]">￦{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowPaymentModal(true)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white py-3 px-6 rounded-lg font-medium hover:from-[#ff5720] hover:to-[#FF7F50] transition-all shadow-md hover:shadow-lg"
              >
                <span>결제하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="mt-6">
                <Link
                  href="/shop"
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
                >
                  <span>쇼핑 계속하기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 결제 모달 */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50 animate-fadeIn">
          <div 
            className="glass-premium rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scaleIn"
            style={{
              boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 20px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
            }}
          >
            {paymentStatus === null && (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-transparent bg-clip-text">결제 정보</h3>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-400 hover:text-gray-600 bg-white/70 hover:bg-white/90 rounded-full p-2 transition-all shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">총 결제금액</span>
                      <span className="text-[#FF4500] text-xl font-bold">￦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <ShoppingCart className="w-3 h-3 mr-1 inline-block" />
                      총 {totalItems}개 상품
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 pl-1">
                      결제 수단 선택
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <div 
                        className={`border rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${selectedPayment === 'card' 
                          ? 'border-[#FF4500] bg-gradient-to-b from-orange-50 to-white shadow-md scale-[1.02]' 
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:scale-[1.02] hover:shadow-sm'}`}
                        onClick={() => setSelectedPayment('card')}
                      >
                        <CreditCard className={`w-7 h-7 mb-2 ${selectedPayment === 'card' ? 'text-[#FF4500]' : 'text-gray-400'}`} />
                        <span className={`text-sm ${selectedPayment === 'card' ? 'font-medium text-[#FF4500]' : 'text-gray-600'}`}>신용카드</span>
                      </div>
                      <div 
                        className={`border rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${selectedPayment === 'phone' 
                          ? 'border-[#FF4500] bg-gradient-to-b from-orange-50 to-white shadow-md scale-[1.02]' 
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:scale-[1.02] hover:shadow-sm'}`}
                        onClick={() => setSelectedPayment('phone')}
                      >
                        <Smartphone className={`w-7 h-7 mb-2 ${selectedPayment === 'phone' ? 'text-[#FF4500]' : 'text-gray-400'}`} />
                        <span className={`text-sm ${selectedPayment === 'phone' ? 'font-medium text-[#FF4500]' : 'text-gray-600'}`}>휴대폰</span>
                      </div>
                      <div 
                        className={`border rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${selectedPayment === 'cash' 
                          ? 'border-[#FF4500] bg-gradient-to-b from-orange-50 to-white shadow-md scale-[1.02]' 
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:scale-[1.02] hover:shadow-sm'}`}
                        onClick={() => setSelectedPayment('cash')}
                      >
                        <BanknoteIcon className={`w-7 h-7 mb-2 ${selectedPayment === 'cash' ? 'text-[#FF4500]' : 'text-gray-400'}`} />
                        <span className={`text-sm ${selectedPayment === 'cash' ? 'font-medium text-[#FF4500]' : 'text-gray-600'}`}>무통장</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 신용카드 입력 폼 */}
                  {selectedPayment === 'card' && (
                    <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm animate-fadeIn">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">카드 정보 입력</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">카드 번호</label>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              maxLength={4} 
                              placeholder="0000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                            <input 
                              type="text" 
                              maxLength={4} 
                              placeholder="0000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                            <input 
                              type="text" 
                              maxLength={4} 
                              placeholder="0000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                            <input 
                              type="text" 
                              maxLength={4} 
                              placeholder="0000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">유효기간</label>
                            <div className="flex gap-2">
                              <input 
                                type="text" 
                                maxLength={2} 
                                placeholder="MM" 
                                className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                              />
                              <span className="flex items-center text-gray-400">/</span>
                              <input 
                                type="text" 
                                maxLength={2} 
                                placeholder="YY" 
                                className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">CVC/CVV</label>
                            <input 
                              type="text" 
                              maxLength={3} 
                              placeholder="000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">카드 소유자 이름</label>
                          <input 
                            type="text" 
                            placeholder="카드에 표시된 이름" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* 휴대폰 결제 입력 폼 */}
                  {selectedPayment === 'phone' && (
                    <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm animate-fadeIn">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">휴대폰 결제 정보</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">휴대폰 번호</label>
                          <div className="flex gap-2">
                            <select className="w-1/4 p-2 border border-gray-300 rounded-lg focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700">
                              <option>010</option>
                              <option>011</option>
                              <option>016</option>
                              <option>017</option>
                              <option>018</option>
                              <option>019</option>
                            </select>
                            <input 
                              type="text" 
                              maxLength={4} 
                              placeholder="0000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                            <input 
                              type="text" 
                              maxLength={4} 
                              placeholder="0000" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-center focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">주민등록번호 앞 6자리 (생년월일)</label>
                          <input 
                            type="text" 
                            maxLength={6} 
                            placeholder="예: 980101" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                          />
                        </div>
                        
                        <div className="flex items-center mt-2">
                          <input type="checkbox" id="agree" className="mr-2" />
                          <label htmlFor="agree" className="text-xs text-gray-500">통신사 이용약관 및 개인정보 제공에 동의합니다</label>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* 무통장 입금 정보 */}
                  {selectedPayment === 'cash' && (
                    <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm animate-fadeIn">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">무통장 입금 정보</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">입금자명</label>
                          <input 
                            type="text" 
                            placeholder="입금자 이름을 입력하세요" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">입금은행</label>
                          <select className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700">
                            <option>KB국민은행</option>
                            <option>신한은행</option>
                            <option>우리은행</option>
                            <option>하나은행</option>
                            <option>농협은행</option>
                            <option>기업은행</option>
                          </select>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600">
                          <p className="font-medium mb-1">입금 계좌 안내</p>
                          <p>KB국민은행: 123-45-6789012 (주)큐비몰</p>
                          <p className="mt-2 text-[#FF4500]">주문 후 24시간 이내에 입금해 주셔야 주문이 확정됩니다.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={simulatePayment}
                  className="w-full bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white py-4 px-6 rounded-2xl font-medium hover:from-[#ff5720] hover:to-[#FF7F50] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <span className="relative z-10">결제하기</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </button>
              </>
            )}
            
            {paymentStatus === 'pending' && (
              <div className="flex flex-col items-center py-12">
                <div className="relative h-20 w-20 mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-[#FF4500] border-t-transparent animate-spin"></div>
                  <div className="absolute inset-3 rounded-full bg-gradient-to-r from-orange-50 to-white"></div>
                </div>
                <p className="text-gray-800 font-medium text-lg">결제 처리 중입니다...</p>
                <p className="text-gray-800 mt-2 text-center">안전한 결제를 위해<br />잠시만 기다려주세요.</p>
              </div>
            )}
            
            {paymentStatus === 'success' && (
              <div className="flex flex-col items-center py-10 animate-fadeIn">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-10 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-teal-100 rounded-full shadow-inner flex items-center justify-center">
                    <Check className="w-12 h-12 text-green-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">결제가 완료되었습니다</h3>
                <p className="text-gray-800 text-center mb-8">
                  주문이 성공적으로 처리되었습니다.<br />
                  이메일로 주문 내역이 발송되었습니다.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-6 rounded-2xl font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <span className="relative z-10">확인</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 

/* CSS 애니메이션을 위한 스타일을 global.css에 추가해주세요:
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

.animate-scaleIn {
  animation: scaleIn 0.3s ease-out forwards;
}
*/ 