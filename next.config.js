/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
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
