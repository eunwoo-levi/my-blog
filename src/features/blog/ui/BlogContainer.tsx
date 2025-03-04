'use client';

import { useState } from 'react';
import { PostData } from '@/src/shared/lib/mdx/type';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/src/shared/ui';
import BlogPost from './BlogPost';

export default function BlogContainer({ posts }: { posts: PostData[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIdx, startIdx + postsPerPage);

  const onPageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='mb-32 flex w-full flex-col items-center justify-center'>
      <div className='grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-8 lg:grid-cols-3'>
        {currentPosts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className='mt-6'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {/* 페이지 번호 */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    isActive={currentPage === pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
