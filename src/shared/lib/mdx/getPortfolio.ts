import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioDirectory = path.join(process.cwd(), 'portfolio'); // 'portfolio' 디렉토리 경로

export async function getPortfolio() {
  // 포트폴리오 디렉토리에서 MDX 파일 찾기
  const files = fs.readdirSync(portfolioDirectory).filter((file) => file.endsWith('.mdx'));

  if (files.length === 0) {
    return null; // 파일이 없으면 null 반환
  }

  // 첫 번째 MDX 파일 읽기
  const firstFile = files[0]; // 첫 번째 파일 선택
  const filePath = path.join(portfolioDirectory, firstFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data: frontmatter, content } = matter(fileContent);

  return { frontmatter, content, filename: firstFile };
}
