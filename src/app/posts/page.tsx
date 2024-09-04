import { getAllPostsMeta } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import Categories from "./_components/Categories";

export default async function PostsPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-[5px] lg:px-0">
      <Categories />

      <section>
        <h1 className="text-3xl font-bold">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-6">
          {posts?.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post?.title}
              className="p-8 rounded-xl shadow-md border border-slate-800 dark:hover:border-white hover:shadow-2xl"
            >
              <Image
                width={100}
                height={100}
                src={post.thumbnail}
                alt="thumbnail"
                className="w-[200px] h-[200px] rounded-[8px]"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold pt-[20px]">{post.title}</h3>
              <p className="mt-4 text-sm">{post.author}</p>
              <time className="text-[12px] text-gray-400">
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
