import { BlogContainer, BlogSearchBar } from '@/src/features/blog';
import { getSearchedPostsByKeyword } from '@/src/shared/lib/mdx/getBlog';
import { notFound } from 'next/navigation';

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 3600;

export default async function Page({ searchParams }: PageProps) {
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
