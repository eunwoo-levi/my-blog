import { Metadata } from 'next';
import {
  HeroSection,
  ActivitiesSection,
  AwardsSection,
  ProjectsSection,
  ContributionsSection,
  ContactSection,
} from './components';

export const metadata: Metadata = {
  title: '포트폴리오 - 리바이 기술블로그',
  description: '리바이의 프로젝트 포트폴리오',
  alternates: {
    canonical: 'https://www.eunwoo-levi.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'>
      <HeroSection />
      <ActivitiesSection />
      <AwardsSection />
      <ProjectsSection />
      <ContributionsSection />
      <ContactSection />
    </div>
  );
}
