/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["res.cloudinary.com"]
  },
  env: {
    SERVER : process.env.SERVER,
  },
}

module.exports = nextConfig
