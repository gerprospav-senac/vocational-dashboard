/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? '/vocational-dashboard' : '',
}

module.exports = nextConfig
