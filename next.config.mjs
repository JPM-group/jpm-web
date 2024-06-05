/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jpmgroups.com',
        port: '',
        pathname: '/pages/image/**',
      },
    ],
  },
};

export default nextConfig;
