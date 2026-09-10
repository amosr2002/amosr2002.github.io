import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files, so generate a complete static export.
  output: "export",
};

export default nextConfig;
