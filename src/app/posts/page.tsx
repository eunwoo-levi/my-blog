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
