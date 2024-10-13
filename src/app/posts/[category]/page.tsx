import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/mdx";
import { Suspense } from "react";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const posts = await getPostsByCategory(params.category);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-[500px] md:w-[700px] lg:w-[1000px] text-center bg-gradient-to-r from-purple-500 via-pink-400 to-blue-300 px-10 py-6 rounded-xl text-[20px] lg:text-[35px] font-bold my-[100px]  mb-[150px]">
        {params.category}
      </div>
      {posts.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          <Suspense fallback={<div>Loading posts...</div>}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Suspense>
        </div>
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
}
