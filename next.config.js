module.exports = {
  images: {
    domains: ['localhost', 'theacehub.co.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      }
    ],
  },
};
