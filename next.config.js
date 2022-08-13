/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HELLO: 'WORLD FROM ENV',
    TRPC_URL: process.env.TRPC_URL
  }
}

module.exports = nextConfig
