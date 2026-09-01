import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Notwendig für statisches Hosting auf GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages unterstützt Next.js Image Optimization nicht nativ
  },
};

export default nextConfig;
