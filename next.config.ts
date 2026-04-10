import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/infraestructura-digital",
        destination: "/desarrollo-web-estrategico",
        permanent: true,
      },
      {
        source: "/estrategia-social-media",
        destination: "/estrategia",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dyydiipuxpbvspawwjhl.supabase.co",
      },
    ],
  },
};

export default nextConfig;
