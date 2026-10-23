import { contactEmail } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
export const metadata = pageMetadata(
  "Contact",
  "Talk to Azan AI about AI strategy, integrations, custom systems, automation, training or ongoing support. Start a conversation about your next project.",
  "/contact/",
);
export default function Contact() {
  return (
    <section className="shell contact-page">
      <div className="contact-intro">
        <p className="section-label">Let’s talk</p>
        <h1>
          What could
          <br />
          we build together?
        </h1>
        <p>
          Bring us a question, a challenge or an idea. We’ll start by
          understanding what you need and where AI could help.
        </p>
        <a className="contact-email" href={`mailto:${contactEmail}`}>
          <Mail size={20} />
          {contactEmail}
        </a>
        <div className="contact-aside">
          <h3>Exploring your first use case?</h3>
          <p>
            You don’t need a technical brief to start. Tell us about your
            organization and the work you would like to improve.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
