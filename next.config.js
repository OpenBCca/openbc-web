/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/openbc-web' : '',
  output: 'standalone',
  // output: 'export',
  // distDir: 'dist',
  githubApiToken: process.env.GITHUB_API_KEY,
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
