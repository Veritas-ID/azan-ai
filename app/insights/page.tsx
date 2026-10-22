import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { insights } from "@/lib/content";
import { CTASection } from "@/components/site";
export const metadata = pageMetadata(
  "Insights",
  "Practical perspectives on AI strategy, connected systems and building AI capability inside organizations.",
  "/insights/",
);
export default function Insights() {
  return (
    <>
      <section className="shell page-hero">
        <p className="section-label">Insights</p>
        <h1>
          Thinking that
          <br />
          connects to doing.
        </h1>
        <p>
          Practical perspectives on understanding AI, building useful systems
          and helping people put them to work.
        </p>
      </section>
      <section className="shell insight-list">
        {insights.map((i) => (
          <Link
            className="insight-card"
            href={`/insights/${i.slug}/`}
            key={i.slug}
          >
            <p className="project-category">{i.category}</p>
            <h2>{i.title}</h2>
            <p>{i.summary}</p>
            <span className="text-link">
              Read the guide <span>+</span>
            </span>
          </Link>
        ))}
      </section>
      <CTASection />
    </>
  );
}
