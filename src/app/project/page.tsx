import React from 'react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx/getProject';
import Image from 'next/image';

export default async function ProjectPage() {
  const projects = await getAllProjects(); // 프로젝트 목록 가져오기

  return (
    <main className='flex w-full flex-col items-center px-4 py-8'>
      {projects.map((project) => (
        <div
          key={project.slug}
          className='mb-40 w-4/5 rounded-lg border p-4 shadow-sm transition-all duration-200 hover:scale-110'
        >
          <Link
            href={`/project/${project.slug}`}
            className='flex w-full flex-col items-center gap-4'
          >
            <Image
              src={project.frontmatter.thumbnail}
              alt={project.frontmatter.title}
              width={400}
              height={400}
              className='mb-8 h-full w-full rounded object-cover'
            />
            <h2 className='mb-2 text-4xl font-bold'>
              {project.frontmatter.title}
            </h2>
            <p className='text-2xl font-bold text-gray-600'>
              {project.frontmatter.description}
            </p>
            <p className='mt-2 text-gray-500'>
              Published:{' '}
              {new Date(project.frontmatter.publishDate).toLocaleDateString()}
            </p>
          </Link>
        </div>
      ))}
    </main>
  );
}
