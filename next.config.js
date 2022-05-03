/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["res.cloudinary.com"]
  },
  env: {
    DEV_URL : process.env.DEV_URL,
    PROD_URL : process.env.PROD_URL,
  },
}

module.exports = nextConfig
