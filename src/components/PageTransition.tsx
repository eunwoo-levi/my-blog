// components/transitions/PageTransition.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    // FLIP 애니메이션 테크닉 적용
    const start = performance.now();

    page.classList.add('page-exit');
    page.addEventListener(
      'animationend',
      () => {
        page.classList.remove('page-exit');
        page.classList.add('page-enter');

        // cleanup
        const cleanup = () => {
          page.classList.remove('page-enter');
          page.removeEventListener('animationend', cleanup);
        };
        page.addEventListener('animationend', cleanup);
      },
      { once: true }
    );
  }, [pathname]);

  return (
    <div ref={pageRef} className='page-wrapper'>
      {children}
    </div>
  );
}
