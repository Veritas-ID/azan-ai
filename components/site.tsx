"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import {
  Menu,
  X,
  Plus,
  Network,
  ScanLine,
  Workflow,
  GraduationCap,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
export function Mark({ large = false }: { large?: boolean }) {
  return (
    <img
      className={large ? "mark large" : "mark"}
      src="/brand/azan-symbol.webp"
      width="620"
      height="572"
      alt=""
    />
  );
}
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link className="logo" href="/" aria-label="Azan AI home">
      <img
        src={dark ? "/brand/azan-dark.webp" : "/brand/azan-light.webp"}
        alt="Azan AI — Connect, build, scale"
        width="1000"
        height="350"
      />
    </Link>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const path = usePathname().replace(/\/$/, "") || "/";
  return (
    <header
      className="header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          menuRef.current?.focus();
        }
      }}
    >
      <div className="shell nav">
        <Logo />
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {["Services", "Projects", "About", "Insights", "Contact"].map((n) => (
            <Link
              aria-current={path === `/${n.toLowerCase()}` ? "page" : undefined}
              onClick={() => setOpen(false)}
              key={n}
              href={`/${n.toLowerCase()}`}
            >
              {n}
            </Link>
          ))}
          <Link
            onClick={() => setOpen(false)}
            className="button nav-cta"
            href="/contact"
          >
            Talk to us
          </Link>
        </nav>
        <button
          ref={menuRef}
          aria-controls="main-navigation"
          className="menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Button({
  children,
  href,
  secondary = false,
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
}) {
  return (
    <Link className={`button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
    </Link>
  );
}
export function Hero() {
  return (
    <section className="hero shell">
      <motion.div
        className="hero-copy"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="eyebrow">
          <span />
          Intelligence. Connected.
        </div>
        <h1>
          Build what’s
          <br />
          next with AI.
        </h1>
        <p>
          Azan AI helps organizations understand, build, integrate and scale
          artificial intelligence — from strategy and automation to custom AI
          systems and workforce transformation.
        </p>
        <div className="actions">
          <Button href="/services">Explore our services</Button>
          <Button secondary href="/contact">
            Talk to us
          </Button>
        </div>
      </motion.div>
      <div
        className="system-art"
        aria-label="Abstract Azan A symbol connecting strategy, systems, people and intelligence"
        role="img"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="axis horizontal" />
        <div className="axis vertical" />
        <div className="art-core">
          <Mark large />
        </div>
        <span className="node n1">Strategy</span>
        <span className="node n2">Your systems</span>
        <span className="node n3">People</span>
        <span className="node n4">Intelligence</span>
        <span className="junction j1" />
        <span className="junction j2" />
        <span className="junction j3" />
        <div className="art-caption">Connected by design.</div>
      </div>
      <div className="hero-bottom">
        <span>Built from Africa. Built for what’s next.</span>
        <span>
          Strategy <i /> Integrations <i /> Solutions <i /> Automation <i />{" "}
          Training
        </span>
      </div>
    </section>
  );
}
export function SectionHeader({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children?: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={reduce ? undefined : { opacity: [0.85, 1], y: [8, 0] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="section-heading"
    >
      {label && <p className="section-label">{label}</p>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </motion.div>
  );
}
const icons = [
  Compass,
  Network,
  ScanLine,
  Workflow,
  GraduationCap,
  ShieldCheck,
];
export function ServiceCard({
  name,
  description,
  index,
  id,
}: {
  name: string;
  description: string;
  index: number;
  id: string;
}) {
  const Icon = icons[index];
  return (
    <Link className={`service-card service-${index}`} href={`/services/#${id}`}>
      <Icon size={27} strokeWidth={1.4} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="card-bottom">
        Explore service <Plus size={18} />
      </span>
    </Link>
  );
}
export function CTASection() {
  return (
    <section className="cta">
      <div className="shell cta-inner">
        <div>
          <p className="section-label">Let’s build something that works.</p>
          <h2>Ready to put AI to work?</h2>
          <p>
            Whether you’re exploring your first AI use case or building your
            next intelligent product, Azan AI can help you move from possibility
            to production.
          </p>
        </div>
        <div className="actions">
          <Button href="/contact">Start a conversation</Button>
          <Button secondary href="/projects">
            Explore our work
          </Button>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="shell footer">
      <div className="footer-brand">
        <Logo dark />
        <p>Building, integrating and scaling AI from Africa.</p>
        <a href="mailto:hello@azanai.com">hello@azanai.com</a>
      </div>
      <div>
        <h3>Company</h3>
        {["About", "Projects", "Insights", "Contact"].map((n) => (
          <Link href={`/${n.toLowerCase()}`} key={n}>
            {n}
          </Link>
        ))}
      </div>
      <div>
        <h3>Services</h3>
        {[
          "AI Consulting & Strategy",
          "AI Integrations",
          "Custom AI Solutions",
          "AI Automation & Agents",
          "AI Training & Education",
          "AI Enablement & Support",
        ].map((n, i) => (
          <Link
            href={`/services/#${["strategy", "integrations", "solutions", "automation", "training", "support"][i]}`}
            key={n}
          >
            {n}
          </Link>
        ))}
      </div>
      <div>
        <h3>Find us online</h3>
        <span className="muted">LinkedIn · Coming soon</span>
        <span className="muted">GitHub · Coming soon</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Azan AI</span>
        <span>Understand. Build. Integrate. Scale AI.</span>
      </div>
    </footer>
  );
}
