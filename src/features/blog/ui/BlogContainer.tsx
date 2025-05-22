'use client';

import { useState } from 'react';
import { PostData } from '@/src/shared/lib/mdx/type';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
            {(() => {
              const pageNumbers: (number | 'ellipsis')[] = [];

              if (totalPages <= 5) {
                for (let i = 1; i <= totalPages; i++) {
                  pageNumbers.push(i);
                }
              } else {
                // always showing first page
                if (currentPage > 3) {
                  pageNumbers.push(1);
                  pageNumbers.push('ellipsis');
                } else {
                  for (let i = 1; i <= 3; i++) {
                    pageNumbers.push(i);
                  }
                }

                // middle page
                if (currentPage > 3 && currentPage < totalPages - 2) {
                  pageNumbers.push(currentPage - 1);
                  pageNumbers.push(currentPage);
                  pageNumbers.push(currentPage + 1);
                }

                // nearby last page
                if (currentPage >= totalPages - 2) {
                  for (let i = totalPages - 2; i <= totalPages; i++) {
                    if (i > 1) pageNumbers.push(i);
                  }
                }

                // always showing last page
                if (currentPage < totalPages - 2) {
                  pageNumbers.push('ellipsis');
                  pageNumbers.push(totalPages);
                }
              }

              const uniquePages = Array.from(new Set(pageNumbers));

              return uniquePages.map((page, idx) => (
                <PaginationItem key={idx}>
                  {page === 'ellipsis' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => onPageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ));
            })()}
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
