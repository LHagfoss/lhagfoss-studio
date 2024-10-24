/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

export default nextConfig;