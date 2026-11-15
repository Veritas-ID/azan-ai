import type { MetadataRoute } from "next";
import { labsOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${labsOrigin}/sitemap.xml`,
  };
}
