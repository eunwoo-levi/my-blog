'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PostPagination } from './PostPagination';

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
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {currentPosts.map((post) => (
          <Link
            href={`/blog/${post.category}/${post.slug}`}
            className='group h-full'
            key={`${post.category}-${post.slug}`}
          >
            <article className='flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg dark:border-gray-800'>
              <div className='flex min-h-[200px] flex-col items-center justify-center p-6'>
                <div className='mb-4 flex items-center gap-4'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    {post.frontmatter.publishDate}
                  </span>
                  <span className='text-sm text-purple-600 dark:text-purple-400'>
                    {post.category}
                  </span>
                </div>
                <h2 className='my-auto text-center text-xl font-semibold duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-400'>
                  {post.frontmatter.title}
                </h2>
                <p className='mt-auto text-sm text-gray-600 dark:text-gray-400'>
                  By {post.frontmatter.author}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
      {posts.length === 0 ? (
        <div className='col-span-full py-12 text-center text-gray-600 dark:text-gray-400'>
          No posts found.
        </div>
      ) : (
        <PostPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
