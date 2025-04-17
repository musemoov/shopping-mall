import HeroSection from '@/components/sections/HeroSection';
import MissionStatement from '@/components/sections/MissionStatement';
import TeamSection from '@/components/sections/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '큐비몰 - 회사소개',
  description: '큐비몰의 브랜드 스토리와 핵심 가치, 그리고 큐비몰을 이끄는 팀을 소개합니다.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <MissionStatement />
      <TeamSection />
    </main>
  );
} 