
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'lottie.host'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lottie.host',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
