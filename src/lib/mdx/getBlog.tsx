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
import { postCache } from '../postCache';

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
  const cacheKey = `posts-${categoryId || 'all'}`;
  const cached = postCache.get<PostData[]>(cacheKey);
  if (cached) return cached;

  const categories = fs.readdirSync(contentDirectory);

  const postPromises = categories.flatMap((category) => {
    const files = fs.readdirSync(path.join(contentDirectory, category)).filter((file) => file.endsWith('.mdx'));

    return files.map(async (file) => {
      const source = await fs.promises.readFile(path.join(contentDirectory, category, file), 'utf8');
      const { data: frontmatter } = matter(source);
      const slug = file.replace(/\.mdx$/, '');

      return {
        frontmatter: frontmatter as BlogFrontMatter,
        slug,
        category,
      };
    });
  });

  // 모든 포스트를 병렬로 로드 및 필터링
  const posts = (await Promise.all(postPromises))
    .filter((post) => !categoryId || post.frontmatter.categoryId === categoryId)
    .sort((a, b) => dayjs(b.frontmatter.publishDate).unix() - dayjs(a.frontmatter.publishDate).unix());

  postCache.set(cacheKey, posts);
  return posts;
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

export const getPostsByCategory = async (categoryId: number): Promise<PostData[]> => {
  const posts = await getAllPosts(categoryId);
  return posts.sort((a, b) => dayjs(b.frontmatter.publishDate).unix() - dayjs(a.frontmatter.publishDate).unix());
};
