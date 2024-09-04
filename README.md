# < 개인 기술 블로그 > 
배포:  https://eunwoo-levi.vercel.app/posts

<br/><br/>

**< FlameWorks >**
- React + Next.js + MDX Option
- CSS : tailwind
- 상태관리 라이브러리 : Zustand
- 댓글기능 - giscus



<br/><br/><br/>

# < 개인 기술 블로그를 만든 이유? > 

<br/>

## 1) FE 개발자로서의 개발 작업물
개발자들이 많이 사용하는 tistory, velog, naver, notion 등 많은 블로그 플랫폼이 존재하고, 본인도 평소에 velog를 통해 기술 블로그로 이용했었다. <br/>
하지만 프론트엔드 개발자라면 개인이 개발한 기술 블로그 및 포트폴리오가 있어야 한다고 생각하였다. <br/>
그리고 다른 블로그 서비스에 종속되어 있으면, 원하는 때에 데이터를 옮기기도 번거롭기도 하고, 데이터 손실 및 서비스 종료에 대한 위험도 있다.

## 2) 원하는 대로 Design Customizing
또한, velog등 이미 존재하는 블로그 플랫폼을 사용할 경우, 자신이 원하는 UI의 위치나 디자인를 변경이나 수정할 수 없고, 새로운 것들을 추가, 삭제하기도 어렵다. <br/>
그렇기 때문에 개인 블로그 플랫폼을 만들어 자신이 원하는대로 high level의 사용자 경험(UX)를 고려하여 블로그를 개발해보고 나만의 기술 블로그 및 포트폴리오를 개발하게 되었다.<br/>
velog 블로그 플랫폼과 같이 mdx를 사용하여 markdown형식의 기능을 추가하여 글을 편리하고 효율적으로 작성 할 수 있도록 하였다.


<br/><br/><br/>


<Next.js 를 선택한 이유?> <br/>
1) 단일 코드베이스: 백엔드와 프론트엔드를 하나의 코드베이스에서 관리할 수 있어 프로젝트 구조가 단순해집니다. 이로 인해 개발 및 유지보수가 용이합니다. <br/>
2) SEO 최적화: 서버 사이드 렌더링(SSR) 덕분에 SEO가 필요한 애플리케이션(예: 블로그, 전자상거래 사이트)에서 더 좋은 성능을 발휘할 수 있습니다. (물론 react로도 가능하지만 번거러움) <br/>
3) 빠른 개발: Next.js의 기능을 사용하면 프로젝트의 개발 속도가 빨라집니다. 데이터 페칭, 라우팅, 상태 관리 등이 프레임워크에 내장되어 있어 개발 생산성을 높일 수 있습니다. <br/>
4) 통합 배포: 하나의 애플리케이션으로 배포가 가능하므로 배포 과정이 단순해집니다. (Vercel) <br/>

<br/><br/><br/>

## <기능>
- 메인 페이지 (간단한 자기소개 및 상세 페이지 링크 버튼들)
- 상세페이지 1 - 포트폴리오
- 상세페이지 2 - 개인 기술 블로그
- 상페페이지 3 - 상세페이지 2를 통하여 Category 별로 페이지
- 상세페이지 4 - 상세페이지 2 또는 상세페이지 3을 통하여 상세 게시물 페이지로 이동
- 상세 게시물 페이지에서 댓글 기능

<br/>
<br/>
<br/>


## <개선>
- Posts 페이지에서 렉이 걸림 -> getAllPostsMeta 함수는 모든 게시물의 메타데이터를 가져오는 비동기 함수 때문이라고 예상
  <br/> 해결법 -> 페이지네이션


<br/>
<br/>
<br/>
<br/>

***

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
