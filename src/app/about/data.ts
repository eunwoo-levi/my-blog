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
    name: "Seong, Eunwoo",
    birthDate: "2001. 01. 01",
    location: "Republic of Korea, Seoul (Daegu)",
    email: "Eunwoo1341@gmail.com",
    university: "Kyungbook National University",
    major: " - Computer Science",
    achievements: [
      "TOEIC - 935",
      "Computer Specialist in Spreadsheet & Database (컴퓨터활용능력 1급)"
    ]
  };
  
  export const extracurricularData: ActivityProps[] = [
    {
        title: "Korean Augmentation To the United States Army, KATUSA",
        period: "2020.09.06 - 2023.03.06"
    },
    {
        title: "Google Developers Group - KNU 4기 - Frontend",
        period: "2024/09 ~ ongoing"
    }
  ];
  
  export const experienceData: ActivityProps[] = [
    {
      title: "2024 고용노동 공공데이터 활용 대회",
      period: "2024/07 - 2024/08",
      role: "Frontend"
    },
    {
      title: "대구 지방환경청 Team 프로젝트",
      period: "2024/07 - 2024/09",
      role: "FullStack"
    },
    {
      title: "개인 포트폴리오 및 기술 블로그 제작 with Next.JS",
      period: "2024/08",
      role: "Frontend"
    },
    {
      title: "2024 대구를 빛내는 해커톤 장려상",
      period: "2024/09 - 2024/09",
      role: "Frontend"
    },
    {
      title: "건축사 웹페이지 외주 제작",
      period: "2024/09 - ongoing",
      role: "FullStack"
    },
    {
      title: "경매 웹페이지 제작 Team 프로젝트",
      period: "2024/10 - ongoing",
      role: "Frontend"
    }
  ];