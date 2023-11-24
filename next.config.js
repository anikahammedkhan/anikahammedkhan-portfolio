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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              outputPath: 'static/images/', // Adjust the output path as needed
              name: '[name].[ext]',
            },
          },
        ],
      })
    }

    return config
  },
}

module.exports = nextConfig
