/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: false,
  experimental: {
    serverComponentsExternalPackages: [
      "node-nlp",
    ],
  },
};

export default nextConfig;
