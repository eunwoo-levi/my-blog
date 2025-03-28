'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navbarList } from '../model/data';
import MobileNavbar from './MobileNavbar';
import { FaGithub } from 'react-icons/fa';
import DarkModeButton from './DarkModeButton';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky left-0 top-0 z-50 flex h-[70px] w-full bg-white/90 shadow-md dark:bg-black/90'>
      <div className='mx-auto flex w-full items-center justify-between px-6 md:px-10 lg:px-20'>
        <div className='flex h-full items-center'>
          <Link href='/' className='flex h-full items-center gap-2 duration-200 hover:scale-110'>
            <Image
              src='/levi.webp'
              width={40}
              height={40}
              className='h-10 w-10 rounded-full object-cover'
              alt='levi'
            />
            <h1 className='text-xl font-bold md:text-2xl'>리바이's Tech Blog</h1>
          </Link>
        </div>

        <div className='hidden flex-1 justify-center gap-20 pr-16 lg:flex'>
          {navbarList.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className='text-lg font-bold duration-200 hover:scale-110'
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-end gap-5'>
          <Link
            href='https://github.com/eunwoo-levi'
            className='rounded-lg p-1 dark:hover:bg-gray-700 hover:lg:bg-gray-200'
          >
            <FaGithub size={40} />
          </Link>
          <div className='hidden w-full lg:block'>
            <DarkModeButton />
          </div>

          <button
            className='rounded-md text-3xl focus:outline-none lg:hidden hover:lg:bg-neutral-300'
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
}
