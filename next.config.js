/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/openbc-web' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  env:{
    GITHUB_API_KEY: process.env.GITHUB_TOKEN,
  },
}

module.exports = nextConfig
