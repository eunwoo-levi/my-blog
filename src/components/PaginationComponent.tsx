"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PostCard from "./PostCard";

interface PostMeta {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  thumbnail: string;
  category: string;
}

interface PaginationComponentProps {
  posts: PostMeta[];
  postsPerPage: number;
  currentPage: number;
  totalPages: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  posts,
  postsPerPage,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
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
      <div className="flex flex-col gap-[20px] mt-6">
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${currentPage - 1}`}
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
                  href={`?page=${page}`}
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
              href={`?page=${currentPage + 1}`}
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
