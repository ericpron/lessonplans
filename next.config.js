/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    customKey: process.env.customKey,
  },
  experimental: {
    serverActions: true,
  },
};
