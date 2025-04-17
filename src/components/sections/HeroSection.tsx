"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] bg-[#f0f4ff] overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/about/office.jpg"
            alt="큐비몰 사무실"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4ff] via-[#f0f4ff]/80 to-transparent" />
        </div>
      </div>

      <div className="relative h-full max-w-[1400px] mx-auto px-[72px] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            <span className="text-[#FF4500]">큐비몰</span>, 요즘 감성 쇼핑의
            시작.
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            새로운 쇼핑 문화를 만들고자 탄생한 큐비몰은 패션, 테크,
            라이프스타일까지 <br /> 지금 가장 트렌디한 아이템을 한곳에 모았습니다.<br />
            직관적인 경험, 감각적인 큐레이션, 그리고 합리적인 가격. <br /> 지금, 수많은
            사람들이 큐비몰을 &quot;요즘 가장 잘 고른 선택&quot;이라고 말하는 이유입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#our-story"
              className="bg-[#FF4500] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#ff5720] transition-colors shadow-sm hover:shadow-md"
            >
              브랜드 스토리
            </a>
            <a
              href="#our-team"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium border border-gray-200 hover:border-[#FF4500] hover:text-[#FF4500] transition-colors shadow-sm hover:shadow-md"
            >
              팀 소개
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
