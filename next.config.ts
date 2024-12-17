import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/questions/gender',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
