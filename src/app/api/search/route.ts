import { NextResponse } from 'next/server';

// 임시 상품 데이터
const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Apple 2025 아이패드 에어 11',
    description: 'Apple 2025 아이패드 에어 11 M3 칩 탑재, 울트라 와이드 카메라, 스피커 개선',
    price: 949000,
    rating: 4.6,
    image: '/images/products/iPadAir11_M3.png',
    keywords: ['태블릿', '애플', '아이패드', '에어'],
  },
  {
    id: '2',
    name: 'Apple 2024 아이맥 M4',
    description: 'Apple 2024 아이맥 24 M4 칩셋 탑재',
    price: 1850700,
    rating: 4.2,
    image: '/images/products/iMac.png',
    keywords: ['컴퓨터', '애플', '아이맥', '데스크탑'],
  },
  {
    id: '3',
    name: 'Apple 정품 iPadPro 11 M4',
    description: 'Apple 정품 2024 아이패드 프로 11 M4칩 스탠다드 글래스, 최신 M4 칩',
    price: 1535040,
    rating: 4.5,
    image: '/images/products/iPadPro11_M4.png',
    keywords: ['태블릿', '애플', '아이패드', '프로'],
  },
  {
    id: '4',
    name: 'Apple 에어팟 프로 2세대',
    description: 'Apple 2023 에어팟 프로 2세대 USB-C, 향상된 액티브 노이즈 캔슬링',
    price: 307510,
    rating: 4.5,
    image: '/images/products/airpodPro2.png',
    keywords: ['이어폰', '애플', '에어팟', '프로'],
  },
  {
    id: '5',
    name: '2024 아이패드 mini A17 Pro',
    description: 'Apple 2024 아이패드 mini A17 Pro 칩 탑재로 강력한 성능',
    price: 726530,
    rating: 4.1,
    image: '/images/products/iPadmini_A17.png',
    keywords: ['태블릿', '애플', '아이패드', '미니'],
  },
  {
    id: '6',
    name: 'Apple 아이폰 16e 자급제',
    description: 'Apple 아이폰 16e 자급제 최신 A16 칩셋과 향상된 카메라 시스템',
    price: 940500,
    rating: 4.7,
    image: '/images/products/iPhone_16e.png',
    keywords: ['스마트폰', '애플', '아이폰', '16'],
  },
  {
    id: '7',
    name: 'Apple 2024 맥북 프로 14 M4',
    description: 'Apple 2024 맥북 프로 14 M4 칩으로 놀라운 퍼포먼스와 배터리 효율성',
    price: 2701640,
    rating: 4.5,
    image: '/images/products/MacbookPro14.png',
    keywords: ['노트북', '애플', '맥북', '프로'],
  },
  {
    id: '8',
    name: 'Apple 에어태그',
    description: 'Apple 에어태그 모델명/품번: MX532FE/A, 정확한 위치 추적 기능',
    price: 42000,
    rating: 4.3,
    image: '/images/products/airTag.png',
    keywords: ['액세서리', '애플', '에어태그', '위치추적'],
  },
  {
    id: '9',
    name: 'Apple 정품 2024 애플워치 SE',
    description: 'Apple 정품 2024 애플워치 SE 2세대 알루미늄 케이스',
    price: 319000,
    rating: 4.0,
    image: '/images/products/appleWatchSE2.png',
    keywords: ['스마트워치', '애플', '애플워치', 'SE'],
  },
  {
    id: '10',
    name: 'Multi Touch 표면 Magic Mouse',
    description: 'Apple 2024 Multi Touch 표면 Magic Mouse MXK53KH/A',
    price: 94050,
    rating: 4.2,
    image: '/images/products/MagicMouse.png',
    keywords: ['액세서리', '애플', '마우스', '매직마우스'],
  },
  {
    id: '11',
    name: 'Apple 정품 애플펜슬 2세대',
    description: 'Apple 정품 애플펜슬 2세대 블랙, 블루, 레드 등 다양한 컬러',
    price: 399990,
    rating: 4.9,
    image: '/images/products/applePencil.png',
    keywords: ['액세서리', '애플', '애플펜슬', '펜슬'],
  },
  {
    id: '12',
    name: 'Apple 정품 Lightning-C타입 충전',
    description: 'Apple 정품 Lightning-C타입 충전 케이블 다양한 컬러',
    price: 3899990,
    rating: 4.5,
    image: '/images/products/Lightning.png',
    keywords: ['액세서리', '애플', '충전케이블', '라이트닝'],
  },
  {
    id: '13',
    name: 'Apple 2024 에어팟 맥스 노이즈 캔슬',
    description: 'Apple 2024 에어팟 맥스 노이즈 캔슬링 블루투스 헤드폰',
    price: 499990,
    rating: 4.5,
    image: '/images/products/airPodsMax.png',
    keywords: ['헤드폰', '애플', '에어팟', '맥스'],
  },
  {
    id: '14',
    name: 'Apple 에어팟맥스 블루투스 헤드폰',
    description: 'Apple 에어팟맥스 블루투스 헤드폰 다양한 컬러',
    price: 799990,
    rating: 4.5,
    image: '/images/products/airPodsMax2.png',
    keywords: ['헤드폰', '애플', '에어팟', '맥스'],
  },
  {
    id: '15',
    name: 'Apple 애플워치9 GPS+Cellular',
    description: 'Apple 애플워치9 GPS+Cellular 모델 다양한 컬러',
    price: 1999990,
    rating: 4.5,
    image: '/images/products/appleWatch9.png',
    keywords: ['스마트워치', '애플', '애플워치', '9'],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  // 검색 로직
  const results = SAMPLE_PRODUCTS.filter(product => {
    const searchableText = [
      product.name,
      product.description,
      ...(product.keywords || [])
    ].join(' ').toLowerCase();
    
    return searchableText.includes(query);
  });

  // 의도적으로 검색 시간을 시뮬레이션 (실제 구현시 제거)
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(results);
} 