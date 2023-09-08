/** @type {import("next").NextConfig} */

require("dotenv").config();
let branchName = "web-koushu";

const nextConfig = {
  output: process.env.BUILD_TYPE == "production" ? "export" : "",
  assetPrefix: process.env.BUILD_TYPE == "production" ? branchName : "",
  basePath: process.env.BUILD_TYPE == "production" ? branchName : "",
  trailingSlash: true,
};

module.exports = nextConfig;
