'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  rating,
  image,
}: ProductCardProps) {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const handleProductClick = () => {
    router.push(`/shop/${id}`);
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // 이벤트 버블링 방지
    router.push(`/shop/${id}/buy`);  // 구매 페이지로 이동
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // 이벤트 버블링 방지
    setIsWishlisted(!isWishlisted);
    // 실제 구현에서는 여기서 위시리스트 데이터를 저장하는 API 호출이 필요합니다
  };

  return (
    <div className="group relative cursor-pointer" onClick={handleProductClick}>
      <div className="absolute -inset-3 bg-white rounded-2xl transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100" />
      <div className="relative bg-white rounded-xl">
        <div className="relative aspect-square bg-[#F8F9FA] rounded-xl p-4 overflow-hidden">
          <button 
            className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200"
            onClick={handleWishlistClick}
          >
            <Heart 
              size={18} 
              className={`${isWishlisted ? 'fill-[#FF4500] text-[#FF4500]' : 'text-gray-400'} transition-colors duration-200`} 
            />
          </button>
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-gray-900 text-xs">
            {name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
            {description}
          </p>
          <div className="flex items-center mt-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400'
                      : i < rating
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
            <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium text-gray-900">
              {formatPrice(price)}원
            </span>
            <button 
              onClick={handleBuyClick}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-800 hover:border-[#FF4500] hover:text-[#FF4500] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 