'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '@/components/features/AddToCartButton';

// 임시 제품 데이터 (실제로는 DB에서 가져와야 함)
const PRODUCTS = [
  {
    id: '1',
    name: 'Apple 2025 아이패드 에어 11',
    description: 'Apple 2025 아이패드 에어 11 M3 칩 탑재, 울트라 와이드 카메라, 스피커 개선, 최대 10시간 배터리 수명으로 어디서든 작업과 엔터테인먼트를 즐길 수 있습니다.',
    price: 949000,
    rating: 4.6,
    image: '/images/products/iPadAir11_M3.png',
  },
  {
    id: '2',
    name: 'Apple 2024 아이맥 M4',
    description: 'Apple 2024 아이맥 24 M4...',
    price: 1850700,
    rating: 4.2,
    image: '/images/products/iMac.png',
  },
  {
    id: '3',
    name: 'Apple 정품 iPadPro 11 M4',
    description: 'Apple 정품 2024 아이패드 프로 11 M4칩 스탠다드 글래스, 최신 M4 칩으로 더욱 강력한 성능을 제공합니다. 전문가용 애플리케이션을 원활하게 구동하고 고급 그래픽 작업도 가능합니다.',
    price: 1535040,
    rating: 4.5,
    image: '/images/products/iPadPro11_M4.png',
  },
  {
    id: '4',
    name: 'Apple 에어팟 프로 2세대',
    description: 'Apple 2023 에어팟 프로 2세대 USB-C, 향상된 액티브 노이즈 캔슬링과 주변음 허용 모드를 제공합니다. 더 오래 지속되는 배터리와 USB-C 충전 기능이 추가되었습니다.',
    price: 307510,
    rating: 4.5,
    image: '/images/products/airpodPro2.png',
  },
  {
    id: '5',
    name: '2024 아이패드 mini A17 Pro',
    description: 'Apple 2024 아이패드 mini A17 Pro 칩 탑재로 강력한 성능을 제공합니다. 콤팩트한 크기에 놀라운 디스플레이와 애플 펜슬 2세대 지원 기능을 갖추고 있습니다.',
    price: 726530,
    rating: 4.1,
    image: '/images/products/iPadmini_A17.png',
  },
  {
    id: '6',
    name: 'Apple 아이폰 16e 자급제',
    description: 'Apple 아이폰 16e 자급제 최신 A16 칩셋과 향상된 카메라 시스템을 탑재했습니다. 올데이 배터리 수명과 더 밝아진 디스플레이로 일상 생활이 더욱 편리해집니다.',
    price: 940500,
    rating: 4.7,
    image: '/images/products/iPhone_16e.png',
  },
  {
    id: '7',
    name: 'Apple 2024 맥북 프로 14 M4',
    description: 'Apple 2024 맥북 프로 14 M4 칩으로 놀라운 퍼포먼스와 배터리 효율성을 제공합니다. 선명한 Liquid Retina XDR 디스플레이와 다양한 연결 포트를 갖추고 있습니다.',
    price: 2701640,
    rating: 4.5,
    image: '/images/products/MacbookPro14.png',
  },
  {
    id: '8',
    name: 'Apple 에어태그',
    description: 'Apple 에어태그 모델명/품번: MX532FE/A, 정확한 위치 추적 기능과 배터리 교체 가능한 디자인으로 소중한 물건을 쉽게 찾을 수 있습니다.',
    price: 42000,
    rating: 4.3,
    image: '/images/products/airTag.png',
  },
  {
    id: '9',
    name: 'Apple 정품 2024 애플워치 SE',
    description: 'Apple 정품 2024 애플워치 SE 2세대 알루미늄 케이스, 건강 모니터링 기능과 운동 추적 기능을 갖춘 합리적인 가격의 스마트워치입니다.',
    price: 319000,
    rating: 4.0,
    image: '/images/products/appleWatchSE2.png',
  },
  {
    id: '10',
    name: 'Multi Touch 표면 Magic Mouse',
    description: 'Apple 2024 Multi Touch 표면 Magic Mouse MXK53KH/A, 직관적인 멀티터치 제스처로 편리한 조작이 가능하며 재충전 가능한 배터리를 갖추고 있습니다.',
    price: 94050,
    rating: 4.2,
    image: '/images/products/MagicMouse.png',
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

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
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
    <div className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 상품 이미지 섹션 */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                className="object-contain p-6"
              />
            </div>
            
            {/* 작은 이미지 */}
            <div className="grid grid-cols-5 gap-4 mt-4">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer border-2 ${
                    selectedImage === index ? 'border-[#FF4500]' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} - 이미지 ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* 상품 정보 섹션 */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
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
              <span className="ml-2 text-gray-600">{product.rating}/5</span>
            </div>
            
            <p className="text-xl font-bold text-[#FF4500] mb-6">￦{product.price.toLocaleString()}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">제품 설명</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  수량
                </label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center p-2 focus:outline-none text-[#000000] font-bold"
                  />
                  <button
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <AddToCartButton 
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                }}
                className="py-3 px-6 rounded-lg font-medium"
              />
              
              <Link 
                href={`/shop/${product.id}/buy`} 
                className="py-3 px-6 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center"
              >
                바로 구매하기
              </Link>
            </div>
          </div>
        </div>
        
        {/* 추천 상품 섹션 */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">큐비 추천템</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuredProducts.map((item) => (
              <Link href={`/shop/${item.id}`} key={item.id} className="group">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{item.name}</h3>
                
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
    </div>
  );
} 