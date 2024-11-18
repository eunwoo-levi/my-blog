import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import dayjs from 'dayjs';
import matter from 'gray-matter'; // frontmatter 만 파싱
import type { Options } from 'rehype-pretty-code';
import type { Element } from 'hast';
import remarkBreaks from 'remark-breaks';
import { postCache } from './postCache';

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

const contentDirectory = path.join(process.cwd(), 'src', 'app', 'content');

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
export const getAllPosts = async (categoryId?: number): Promise<PostData[]> => {
  const ALL_POSTS_CACHE_KEY = 'posts-all';
  
  // 먼저 전체 포스트 캐시 확인
  let allPosts = postCache.get<PostData[]>(ALL_POSTS_CACHE_KEY);

  // 캐시가 없을 경우만 파일시스템 접근
  if (!allPosts) {
    console.log('Cache miss: Loading all posts from filesystem');
    const categories = fs.readdirSync(contentDirectory);

    const allPostPromises = categories.flatMap((category) => {
      const files = fs
        .readdirSync(path.join(contentDirectory, category))
        .filter((file) => file.endsWith('.mdx'));

      return files.map((file) => {
        const source = fs.readFileSync(path.join(contentDirectory, category, file), 'utf8');
        const { data: frontmatter } = matter(source);
        const slug = file.replace(/\.mdx$/, '');

        return {
          frontmatter: frontmatter as BlogFrontMatter,
          slug,
          category,
        };
      });
    });

    allPosts = allPostPromises.sort(
      (a, b) => dayjs(b.frontmatter.publishDate).unix() - dayjs(a.frontmatter.publishDate).unix()
    );

    // 전체 포스트 캐시 저장
    postCache.set(ALL_POSTS_CACHE_KEY, allPosts);
    console.log('Cached all posts');
  } else {
    console.log('Cache hit: Using cached posts');
  }

  // 카테고리 ID가 있으면 메모리에서 필터링
  if (categoryId) {
    console.log(`Filtering posts for category ${categoryId}`);
    return allPosts.filter((post) => post.frontmatter.categoryId === categoryId);
  }

  return allPosts;
};

// 개별 포스트를 가져올 때는 전체 내용을 파싱
export const getPostBySlug = async (category: string, slug: string) => {
  const cacheKey = `post-${category}-${slug}`;
  const cached = postCache.get<{ content: any; frontmatter: BlogFrontMatter }>(cacheKey);
  if (cached) return cached;

  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');

  const { frontmatter, content } = await compileMDX<BlogFrontMatter>({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeAutolinkHeadings, [rehypePrettyCode, rehypePrettyCodeOptions]],
        remarkPlugins: [remarkGfm, remarkBreaks],
      },
      parseFrontmatter: true,
    },
  });

  const result = { content, frontmatter };
  postCache.set(cacheKey, result);
  return result;
};

