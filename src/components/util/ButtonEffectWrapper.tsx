'use client';

import { useEffect } from 'react';

export default function ButtonEffectWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 모든 버튼 요소에 hover 효과 클래스 추가
    const buttons = document.querySelectorAll('button:not(.btn-hover-effect)');
    buttons.forEach(button => {
      button.classList.add('btn-hover-effect');
    });

    // 링크 중 버튼처럼 생긴 요소들에 hover 효과 추가
    const buttonLinks = document.querySelectorAll('a[class*="px-"][class*="py-"]:not(.btn-hover-effect)');
    buttonLinks.forEach(link => {
      link.classList.add('btn-hover-effect');
    });
  }, []);

  return <>{children}</>;
} 