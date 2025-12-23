import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPortfolio } from '@/src/shared/lib/mdx/getPortfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포트폴리오 - 리바이 기술블로그',
  description: '리바이의 프로젝트 포트폴리오',
  alternates: {
    canonical: 'https://www.eunwoo-levi.com/portfolio',
  },
};

export default async function PortfolioPage() {
  const post = await getPortfolio();

  if (!post) {
    notFound();
  }

  return (
    <div className='flex w-full flex-col items-center py-12'>
      <article className='prose prose-lg prose-invert w-full max-w-7xl rounded-xl bg-gray-900 px-6'>
        <h1>{post.frontmatter.title}</h1>
        <p className='text-gray-500'>{post.frontmatter.publishDate}</p>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
