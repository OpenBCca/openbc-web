/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/openbc-web' : '',
  output: 'export',
  distDir: 'dist',
  serverRuntimeConfig: {
    githubApiToken: process.env.GITHUB_API_KEY,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
