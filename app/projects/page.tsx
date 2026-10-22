import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/content";
import { ProjectVisual, YahfrikaVisual } from "@/components/projects";
import { Button, CTASection } from "@/components/site";
export const metadata = pageMetadata(
  "Projects",
  "Explore Dukani, Veritas ID and WorkPal — AI commerce, data provenance and AI coworkers — plus YAHfrika from our web and digital portfolio.",
  "/projects/",
);
export default function Projects() {
  return (
    <>
      <section className="shell page-hero">
        <p className="section-label">Our work</p>
        <h1>
          Built around
          <br />
          real possibilities.
        </h1>
        <p>
          AI products and systems that connect intelligence with the way people
          work, trade and share information.
        </p>
      </section>
      <div className="shell project-details">
        {projects.map((p) => (
          <section id={p.id} className="project-detail" key={p.id}>
            <ProjectVisual id={p.id} />
            <div>
              <p className="project-category">{p.category}</p>
              <h2>{p.name}</h2>
              <h3>{p.tagline}</h3>
              <p>{p.description}</p>
              <p>{p.detail}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.url ? (
                <a
                  className="button secondary"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {p.name}
                </a>
              ) : (
                <Button href="/contact/?project=Dukani">
                  Ask about Dukani
                </Button>
              )}
            </div>
          </section>
        ))}
      </div>
      <section className="digital-work">
        <div className="shell section digital-section">
          <div>
            <p className="section-label">Web & digital work</p>
            <h2>YAHfrika</h2>
            <p>
              Modern digital experiences create a strong foundation for what
              comes next. YAHfrika is a featured website from our digital
              portfolio.
            </p>
            <a
              className="button secondary"
              href="https://yahfrika.co.ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </div>
          <YahfrikaVisual />
        </div>
      </section>
      <CTASection />
    </>
  );
}
