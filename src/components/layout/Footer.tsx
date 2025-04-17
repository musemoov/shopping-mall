'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16">
      <div className="mx-auto max-w-[1400px] px-[72px]">
        <div className="grid grid-cols-12 gap-8">
          {/* 로고 및 설명 */}
          <div className="col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                <span className="text-[#FF4500] text-3xl">Q</span>bie<span className="text-[#FF4500] text-2xl">M</span>all
              </span>
            </Link>
            <p className="mt-6 text-gray-600 leading-relaxed">
              QbieMall은 최고의 제품을 합리적인 가격에 제공하는 온라인 쇼핑몰입니다. 
              고객의 니즈를 최우선으로 생각하며, 신뢰할 수 있는 제품과 서비스를 제공하기 위해 항상 노력하고 있습니다.
            </p>
          </div>

          {/* 회사 정보 */}
          <div className="col-span-3 col-start-7">
            <h3 className="font-medium text-gray-600 mb-4">회사 소개</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-100">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-gray-100">
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-100">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-100">
                  개인정보 처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="col-span-3 col-start-10">
            <h3 className="font-medium text-gray-600 mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                고객센터: 1234-5678
              </li>
              <li>
                <a href="mailto:contact@quickmall.com" className="text-gray-600 hover:text-gray-100">
                  이메일: contact@qbiemall.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 