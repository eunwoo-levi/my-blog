import { BlogContainer } from '@/src/features/blog';
import { CATEGORIES } from '@/src/features/blog/model/data';
import { getAllPosts } from '@/src/shared/lib/mdx/getBlog';
import { ParamsProps } from '@/src/shared/model/type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateMetadata({ params }: ParamsProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = CATEGORIES.find((c) => c.path === category);

  if (!categoryData) {
    return {
      title: '카테고리를 찾을 수 없습니다',
    };
  }

  const categoryUrl = `https://www.eunwoo-levi.com/${category}`;

  return {
    title: `${categoryData.name} - 리바이 기술블로그`,
    description: `${categoryData.name} 카테고리의 기술블로그 포스트들을 확인해보세요.`,
    keywords: [categoryData.name, '개발', '프론트엔드', '블로그'],
    openGraph: {
      type: 'website',
      title: `${categoryData.name} - 리바이 기술블로그`,
      description: `${categoryData.name} 카테고리의 기술블로그 포스트들을 확인해보세요.`,
      url: categoryUrl,
      siteName: '리바이 기술블로그',
      images: [
        {
          url: 'https://www.eunwoo-levi.com/levi.webp',
          width: 1200,
          height: 630,
          alt: `${categoryData.name} 카테고리`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryData.name} - 리바이 기술블로그`,
      description: `${categoryData.name} 카테고리의 기술블로그 포스트들을 확인해보세요.`,
      images: ['https://www.eunwoo-levi.com/levi.webp'],
    },
    alternates: {
      canonical: categoryUrl,
    },
  };
}

export default async function CategoryPage({ params }: ParamsProps) {
  const { category } = await params;
  const categoryData = CATEGORIES.find((c) => c.path === category);

  // 존재하지 않는 카테고리
  if (!categoryData) {
    notFound();
  }

  const posts = await getAllPosts(categoryData.id);

  // 해당 카테고리에 글이 없으면 404
  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className='w-full'>
      <BlogContainer posts={posts} />
    </main>
  );
}
