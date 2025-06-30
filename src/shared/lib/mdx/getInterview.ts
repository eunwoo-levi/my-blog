import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { rehypePrettyCodeOptions } from './prettyCodeOption';
import { BlogFrontMatter } from './type';

const interViewDirectory = path.join(process.cwd(), 'interview');

export async function getInterView() {
  const files = fs.readdirSync(interViewDirectory).filter((file) => file.endsWith('.mdx'));

  if (files.length === 0) {
    return null;
  }

  const firstFile = files[0];
  const filePath = path.join(interViewDirectory, firstFile);
  const source = fs.readFileSync(filePath, 'utf-8');

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

  return { frontmatter, content, filename: firstFile };
}
