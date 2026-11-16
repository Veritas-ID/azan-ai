import type { Metadata } from "next";
import "./globals.css";
import { ArrowUpRight } from "lucide-react";
import { contactEmail, contactUrl, labsOrigin, mainOrigin } from "@/lib/site";

const description =
  "Azan AI Labs is the workbench of Azan AI: early experiments, prototypes and demos in applied AI, shared while they are still taking shape.";

export const metadata: Metadata = {
  metadataBase: new URL(labsOrigin),
  alternates: { canonical: "/" },
  title: { default: "Azan AI Labs", template: "%s | Azan AI Labs" },
  description,
  openGraph: {
    title: "Azan AI Labs",
    description,
    url: "/",
    siteName: "Azan AI Labs",
    type: "website",
  },
  twitter: { card: "summary", title: "Azan AI Labs", description },
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

function Logo() {
  return (
    <a className="logo" href="/" aria-label="Azan AI Labs home">
      <img
        src="/brand/azan-secondary.webp"
        width={1208}
        height={380}
        alt="Azan AI"
      />
      <span className="logo-tag">Labs</span>
    </a>
  );
}

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
        <header className="header">
          <div className="shell nav">
            <Logo />
            <nav aria-label="Main navigation" className="navigation">
              <a className="nav-anchor" href="/#experiments">
                Experiments
              </a>
              <a className="nav-anchor" href="/#focus">
                Focus areas
              </a>
              <a className="nav-anchor" href="/#how">
                How Labs works
              </a>
              <a className="nav-out" href={mainOrigin}>
                azanai.org <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="shell footer-inner">
            <div className="footer-brand">
              <Logo />
              <p>Experiments in applied AI from Azan AI.</p>
            </div>
            <nav aria-label="Azan AI" className="footer-links">
              <a href={mainOrigin}>azanai.org</a>
              <a href={`${mainOrigin}/services/`}>Services</a>
              <a href={`${mainOrigin}/projects/`}>Projects</a>
              <a href={contactUrl}>Contact</a>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </nav>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Azan AI</span>
              <span>Built from Africa. Built for what’s next.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
