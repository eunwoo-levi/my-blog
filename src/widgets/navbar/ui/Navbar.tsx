'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navbarList } from '../model/data';
import MobileNavbar from './MobileNavbar';
import { FaGithub } from 'react-icons/fa';
import DarkModeButton from './DarkModeButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed left-0 top-0 z-50 flex h-[70px] w-full shadow-md'>
      <div className='mx-auto flex w-full items-center justify-between px-6 md:px-10 lg:px-20'>
        <div className='flex items-center'>
          <Link href='/' className='duration-200 hover:scale-110'>
            <h1 className='text-2xl font-bold md:text-3xl'>Eunwoo's Blog</h1>
          </Link>
        </div>

        <div className='hidden flex-1 justify-center gap-10 lg:flex'>
          {navbarList.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className='text-lg font-bold duration-200 hover:scale-105'
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-4 pl-10 lg:pl-0'>
          <Link
            href='https://github.com/eunwoo-levi'
            className='rounded-lg p-1 hover:bg-neutral-700'
          >
            <FaGithub size={40} />
          </Link>
          <DarkModeButton />
        </div>

        <button
          className='rounded-md text-3xl hover:bg-neutral-300 focus:outline-none lg:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
}
