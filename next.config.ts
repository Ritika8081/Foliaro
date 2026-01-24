import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Foliaro',
  assetPrefix: '/Foliaro',
  eslint: {
    // Temporarily disable ESLint during builds due to flatCache compatibility issue
    ignoreDuringBuilds: true,
  },
  images: {
    // GitHub Pages does not support the Next.js image optimizer
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
  },
};

export default nextConfig;
