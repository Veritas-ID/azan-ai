import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { insights } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "services/",
    "projects/",
    "about/",
    "contact/",
    "insights/",
    ...insights.map((i) => `insights/${i.slug}/`),
  ].map((p) => ({
    url: `${siteOrigin}/${p}`,
  }));
}
