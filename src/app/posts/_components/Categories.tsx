import { getAllCategoriesWithPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function Categories() {
  const categoriesWithPosts = await getAllCategoriesWithPosts();

  return (
    <section className="mb-[50px]">
      <div className="flex gap-[30px]">
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
