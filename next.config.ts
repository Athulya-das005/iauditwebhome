import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(__dirname),
  },
  reactCompiler: true,
  serverExternalPackages: ["pdfkit", "pdf-lib", "sharp"],
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
        source: "/iso-audit-assessments/self-assessment",
        destination: "/iso-14001-2026-self-assessment-tool",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
