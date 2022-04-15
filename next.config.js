/** @type {import('next').NextConfig} */

const withSass = require("@zeit/next-sass");
module.exports = withSass();
const nextConfig = {
  reactStrictMode: true,
}

module.exports =
nextConfig,
withSass({
  target: 'serverless',
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  }
})
