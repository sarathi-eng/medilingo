import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for production deployment (Render, Docker, etc.)
  output: "standalone",

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,

  // Make Next.js listen on the platform-provided PORT (Render, Heroku, etc.)
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
};

export default nextConfig;
