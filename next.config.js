const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
