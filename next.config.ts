import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Add this
  images: {
    unoptimized: true, // ✅ Required for GitHub Pages
  },
};

export default nextConfig;
