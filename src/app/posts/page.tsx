import { getAllPostsMeta } from "@/lib/mdx";
import Categories from "./_components/Categories";
import PaginationComponent from "@/components/PaginationComponent";
import { Suspense } from "react";
import { ServerTime } from "./_components/ServerTime";

export const revalidate = 3600; // ISR

export default async function PostsPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-[5px] lg:px-0">
      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories />
      </Suspense>
      <section>
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Suspense fallback={<div>Loading posts...</div>}>
          <PaginationComponent posts={posts} postsPerPage={4} />
        </Suspense>
        <ServerTime />
      </section>
    </main>
  );
}

// 성능 최적화: Suspense를 사용하여 컴포넌트 로딩을 최적화, 이를 통해 페이지의 일부가 로딩되는 동안 다른 부분을 먼저 표시
