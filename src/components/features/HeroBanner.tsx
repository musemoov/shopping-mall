'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    title: '게임의 새로운 세계\n여기서 시작됩니다  \nPlayStation 5, 지금 경험하세요!',
    offer: '지금, 단 20% 더 가까워진 PS5!',
    image: '/images/HeroBanner/ps5_02.png',
  },
  {
    title: '당신의 일과 창조를 위한\n최고의 선택 \nMacBook Pro',
    offer: '한정 프로모션 20% 할인',
    image: '/images/HeroBanner/macbook.png',
  },
  {
    title: '현실과 가상이 만나는 곳\n새로운 세상이 열린다\nMeta Quest로 모험을 시작하세요!',
    offer: '한정 수량! 지금이 기회입니다!',
    image: '/images/HeroBanner/metaQuest.png',
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  // 무한 슬라이드를 위해 앞뒤로 슬라이드 복제
  const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (autoPlay) {
      timer = setInterval(() => {
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
      }, 2000); // 2초로 변경
    }

    return () => clearInterval(timer);
  }, [autoPlay]);

  // 슬라이드 위치 리셋
  useEffect(() => {
    if (currentSlide >= SLIDES.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(SLIDES.length);
      }, 500);
    } else if (currentSlide < SLIDES.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(SLIDES.length);
      }, 500);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(SLIDES.length + index);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  return (
    <div className="w-full bg-[#f0f4ff] -mt-[1px]">
      <div className="mx-auto max-w-[1400px] relative overflow-hidden">
        <div 
          className="h-[440px] relative overflow-hidden px-[72px]"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div 
            className={`absolute top-0 left-0 w-[900%] h-full flex ${
              isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
            }`}
            style={{ transform: `translateX(-${(currentSlide * 100) / 9}%)` }}
          >
            {extendedSlides.map((slide, index) => (
              <div key={index} className="w-[11.111%] h-full px-20">
                <div className="flex h-full items-center justify-between">
                  <div className="flex-1 max-w-2xl pr-8">
                    <p className="text-[#f25438] font-medium mb-3 text-base">
                      {slide.offer}
                    </p>
                    <h1 className="text-[36px] leading-[1.2] lg:text-[42px] font-bold text-[#2D3748] mb-8 whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <div className="flex items-center gap-8">
                      <Link
                        href="/shop"
                        className="inline-flex px-8 py-3.5 bg-[#f25438] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                      >
                        구매하기
                      </Link>
                      <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-base"
                      >
                        <span className="relative top-[1px]">더 알아보기</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <div className="relative w-[520px] h-[420px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-4 py-4">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide % SLIDES.length ? 'bg-[#FF4500] w-8' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 