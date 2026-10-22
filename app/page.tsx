import Link from "next/link";
import {
  Hero,
  SectionHeader,
  CTASection,
  ServiceCard,
  Button,
} from "@/components/site";
import { ProjectCard, YahfrikaVisual } from "@/components/projects";
import { Process } from "@/components/process";
import { services, projects } from "@/lib/content";
import {
  GraduationCap,
  Layers,
  Network,
  Users,
  Globe2,
  Check,
} from "lucide-react";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="shell section intro">
        <p className="section-label">Possibility, meet production.</p>
        <SectionHeader title="AI that works in the real world.">
          We turn AI from an idea into practical systems that solve actual
          problems. From the first conversation to deployment and ongoing
          support, we connect the thinking with the making.
        </SectionHeader>
      </section>
      <section className="services-section">
        <div className="shell section">
          <div className="section-top">
            <SectionHeader
              label="What we do"
              title="From your first question to your next AI system."
            >
              Six connected services. One end-to-end partner for your AI
              journey.
            </SectionHeader>
            <Link className="text-link" href="/services">
              Explore all services <span>+</span>
            </Link>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="shell section">
        <SectionHeader
          label="How we work"
          title="A clear path from idea to impact."
        >
          Good AI starts with understanding. We work with you through every
          stage.
        </SectionHeader>
        <Process />
      </section>
      <section className="projects-section">
        <div className="shell section">
          <div className="section-top">
            <SectionHeader
              label="Selected projects"
              title="AI built for real problems."
            >
              From autonomous commerce to trusted data and AI coworkers.
            </SectionHeader>
            <Link className="text-link" href="/projects">
              Explore our work <span>+</span>
            </Link>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="shell section digital-section">
        <div>
          <SectionHeader
            label="Web & digital experiences"
            title="Good foundations. New possibilities."
          >
            We also build modern digital experiences that can become the
            foundation for future AI integrations.
          </SectionHeader>
          <h3>YAHfrika</h3>
          <p>A featured website from our digital portfolio.</p>
          <a
            className="text-link"
            href="https://yahfrika.co.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website <span>+</span>
          </a>
        </div>
        <YahfrikaVisual />
      </section>
      <section className="why-section">
        <div className="shell section">
          <SectionHeader
            label="Why Azan AI"
            title="The thinking. And the building."
          >
            A practical perspective on what it takes to make AI work.
          </SectionHeader>
          <div className="pillars">
            {[
              [
                Layers,
                "Built, not just advised",
                "We move from strategy into actual implementation. The work continues beyond the roadmap.",
              ],
              [
                Network,
                "Integration first",
                "AI becomes valuable when it connects to the systems and workflows people already use.",
              ],
              [
                Users,
                "People + AI",
                "Technology should increase what people and organizations are capable of doing.",
              ],
              [
                Globe2,
                "Built from Africa",
                "Our perspective starts in Africa. Our technology and ambition are global.",
              ],
            ].map(([Icon, title, copy]) => {
              const I = Icon as typeof Layers;
              return (
                <div key={String(title)}>
                  <I size={25} strokeWidth={1.3} />
                  <h3>{String(title)}</h3>
                  <p>{String(copy)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="shell section training-section">
        <div className="training-panel">
          <GraduationCap size={35} strokeWidth={1.3} />
          <h3>
            Knowledge that
            <br />
            becomes capability.
          </h3>
          <div className="training-chips">
            <span>Leadership</span>
            <span>Business teams</span>
            <span>Developers</span>
          </div>
          <div className="training-bottom">
            <span>Learn.</span>
            <span>Apply.</span>
            <span>Grow.</span>
          </div>
        </div>
        <div>
          <SectionHeader
            label="AI Training & Education"
            title="Build AI capability inside your organization."
          >
            Give your people more than access to a tool. Give them the
            knowledge, judgment and practical skills to put it to work.
          </SectionHeader>
          <ul className="check-list">
            {[
              "Workshops for leadership and business teams",
              "Hands-on technical training for developers",
              "AI literacy and responsible, practical use",
              "Support for organizations adopting AI",
            ].map((x) => (
              <li key={x}>
                <Check size={16} />
                {x}
              </li>
            ))}
          </ul>
          <Button href="/contact/?service=training">Train your team</Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
