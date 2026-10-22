import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { services } from "@/lib/content";
import { Button, CTASection } from "@/components/site";
import { Check } from "lucide-react";
export const metadata = pageMetadata(
  "AI Services",
  "Explore Azan AI’s six services: AI strategy, integrations, custom solutions, automation and agents, training, and ongoing enablement and support.",
  "/services/",
);
export default function Services() {
  return (
    <>
      <section className="shell page-hero">
        <p className="section-label">Our services</p>
        <h1>
          Understand the opportunity.
          <br />
          Build the capability.
        </h1>
        <p>
          From defining your first use case to supporting deployed systems, we
          help you make AI a useful part of your organization.
        </p>
      </section>
      <div className="service-anchor-bar">
        <nav className="shell" aria-label="Service sections">
          {services.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.id === "solutions"
                ? "Custom solutions"
                : s.id === "strategy"
                  ? "Strategy"
                  : s.id === "automation"
                    ? "Automation & agents"
                    : s.id === "training"
                      ? "Training"
                      : s.id === "integrations"
                        ? "Integrations"
                        : "Support"}
            </a>
          ))}
        </nav>
      </div>
      <div className="shell service-details">
        {services.map((s, i) => (
          <section id={s.id} className="service-detail" key={s.id}>
            <div className="detail-heading">
              <span className="service-index">{s.short}</span>
              <h2>{s.name}</h2>
              <p>{s.intro}</p>
              <Button href={`/contact/?service=${s.id}`}>{s.cta}</Button>
            </div>
            <div className="detail-content">
              <h3>The problem we help solve</h3>
              <p>{s.problems}</p>
              <h3>What we can build together</h3>
              <ul className="check-list">
                {s.solutions.map((x) => (
                  <li key={x}>
                    <Check size={16} />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="use-case">
                <h3>In practice</h3>
                <p>{s.examples}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section className="shell approach-callout">
        <h2>Not sure where to begin?</h2>
        <p>
          Bring us the problem. We can work together to understand where AI
          makes sense.
        </p>
        <Link className="text-link" href="/contact">
          Talk to us <span>+</span>
        </Link>
      </section>
      <CTASection />
    </>
  );
}
