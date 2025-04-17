'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FEATURED_ITEMS = [
  {
    title: '완벽에 가까운 사운드',
    description: '프리미엄 헤드폰으로 깊고 선명한 음향을 누려보세요.',
    image: '/images/FeaturedProducts/Headphone.png',
    link: '/shop/',
  },
  {
    title: '언제나 연결된 순간',
    description: '어떤 순간에도 잘 어울리는 컴팩트하고 스타일리시한 이어폰.',
    image: '/images/FeaturedProducts/airpods-woman.png',
    link: '/shop/',
  },
  {
    title: '성능은 디테일에 있다',
    description: '작업부터 게임까지, 모든 순간을 위한 최신 노트북 컬렉션.',
    image: '/images/FeaturedProducts/macbook-man.png',
    link: '/shop/',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="pt-12 pb-20 bg-white">
      <div className="mx-auto max-w-[1400px] px-[72px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
          큐비 추천템   
          </h2>
          <div className="h-0.5 w-16 bg-[#FF4500] mx-auto mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_ITEMS.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/40" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 bg-[#f25438] text-white px-4 py-2 rounded-lg w-fit"
                  >
                    구매하기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 