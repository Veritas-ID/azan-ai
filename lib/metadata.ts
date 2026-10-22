import type { Metadata } from "next";
export const siteOrigin = "https://azan-ai-studio.muledominicm.chatgpt.site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Azan AI`,
      description,
      url: path,
      siteName: "Azan AI",
      type: "website",
    },
    twitter: { card: "summary", title: `${title} | Azan AI`, description },
  };
}
