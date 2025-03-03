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

  // 현재 페이지에 해당하는 포스트 필터링
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIdx, startIdx + postsPerPage);

  // 페이지 변경 핸들러
  const onPageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  console.log('currentPosts', currentPosts);

  return (
    <div className='mb-32 flex w-full flex-col items-center'>
      <div className='grid w-full max-w-[1000px] grid-cols-3 gap-8'>
        {currentPosts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className='mt-6'>
          <PaginationContent>
            {/* 이전 페이지 버튼 */}
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
