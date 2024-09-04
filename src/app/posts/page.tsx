import { getAllPostsMeta } from "@/lib/mdx";
import Categories from "./_components/Categories";
import PaginationComponent from "@/components/PaginationComponent";

export default async function PostsPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-[5px] lg:px-0">
      <Categories />
      <section>
        <h1 className="text-3xl font-bold">All Posts</h1>
        <PaginationComponent posts={posts} postsPerPage={4} />
      </section>
      <div></div>
    </main>
  );
}
