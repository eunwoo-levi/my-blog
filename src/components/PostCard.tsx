import Link from "next/link";

interface postProps {
  post: {
    slug: string;
    thumbnail: string;
    title: string;
    author: string;
    publishDate: string;
    category: string;
  };
}

export default function PostCard({ post }: postProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      key={post.title}
      className="flex items-center w-full lg:w-[800px] h-[280px] p-8 rounded-xl shadow-md border border-slate-800 dark:hover:border-white dark:hover:bg-gray-900 transition-all duration-300  hover:shadow-2xl"
    >
      <img
        src={post.thumbnail}
        alt="thumbnail"
        className="w-[140px] h-[120px] lg:w-[250px] lg:h-[220px] rounded-[8px] mr-[10px] lg:mr-[80px] p-[3px]"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold pt-[35px]">{post.title}</h3>
        <h3 className="text-xl pt-[30px] font-semibold text-neutral-600">
          cagegory: {post.category}
        </h3>
        <p className="mt-4 mb-2 text-[20px]">{post.author}</p>
        <time className="text-[12px] text-gray-400">{post.publishDate}</time>
      </div>
    </Link>
  );
}
