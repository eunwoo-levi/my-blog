import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eunwoo-levi.blog'),
  title: '은우의 개발 블로그',
  description: '은우의 프론트엔드 개발 블로그',
  openGraph: {
    type: 'website',
    title: '은우의 개발 블로그',
    description: '은우의 프론트엔드 개발 블로그',
    url: 'https://www.eunwoo-levi.blog',
    siteName: '은우의 개발 블로그',
  },
  twitter: {
    card: 'summary_large_image',
    title: '은우의 개발 블로그',
    description: '은우의 프론트엔드 개발 블로그',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${inter.className} pt-[60px]`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
