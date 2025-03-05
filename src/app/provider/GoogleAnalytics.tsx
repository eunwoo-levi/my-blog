'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_TRACKING_ID || process.env.NODE_ENV !== 'production') return;

    // GA 초기화
    ReactGA.initialize(GA_TRACKING_ID);

    // 페이지 변경 시 GA에 페이지뷰 전송
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return null;
}
