'use client';

import { Target, Users, Shield, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: '미션',
    description: '최신 기술을 모든 사람이 접근 가능하게 만들어 더 나은 디지털 라이프를 창조합니다.',
  },
  {
    icon: Users,
    title: '고객 중심',
    description: '고객의 니즈를 최우선으로 생각하며, 최상의 쇼핑 경험을 제공합니다.',
  },
  {
    icon: Shield,
    title: '신뢰성',
    description: '정품 보증과 철저한 품질 관리로 고객의 신뢰를 지켜갑니다.',
  },
  {
    icon: Zap,
    title: '혁신',
    description: '끊임없는 혁신으로 전자제품 쇼핑의 새로운 기준을 만들어갑니다.',
  },
];

export default function MissionStatement() {
  return (
    <section id="our-story" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              우리의 <span className="text-[#FF4500]">브랜드 스토리</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              작은 온라인 스토어로 시작했지만, 고객 중심의 서비스와 투명한 정보 제공, 
              그리고 합리적인 가격 정책으로 빠르게 성장했습니다. 현재는 국내 최고의 
              프리미엄 쇼핑몰로 자리매김하였으며, 매년 많은 고객이 
              큐비몰을 통해 새로운 상품을 만나고 있습니다.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <video
              src="/video/brandstory.mp4"
              autoPlay
              muted
              loop
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <p className="text-white text-lg font-medium">큐비몰은 고객과 함께 성장합니다</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            큐비몰의 <span className="text-[#FF4500]">핵심 가치</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            큐비몰은 고객에게 최고의 제품 쇼핑 경험을 제공하기 위해 
            다음과 같은 핵심 가치를 추구합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#FF4500]/20 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-[#FF4500] rounded-xl mb-6 border border-gray-100 shadow-sm group-hover:bg-[#FF4500] group-hover:text-white transition-all duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF4500] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 