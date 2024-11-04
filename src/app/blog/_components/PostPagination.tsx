// components/ui/PostPagination.tsx
'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface PostPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PostPagination({ currentPage, totalPages, onPageChange }: PostPaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (totalPages <= 1) return null;

  return (
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
  );
}
