import { pageMetadata } from "@/lib/metadata";
import { CTASection, SectionHeader } from "@/components/site";
import { Process } from "@/components/process";
export const metadata = pageMetadata(
  "About",
  "Azan comes from Azania, reflecting our African roots and global ambition. We build, integrate and scale practical AI technology with organizations.",
  "/about/",
);
export default function About() {
  return (
    <>
      <section className="shell page-hero about-hero">
        <div>
          <p className="section-label">Our story</p>
          <h1>
            Rooted in Africa.
            <br />
            Building for the world.
          </h1>
          <p>
            We believe organizations should be able to participate meaningfully
            in the AI era — with technology that fits their people, their work
            and their ambitions.
          </p>
        </div>
        <div className="about-symbol">
          <img
            src="/brand/azan-symbol.webp"
            alt="Azan AI’s A symbol with the African continent at its center"
            width="620"
            height="572"
          />
        </div>
      </section>
      <section className="shell section story-section">
        <h2>
          A name with roots.
          <br />
          An ambition without borders.
        </h2>
        <div>
          <p>
            “Azan” is derived from “Azania,” reflecting the company’s African
            roots. It is the starting point for a global ambition: building
            world-class AI technology from Africa.
          </p>
          <p>
            Azan AI brings together consulting, engineering, integration and
            education. We help organizations understand where AI can create
            value, turn those ideas into working systems, and build the
            capability to use them well.
          </p>
          <p>
            That means staying involved across strategy, design, development,
            deployment and ongoing support. The goal is practical technology
            that solves an actual problem.
          </p>
        </div>
      </section>
      <section className="philosophy-section">
        <div className="shell section">
          <p className="section-label">Our philosophy</p>
          <h2>
            AI belongs inside
            <br />
            the way a business works.
          </h2>
          <p>
            The best AI systems connect with the people, workflows, data and
            software already making the organization work. We start there —
            understanding the context, designing the connections and building
            technology people can use.
          </p>
          <div className="philosophy-words">
            <span>People</span>
            <span>Workflows</span>
            <span>Data</span>
            <span>Software</span>
          </div>
        </div>
      </section>
      <section className="shell section">
        <SectionHeader label="Our approach" title="One connected journey.">
          We pair technical capability with an understanding of the
          organization, from the first question to ongoing improvement.
        </SectionHeader>
        <Process />
      </section>
      <CTASection />
    </>
  );
}
