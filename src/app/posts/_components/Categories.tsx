import { getAllCategoriesWithPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function Categories() {
  const categoriesWithPosts = await getAllCategoriesWithPosts();

  return (
    <section className="w-full max-w-[1200px] mx-auto my-[50px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        {categoriesWithPosts.map(({ category, posts }) => (
          <Link
            href={`/posts/${category}`}
            key={category}
            className="border p-[8px] rounded-3xl flex justify-center items-center text-[15px] font-bold gap-[6px] hover:text-neutral-600"
          >
            <h2>{category}</h2>
            <h3 className="text-blue-600">{`(${posts.length})`}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
