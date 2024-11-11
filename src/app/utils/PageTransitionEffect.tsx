'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // next/router에서 useRouter를 가져옵니다.

const PageTransitionEffect = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter(); // 여기서 useRouter 사용

  useEffect(() => {
    const handleStart = () => {
      setIsTransitioning(true);
    };

    const handleComplete = () => {
      setIsTransitioning(false);
    };

    // 페이지 이동 시에 transition effect를 트리거
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // clean up 이벤트 리스너
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return isTransitioning ? <div className='page-transition'></div> : null;
};

export default PageTransitionEffect;
