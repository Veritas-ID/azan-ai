import type { Metadata } from "next";
import "./globals.css";
import { siteOrigin } from "@/lib/metadata";
import { Navbar, Footer } from "@/components/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  alternates: { canonical: "/" },
  title: {
    default: "Azan AI — AI Consulting, Integrations & Solutions",
    template: "%s | Azan AI",
  },
  description:
    "Azan AI helps organizations understand, build, integrate and scale artificial intelligence through consulting, custom AI solutions, automation, agents, training and ongoing support.",
  openGraph: {
    title: "Azan AI — Build what’s next with AI.",
    description: "Understand. Build. Integrate. Scale AI.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/brand/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
