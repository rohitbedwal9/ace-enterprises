/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 't3.ftcdn.net',
      },
    ],
  },
};

export default nextConfig;
