/** @type {import('next').NextConfig} */

const withSass = require("@zeit/next-sass");
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
