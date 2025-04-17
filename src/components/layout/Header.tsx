'use client';

import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import CartIcon from '../features/CartIcon';

const MENU_ITEMS = [
  {
    name: '홈',
    href: '/',
    subMenu: []
  },
  {
    name: '쇼핑하기',
    href: '/shop',
    subMenu: [
      { name: '모든 상품 보기', href: '/shop/' },
      { name: '카테고리별', href: '/shop/' },
      { name: '  - 의류', href: '/shop/' },
      { name: '  - 액세서리', href: '/shop/' },
      { name: '  - 전자기기', href: '/shop/' },
      { name: '  - 홈리빙', href: '/shop/' },
      { name: '할인 상품', href: '/shop/' },
      { name: '시즌 한정', href: '/shop/' },
    ]
  },
  {
    name: '회사소개',
    href: '/about-us',
    subMenu: [
      { name: '브랜드 스토리', href: '/about-us#our-story' },
      { name: '오시는 길', href: '/about-us/' },
    ]
  },
  {
    name: '문의하기',
    href: '/contact',
    subMenu: [
      { name: '고객센터', href: '/contact/' },
      { name: '제휴문의', href: '/contact/' },
      { name: 'FAQ', href: '/contact/faq' },
    ]
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isAboutUs = pathname === '/about-us';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className={`w-full transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-0 left-0 right-0 z-50 shadow-md bg-white' 
        : isHome 
          ? 'bg-[#f0f4ff]' 
          : isAboutUs 
            ? 'bg-[#f0f4ff]'
            : 'bg-white'
    }`}>
      <div className="mx-auto max-w-[1400px] h-[72px]">
        <div className="flex items-center justify-between h-full px-[72px]">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-black">
              <span className="text-[#FF4500] text-3xl">Q</span>bie<span className="text-[#FF4500] text-2xl">M</span>all
            </span>
          </Link>
          
          <nav className="flex items-center justify-center flex-1">
            <div className="flex items-center justify-center space-x-16">
              {MENU_ITEMS.map((item, index) => (
                <div key={index} className="relative group/menu">
                  <Link 
                    href={item.href} 
                    className="inline-block text-gray-600 hover:text-gray-900 font-medium text-lg py-7"
                  >
                    {item.name}
                  </Link>
                  {item.subMenu.length > 0 && (
                    <div 
                      className="absolute top-[calc(100%-1px)] left-0 min-w-[200px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible hover:opacity-100 hover:visible transition-all duration-300 transform translate-y-1 group-hover/menu:translate-y-0 z-[60]"
                    >
                      <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent"></div>
                      <div className="py-3">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={`block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f25438] ${
                              subItem.name.startsWith('  -') ? 'pl-8 text-gray-500' : ''
                            }`}
                          >
                            {subItem.name.startsWith('  -') ? subItem.name.slice(3) : subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="flex items-center relative gap-2">
            <CartIcon />
            
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isSearchOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Search className="w-6 h-6" />
              )}
            </button>
            {isSearchOpen && (
              <div className="absolute right-0 top-[calc(100%+0.5rem)] w-[300px] bg-white rounded-lg shadow-lg p-4 z-[60]">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#f25438] text-white rounded-lg text-sm hover:bg-[#ff5720] transition-colors"
                  >
                    검색
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 