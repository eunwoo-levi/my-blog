'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PostPagination } from './PostPagination';
import { CustomLink } from '@/components/CustomLink';

interface BlogFrontMatter {
  title: string;
  author: string;
  thumbnail: string;
  publishDate: string;
  categoryId: number;
}

interface PostData {
  frontmatter: BlogFrontMatter;
  slug: string;
  category: string;
}

interface PostGridProps {
  posts: PostData[];
  postsPerPage?: number;
}

export default function PostGrid({ posts, postsPerPage = 6 }: PostGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지네이션 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {currentPosts.map((post) => (
          <CustomLink
            href={`/blog/${post.category}/${post.slug}`}
            className='group h-full'
            key={`${post.category}-${post.slug}`}
          >
            <article className='border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col'>
              <div className='p-6 flex flex-col min-h-[200px]  justify-center items-center'>
                <div className='flex items-center gap-4 mb-4'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>{post.frontmatter.publishDate}</span>
                  <span className='text-sm text-purple-600 dark:text-purple-400 '>{post.category}</span>
                </div>
                <h2 className='text-xl font-semibold my-auto text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 duration-200'>
                  {post.frontmatter.title}
                </h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mt-auto'>By {post.frontmatter.author}</p>
              </div>
            </article>
          </CustomLink>
        ))}
      </div>
      {posts.length === 0 ? (
        <div className='col-span-full text-center py-12 text-gray-600 dark:text-gray-400'>No posts found.</div>
      ) : (
        <PostPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  );
}
