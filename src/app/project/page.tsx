import React from 'react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx/getProject';
import Image from 'next/image';

export default async function ProjectPage() {
  const projects = await getAllProjects();

  return (
    <main className='flex w-full flex-col items-center px-4 py-12'>
      {projects.map((project, idx) => (
        <div
          key={project.slug}
          className='my-10 min-h-[700px] w-11/12 rounded-lg border p-4 shadow-sm transition-all duration-200 hover:scale-110 lg:min-h-[800px] lg:w-4/5'
        >
          <Link
            href={project.frontmatter.url}
            className='flex h-full w-full flex-col items-center gap-6'
          >
            <div className='w-full pl-2 text-xl font-semibold lg:text-2xl'>
              {projects.length - idx < 10
                ? '0' + (projects.length - idx)
                : projects.length - idx}
              {' | '}
              {project.frontmatter.role}
            </div>
            <div className='relative mb-3 h-[400px] w-full overflow-hidden rounded lg:h-[500px]'>
              <Image
                src={project.frontmatter.thumbnail}
                alt={project.frontmatter.title}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
            <h2 className='text-xl font-bold lg:text-4xl'>
              {project.frontmatter.title}
            </h2>
            <p className='text-lg font-semibold text-gray-400 lg:text-2xl'>
              {project.frontmatter.description}
            </p>
            <div className='text-md pt-2 text-gray-600'>
              Project Duration: {project.frontmatter.projectDate}
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
