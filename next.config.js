/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/openbc-web' : '',
  output: 'export',
  distDir: 'dist',
  githubApiToken: process.env.GITHUB_API_KEY,
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  env: {
    githubApiCall: false,
  },
};

module.exports = nextConfig;
