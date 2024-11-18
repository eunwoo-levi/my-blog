import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import type { Options } from 'rehype-pretty-code';
import type { Element } from 'hast';
import remarkBreaks from 'remark-breaks';
import { cache } from 'react';

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node: Element) {
    // 빈 줄 처리
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // 하이라이트된 라인 스타일링
    node.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    // 하이라이트된 문자 스타일링
    node.properties.className = ['word--highlighted'];
  },
};

const contentDirectory = path.join(process.cwd(), 'content');

interface BlogFrontMatter {
  title: string;
  author: string;
  thumbnail: string;
  publishDate: string;
  categoryId: number;
}

interface PostData {
  frontmatter: BlogFrontMatter;
  slug: string;
  category: string;
}

// frontmatter만 가져오는 최적화된 함수
export const getAllPosts = cache(async (categoryId?: number): Promise<PostData[]> => {
  try {
    const categories = fs.readdirSync(contentDirectory);

    const allPosts = categories.flatMap((category) => {
      const categoryPath = path.join(contentDirectory, category);
      
      // 디렉토리가 아닌 경우 스킵
      if (!fs.statSync(categoryPath).isDirectory()) return [];

      const files = fs
        .readdirSync(categoryPath)
        .filter((file) => file.endsWith('.mdx'));

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
      (a, b) => 
        dayjs(b.frontmatter.publishDate).unix() - 
        dayjs(a.frontmatter.publishDate).unix()
    );

    if (categoryId) {
      return sortedPosts.filter(
        (post) => post.frontmatter.categoryId === categoryId
      );
    }

    return sortedPosts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
});

// 개별 포스트 로딩은 필요할 때만 전체 컨텐츠 파싱
export const getPostBySlug = cache(async (category: string, slug: string) => {
  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');
  
  // MDX 컴파일 및 스타일 적용
  const { content, frontmatter } = await compileMDX<BlogFrontMatter>({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeAutolinkHeadings, 
          [rehypePrettyCode, rehypePrettyCodeOptions]
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