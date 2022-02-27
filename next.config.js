/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    options: {
      sourceMap: true,
    },
  }
})

module.exports = nextConfig
