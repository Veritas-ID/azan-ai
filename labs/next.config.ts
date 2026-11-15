import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  // Labs is its own app inside the main site's repository. Pin the tracing
  // root so Next does not pick up the parent folder's lockfile.
  outputFileTracingRoot: path.join(__dirname),
};
export default config;
