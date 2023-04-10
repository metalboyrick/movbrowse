/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "ia.media-imdb.com"],
  },
};

module.exports = nextConfig;
