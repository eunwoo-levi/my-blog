'use client';

import { usePathname } from 'next/navigation';

export function Title() {
  const pathname = usePathname();
  return (
    <div className='text-white font-bold text-[18px] md:text-[22px]'>
      {pathname?.startsWith('/blog') ? "Eunwoo's Tech Blog" : "Eunwoo's Portfolio"}
    </div>
  );
}
