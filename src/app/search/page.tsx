'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/features/ProductCard';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query || '')}`);
        if (!response.ok) throw new Error('검색 중 오류가 발생했습니다.');
        const data = await response.json();
        setResults(data);
        
        // 검색 결과에서 고유한 키워드 추출 (카테고리로 사용)
        const uniqueKeywords = new Set<string>();
        data.forEach((product: any) => {
          if (product.keywords) {
            product.keywords.forEach((keyword: string) => uniqueKeywords.add(keyword));
          }
        });
        setCategories(Array.from(uniqueKeywords));
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (!query) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Search className="w-16 h-16 text-[#FF4500] mb-4" />
        <p className="text-xl text-gray-700 mb-6">검색어를 입력해주세요.</p>
        <Link 
          href="/"
          className="px-6 py-2.5 bg-[#FF4500] text-white rounded-lg hover:bg-[#ff5720] transition-colors font-medium btn-hover-effect"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
    <div className="py-16 px-[72px]">
      <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Search className="w-6 h-6 text-[#FF4500] mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                '{query}' 검색 결과
        </h1>
            </div>
            {!isLoading && results.length > 0 && (
              <p className="text-lg text-gray-600">
                큐비몰에서 <span className="font-medium text-[#FF4500]">{results.length}개</span>의 상품을 찾았습니다.
              </p>
            )}
          </div>

        {isLoading ? (
          <div className="min-h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-3 border-b-3 border-[#FF4500]"></div>
          </div>
        ) : results.length > 0 ? (
            <div className="grid grid-cols-12 gap-8">
              {categories.length > 0 && (
                <div className="col-span-12 lg:col-span-3 mb-8 lg:mb-0">
                  <div className="bg-[#f8f9fa] rounded-xl p-6 sticky top-24">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">카테고리</h2>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <Link 
                            href={`/search?q=${category}`}
                            className="block px-3 py-2 text-gray-700 hover:text-[#FF4500] rounded-lg hover:bg-white transition-colors btn-hover-effect"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              <div className={`col-span-12 ${categories.length > 0 ? 'lg:col-span-9' : ''}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
                </div>
            </div>
          </div>
        ) : (
            <div className="min-h-[400px] flex flex-col items-center justify-center">
              <div className="bg-[#f8f9fa] rounded-2xl p-12 text-center max-w-md">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                <p className="text-xl text-gray-500 mb-4">검색 결과가 없습니다.</p>
                <p className="text-gray-400 mb-8">다른 검색어로 다시 시도해보세요.</p>
                <Link 
                  href="/shop"
                  className="px-6 py-2.5 bg-[#FF4500] text-white rounded-lg hover:bg-[#ff5720] transition-colors font-medium inline-block btn-hover-effect"
                >
                  모든 상품 보기
                </Link>
              </div>
          </div>
        )}
      </div>
    </div>
    </main>
  );
} 