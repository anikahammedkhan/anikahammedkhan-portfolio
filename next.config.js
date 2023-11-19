const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ]
  },
  images: {
    domains: ['i.ibb.co', 'source.unsplash.com'],
  },
}

module.exports = nextConfig
