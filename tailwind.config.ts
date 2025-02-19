import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // 루트 app 디렉토리
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}', // 추가된 feature 폴더 스캔
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}', // shared 폴더도 포함
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}', // widgets 포함
    './public/**/*.html', // 정적 HTML 파일에서 클래스 검색
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
