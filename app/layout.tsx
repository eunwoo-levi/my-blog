import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/src/widgets/navbar/ui/Navbar';
import { ThemeProvider } from '@/src/shared/providers/ThemeProvider';
import { Footer } from '@/src/widgets/footer';
import { SpaceBackground } from '@/src/shared/ui';
import { GoogleAnalytics } from '@/src/app/provider/GoogleAnalytics';
import localFont from 'next/font/local';

const iansui = localFont({
  src: '../public/fonts/iansui.woff2',
  weight: '500',
  style: 'normal',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: 'Arial',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eunwoo-levi.com'),
  title: '리바이 기술블로그',
  description:
    '리바이의 프론트엔드 기술블로그 - React, Next.js, TypeScript, JavaScript 학습 기록 및 개발 경험 공유',
  keywords: [
    '리바이',
    '리바이 기술블로그',
    '기술블로그',
    '프론트엔드',
    '개발',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    '블로그',
    '프론트엔드 개발자',
    '웹 개발',
  ],
  authors: [{ name: '리바이', url: 'https://www.eunwoo-levi.com' }],
  creator: '리바이',
  publisher: '리바이 기술블로그',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: '리바이 기술블로그',
    description:
      '리바이의 프론트엔드 기술블로그 - React, Next.js, TypeScript, JavaScript 학습 기록 및 개발 경험 공유',
    url: 'https://www.eunwoo-levi.com',
    siteName: '리바이 기술블로그',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://www.eunwoo-levi.com/levi.webp',
        width: 1200,
        height: 630,
        alt: '리바이 기술블로그',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '리바이 기술블로그',
    description:
      '리바이의 프론트엔드 기술블로그 - React, Next.js, TypeScript, JavaScript 학습 기록',
    creator: '@eunwoo_levi',
    images: ['https://www.eunwoo-levi.com/levi.webp'],
  },
  alternates: {
    canonical: 'https://www.eunwoo-levi.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${iansui.className} antialiased`}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SpaceBackground />

          <main className='min-h-[calc(100vh-190px)]'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
