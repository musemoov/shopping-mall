'use client';

import { useState } from 'react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setEmail('');
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
        이메일 구독하고 즉시 20% 할인!
        </h2>
        <p className="text-gray-600 mb-8">
        신상품, 이벤트, 할인 정보를 빠르게 받아보세요.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-4 text-gray-500">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail 주소를 입력하세요."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#f25438] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            구독하기
          </button>
        </form>
      </div>
    </section>
  );
} 