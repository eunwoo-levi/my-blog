import React from 'react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx/getProject';

export default async function ProjectPage() {
  const projects = await getAllProjects(); // 프로젝트 목록 가져오기

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='mb-6 text-3xl font-bold'>Projects</h1>
      <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <li
            key={project.slug}
            className='rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md'
          >
            <Link href={`/project/${project.slug}`} className='block'>
              <div className='aspect-w-16 aspect-h-9 mb-4'>
                <img
                  src={project.frontmatter.thumbnail}
                  alt={project.frontmatter.title}
                  className='h-full w-full rounded object-cover'
                />
              </div>
              <h2 className='mb-2 text-xl font-semibold'>
                {project.frontmatter.title}
              </h2>
              <p className='text-gray-600'>{project.frontmatter.description}</p>
              <p className='mt-2 text-sm text-gray-500'>
                Published:{' '}
                {new Date(project.frontmatter.publishDate).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
