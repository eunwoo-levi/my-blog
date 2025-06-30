import { MetadataRoute } from 'next';
import { getAllPosts } from '@/src/shared/lib/mdx/getBlog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.eunwoo-levi.blog';

  // 정적 페이지들
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/board`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // 모든 블로그 포스트 가져오기
  const posts = await getAllPosts();

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.category}/${post.slug}`,
    lastModified: new Date(post.frontmatter.publishDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 카테고리 페이지들
  const categories = [...new Set(posts.map((post) => post.category))];
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
}
