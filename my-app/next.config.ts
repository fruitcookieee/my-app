import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  output: "export",

  basePath: process.env.NODE_ENV === "production" ? "/my-app" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-app/" : "",
};

export default nextConfig;
