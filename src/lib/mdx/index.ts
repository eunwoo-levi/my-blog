import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import dayjs from 'dayjs';
import { ReactElement } from 'react';

import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Element } from 'hast';



interface PostMeta {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  thumbnail: string;
  category: string;
}

interface Frontmatter {
  title?: string;
  author?: string;
  publishDate?: string;
  thumbnail?: string;
  category?: string;
}


const contentDirectory = path.join(process.cwd(), 'src', 'app', 'content');

export const getAllCategories = (): string[] => {
  const categories = fs.readdirSync(contentDirectory).filter((file) => {
    const fullPath = path.join(contentDirectory, file);
    return fs.statSync(fullPath).isDirectory(); // 폴더만 선택
  });

  return categories;
};

export const getPostsByCategory = async (category: string, page: number, postsPerPage: number): Promise<{ posts: PostMeta[], totalPages: number }> => {
  const categoryPath = path.join(contentDirectory, category);
  const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'));

  const allPosts = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(category, file.replace(/\.mdx$/, ''));
      return {...meta, category};
    })
  );

  allPosts.sort((a, b) => dayjs(b.publishDate).unix() - dayjs(a.publishDate).unix());

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  return { posts: paginatedPosts, totalPages };
};


// 특정 슬러그의 포스트 가져오기
export const getPostBySlug = async (category: string, slug: string): Promise<{ meta: PostMeta; content: ReactElement }> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(contentDirectory, category, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const rehypePrettyCodeOptions: Partial<Options> = {
    theme: 'github-dark',
    onVisitLine(node: Element) {
      if (node.children.length === 0) {
        node.children = [{type: 'text', value: ' '}];
      }
    },
    onVisitHighlightedLine(node) {
      (node.properties.className as string[]) = ((node.properties.className as string[]) || []).concat('highlighted');
    },
    onVisitHighlightedChars(node) {
      (node.properties.className as string[]) = ['word'];
    },
  };

  const { frontmatter = {} as Frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,
          remarkBreaks,
        ],
        rehypePlugins: [
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      },
    },
  });

  const meta: PostMeta = {
    slug: `${category}/${realSlug}`,
    title: frontmatter.title ?? "Untitled",
    author: frontmatter.author ?? "Unknown Author",
    publishDate: frontmatter.publishDate ?? dayjs().format('YYYY-MM-DD'),
    thumbnail: frontmatter.thumbnail ?? "/next.svg",
    category: frontmatter.category ?? "Uncategorized"
  };

  return { meta, content };
};

// 모든 포스트 메타데이터 가져오기
export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  const categories = fs.readdirSync(contentDirectory).filter((file) => {
    const fullPath = path.join(contentDirectory, file);
    return fs.statSync(fullPath).isDirectory();
  });

  const posts: PostMeta[] = [];

  for (const category of categories) {
    const files = fs.readdirSync(path.join(contentDirectory, category));

    for (const file of files) {
      if (file.endsWith('.mdx')) {
        const { meta } = await getPostBySlug(category, file);
        posts.push({
          ...meta,
          category  
        });
      }
    }
  }

   // publishDate 기준으로 최신순으로 정렬
   posts.sort((a, b) => dayjs(b.publishDate).unix() - dayjs(a.publishDate).unix());

  return posts;
};


// 페이지네이션을 위한 포스트 메타데이터 가져오기
export const getPagedPostsMeta = async (page: number, postsPerPage: number): Promise<{posts: PostMeta[], totalPages: number}> => {
  const allPosts = await getAllPostsMeta();
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const pagedPosts = allPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  return {
    posts: pagedPosts,
    totalPages
  };
};

export const getAllCategoriesWithPostCounts = async (): Promise<{ category: string, postCount: number }[]> => {
  const categories = getAllCategories();
  
  const categoriesWithCounts = await Promise.all(
    categories.map(async (category) => {
      const categoryPath = path.join(contentDirectory, category);
      const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'));
      return {
        category,
        postCount: files.length,
      };
    })
  );

  return categoriesWithCounts;
};