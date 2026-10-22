import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://azan-ai-studio.muledominicm.chatgpt.site/sitemap.xml",
  };
}
