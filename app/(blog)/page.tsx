import { BlogContainer, BlogSearchBar } from '@/src/features/blog';
import { getAllPosts } from '@/src/shared/lib/mdx/getBlog';

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getAllPosts();

  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '리바이 기술블로그',
    description:
      '리바이의 프론트엔드 기술블로그 - React, Next.js, TypeScript, JavaScript 학습 기록 및 개발 경험 공유',
    url: 'https://www.eunwoo-levi.com',
    author: {
      '@type': 'Person',
      name: '리바이',
      url: 'https://www.eunwoo-levi.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '리바이 기술블로그',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.eunwoo-levi.com/levi.webp',
      },
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.frontmatter.title,
      datePublished: post.frontmatter.publishDate,
      url: `https://www.eunwoo-levi.com/${post.category}/${post.slug}`,
      image: `https://www.eunwoo-levi.com${post.frontmatter.thumbnail}`,
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='w-full'>
        <BlogSearchBar />
        <BlogContainer posts={posts} />
      </main>
    </>
  );
}
