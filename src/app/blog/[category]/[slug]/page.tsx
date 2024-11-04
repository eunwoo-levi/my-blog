import { getPostBySlug } from '@/lib/mdx/getBlog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Giscus from '@/components/Giscus';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter } = await getPostBySlug(params.category, params.slug);

    return {
      title: frontmatter.title,
      description: `${frontmatter.title} - Written by ${frontmatter.author}`,
      openGraph: {
        title: frontmatter.title,
        type: 'article',
        authors: [frontmatter.author],
        publishedTime: frontmatter.publishDate,
        images: [frontmatter.thumbnail],
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPost({ params }: Props) {
  try {
    const { content, frontmatter } = await getPostBySlug(params.category, params.slug);

    return (
      <article className='max-w-4xl mx-auto px-4 py-12'>
        <header className='mb-12'>
          <h1 className='text-4xl font-bold mb-4'>{frontmatter.title}</h1>

          <div className='flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8'>
            <div className='flex items-center gap-2'>
              <span className='font-medium'>By</span>
              <span>{frontmatter.author}</span>
            </div>
            <div className='w-1.5 h-1.5 rounded-full bg-gray-400' />
            <time dateTime={frontmatter.publishDate}>
              {new Date(frontmatter.publishDate).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className='w-1.5 h-1.5 rounded-full bg-gray-400' />
            <span className='text-purple-600 dark:text-purple-400'>{params.category}</span>
          </div>
        </header>

        <div className='prose prose-lg dark:prose-invert max-w-none'>{content}</div>

        <div className='mt-16 pt-8 border-t border-gray-200 dark:border-gray-800'>
          <div className='flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400'>
            <span>Posted in</span>
            <span className='text-purple-600 dark:text-purple-400 font-medium'>
              {params.category}
            </span>
          </div>
        </div>
        <footer className='flex justify-center w-full max-w-[1800px]'>
          <Giscus />
        </footer>
      </article>
    );
  } catch (error) {
    notFound();
  }
}