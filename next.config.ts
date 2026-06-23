import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/.well-known/security",
        destination: "/.well-known/security.txt",
        permanent: true,
      },
      {
        source: "/security",
        destination: "/.well-known/security.txt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
