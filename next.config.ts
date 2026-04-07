import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
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
