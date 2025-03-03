import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true, // 301 Redirect (SEO 최적화)
      },
    ];
  },
};

export default nextConfig;
