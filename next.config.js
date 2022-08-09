/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "cdn.sanity.io"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
