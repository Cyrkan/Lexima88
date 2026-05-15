import type { NextConfig } from "next";

const redirectHosts = [
  "averisoffers.info",
  "www.averisoffers.info",
  "averisnews.net",
  "www.averisnews.net"
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return redirectHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: "https://averisoffers.com/:path*",
      permanent: true
    }));
  }
};

export default nextConfig;
