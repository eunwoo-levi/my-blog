import { PostData } from '@/src/shared/lib/mdx/type';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost({ post }: { post: PostData }) {
  return (
    <Link href={`/${post.category}/${post.slug}`} className='block'>
      <div className='h-[380px] w-[350px] transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-200 hover:scale-105 hover:text-purple-500 dark:bg-[#22272E] dark:bg-opacity-90'>
        <Image
          src={post.frontmatter.thumbnail}
          width={280}
          height={160}
          alt={`${post.frontmatter.title} thumbnail`}
          className='h-[160px] w-full object-contain'
        />

        <div className='flex h-[calc(380px-160px)] flex-col justify-between p-4'>
          <div>
            <span className='text-lg text-gray-400'>#{post.category}</span>
            <h2 className='mt-2 text-xl font-bold'>{post.frontmatter.title}</h2>
          </div>

          <p className='text-gray-400'>{post.frontmatter.publishDate}</p>
        </div>
      </div>
    </Link>
  );
}
