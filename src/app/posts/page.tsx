import { getAllPostsMeta } from "@/lib/mdx";
import Categories from "./_components/Categories";
import PaginationComponent from "@/components/PaginationComponent";

export const revalidate = 7200; // ISR

export default async function PostsPage() {
  const posts = await getAllPostsMeta();

  // 서버에서 페이지가 렌더링된 시간을 저장
  const now = new Date().toLocaleString();

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-[5px] lg:px-0">
      <Categories />
      <section>
        <h1 className="text-3xl font-bold">All Posts</h1>
        <PaginationComponent posts={posts} postsPerPage={4} />
        {/* 서버에서 생성된 시간 표시 */}
        <p className="mt-4 text-sm">Page generated at: {now}</p>
      </section>
      <div></div>
    </main>
  );
}
