export interface ProfileProps {
  name: string;
  birthDate: string;
  location: string;
  email: string;
  university: string;
  major: string;
  achievements: string[];
}

export interface ActivityProps {
  title: string;
  period: string;
  role?: string;
}

export const profileData: ProfileProps = {
  name: 'Seong, Eunwoo',
  birthDate: '2001. 01. 01',
  location: 'Republic of Korea, Seoul (Daegu)',
  email: 'Eunwoo1341@gmail.com',
  university: 'Kyungbook National University',
  major: ' - Computer Science  (Double major: Electronic Engineering)',
  achievements: [
    'TOEIC - 935',
    'Computer Specialist in Spreadsheet & Database (컴퓨터활용능력 1급)',
  ],
};

export const extracurricularData: ActivityProps[] = [
  {
    title: 'Korean Augmentation To the United States Army, KATUSA',
    period: '2020/09 - 2023/03',
  },
  {
    title: 'Google Developers Group - KNU 4th - Frontend',
    period: '2024/09 ~ ongoing',
  },
  {
    title: 'React Team Study - Deep Dive',
    period: '2024/09 ~ ongoing',
  },
  {
    title: '2024 Daegyeong Region Collegiate SW Hackathon - 🥉장려상',
    period: '2024/09',
  },
  {
    title: '우아한테크 코스',
    period: '2024/10 ~ 2024/12',
  },
  {
    title: 'AI Quiz EduPrompt 웹 서비스 개발 - FE & PM - (주)멜라카 현장실습',
    period: '2024/12 - 2025/02',
  },
  {
    title: 'Google New Year Hackathon - 🥈최우수상',
    period: '2025/01 - onGoing',
  },
  {
    title: '우아한테크코스 7th FE - 우아한형제들 (Woowa Bros)',
    period: '2025/02 - onGoing',
  },
];

export const experienceData: ActivityProps[] = [
  {
    title: 'AI 산재 챗봇 Team Project- 2024 고용노동 공공데이터 활용 대회',
    period: '2024/07 - 2024/08',
    role: 'Frontend',
  },
  {
    title: '재활용 홈페이지 Team Project- 대구 환경청 협업 프로젝트',
    period: '2024/07 - 2024/09',
    role: 'FullStack',
  },
  {
    title: '개인 포트폴리오 및 기술 블로그 제작 with Next.JS',
    period: '2024/08',
    role: 'Frontend',
  },
  {
    title:
      '대구 상권 부루마블 게임 서비스 Team Project- 2024 대구를 빛내는 해커톤 장려상',
    period: '2024/09',
    role: 'Frontend',
  },
  {
    title: '건축사 웹페이지 외주 제작',
    period: '2024/09 - 2024/11',
    role: 'FullStack',
  },
  {
    title: 'AI 식습관 관리 시스템 - Google Vision ChallengeThon',
    period: '2024/11',
    role: 'Frontend',
  },
  {
    title: '토론 타임 키핑을 위한 타이머 서비스',
    period: '2024/12 - ongoing',
    role: 'Frontend',
  },
  {
    title:
      'AI Real-time Patient Monitoring Service, 최우수상 - Google New Year Hackathon',
    period: '2025/01',
    role: 'Frontend',
  },
];
