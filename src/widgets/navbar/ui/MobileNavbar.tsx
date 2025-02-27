'use client';

import Link from 'next/link';
import { navbarList } from '../model/data';
import { useEffect, useRef } from 'react';

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNavbar({ isOpen, setIsOpen }: MobileNavbarProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className='absolute left-0 top-16 w-full bg-white shadow-md lg:hidden dark:bg-gray-800'
    >
      <ul className='flex flex-col items-center space-y-4 py-4'>
        {navbarList.map((link, idx) => (
          <li key={idx} className='flex w-full flex-col items-center'>
            <Link
              href={link.href}
              className='text-lg font-semibold duration-200 hover:scale-110'
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
            {idx !== navbarList.length - 1 && <div className='my-3 h-[1px] w-4/5 bg-neutral-200' />}
          </li>
        ))}
      </ul>
    </div>
  );
}
