import fs from 'fs';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import remarkBreaks from 'remark-breaks';
import { cache } from 'react';
import { rehypePrettyCodeOptions } from './prettyCodeOption';
import { BlogFrontMatter, PostData } from './type';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';

const contentDirectory = path.join(process.cwd(), 'content');

export const getAllPosts = cache(async (categoryId?: number): Promise<PostData[]> => {
  try {
    const categories = fs.readdirSync(contentDirectory);

    const allPosts = categories.flatMap((category) => {
      const categoryPath = path.join(contentDirectory, category);

      // 디렉토리가 아닌 경우 스킵
      if (!fs.statSync(categoryPath).isDirectory()) return [];

      const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'));

      return files.map((file) => {
        // frontmatter만 파싱
        const source = fs.readFileSync(path.join(categoryPath, file), 'utf8');
        const { data } = matter(source, { excerpt: false });

        return {
          frontmatter: data as BlogFrontMatter,
          slug: file.replace(/\.mdx$/, ''),
          category,
        };
      });
    });

    const sortedPosts = allPosts.sort(
      (a, b) => dayjs(b.frontmatter.publishDate).unix() - dayjs(a.frontmatter.publishDate).unix(),
    );

    if (categoryId) {
      return sortedPosts.filter((post) => post.frontmatter.categoryId === categoryId);
    }

    return sortedPosts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
});

export const getPostBySlug = cache(async (category: string, slug: string) => {
  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<BlogFrontMatter>({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
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

export const getSearchedPostsByKeyword = cache(async (keyword: string): Promise<PostData[]> => {
  try {
    const categories = fs.readdirSync(contentDirectory);

    const allPosts = categories.flatMap((category) => {
      const categoryPath = path.join(contentDirectory, category);

      if (!fs.statSync(categoryPath).isDirectory()) return [];

      const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'));

      return files.map((file) => {
        const source = fs.readFileSync(path.join(categoryPath, file), 'utf8');
        const { data } = matter(source, { excerpt: false });

        return {
          frontmatter: data as BlogFrontMatter,
          slug: file.replace(/\.mdx$/, ''),
          category,
        };
      });
    });

    const matchedPosts = allPosts.filter((post) =>
      post.frontmatter.title?.toLowerCase().includes(keyword.toLowerCase()),
    );

    const sortedPosts = matchedPosts.sort(
      (a, b) => dayjs(b.frontmatter.publishDate).unix() - dayjs(a.frontmatter.publishDate).unix(),
    );

    return sortedPosts;
  } catch (error) {
    console.error('Error searching posts by title:', error);
    return [];
  }
});
