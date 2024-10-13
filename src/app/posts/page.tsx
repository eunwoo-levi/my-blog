import { getPagedPostsMeta } from "@/lib/mdx";
import Categories from "./_components/Categories";
import PaginationComponent from "@/components/PaginationComponent";
import { Suspense } from "react";
import { ServerTime } from "./_components/ServerTime";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 4; // 페이지당 포스트 수
  const { posts, totalPages } = await getPagedPostsMeta(
    currentPage,
    postsPerPage
  );
  const serverGeneratedTime = new Date().toISOString();

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-[5px] lg:px-0">
      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories />
      </Suspense>
      <section>
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Suspense fallback={<div>Loading posts...</div>}>
          <PaginationComponent
            posts={posts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </Suspense>
        <ServerTime generatedTime={serverGeneratedTime} />
      </section>
    </main>
  );
}
