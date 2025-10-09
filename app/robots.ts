import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://www.eunwoo-levi.com/sitemap.xml',
    host: 'https://www.eunwoo-levi.com',
  };
}
