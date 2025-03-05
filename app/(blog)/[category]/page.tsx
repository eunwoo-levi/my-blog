import { BlogContainer } from '@/src/features/blog';
import { CATEGORIES } from '@/src/features/blog/model/data';
import { getAllPosts } from '@/src/shared/lib/mdx/getBlog';
import { ParamsProps } from '@/src/shared/model/type';

export const revalidate = 3600;

export default async function CategoryPage({ params }: ParamsProps) {
  const { category } = await params;
  const categoryId = CATEGORIES.find((c) => c.path === category)?.id;

  const posts = await getAllPosts(categoryId);

  return (
    <main className='w-full'>
      <BlogContainer posts={posts} />
    </main>
  );
}
