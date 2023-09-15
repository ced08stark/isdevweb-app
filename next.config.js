/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "tailwindui.com",
      "daily-voice-res.cloudinary.com",
      "www.w3.org",
      "images.unsplash.com",
      "www.isdevexperts.com",
    ],
  },
};



module.exports = nextConfig
