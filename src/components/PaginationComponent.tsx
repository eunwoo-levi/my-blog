'use client';

import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import PostCard from './PostCard';

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

interface PaginationComponentProps {
  posts: PostData[]; // 포스트 데이터 배열
  postsPerPage?: number; // 페이지당 포스트 수 (기본값: 9)
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ posts, postsPerPage = 9 }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      {/* 포스트 리스트를 렌더링할 수 있습니다. */}
      <div className='flex flex-col gap-[20px] mt-6'>
        {currentPosts?.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href='#'
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
              className={currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
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
          })}

          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
              className={currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
