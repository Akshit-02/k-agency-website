import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: "/creators",
        destination: "/for-creators",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
