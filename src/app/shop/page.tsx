import ProductCard from '@/components/features/ProductCard';

const SHOP_PRODUCTS = [
  {
    id: '1',
    name: 'Apple 2025 아이패드 에어 11',
    description: 'Apple 2025 아이패드 에어 11 M3...',
    price: 949000,
    rating: 4.6,
    image: '/images/products/iPadAir11_M3.png',
  },
  {
    id: '2',
    name: 'Apple 2024 아이맥 M4',
    description: 'Apple 2024 아이맥 24 M4...',
    price: 1850700,
    rating: 4.2,
    image: '/images/products/iMac.png',
  },
  {
    id: '3',
    name: 'Apple 정품 iPadPro 11 M4',
    description: 'Apple 정품 2024 아이패드 프로 11 M4칩 스탠다드 글래스...',
    price: 1535040,
    rating: 4.5,
    image: '/images/products/iPadPro11_M4.png',
  },
  {
    id: '4',
    name: 'Apple 에어팟 프로 2세대',
    description: 'Apple 2023 에어팟 프로 2세대 USB-C...',
    price: 307510,
    rating: 4.5,
    image: '/images/products/airpodPro2.png',
  },
  {
    id: '5',
    name: '2024 아이패드 mini A17 Pro',
    description: 'Apple 2024 아이패드 mini A17 Pro...',
    price: 726530,
    rating: 4.1,
    image: '/images/products/iPadmini_A17.png',
  },
  {
    id: '6',
    name: 'Apple 아이폰 16e 자급제',
    description: 'Apple 아이폰 16e 자급제...',
    price: 940500,
    rating: 4.7,
    image: '/images/products/iPhone_16e.png',
  },
  {
    id: '7',
    name: 'Apple 2024 맥북 프로 14 M4',
    description: 'Apple 2024 맥북 프로 14 M4...',
    price: 2701640,
    rating: 4.5,
    image: '/images/products/MacbookPro14.png',
  },
  {
    id: '8',
    name: 'Apple 에어태그',
    description: 'Apple 에어태그 모델명/품번: MX532FE/A...',
    price: 42000,
    rating: 4.3,
    image: '/images/products/airTag.png',
  },
  {
    id: '9',
    name: 'Apple 정품 2024 애플워치 SE',
    description: 'Apple 정품 2024 애플워치 SE 2세대 알루미늄 케이스...',
    price: 319000,
    rating: 4.0,
    image: '/images/products/appleWatchSE2.png',
  },
  {
    id: '10',
    name: 'Multi Touch 표면 Magic Mouse',
    description: 'Apple 2024 Multi Touch 표면 Magic Mouse MXK53KH/A...',
    price: 94050,
    rating: 4.2,
    image: '/images/products/MagicMouse.png',
  },
  {
    id: '11',
    name: 'Apple 정품 애플펜슬 2세대',
    description: 'Apple 정품 애플펜슬 2세대 블랙, 블루, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 399990,
    rating: 4.9,
    image: '/images/products/applePencil.png',
  },
  {
    id: '12',
    name: 'Apple 정품 Lightning-C타입 충전',
    description: 'Apple 정품 Lightning-C타입 충전 케이블 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 3899990,
    rating: 4.5,
    image: '/images/products/Lightning.png',
  },
  {
    id: '13',
    name: 'Apple 2024 에어팟 맥스 노이즈 캔슬',
    description: 'Apple 2024 에어팟 맥스 노이즈 캔슬링 블루투스 헤드폰 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 499990,
    rating: 4.5,
    image: '/images/products/airPodsMax.png',
  },
  {
    id: '14',
    name: 'Apple 에어팟맥스 블루투스 헤드폰',
    description: 'Apple 에어팟맥스 블루투스 헤드폰 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 799990,
    rating: 4.5,
    image: '/images/products/airPodsMax2.png',
  },
  {
    id: '15',
    name: 'Apple 애플워치9 GPS+Cellular',
    description: 'Apple 애플워치9 GPS+Cellular 블랙, 화이트, 레드, 오렌지, 핑크, 그린, 옐로우 컬러 중 선택 가능합니다.',
    price: 1999990,
    rating: 4.5,
    image: '/images/products/appleWatch9.png',
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1400px] px-[72px] py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-10">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-20">
          {SHOP_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
} 