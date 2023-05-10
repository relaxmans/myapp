/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-09-20 16:46:36
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2023-05-09 17:16:03
 * @FilePath     : /my-app/next.config.js
 */
/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd"],
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: true,
  // distDir: "dist",
  images: {
    domains: ["swatch-cdn-dev.chatlabs.net"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      $env: ${process.env.NODE_ENV};
      @import "./styles/variables.scss";
    `,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
};

module.exports = nextConfig;
