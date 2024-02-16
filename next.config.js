module.exports = {
  images: {
    domains: ['localhost', 'theacehub.co.in', 'firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      }
    ],
  },
};
