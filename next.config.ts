import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**', // This allows all images from Pixabay
      },
    ],
  },
};

export default nextConfig;
