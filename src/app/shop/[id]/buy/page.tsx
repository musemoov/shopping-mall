'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, X, Check, CreditCard, Smartphone, BanknoteIcon } from 'lucide-react';

// 임시 제품 데이터 (실제로는 DB에서 가져와야 함)
const PRODUCTS = [
  {
    id: '1',
    name: 'Apple 2025 아이패드 에어 11',
    description: 'Apple 2025 아이패드 에어 11 M3 칩 탑재, 울트라 와이드 카메라, 스피커 개선, 최대 10시간 배터리 수명으로 어디서든 작업과 엔터테인먼트를 즐길 수 있습니다.',
    price: 949000,
    originalPrice: 999000,
    rating: 4.6,
    image: '/images/products/iPadAir11_M3.png',
    brand: 'Apple',
    color: 'Space Gray',
    category: '태블릿'
  },
  {
    id: '2',
    name: 'Apple 2024 아이맥 M4',
    description: 'Apple 2024 아이맥 24 M4...',
    price: 1850700,
    originalPrice: 2000000,
    rating: 4.2,
    image: '/images/products/iMac.png',
    brand: 'Apple',
    color: 'Space Gray',
    category: '데스크탑'
  },
  {
    id: '3',
    name: 'Apple 정품 iPadPro 11 M4',
    description: 'Apple 정품 2024 아이패드 프로 11 M4칩 스탠다드 글래스, 최신 M4 칩으로 더욱 강력한 성능을 제공합니다. 전문가용 애플리케이션을 원활하게 구동하고 고급 그래픽 작업도 가능합니다.',
    price: 1535040,
    originalPrice: 1700000,
    rating: 4.5,
    image: '/images/products/iPadPro11_M4.png',
    brand: 'Apple',
    color: 'Silver',
    category: '태블릿'
  },
  {
    id: '4',
    name: 'Apple 에어팟 프로 2세대',
    description: 'Apple 2023 에어팟 프로 2세대 USB-C, 향상된 액티브 노이즈 캔슬링과 주변음 허용 모드를 제공합니다. 더 오래 지속되는 배터리와 USB-C 충전 기능이 추가되었습니다.',
    price: 307510,
    originalPrice: 359000,
    rating: 4.5,
    image: '/images/products/airpodPro2.png',
    brand: 'Apple',
    color: 'White',
    category: '이어폰'
  },
  {
    id: '5',
    name: '2024 아이패드 mini A17 Pro',
    description: 'Apple 2024 아이패드 mini A17 Pro 칩 탑재로 강력한 성능을 제공합니다. 콤팩트한 크기에 놀라운 디스플레이와 애플 펜슬 2세대 지원 기능을 갖추고 있습니다.',
    price: 726530,
    originalPrice: 799000,
    rating: 4.1,
    image: '/images/products/iPadmini_A17.png',
    brand: 'Apple',
    color: 'Rose Gold',
    category: '태블릿'
  },
  {
    id: '6',
    name: 'Apple 아이폰 16e 자급제',
    description: 'Apple 아이폰 16e 자급제 최신 A16 칩셋과 향상된 카메라 시스템을 탑재했습니다. 올데이 배터리 수명과 더 밝아진 디스플레이로 일상 생활이 더욱 편리해집니다.',
    price: 940500,
    originalPrice: 1090000,
    rating: 4.7,
    image: '/images/products/iPhone_16e.png',
    brand: 'Apple',
    color: 'White',
    category: '스마트폰'
  },
  {
    id: '7',
    name: 'Apple 2024 맥북 프로 14 M4',
    description: 'Apple 2024 맥북 프로 14 M4 칩으로 놀라운 퍼포먼스와 배터리 효율성을 제공합니다. 선명한 Liquid Retina XDR 디스플레이와 다양한 연결 포트를 갖추고 있습니다.',
    price: 2701640,
    originalPrice: 2890000,
    rating: 4.5,
    image: '/images/products/MacbookPro14.png',
    brand: 'Apple',
    color: 'Space Gray',
    category: '노트북'
  },
  {
    id: '8',
    name: 'Apple 에어태그',
    description: 'Apple 에어태그 모델명/품번: MX532FE/A, 정확한 위치 추적 기능과 배터리 교체 가능한 디자인으로 소중한 물건을 쉽게 찾을 수 있습니다.',
    price: 42000,
    originalPrice: 55000,
    rating: 4.3,
    image: '/images/products/airTag.png',
    brand: 'Apple',
    color: 'White',
    category: '액세서리'
  },
  {
    id: '9',
    name: 'Apple 정품 2024 애플워치 SE',
    description: 'Apple 정품 2024 애플워치 SE 2세대 알루미늄 케이스, 건강 모니터링 기능과 운동 추적 기능을 갖춘 합리적인 가격의 스마트워치입니다.',
    price: 319000,
    originalPrice: 369000,
    rating: 4.0,
    image: '/images/products/appleWatchSE2.png',
    brand: 'Apple',
    color: 'Starlight',
    category: '스마트워치'
  },
  {
    id: '10',
    name: 'Multi Touch 표면 Magic Mouse',
    description: 'Apple 2024 Multi Touch 표면 Magic Mouse MXK53KH/A, 직관적인 멀티터치 제스처로 편리한 조작이 가능하며 재충전 가능한 배터리를 갖추고 있습니다.',
    price: 94050,
    originalPrice: 119000,
    rating: 4.2,
    image: '/images/products/MagicMouse.png',
    brand: 'Apple',
    color: 'White',
    category: '액세서리'
  },
  {
    id: '11',
    name: 'Apple 정품 애플펜슬 2세대',
    description: 'Apple 정품 애플펜슬 2세대 블랙, 블루, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 399990,
    rating: 4.9,
    image: '/images/products/applePencil.png', 
  },
  {
    id: '12',
    name: 'Apple 정품 Lightning-C타입 충전',
    description: 'Apple 정품 Lightning-C타입 충전 케이블 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 3899990,
    rating: 4.5,
    image: '/images/products/Lightning.png',
  },
  {
    id: '13',
    name: 'Apple 2024 에어팟 맥스 노이즈 캔슬',
    description: 'Apple 2024 에어팟 맥스 노이즈 캔슬링 블루투스 헤드폰 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 499990,
    rating: 4.5,
    image: '/images/products/airPodsMax.png',
  },
  {
    id: '14',
    name: 'Apple 에어팟맥스 블루투스 헤드폰',
    description: 'Apple 에어팟맥스 블루투스 헤드폰 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 799990,
    rating: 4.5,
    image: '/images/products/airPodsMax2.png',
  },
  {
    id: '15',
    name: 'Apple 애플워치9 GPS+Cellular',
    description: 'Apple 애플워치9 GPS+Cellular 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 1999990,
    rating: 4.5,
    image: '/images/products/appleWatch9.png',
  },
];

export default function BuyPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
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
  
  const product = PRODUCTS.find(p => p.id === id);
  
  // 추천 상품: 랜덤으로 5개 선택 (현재 제품 제외)
  const featuredProducts = PRODUCTS
    .filter(p => p.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">제품을 찾을 수 없습니다.</p>
      </div>
    );
  }

  // 제품 이미지 배열 (실제로는 각 제품마다 여러 이미지가 있어야 함)
  const productImages = [
    product.image,
    product.image, // 같은 이미지를 여러 번 사용 (데모용)
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 제품 이미지 */}
          <div>
            <div className="relative aspect-square bg-[#F8F9FA] rounded-2xl overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
            </div>
            
            {/* 작은 이미지 */}
            <div className="mt-4 flex gap-2">
              {productImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={`relative h-24 w-24 bg-[#F8F9FA] rounded-md overflow-hidden cursor-pointer
                              ${selectedImage === idx ? 'border-2 border-[#FF4500]' : 'border border-gray-200'}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 제품 정보 */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : i < product.rating
                        ? 'text-yellow-400 opacity-50'
                        : 'text-gray-200'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">브랜드</span>
                <span className="text-sm font-medium text-gray-900">{product.brand}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">색상</span>
                <span className="text-sm font-medium text-gray-900">{product.color}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">카테고리</span>
                <span className="text-sm font-medium text-gray-900">{product.category}</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">
                  ￦{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ￦{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center">
                <label htmlFor="quantity" className="mr-4 text-sm font-medium text-gray-700">
                  수량
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="rounded-lg border-gray-300 text-base p-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  장바구니 담기
                </button>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="flex-1 bg-[#FF4500] text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  바로 구매하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 추천 상품 섹션 */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">큐비 추천템</h2>
            <div className="h-0.5 w-16 bg-[#FF4500] mx-auto mt-3 mb-12"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuredProducts.map((item) => (
              <Link href={`/shop/${item.id}`} key={item.id} className="group">
                <div className="relative aspect-square bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900 text-sm">{item.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400'
                            : i < item.rating
                            ? 'text-yellow-400 opacity-50'
                            : 'text-gray-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">{item.rating}</span>
                </div>
                <p className="mt-1 text-sm font-bold text-gray-900">￦{item.price.toLocaleString()}</p>
                <button className="mt-2 px-3 py-1.5 w-full bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-800 hover:border-[#FF4500] hover:text-[#FF4500] transition-all duration-300 hover:scale-105">
                  구매하기
                </button>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link 
              href="/shop" 
              className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-800 hover:text-[#FF4500] hover:border-[#FF4500] transition-colors font-medium"
            >
              더보기
            </Link>
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
                      <span className="text-[#FF4500] text-xl font-bold">￦{(product.price * quantity).toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <ShoppingCart className="w-3 h-3 mr-1 inline-block" />
                      {product.name} × {quantity}개
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
                    <div className="mt-6 bg-white/80 rounded-2xl p-5 border border-gray-200 shadow-sm animate-fadeIn">
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
                      </div>
                    </div>
                  )}
                  
                  {/* 휴대폰 결제 입력 폼 */}
                  {selectedPayment === 'phone' && (
                    <div className="mt-6 bg-white/80 rounded-2xl p-5 border border-gray-200 shadow-sm animate-fadeIn">
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
                          <label className="block text-xs text-gray-500 mb-1">생년월일</label>
                          <input 
                            type="text" 
                            maxLength={6} 
                            placeholder="예: 980101" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none text-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* 무통장 입금 정보 */}
                  {selectedPayment === 'cash' && (
                    <div className="mt-6 bg-white/80 rounded-2xl p-5 border border-gray-200 shadow-sm animate-fadeIn">
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