import type { NextConfig } from "next";
// const path = require("path");
import * as path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "ui/styles"),
      path.join(__dirname, "assets"),
      path.join(__dirname, "src", "ui")
    ],
  },
  async redirects() {
    return[
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
