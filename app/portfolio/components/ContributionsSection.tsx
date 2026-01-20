import { Code2, Github } from 'lucide-react';
import { contributions } from '../data';

export default function ContributionsSection() {
  return (
    <section className='border-b border-gray-800 px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 flex items-center gap-3'>
          <Code2 className='h-8 w-8 text-purple-400' />
          <h2 className='text-4xl font-bold text-white'>Open Source Contributions</h2>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {contributions.map((contribution, index) => (
            <a
              key={index}
              href={contribution.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10'
            >
              <div className='mb-3 flex items-center gap-2'>
                <Github className='h-5 w-5 text-purple-400' />
                <span className='text-sm font-semibold text-purple-400'>Pull Requests</span>
              </div>
              <h3 className='text-lg font-bold text-white transition-colors group-hover:text-purple-400'>
                {contribution.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
