import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const outputFileTracingRoot = fileURLToPath(new URL("./", import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
