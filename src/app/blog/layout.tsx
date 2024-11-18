import CategoryList from './_components/CategoryList';
import { Suspense } from 'react';
import Loading from '../loading';
export const revalidate = 3600;

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
      <h1 className='text-3xl font-bold text-center mb-12'>Blog Posts</h1>
      <Suspense fallback={<Loading />}>
        <CategoryList />
      </Suspense>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
