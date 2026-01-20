import { Briefcase, Star } from 'lucide-react';
import { projects } from '../data';

export default function ProjectsSection() {
  return (
    <section className='border-b border-gray-800 px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 flex items-center gap-3'>
          <Briefcase className='h-8 w-8 text-green-400' />
          <h2 className='text-4xl font-bold text-white'>Project Experience</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10'
            >
              <div className='mb-4 flex items-start justify-between'>
                <Star className='h-6 w-6 text-green-400 transition-transform group-hover:rotate-12' />
                <span className='text-xs text-gray-500'>{project.period}</span>
              </div>
              <h3 className='mb-2 text-lg font-bold text-white transition-colors group-hover:text-green-400'>
                {project.title}
              </h3>
              <p className='mb-4 text-sm text-gray-400'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className='rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
