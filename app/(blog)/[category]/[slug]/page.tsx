import { getPostBySlug } from '@/src/shared/lib/mdx/getBlog';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export const revalidate = 3600; // 1시간

export default async function BlogDetailPage({ params }: Props) {
  const { category, slug } = await params;

  const { content, frontmatter } = await getPostBySlug(category, slug);

  if (!frontmatter) {
    notFound(); // 404 페이지로 리다이렉트
  }

  return (
    <article className='mx-auto max-w-7xl px-4 py-12'>
      <header className='mb-12'>
        <h1 className='mb-10 text-5xl font-bold lg:text-7xl'>{frontmatter.title}</h1>
        <div className='mb-8 flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400'>
          <div className='flex items-center gap-2'>
            <span className='font-medium'>By</span>
            <span className='text-lg'>{frontmatter.author}</span>
          </div>
          <div className='h-1.5 w-1.5 rounded-full bg-gray-400' />
          <time dateTime={frontmatter.publishDate}>
            {new Date(frontmatter.publishDate).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <div className='h-1.5 w-1.5 rounded-full bg-gray-400' />
          <span className='text-xl font-semibold text-purple-600 dark:text-purple-400'>
            {category}
          </span>
        </div>
      </header>

      <main className='prose prose-lg dark:prose-invert max-w-none rounded-xl bg-neutral-900 px-5 py-6 lg:px-14'>
        {content}
      </main>

      <footer className='mt-16 border-t border-gray-200 pt-8 dark:border-gray-800'>
        <div className='flex flex-col text-sm text-gray-600 dark:text-gray-400'>
          <div className='flex gap-2'>
            <span>Posted in</span>
            <span className='font-medium text-purple-600 dark:text-purple-400'>{category}</span>
          </div>
          <div className='flex gap-2'>
            <span>Written by</span>
            <span className='font-medium text-purple-600 dark:text-purple-400'>
              {frontmatter.author}
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
}
