'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface MenuItem {
  label: string;
  href: string;
}

const MenuDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Projects', href: '/project' },
    { label: 'Tech Blogs', href: '/blog' },
    { label: 'Board', href: '/board' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-lg p-2 transition-colors hover:bg-gray-800'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <RxHamburgerMenu size={35} color='white' />
      </button>

      <div
        className={`absolute right-0 mt-2 flex w-36 flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-200 ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className='w-full px-4 py-2 text-center font-semibold text-gray-800 transition-colors hover:bg-gray-100'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
