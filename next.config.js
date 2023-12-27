/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
        port: '',
        pathname: '/uploads/images/original_untouched/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        // pathname: '/uploads/images/original_untouched/**',
      }
    ]
  }
}

module.exports = nextConfig
