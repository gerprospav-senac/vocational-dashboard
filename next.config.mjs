/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? '/vocational-dashboard' : '',
  trailingSlash: true,
  reactStrictMode: false,
}

export default nextConfig;
