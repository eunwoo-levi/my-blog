import { BlogContainer, CategoryList } from '@/src/features/blog';
import { getAllPosts } from '@/src/shared/lib/mdx/getBlog';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mt-10 w-full max-w-[1000px]'>
        <CategoryList />
      </div>
      <main className='w-full'>
        <BlogContainer posts={posts} />
      </main>
    </div>
  );
}
