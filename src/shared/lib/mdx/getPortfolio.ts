import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioDirectory = path.join(process.cwd(), 'portfolio');

export async function getPortfolio() {
  const files = fs.readdirSync(portfolioDirectory).filter((file) => file.endsWith('.mdx'));

  if (files.length === 0) {
    return null;
  }

  const firstFile = files[0];
  const filePath = path.join(portfolioDirectory, firstFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data: frontmatter, content } = matter(fileContent);

  return { frontmatter, content, filename: firstFile };
}
