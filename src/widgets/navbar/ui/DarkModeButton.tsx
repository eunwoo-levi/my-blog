'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export default function DarkModeButton() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='flex h-10 w-10 items-center justify-center rounded-full border bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        aria-label='Toggle theme'
      >
        <FaSun className='h-5 w-5 transition-transform dark:hidden' />
        <FaMoon className='hidden h-5 w-5 transition-transform dark:block' />
      </button>

      {isOpen && (
        <div
          className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md border bg-white shadow-lg dark:bg-gray-800'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <button
            className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
          >
            Light
          </button>
          <button
            className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
          >
            Dark
          </button>
          <button
            className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}
