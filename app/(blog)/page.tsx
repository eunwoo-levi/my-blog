import { BlogContainer, BlogSearchBar } from '@/src/features/blog';
import { getAllPosts } from '@/src/shared/lib/mdx/getBlog';

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <main className='w-full'>
      <BlogSearchBar />
      <BlogContainer posts={posts} />
    </main>
  );
}
