import { BlogContainer } from '@/src/features/blog';
import BlogSearchBar from '@/src/features/blog/ui/BlogSearchBar';
import { getSearchedPostsByKeyword } from '@/src/shared/lib/mdx/getBlog';
import { notFound } from 'next/navigation';

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 3600;

export default async function Page({ searchParams }: PageProps) {
  // searchParams를 await로 받아야 합니다
  const resolvedSearchParams = await searchParams;
  const keyword =
    typeof resolvedSearchParams?.keyword === 'string' ? resolvedSearchParams.keyword.trim() : '';

  if (!keyword) return notFound();

  const searchedPosts = await getSearchedPostsByKeyword(keyword);

  return (
    <main className='w-full'>
      <BlogSearchBar />
      <BlogContainer posts={searchedPosts} />
    </main>
  );
}
