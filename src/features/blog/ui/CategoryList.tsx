'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '../model/data';

export default function CategoryList() {
  const pathname = usePathname();

  return (
    <nav className='mb-8 flex flex-wrap justify-center gap-4'>
      {CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={`/blog/${category.path}`}
          className={`rounded-full px-4 py-2 ${
            pathname === `/blog/${category.path}`
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
