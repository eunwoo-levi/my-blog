import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import dayjs from 'dayjs';
import { ReactElement } from 'react';



interface PostMeta {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  thumbnail: string;
}

interface Frontmatter {
  title?: string;
  author?: string;
  publishDate?: string;
  thumbnail?: string;
}


const contentDirectory = path.join(process.cwd(), 'src', 'app', 'content');

export const getAllCategories = (): string[] => {
  const categories = fs.readdirSync(contentDirectory).filter((file) => {
    const fullPath = path.join(contentDirectory, file);
    return fs.statSync(fullPath).isDirectory(); // 폴더만 선택
  });

  return categories;
};

export const getPostsByCategory = async (category: string): Promise<PostMeta[]> => {
  const categoryPath = path.join(contentDirectory, category);
  const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'));

  const posts = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(category, file.replace(/\.mdx$/, ''));
      return meta;
    })
  );

  return posts;
};

export const getAllCategoriesWithPosts = async (): Promise<{ category: string, posts: PostMeta[] }[]> => {
  const categories = getAllCategories();
  
  const categoriesWithPosts = await Promise.all(
    categories.map(async (category) => ({
      category,
      posts: await getPostsByCategory(category), // Await the posts for each category
    }))
  );

  return categoriesWithPosts;
};


// 특정 슬러그의 포스트 가져오기
export const getPostBySlug = async (category: string, slug: string): Promise<{ meta: PostMeta; content: ReactElement }> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(contentDirectory, category, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter = {} as Frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const meta: PostMeta = {
    slug: `${category}/${realSlug}`,
    title: frontmatter.title ?? "Untitled",
    author: frontmatter.author ?? "Unknown Author",
    publishDate: frontmatter.publishDate ?? dayjs().format('YYYY-MM-DD'),
    thumbnail: frontmatter.thumbnail ?? "/next.svg",
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
        posts.push(meta);
      }
    }
  }

   // publishDate 기준으로 최신순으로 정렬
   posts.sort((a, b) => dayjs(a.publishDate).unix() - dayjs(b.publishDate).unix() );

  return posts;
};