/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
