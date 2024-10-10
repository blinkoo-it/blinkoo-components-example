/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: false,
  // output: 'export',
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      exclude: /.*public.*/,
    });
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: [
      "node-nlp",
    ],
  },
};

export default nextConfig;
