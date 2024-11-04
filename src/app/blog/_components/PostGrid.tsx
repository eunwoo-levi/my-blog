// app/blog/_components/PostGrid.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 페이지 상단으로 부드럽게 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {currentPosts.map((post) => (
          <Link
            key={`${post.category}-${post.slug}`}
            href={`/blog/${post.category}/${post.slug}`}
            className='group'
          >
            <article className='border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
              <div className='relative h-48 w-full'>
                <Image
                  src={post.frontmatter.thumbnail}
                  alt={post.frontmatter.title}
                  fill
                  className='object-contain p-[5px]'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-4 mb-4'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    {post.frontmatter.publishDate}
                  </span>
                  <span className='text-sm text-purple-600 dark:text-purple-400'>
                    {post.category}
                  </span>
                </div>
                <h2 className='text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                  {post.frontmatter.title}
                </h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  By {post.frontmatter.author}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <div className='col-span-full text-center py-12 text-gray-600 dark:text-gray-400'>
          No posts found.
        </div>
      ) : totalPages > 1 ? (
        <Pagination className='mt-8'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              // 현재 페이지 주변의 페이지들만 표시
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 2 && page <= currentPage + 2)
              ) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href='#'
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              // 생략 부호 표시
              if (page === currentPage - 3 || page === currentPage + 3) {
                return (
                  <PaginationItem key={page}>
                    <span className='px-4 py-2'>...</span>
                  </PaginationItem>
                );
              }
              return null;
            })}

            <PaginationItem>
              <PaginationNext
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : null}
    </div>
  );
}
