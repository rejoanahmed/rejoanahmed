/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};

module.exports = withMDX(nextConfig);
