const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'ss-portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  },
  output: 'export',
  basePath: isGhPages && isProd ? `/${repo}` : '',
  assetPrefix: isGhPages && isProd ? `/${repo}/` : ''
};

export default nextConfig;
