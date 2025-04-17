import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[400px] bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/pattern.jpg"
            alt="배경 패턴"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/80"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-[72px] h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              무엇이든 물어보세요.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">큐비몰의 전문가</span>가 답변해드립니다.
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              고객 만족을 위해 최선을 다하는 큐비몰 고객센터입니다. <br />24시간 이내 답변을 약속드립니다.
            </p>
          </div>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="max-w-[1400px] mx-auto px-[72px] py-20 relative z-10">
        {/* 위쪽으로 올라온 폼 컨테이너 */}
        <div className="bg-white rounded-xl shadow-xl -mt-16 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">메시지 보내기</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-1 bg-gray-50">
              <div className="h-full p-12">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ 섹션 */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">자주 묻는 질문</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer hover:border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">배송은 얼마나 걸리나요?</h3>
              <p className="text-gray-600">일반적으로 주문 확인 후 1-3일 내에 배송이 시작되며, 지역에 따라 1-2일 내에 상품을 받아보실 수 있습니다.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer hover:border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">교환/환불은 어떻게 하나요?</h3>
              <p className="text-gray-600">상품 수령 후 7일 이내에 고객센터로 문의하시면 신속하게 처리해 드립니다. 단, 상품의 훼손이 없어야 합니다.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer hover:border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">해외 배송도 가능한가요?</h3>
              <p className="text-gray-600">네, 해외 배송 가능합니다. 단, 국가별로 배송비와 소요 시간이 달라질 수 있으니 고객센터로 문의해주세요.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer hover:border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">결제 방법은 무엇이 있나요?</h3>
              <p className="text-gray-600">신용카드, 체크카드, 무통장입금, 페이팔 등 다양한 결제 수단을 지원합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 