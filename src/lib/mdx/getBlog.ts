import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkBreaks from 'remark-breaks';
import dayjs from 'dayjs';
import type { Options } from 'rehype-pretty-code';
import type { BlogFrontMatter, PostData } from '@/types/blog';
import { postCache } from './postCache';

const contentDirectory = path.join(process.cwd(), 'src', 'app', 'content');

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ['word--highlighted'];
  },
};

// frontmatter만 파싱하는 최적화된 함수
export const getAllPosts = async (categoryId?: number): Promise<PostData[]> => {
  // 전체 포스트 캐시 키
  const allPostsCacheKey = 'posts-all';

  // 1. 먼저 전체 포스트 캐시 확인
  let allPosts = postCache.get<PostData[]>(allPostsCacheKey);

  if (!allPosts) {
    // 캐시가 없을 경우만 파일시스템 접근
    allPosts = await loadAllPosts();
    postCache.set(allPostsCacheKey, allPosts);
  }

  // 2. 카테고리 ID가 있는 경우
  if (categoryId) {
    const categoryCacheKey = `posts-${categoryId}`;
    const categoryPosts = postCache.get<PostData[]>(categoryCacheKey);

    if (categoryPosts) {
      return categoryPosts;
    }

    // 캐시된 전체 포스트에서 필터링
    const filteredPosts = allPosts.filter((post) => post.frontmatter.categoryId === categoryId);
    postCache.set(categoryCacheKey, filteredPosts);
    return filteredPosts;
  }

  return allPosts;
};

// 파일시스템에서 포스트 로드하는 함수 분리
const loadAllPosts = async (): Promise<PostData[]> => {
  const categories = fs.readdirSync(contentDirectory);
  const postPromises = categories.flatMap((category) => {
    const files = fs.readdirSync(path.join(contentDirectory, category)).filter((file) => file.endsWith('.mdx'));

    return files.map(async (file) => {
      const source = await fs.promises.readFile(path.join(contentDirectory, category, file), 'utf8');
      const { data: frontmatter } = matter(source);
      return {
        frontmatter: frontmatter as BlogFrontMatter,
        slug: file.replace(/\.mdx$/, ''),
        category,
      };
    });
  });

  return (await Promise.all(postPromises)).sort(
    (a, b) => dayjs(b.frontmatter.publishDate).unix() - dayjs(a.frontmatter.publishDate).unix()
  );
};

// 개별 포스트를 가져올 때는 전체 내용을 파싱
export const getPostBySlug = async (category: string, slug: string) => {
  const cacheKey = `post-${category}-${slug}`;
  const cached = postCache.get<{ content: any; frontmatter: BlogFrontMatter }>(cacheKey);

  if (cached) {
    console.log('Cache hit:', cacheKey);
    return cached;
  }

  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  // frontmatter를 먼저 파싱하고 반환
  const { data: frontmatter } = matter(source);

  // MDX 컴파일은 병렬로 처리
  const contentPromise = compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeAutolinkHeadings, [rehypePrettyCode, rehypePrettyCodeOptions]],
        remarkPlugins: [remarkGfm, remarkBreaks],
      },
      parseFrontmatter: true,
    },
  });

  const { content } = await contentPromise;
  const result = { content, frontmatter };

  // 결과 캐시
  postCache.set(cacheKey, result);

  return result;
};

// 카테고리별 포스트 가져오기
export const getPostsByCategory = async (categoryId: number): Promise<PostData[]> => {
  try {
    const posts = await getAllPosts(categoryId);
    return posts;
  } catch (error) {
    console.error(`Failed to get posts for category ${categoryId}:`, error);
    return [];
  }
};

// 캐시 초기화
export const clearCache = () => postCache.clear();

// 타입 익스포트
export type { BlogFrontMatter, PostData, Category } from '@/types/blog';
