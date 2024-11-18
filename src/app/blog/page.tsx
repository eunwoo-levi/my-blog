import { getAllPosts } from '@/lib/mdx/getBlog';
import PostGrid from './_components/PostGrid';
import { Suspense } from 'react';
import BlogLoading from './loading';

export const revalidate = 3600; // 1시간 마다 ISR 재생성

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <Suspense fallback={<BlogLoading />}>
      <PostGrid posts={posts} />
    </Suspense>
  );
}
