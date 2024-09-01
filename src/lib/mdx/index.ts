import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import dayjs from 'dayjs';
import { ReactElement } from 'react';

const rootDirectory = path.join(process.cwd(), 'src', 'app', 'content');

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

export const getPostBySlug = async (slug: string): Promise<{ meta: PostMeta; content: ReactElement }> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter = {} as Frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const meta: PostMeta = {
    slug: realSlug,
    title: frontmatter.title ?? "Untitled",
    author: frontmatter.author ?? "Unknown Author",
    publishDate: frontmatter.publishDate ?? dayjs().format('YYYY-MM-DD'),
    thumbnail: frontmatter.thumbnail ?? "/thumbnails/default.jpg",
  };

  return { meta, content };
};

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  const files = fs.readdirSync(rootDirectory);

  const posts: PostMeta[] = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
