import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const outputFileTracingRoot = fileURLToPath(new URL("./", import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot,
};

export default nextConfig;
