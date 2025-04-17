'use client';

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '주소',
    content: '서울특별시 강남구 테헤란로 123 퀵카트타워 15층',
  },
  {
    icon: Phone,
    title: '전화',
    content: '02-1234-5678',
  },
  {
    icon: Mail,
    title: '이메일',
    content: 'support@qbiemall.com',
  },
  {
    icon: Clock,
    title: '운영시간',
    content: '평일 09:00 - 18:00 (주말 및 공휴일 휴무)',
  },
];

export default function ContactInfo() {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">연락처 정보</h2>
      
      <div className="space-y-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start group">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
              <info.icon className="w-5 h-5 text-[#FF4500]" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">{info.title}</h3>
              <p className="mt-1 text-base text-gray-800 font-medium">{info.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          소셜 미디어에서 만나요
        </h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors group"
          >
            <Facebook className="w-5 h-5 text-gray-600 group-hover:text-[#FF4500] transition-colors" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors group"
          >
            <Twitter className="w-5 h-5 text-gray-600 group-hover:text-[#FF4500] transition-colors" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors group"
          >
            <Instagram className="w-5 h-5 text-gray-600 group-hover:text-[#FF4500] transition-colors" />
          </a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-orange-700 text-sm leading-relaxed">
            <strong>빠른 응대를 약속드립니다.</strong><br />
            모든 문의는 24시간 이내에 답변해드리고 있습니다. 감사합니다.
          </p>
        </div>
      </div>
    </div>
  );
} 