# 개인 포트폴리오 및 기술 블로그

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📌 프로젝트 개요

**배포 URL**: [https://eunwoo-levi.blog](https://eunwoo-levi.blog)

이 프로젝트는 개인 포트폴리오와 기술 블로그를 위한 웹 애플리케이션입니다. Next.js를 기반으로 하여 최신 웹 기술을 활용하고 있습니다.

## 🛠 기술 스택

- **Framework**: React + Next.js with MDX Option
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Comments**: Giscus

## 🌟 주요 기능

1. **메인 페이지**: 간단한 자기소개 및 상세 페이지 링크 버튼
2. **포트폴리오 페이지**: 개인 프로젝트 및 경력 소개
3. **기술 블로그 페이지**: 
   - 카테고리별 글 분류
   - 페이지네이션 구현
4. **상세 게시물 페이지**: 
   - MDX를 활용한 마크다운 형식의 글 작성
   - 댓글 기능 (Giscus 활용)
  
## 💡 < 개인 기술 블로그를 만든 이유? > 

<br/>

## 1) FE 개발자로서의 개발 작업물
개발자들이 많이 사용하는 tistory, velog, naver, notion 등 많은 블로그 플랫폼이 존재하고, 본인도 평소에 velog를 통해 기술 블로그로 이용했었다. <br/>
하지만 프론트엔드 개발자라면 개인이 개발한 기술 블로그 및 포트폴리오가 있어야 한다고 생각하였다. <br/>
그리고 다른 블로그 서비스에 종속되어 있으면, 원하는 때에 데이터를 옮기기도 번거롭기도 하고, 데이터 손실 및 서비스 종료에 대한 위험도 있다.

## 2) 원하는 대로 Design Customizing
또한, velog등 이미 존재하는 블로그 플랫폼을 사용할 경우, 자신이 원하는 UI의 위치나 디자인를 변경이나 수정할 수 없고, 새로운 것들을 추가, 삭제하기도 어렵다. <br/>
그렇기 때문에 개인 블로그 플랫폼을 만들어 자신이 원하는대로 high level의 사용자 경험(UX)를 고려하여 블로그를 개발해보고 나만의 기술 블로그 및 포트폴리오를 개발하게 되었다.<br/>
velog 블로그 플랫폼과 같이 mdx를 사용하여 markdown형식의 기능을 추가하여 글을 편리하고 효율적으로 작성 할 수 있도록 하였다.

## 💡 Next.js 선택 이유
1. **단일 코드베이스**: 백엔드와 프론트엔드를 하나의 코드베이스에서 관리
2. **SEO 최적화**: 서버 사이드 렌더링(SSR)을 통한 검색 엔진 최적화
3. **빠른 개발**: 내장된 기능들로 인한 개발 생산성 향상
4. **통합 배포**: Vercel을 통한 간편한 배포 프로세스
5. **성능 최적화**: SWC(Speedy Web Compiler)를 통한 빠른 트랜스파일

## 🚀 성능 최적화

1. **이미지 최적화**: WebP 형식으로 변환하여 번들 사이즈 감소
   
2. **Incremental Static Regeneration (ISR)**  - 정적페이지 -> revalidate를 사용하여 3600초 즉, 1시간마다 랜더링이 되도록 하여 서버 과부화를 줄임 , 데이터 최신성 유지

3. 페이지네이션 구현: 대량의 포스트 로딩 시 성능 개선
   
4. SSR 페이지에서 **dynamic import**를 통해 라이브러리를 import함
- 초기 로딩 시간 감소: 필요한 컴포넌트만 로드하므로 초기 페이지 로드 시간이 줄어듭니다.
- 코드 분할: 애플리케이션을 더 작은 청크로 나눠 필요할 때만 로드할 수 있습니다.
- 리소스 효율성: 서버와 클라이언트 모두에서 필요한 리소스만 사용합니다.
- 유연성: 조건부로 컴포넌트를 로드할 수 있어 상황에 따라 다른 컴포넌트를 렌더링할 수 있습니다.
