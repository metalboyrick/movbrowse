/** @type {import('next').NextConfig} */
let nextConfig;
try {
  nextConfig = {
    // Enable React Strict Mode for development
    reactStrictMode: true,
    // Define allowed domains for images
    images: {
      domains: ["m.media-amazon.com", "ia.media-imdb.com"],
    },
  };
} catch (error) {
  console.error('Error in Next.js configuration:', error);
  process.exit(1);
}


module.exports = nextConfig;
