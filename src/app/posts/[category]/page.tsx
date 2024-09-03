import { getPostsByCategory } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface Props {
  params: {
    category: string;
  };
}

interface PostMeta {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  thumbnail: string;
}

export default async function CategoryPage({
  params,
}: Props): Promise<ReactElement> {
  const posts: PostMeta[] = await getPostsByCategory(params.category);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="flex justify-center items-center border border-blue-500 w-[200px] h-[50px] text-[35px] font-bold rounded-3xl mt-[80px] mb-[200px]">
        {params.category}
      </div>
      {posts.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          {posts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className="mb-8 hover:bg-neutral-800"
            >
              <div className="w-full lg:w-[800px] h-[210px] flex items-center border border-gray-300 rounded-lg p-4">
                <Image
                  src={post.thumbnail}
                  alt={`${post.title} thumbnail`}
                  width={200}
                  height={200}
                  className="mb-4 rounded h-[150px]"
                />
                <div className="ml-[100px] flex flex-col">
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-gray-500">{post.author}</p>
                  <p className="text-gray-400 text-sm">{post.publishDate}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
}
