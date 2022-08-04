/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/project-codeflare-landing/" : "",
  experimental: { images: { allowFutureImage: true, unoptimized: true } },
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: [
        {
          loader: require.resolve("file-loader"),
          options: {
            publicPath: `/_next/static/videos/`,
            outputPath: `${isServer ? "../" : ""}static/videos/`,
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
