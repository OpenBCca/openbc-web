/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/openbc-web' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
