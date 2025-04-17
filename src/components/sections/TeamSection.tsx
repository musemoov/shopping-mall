'use client';

import Image from 'next/image';
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    name: '',
    role: 'CEO & 공동창업자',
    image: '/images/TeamSection/CEO.png',
    description: '10년간의 전자제품 유통 경험을 바탕으로 큐비몰을 설립했습니다. 최신 기술에 대한 열정과 소비자 중심의 비전을 추구합니다.',
    social: {
      linkedin: '#',
      instagram: '#',
      email: 'ceo@qbiemall.com'
    },
  },
  {
    name: '',
    role: '제품 전략 이사',
    image: '/images/TeamSection/24.png',
    description: '최신 기술 트렌드를 파악하고 고객에게 최적의 제품을 추천합니다. 다양한 브랜드와의 파트너십을 통해 큐비몰만의 차별화된 제품군을 구축했습니다.',
    social: {
      linkedin: '#',
      instagram: '#',
      email: 'product@qbiemall.com'
    },
  },
  {
    name: '',
    role: '운영 책임자',
    image: '/images/TeamSection/operator.png',
    description: '효율적인 물류 시스템 구축으로 신속한 배송을 실현합니다. 데이터 기반 의사결정으로 고객 만족도를 극대화하는 운영 시스템을 개발했습니다.',
    social: {
      linkedin: '#',
      instagram: '#',
      email: 'operations@qbiemall.com'
    },
  },
  {
    name: '',
    role: '고객 경험 매니저',
    image: '/images/TeamSection/manager.png',
    description: '고객의 목소리에 귀 기울이며 서비스 품질을 개선합니다. 개인화된 쇼핑 경험과 고객 중심 서비스로 큐비몰의 충성 고객을 확대하는데 기여하고 있습니다.',
    social: {
      linkedin: '#',
      instagram: '#',
      email: 'customer@qbiemall.com'
    },
  },
];

export default function TeamSection() {
  return (
    <section id="our-team" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto px-[72px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-[#FF4500]">큐비몰</span>을 이끄는 사람들
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            열정과 전문성을 갖춘 팀원들이 함께 큐비몰의 비전을 실현하고 있습니다.<br />
            각 분야의 전문가들이 모여 고객에게 최고의 쇼핑 경험을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#FF4500] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.role}의 LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#FF4500] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.role}의 Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#FF4500] transition-colors"
                      aria-label={`${member.role}에게 이메일 보내기`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 text-[#FF4500]">
                      {member.role}
                    </h3>
                  </div>
                  <span className="w-8 h-8 bg-[#f8f9fa] rounded-full flex items-center justify-center group-hover:bg-[#FF4500] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">함께 성장할 팀원을 찾고 있습니다</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            큐비몰은 열정적이고 창의적인 인재를 항상 환영합니다.<br />
            디지털 커머스의 미래를 함께 만들어갈 동료를 기다립니다.
          </p>
          <button 
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:border-[#FF4500] hover:text-[#FF4500] transition-colors shadow-sm hover:shadow-md cursor-default"
          >
            <span>채용 정보 보기</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
} 