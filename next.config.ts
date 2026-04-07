import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/infraestructura-digital",
        destination: "/desarrollo-web-estrategico",
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
