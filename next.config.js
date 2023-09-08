/** @type {import('next').NextConfig} */

let branchName = "web-koushu";

const nextConfig = {
  output: "export",
  assetPrefix: branchName,
  basePath: branchName,
  trailingSlash: true,
};

module.exports = nextConfig;
