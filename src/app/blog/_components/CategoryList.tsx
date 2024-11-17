'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/constants/categories';

export default function CategoryList() {
  const pathname = usePathname();

  return (
    <nav className='flex flex-wrap gap-4 justify-center mb-8'>
      <Link
        href='/blog'
        className={`px-4 py-2 rounded-full ${
          pathname === '/blog'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        All
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={`/blog/category/${category.id}`}
          className={`px-4 py-2 rounded-full ${
            pathname === `/blog/category/${category.id}`
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
