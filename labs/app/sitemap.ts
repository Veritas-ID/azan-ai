import type { MetadataRoute } from "next";
import { labsOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${labsOrigin}/` }];
}
