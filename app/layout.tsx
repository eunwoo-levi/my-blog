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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eunwoo-levi.blog'),
  title: '리바이 개발 블로그',
  description: '리바이 프론트엔드 개발 블로그',
  keywords: ['프론트엔드', '개발', 'React', 'Next.js', 'TypeScript', 'JavaScript', '블로그'],
  authors: [{ name: '리바이', url: 'https://www.eunwoo-levi.blog' }],
  creator: '리바이',
  publisher: '리바이 개발 블로그',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: '리바이 개발 블로그',
    description: '리바이 프론트엔드 개발 블로그',
    url: 'https://www.eunwoo-levi.blog',
    siteName: '리바이 개발 블로그',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://www.eunwoo-levi.blog/levi.webp',
        width: 1200,
        height: 630,
        alt: '리바이 개발 블로그',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '리바이 개발 블로그',
    description: '리바이 프론트엔드 개발 블로그',
    creator: '@eunwoo_levi',
    images: ['https://www.eunwoo-levi.blog/levi.webp'],
  },
  alternates: {
    canonical: 'https://www.eunwoo-levi.blog',
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
