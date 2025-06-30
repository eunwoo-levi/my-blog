import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const interViewDirectory = path.join(process.cwd(), 'interView');

export async function getInterView() {
  const files = fs.readdirSync(interViewDirectory).filter((file) => file.endsWith('.mdx'));

  if (files.length === 0) {
    return null;
  }

  const firstFile = files[0];
  const filePath = path.join(interViewDirectory, firstFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data: frontmatter, content } = matter(fileContent);

  return { frontmatter, content, filename: firstFile };
}
