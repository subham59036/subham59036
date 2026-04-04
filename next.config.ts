import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

};

module.exports = {
  allowedDevOrigins: ['10.172.49.170'],
}

export default nextConfig;
