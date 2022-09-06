/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
