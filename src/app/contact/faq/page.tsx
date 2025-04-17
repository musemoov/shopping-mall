import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '큐비몰 - 자주 묻는 질문',
  description: '큐비몰 이용에 관한 자주 묻는 질문들을 확인하세요.',
};

// FAQ 항목을 카테고리별로 구성
const faqCategories = [
  {
    category: '배송 문의',
    items: [
      {
        question: '배송은 얼마나 걸리나요?',
        answer: '일반적으로 주문 확인 후 1-3일 내에 배송이 시작되며, 지역에 따라 1-2일 내에 상품을 받아보실 수 있습니다. 도서산간 지역은 1-2일 추가될 수 있습니다.'
      },
      {
        question: '배송 조회는 어떻게 하나요?',
        answer: '마이페이지 > 주문내역에서 해당 주문의 배송조회 버튼을 클릭하시면 현재 배송 상태를 확인하실 수 있습니다.'
      },
      {
        question: '해외 배송도 가능한가요?',
        answer: '네, 해외 배송 가능합니다. 단, 국가별로 배송비와 소요 시간이 달라질 수 있으니 고객센터로 문의해주세요.'
      }
    ]
  },
  {
    category: '교환/환불 문의',
    items: [
      {
        question: '교환/환불은 어떻게 하나요?',
        answer: '상품 수령 후 7일 이내에 마이페이지 > 주문내역에서 교환/환불 신청이 가능합니다. 단, 상품의 훼손이 없어야 정상적인 교환/환불이 가능합니다.'
      },
      {
        question: '교환/환불 시 배송비는 어떻게 되나요?',
        answer: '고객의 단순 변심으로 인한 교환/환불의 경우 왕복 배송비는 고객님 부담입니다. 제품 불량, 오배송의 경우에는 전액 큐비몰에서 부담합니다.'
      },
      {
        question: '부분 환불도 가능한가요?',
        answer: '여러 상품을 함께 주문한 경우 특정 상품만 환불 가능합니다. 마이페이지에서 부분 환불을 선택하여 진행해주세요.'
      }
    ]
  },
  {
    category: '결제 문의',
    items: [
      {
        question: '결제 방법은 무엇이 있나요?',
        answer: '신용카드, 체크카드, 무통장입금, 휴대폰 결제, 네이버페이, 카카오페이 등 다양한 결제 수단을 지원합니다.'
      },
      {
        question: '무통장 입금 후 입금 확인은 얼마나 걸리나요?',
        answer: '무통장 입금은 평일 기준 1-2시간 내에 확인됩니다. 야간이나 주말/공휴일의 경우 다음 영업일에 확인되며, 자동 입금 확인이 안 되신 경우 고객센터로 문의해주세요.'
      },
      {
        question: '현금영수증 발급은 어떻게 하나요?',
        answer: '주문 시 현금영수증 신청을 선택하시고 정보를 입력하시면 자동으로 발급됩니다. 이미 주문하신 경우 마이페이지 > 주문내역에서 신청 가능합니다.'
      }
    ]
  },
  {
    category: '상품 문의',
    items: [
      {
        question: '상품 정보가 실제와 다른 경우 어떻게 하나요?',
        answer: '상품 정보와 실제 상품이 다른 경우 고객센터로 문의해주세요. 사진과 함께 불일치 내용을 보내주시면 빠르게 확인 후 안내해드립니다.'
      },
      {
        question: '품절된 상품은 언제 재입고 되나요?',
        answer: '품절 상품의 재입고 일정은 브랜드 및 제품에 따라 다릅니다. 재입고 알림 신청을 통해 재입고 시 알림을 받아보실 수 있습니다.'
      },
      {
        question: '상품 사용 중 문제가 발생했어요.',
        answer: '상품 사용 중 문제가 발생한 경우, 고객센터로 문의해주세요. A/S 가능 여부를 확인하여 안내해드리겠습니다.'
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[250px] bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
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
            <h1 className="text-4xl font-bold text-white mb-4">자주 묻는 질문</h1>
            <p className="text-lg text-white/80 max-w-xl">
              큐비몰 이용에 관한 궁금증을 해결해 드립니다.<br /> 원하는 답변을 찾지 못하셨다면 1:1 문의를 이용해주세요.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ 콘텐츠 */}
      <div className="max-w-[1400px] mx-auto px-[72px] py-20">
        {/* 빠른 링크 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">카테고리 바로가기</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category, index) => (
              <a 
                key={index} 
                href={`#${category.category}`}
                className="px-6 py-3 bg-gray-100 hover:bg-orange-100 rounded-full text-gray-800 hover:text-[#FF4500] transition-colors font-medium"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
        
        {/* FAQ 카테고리별 목록 */}
        <div className="space-y-16">
          {faqCategories.map((category, index) => (
            <div key={index} id={category.category} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 flex items-center justify-center bg-[#FF4500] text-white rounded-full mr-4">
                  {index + 1}
                </span>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#FF4500]">
                          {item.question}
                        </h3>
                        <div className="h-6 w-6 flex items-center justify-center rounded-full border border-gray-300 group-open:bg-[#FF4500] group-open:border-[#FF4500] group-open:text-white transition-colors">
                          <span className="block group-open:hidden">+</span>
                          <span className="hidden group-open:block">-</span>
                        </div>
                      </summary>
                      <div className="p-6 pt-0 text-gray-600">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 추가 문의 섹션 */}
        <div className="mt-20 text-center p-8 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">더 궁금한 점이 있으신가요?</h2>
          <p className="text-gray-600 mb-8">
            원하는 정보를 찾지 못하셨다면 1:1 문의를 통해 답변을 받아보세요.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#FF4500] text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            1:1 문의하기
          </a>
        </div>
      </div>
    </main>
  );
} 