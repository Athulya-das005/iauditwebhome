import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(__dirname),
  },
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
