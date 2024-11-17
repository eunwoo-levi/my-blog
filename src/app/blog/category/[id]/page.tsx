import { getAllPosts } from '@/lib/mdx/getBlog';
import { notFound } from 'next/navigation';
import PostGrid from '../../_components/PostGrid';

export const revalidate = 3600;

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const categoryId = Number(params.id);

  if (isNaN(categoryId)) {
    notFound();
  }

  // getAllPosts는 이미 캐시된 데이터를 사용
  const posts = await getAllPosts(categoryId);

  if (!posts.length) {
    notFound();
  }

  return <PostGrid posts={posts} />;
}
