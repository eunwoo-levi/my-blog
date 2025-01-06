import dayjs from 'dayjs';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { cache } from 'react';
import { ProjectData, ProjectFrontMatter } from './type';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCodeOptions } from './prettyCodeOption';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const contentDirectory = path.join(process.cwd(), 'projects');

export const getAllProjects = cache(async (): Promise<ProjectData[]> => {
  try {
    // project 폴더의 모든 파일 읽기
    const files = fs
      .readdirSync(contentDirectory)
      .filter((file) => file.endsWith('.mdx')); // .mdx 파일만 필터링

    // 각 파일의 frontmatter 파싱
    const allProjects = files.map((file) => {
      const source = fs.readFileSync(path.join(contentDirectory, file), 'utf8');
      const { data } = matter(source, { excerpt: false });

      return {
        frontmatter: data as ProjectFrontMatter,
        slug: file.replace(/\.mdx$/, ''), // 파일명에서 확장자 제거
      };
    });

    const sortedProjects = allProjects.sort(
      (a, b) =>
        dayjs(b.frontmatter.publishDate).unix() -
        dayjs(a.frontmatter.publishDate).unix(),
    );

    return sortedProjects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
});

export const getProjectBySlug = cache(async (slug: string) => {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');

  // MDX 컴파일 및 rehypePrettyCode 옵션 적용
  const { content, frontmatter } = await compileMDX<ProjectFrontMatter>({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeAutolinkHeadings,
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
        remarkPlugins: [remarkGfm, remarkBreaks],
      },
      parseFrontmatter: true,
    },
  });

  return {
    content,
    frontmatter,
  };
});
