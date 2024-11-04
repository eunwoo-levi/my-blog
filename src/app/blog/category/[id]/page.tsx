import { getPostsByCategory } from '@/lib/mdx/getBlog';
import { notFound } from 'next/navigation';
import PostGrid from '../../_components/PostGrid';

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const categoryId = parseInt(params.id);
  const posts = await getPostsByCategory(categoryId);

  if (!posts.length) {
    notFound();
  }

  return <PostGrid posts={posts} />;
}
