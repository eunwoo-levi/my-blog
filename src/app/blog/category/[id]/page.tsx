import { getAllPosts } from '@/lib/mdx/getBlog';
import { notFound } from 'next/navigation';
import PostGrid from '../../_components/PostGrid';
import { Suspense } from 'react';
import BlogLoading from '../../loading';

export const revalidate = 3600;

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const categoryId = Number(params.id);

  // getAllPosts는 이미 캐시된 데이터를 사용
  const posts = await getAllPosts(categoryId);

  if (!posts.length) {
    notFound();
  }

  return (
    <Suspense fallback={<BlogLoading />}>
      <PostGrid posts={posts} />;
    </Suspense>
  );
}
