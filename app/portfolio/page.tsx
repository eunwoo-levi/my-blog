import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPortfolio } from '@/src/shared/lib/mdx/getPortfolio';

export default async function PortfolioPage() {
  const post = await getPortfolio();

  if (!post) {
    notFound(); // 파일이 없으면 404 페이지로 이동
  }

  return (
    <main className='mx-auto max-w-4xl px-6 py-12'>
      <article className='prose prose-lg dark:prose-invert'>
        <h1>{post.frontmatter.title}</h1>
        <p className='text-gray-500'>{post.frontmatter.publishDate}</p>
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
