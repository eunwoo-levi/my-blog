import { getPostBySlug } from '@/src/shared/lib/mdx/getBlog';
import { ParamsProps } from '@/src/shared/model/type';
import { notFound } from 'next/navigation';
import { Giscus } from '@/src/shared/ui';
import { TableOfContents } from '@/src/features/blog';

export const revalidate = 3600;

export async function generateMetadata({ params }: ParamsProps) {
  const { category, slug } = await params;
  const { frontmatter } = await getPostBySlug(category, slug);

  if (!frontmatter) return {};

  const postUrl = `https://www.eunwoo-levi.blog/${category}/${slug}`;

  return {
    title: frontmatter.title,
    description: `${frontmatter.title} - ${frontmatter.author}의 개발 블로그 포스트`,
    keywords: [category, frontmatter.title, '개발', '프론트엔드', frontmatter.author],
    authors: [{ name: frontmatter.author }],
    creator: frontmatter.author,
    publisher: '리바이 개발 블로그',
    openGraph: {
      type: 'article',
      title: frontmatter.title,
      description: `${frontmatter.title} - ${frontmatter.author}의 개발 블로그 포스트`,
      url: postUrl,
      siteName: '리바이 개발 블로그',
      publishedTime: frontmatter.publishDate,
      authors: [frontmatter.author],
      section: category,
      tags: [category, '개발', '프론트엔드'],
      images: [
        {
          url: `https://www.eunwoo-levi.blog${frontmatter.thumbnail}`,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: `${frontmatter.title} - ${frontmatter.author}의 개발 블로그 포스트`,
      images: [`https://www.eunwoo-levi.blog${frontmatter.thumbnail}`],
      creator: '@eunwoo_levi',
    },
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogDetailPage({ params }: ParamsProps) {
  const { category, slug } = await params;
  const { content, frontmatter } = await getPostBySlug(category, slug);

  if (!frontmatter) {
    notFound();
  }

  // JSON-LD 구조화된 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: '리바이 개발 블로그',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.eunwoo-levi.blog/levi.webp',
      },
    },
    datePublished: frontmatter.publishDate,
    dateModified: frontmatter.publishDate,
    description: `${frontmatter.title} - ${frontmatter.author}의 개발 블로그 포스트`,
    image: `https://www.eunwoo-levi.blog${frontmatter.thumbnail}`,
    url: `https://www.eunwoo-levi.blog/${category}/${slug}`,
    articleSection: category,
    keywords: [category, '개발', '프론트엔드', frontmatter.author],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.eunwoo-levi.blog/${category}/${slug}`,
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className='mx-auto max-w-7xl px-4 py-12'>
        <TableOfContents />
        <header className='mb-12'>
          <h1 className='mb-10 text-4xl font-bold lg:text-6xl'>{frontmatter.title}</h1>
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

        <main className='prose prose-lg relative z-10 w-full max-w-full overflow-x-hidden break-words rounded-xl px-5 py-6 dark:prose-invert dark:bg-neutral-900/70 dark:text-white lg:px-14 [&_code]:break-words [&_img]:max-w-full [&_pre]:whitespace-pre-wrap [&_pre]:break-words [&_table]:block [&_table]:w-full'>
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

        <div className='mt-8 flex justify-center'>
          <Giscus />
        </div>
      </article>
    </>
  );
}
