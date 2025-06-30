import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/interview/'],
      },
    ],
    sitemap: 'https://www.eunwoo-levi.blog/sitemap.xml',
    host: 'https://www.eunwoo-levi.blog',
  };
}
