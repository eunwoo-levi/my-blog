import { Suspense } from "react";
import { getPostsByCategory } from "@/lib/mdx";
import PaginationComponent from "@/components/PaginationComponent";

interface Props {
  params: {
    category: string;
  };
  searchParams: { page: string };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 4; // 페이지당 포스트 수 설정

  const { posts, totalPages } = await getPostsByCategory(
    params.category,
    currentPage,
    postsPerPage
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-[500px] md:w-[700px] lg:w-[1000px] text-center bg-gradient-to-r from-purple-500 via-pink-400 to-blue-300 px-10 py-6 rounded-xl text-[20px] lg:text-[35px] font-bold my-[100px] mb-[150px]">
        {params.category}
      </div>
      {posts.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          <Suspense fallback={<div>Loading posts...</div>}>
            <PaginationComponent
              posts={posts}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </Suspense>
        </div>
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
}
