/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'github.com',
      protocol: 'https'
    }]
  },
  experimental: {
    typedRoutes: true,
  },
    
}

module.exports = nextConfig
