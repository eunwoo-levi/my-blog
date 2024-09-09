"use client";

import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

interface PaginationComponentProps {
  posts: any[]; // 포스트 데이터 배열
  postsPerPage?: number; // 페이지당 포스트 수 (기본값: 9)
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  posts,
  postsPerPage = 9,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 최신 글이 먼저 오도록 역순 정렬
  const sortedPosts = [...posts].reverse();

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const currentPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
      <div className="flex flex-col gap-[20px] mt-6">
        {currentPosts?.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.title}
            className="flex items-center w-full lg:w-[800px] h-[280px] p-8 rounded-xl shadow-md border border-slate-800 dark:hover:border-white hover:shadow-2xl"
          >
            <img
              src={post.thumbnail}
              alt="thumbnail"
              className="w-[250px] h-[220px] rounded-[8px] mr-[80px] p-[3px]"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold pt-[35px]">{post.title}</h3>
              <p className="mt-4 mb-2 text-[20px]">{post.author}</p>
              <time className="text-[12px] text-gray-400">
                {post.publishDate}
              </time>
            </div>
          </Link>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
              className={
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
              className={
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
