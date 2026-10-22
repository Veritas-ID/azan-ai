import Link from "next/link";
import {
  Check,
  Fingerprint,
  GitBranch,
  Mail,
  MessageCircle,
  ShieldCheck,
  FileText,
  Bot,
  Database,
  Link2,
  CheckCheck,
} from "lucide-react";
import { projects } from "@/lib/content";
export function ProjectVisual({ id }: { id: string }) {
  if (id === "dukani")
    return (
      <div className="project-visual dukani-visual">
        <div className="chat-window">
          <div className="chat-head">
            <div className="chat-avatar">
              <MessageCircle size={22} />
            </div>
            <div>
              <strong>Dukani</strong>
              <small>AI sales assistant</small>
            </div>
            <span className="chat-ai">AI</span>
          </div>
          <div className="messages">
            <div className="message incoming">
              Hi! Can you help me find a gift?
            </div>
            <div className="message outgoing">
              Of course. Who are you shopping for, and what do they love?
              <CheckCheck size={13} />
            </div>
            <div className="message incoming">Someone who loves coffee.</div>
            <div className="message outgoing">
              Let’s find something they’ll enjoy. What budget would you like to
              work with?
              <CheckCheck size={13} />
            </div>
          </div>
          <div className="chat-input">
            Your next customer is a conversation away.
            <MessageCircle size={16} />
          </div>
        </div>
        <span className="visual-note">Illustrative conversation</span>
      </div>
    );
  if (id === "veritas")
    return (
      <div className="project-visual veritas-visual">
        <div className="data-artifact">
          <div className="artifact-head">
            <span>
              <Fingerprint size={19} /> Veritas ID
            </span>
            <ShieldCheck size={19} />
          </div>
          <div className="artifact-content">
            <span className="small-label">Data with a traceable origin</span>
            <p className="artifact-title">
              Every artifact.
              <br />A connection to its source.
            </p>
            <div className="chart-lines" aria-hidden="true">
              <svg viewBox="0 0 320 90" fill="none">
                <path d="M0 76H320M0 46H320M0 16H320" stroke="#dbe4ed" />
                <path
                  d="m0 74 42-14 38 5 45-27 40 8 38-25 42 10 35-20 40 7"
                  stroke="#3881d6"
                  strokeWidth="3"
                />
                <path
                  d="m0 74 42-14 38 5 45-27 40 8 38-25 42 10 35-20 40 7V90H0Z"
                  fill="#dceafa"
                  opacity=".6"
                />
              </svg>
            </div>
            <div className="provenance-row">
              <Database size={16} />
              <span>Source</span>
              <span className="connector-line" />
              <FileText size={16} />
              <span>Artifact</span>
              <span className="connector-line" />
              <ShieldCheck size={16} />
            </div>
          </div>
          <div className="artifact-footer">
            <Link2 size={14} /> Source + context + verification
          </div>
        </div>
        <span className="visual-note">
          Provenance concept · illustrative chart
        </span>
      </div>
    );
  return (
    <div className="project-visual workpal-visual">
      <div className="coworker-window">
        <div className="workspace-bar">
          <div className="workpal-icon">w</div>
          <strong>WorkPal</strong>
          <span>Workspace</span>
        </div>
        <div className="coworker">
          <div className="bot-avatar">
            <Bot size={28} />
          </div>
          <div>
            <strong>Engineering coworker</strong>
            <span>Role-based AI employee</span>
          </div>
          <ShieldCheck size={18} />
        </div>
        <div className="tool-row">
          <span>
            <GitBranch size={15} />
            GitHub
          </span>
          <span>
            <MessageCircle size={15} />
            Slack
          </span>
          <span>
            <Mail size={15} />
            Email
          </span>
        </div>
        <div className="work-task">
          <Check size={16} />
          <div>
            Review repository activity<small>Within approved permissions</small>
          </div>
        </div>
        <div className="work-task">
          <FileText size={16} />
          <div>
            Prepare the weekly report<small>Ready for human review</small>
          </div>
        </div>
        <div className="permissions">
          <ShieldCheck size={14} />
          Defined role. Connected tools. Clear boundaries.
        </div>
      </div>
      <span className="visual-note">Example coworker workflow</span>
    </div>
  );
}
export function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <Link
        className="project-visual-link"
        href={`/projects/#${project.id}`}
        aria-label={`Explore ${project.name}`}
      >
        <ProjectVisual id={project.id} />
      </Link>
      <div className="project-copy">
        <p className="project-category">{project.category}</p>
        <h3>
          <Link href={`/projects/#${project.id}`}>{project.name}</Link>
        </h3>
        <p>{project.description}</p>
        <Link className="text-link" href={`/projects/#${project.id}`}>
          Explore project <span>+</span>
        </Link>
      </div>
    </article>
  );
}
export function YahfrikaVisual() {
  return (
    <div className="yahfrika-visual">
      <div className="browser-preview">
        <div className="browser-toolbar">
          <span />
          <span />
          <span />
          <div>yahfrika.co.ke</div>
        </div>
        <div className="yahfrika-placeholder">
          <span className="yahfrika-name">YAHfrika</span>
          <span className="yahfrika-rule" />
          <p>
            A modern
            <br />
            digital experience.
          </p>
          <span className="yahfrika-caption">
            Project presentation · YAHfrika
          </span>
        </div>
      </div>
    </div>
  );
}
