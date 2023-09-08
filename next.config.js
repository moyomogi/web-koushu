/** @type {import("next").NextConfig} */

require("dotenv").config();
let branchName = "/web-koushu";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["user-images.githubusercontent.com"],
  },
  output: process.env.BUILD_TYPE == "test" ? "" : "export",
  assetPrefix: process.env.BUILD_TYPE == "test" ? "" : branchName,
  basePath: process.env.BUILD_TYPE == "test" ? "" : branchName,
  trailingSlash: true,
};

module.exports = nextConfig;
