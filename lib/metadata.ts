import type { Metadata } from "next";
export { siteOrigin } from "@/lib/site";
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
