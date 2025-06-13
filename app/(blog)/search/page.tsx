import { BlogContainer } from '@/src/features/blog';
import BlogSearchBar from '@/src/features/blog/ui/BlogSearchBar';
import { getSearchedPostsByKeyword } from '@/src/shared/lib/mdx/getBlog';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { keyword?: string };
}) {
  const keyword = searchParams?.keyword?.trim();
  if (!keyword) return notFound();

  const searchedPosts = await getSearchedPostsByKeyword(keyword);

  return (
    <main className='w-full'>
      <BlogSearchBar />
      <BlogContainer posts={searchedPosts} />
    </main>
  );
}
