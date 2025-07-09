import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'all'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // You can increase this if needed
    },
  },
};

export default nextConfig;
