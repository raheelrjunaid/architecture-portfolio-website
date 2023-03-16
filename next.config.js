/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "cdn.sanity.io"],
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
