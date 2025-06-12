'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function BlogSearchBar() {
  const [searchTitle, setSearchTitle] = useState('');

  const router = useRouter();

  const handleSearchBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTitle.trim() === '') return;

    router.push(`/search?keyword=${encodeURIComponent(searchTitle.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearchBlog}
      className='mx-auto mb-8 flex w-[70%] items-center justify-center rounded-full border border-gray-300 bg-white/50 px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500'
      role='search'
    >
      <input
        type='text'
        onChange={(e) => setSearchTitle(e.target.value)}
        value={searchTitle}
        className='w-full bg-transparent px-2 py-1 text-gray-800 placeholder-gray-700 focus:outline-none'
        placeholder='읽고 싶은 블로그 글이 있으신가요?'
        aria-label='블로그 검색'
      />
      <button type='submit' className='text-gray-600 hover:text-gray-700'>
        <FaSearch size={20} />
      </button>
    </form>
  );
}
