import Image from "next/image";
import Link from "next/link";

interface postProps {
  post: {
    slug: string;
    thumbnail: string;
    title: string;
    author: string;
    publishDate: string;
  };
}

export default function PostCard({ post }: postProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="mb-8 hover:bg-neutral-800">
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
  );
}
