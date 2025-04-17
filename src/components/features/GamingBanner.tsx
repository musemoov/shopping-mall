'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function GamingBanner() {
  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/images/GamingBanner/controller2.png"
              alt="Britz Speaker"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
            프로처럼 플레이하라<br />게임의 세계에 빠져들다
            </h2>
            <p className="text-gray-600 mb-6">
            사운드도 컨트롤도 완벽하게 이기는 게임은 여기서 시작됩니다.<br />
            게이밍 경험을 한 단계 업그레이드
            </p>
            <Link
              href="/shop/"
              className="inline-flex items-center gap-2 bg-[#f25438] text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              구매하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative w-[300px] h-[200px]">
            <Image
              src="/images/GamingBanner/controller.png"
              alt="Gaming Controllers"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 