import React from 'react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx/getProject';
import Image from 'next/image';

export default async function ProjectPage() {
  const projects = await getAllProjects(); // 프로젝트 목록 가져오기

  return (
    <main className='flex w-full flex-col items-center px-4 py-12'>
      {projects.map((project, idx) => (
        <div
          key={project.slug}
          className='my-10 h-[700px] w-4/5 rounded-lg border p-4 shadow-sm transition-all duration-200 hover:scale-110 lg:h-[800px]'
        >
          <Link
            href={`/project/${project.slug}`}
            className='flex w-full flex-col items-center gap-6'
          >
            <div className='w-full pl-2 text-xl lg:text-2xl'>
              {idx.toString().length === 1 ? '0' + (idx + 1) : idx}
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
            <p className='text-lg font-bold text-gray-600 lg:text-2xl'>
              {project.frontmatter.description}
            </p>
            <p className='text-md pt-2 text-gray-500'>
              Project Date: {project.frontmatter.projectDate}
            </p>
          </Link>
        </div>
      ))}
    </main>
  );
}
