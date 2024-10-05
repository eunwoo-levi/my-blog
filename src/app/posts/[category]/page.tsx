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
      <div className="inline-flex items-center border border-blue-500 text-[35px] font-bold rounded-3xl mt-[80px] mb-[200px] p-2">
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
