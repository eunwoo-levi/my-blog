import { notFound } from 'next/navigation';
import { getInterView } from '@/src/shared/lib/mdx/getInterview';
import { TableOfContents } from '@/src/features/blog';

export default async function InterviewPage() {
  const interView = await getInterView();

  if (!interView) {
    notFound();
  }

  return (
    <div className='flex w-full flex-col items-center py-12'>
      <TableOfContents />
      <article className='prose prose-lg prose-invert w-full max-w-7xl rounded-xl bg-gray-900 px-6 py-8 text-white'>
        <h1 className='text-center'>{interView.frontmatter.title}</h1>
        <p className='text-center text-gray-400'>{interView.frontmatter.publishDate}</p>
        {interView.content}
      </article>
    </div>
  );
}
