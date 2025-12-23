import { BlogContainer, BlogSearchBar } from '@/src/features/blog';
import { getSearchedPostsByKeyword } from '@/src/shared/lib/mdx/getBlog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/src/shared/ui';

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

  if (searchedPosts.length === 0) {
    return (
      <main className='w-full'>
        <BlogSearchBar />
        <div className='flex flex-col items-center justify-center px-4 py-20'>
          <div className='max-w-md space-y-4 text-center'>
            <div className='mb-4 text-6xl'>🔍</div>
            <h2 className='text-2xl font-bold text-foreground'>검색 결과가 없습니다</h2>
            <p className='text-muted-foreground'>
              <span className='font-semibold text-foreground'>{`"${keyword}"`}</span>에 대한 검색
              결과를 찾을 수 없습니다.
            </p>
            <div className='space-y-2 pt-4 text-sm text-muted-foreground'>
              <p>• 검색어의 철자가 정확한지 확인해보세요</p>
              <p>• 다른 검색어로 시도해보세요</p>
              <p>• 더 일반적인 단어로 검색해보세요</p>
            </div>
            <div className='pt-6'>
              <Link href='/'>
                <Button>전체 글 보기</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='w-full'>
      <BlogSearchBar />
      <BlogContainer posts={searchedPosts} />
    </main>
  );
}
