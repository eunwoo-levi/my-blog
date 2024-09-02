import { getAllCategoriesWithPosts } from "@/lib/mdx";

export default function Categories() {
  const categoriesWithPosts = getAllCategoriesWithPosts();

  return (
    <section className="mb-[50px]">
      <div className="flex gap-[30px]">
        {categoriesWithPosts.map(({ category, posts }) => (
          <div key={category}>
            <div className="border p-[8px] rounded-3xl flex justify-center items-center text-[15px] font-bold gap-[6px] hover:text-neutral-600">
              <h2>{category}</h2>
              <h3 className="text-blue-600">{`(${posts.length})`}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
