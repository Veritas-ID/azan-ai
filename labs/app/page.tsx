import { ArrowUpRight } from "lucide-react";
import {
  experiments,
  focusAreas,
  principles,
  statuses,
  type ExperimentStatus,
} from "@/lib/experiments";
import { contactUrl, mainOrigin } from "@/lib/site";

function Status({ name }: { name: ExperimentStatus }) {
  return (
    <span className={`status status-${name.toLowerCase()}`}>
      <i aria-hidden="true" />
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Azan AI Labs
          </p>
          <h1>
            Where we try
            <br />
            things first.
          </h1>
          <p>
            Labs is Azan AI’s workbench: early experiments, prototypes and demos
            in applied AI, shared while they are still taking shape.
          </p>
          <div className="actions">
            <a className="button" href="#experiments">
              See experiments
            </a>
            <a className="button secondary" href={contactUrl}>
              Suggest an experiment
            </a>
          </div>
        </div>
        <div className="bench" aria-labelledby="bench-title">
          <div className="bench-bar">
            <span id="bench-title">How to read a label</span>
            <span>labs.azanai.one</span>
          </div>
          <dl>
            {statuses.map((s) => (
              <div key={s.name}>
                <dt>
                  <Status name={s.name} />
                </dt>
                <dd>{s.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="experiments" className="shell section">
        <div className="section-heading">
          <p className="section-label">Experiments</p>
          <h2>On the bench.</h2>
        </div>
        {experiments.length === 0 ? (
          <div className="empty">
            <p className="empty-title">Nothing public yet.</p>
            <p>
              The first experiments will be listed here as they open up. If
              there is something you would like us to test, tell us.
            </p>
            <a className="text-link" href={contactUrl}>
              Suggest an experiment <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        ) : (
          <ul className="experiment-list">
            {experiments.map((e) => (
              <li id={e.id} key={e.id} className="experiment">
                <Status name={e.status} />
                <h3>{e.name}</h3>
                <p>{e.summary}</p>
                <div className="tags">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {e.url && (
                  <a className="text-link" href={e.url}>
                    Open {e.name} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section id="focus" className="band">
        <div className="shell section">
          <div className="section-heading">
            <p className="section-label">Focus areas</p>
            <h2>What we are exploring.</h2>
            <p>
              Labs follows the same questions as Azan AI’s products and client
              work.
            </p>
          </div>
          <ol className="focus-grid">
            {focusAreas.map((f, i) => (
              <li key={f.name}>
                <span className="index">0{i + 1}</span>
                <h3>{f.name}</h3>
                <p>{f.copy}</p>
              </li>
            ))}
          </ol>
          <a className="text-link" href={`${mainOrigin}/projects/`}>
            See Azan AI’s projects <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="how" className="shell section">
        <div className="section-heading">
          <p className="section-label">How Labs works</p>
          <h2>Small, early and labelled.</h2>
        </div>
        <div className="principles">
          {principles.map((p) => (
            <div key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="shell cta-inner">
          <div>
            <h2>Have something worth testing?</h2>
            <p>
              Bring a question or a rough idea. You don’t need a technical
              brief to start.
            </p>
          </div>
          <div className="actions">
            <a className="button" href={contactUrl}>
              Talk to Azan AI
            </a>
            <a className="button secondary" href={mainOrigin}>
              Visit azanai.one
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
