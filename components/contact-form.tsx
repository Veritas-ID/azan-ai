"use client";
import { useState, useEffect } from "react";
import { services } from "@/lib/content";
import { Mail, Check } from "lucide-react";
export function ContactForm() {
  const [service, setService] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const [topic, setTopic] = useState("");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const project = q.get("project");
    if (project === "Dukani") setTopic("I’d like to learn more about Dukani");
    const s = q.get("service");
    if (s && services.some((x) => x.id === s)) setService(s);
  }, []);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message || !service) {
      setError("Please complete your name, work email, service and message.");
      return;
    }
    setError("");
    const company = String(data.get("company") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const selected = services.find((s) => s.id === service)?.name ?? "Other";
    const body = `Name: ${name}\nWork email: ${email}\nCompany / Organization: ${company || "Not provided"}\nService: ${selected}\nWhat can we help with?: ${topic || "Not provided"}\n\n${message}`;
    const url = `mailto:hello@azanai.com?subject=${encodeURIComponent(`Azan AI enquiry — ${selected}`)}&body=${encodeURIComponent(body)}`;
    setDraft(url);
    setPrepared(true);
    window.location.href = url;
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => {
        if (prepared) setPrepared(false);
      }}
    >
      <div className="form-row">
        <div>
          <label htmlFor="name">
            Name <span>(required)</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="email">
            Work email <span>(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@organization.com"
            required
            maxLength={200}
          />
        </div>
      </div>
      <label htmlFor="company">Company / Organization</label>
      <input
        id="company"
        name="company"
        autoComplete="organization"
        placeholder="Your organization"
        maxLength={200}
      />
      <label htmlFor="topic">What can we help with?</label>
      <input
        id="topic"
        name="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="A short overview of what you have in mind"
        maxLength={250}
      />
      <label htmlFor="service">
        Service <span>(required)</span>
      </label>
      <select
        id="service"
        name="service"
        required
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="" disabled>
          Select a service
        </option>
        {services.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
        <option value="other">Other / I’m not sure yet</option>
      </select>
      <label htmlFor="message">
        Message <span>(required)</span>
      </label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        placeholder="Tell us about the problem, your goals and any context that would help."
        maxLength={4000}
        aria-describedby="form-delivery"
      />
      <p id="form-delivery" className="form-note">
        This form opens a draft in your email app addressed to hello@azanai.com.
        Review and send it there. Your message is not submitted or stored on
        this website.
      </p>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <button className="button" type="submit">
        Start the conversation
      </button>
      {prepared && (
        <div role="status" className="form-status">
          <Check size={20} />
          <div>
            <strong>Your email draft is ready.</strong>
            <p>
              Complete sending it in your email app. If the app did not open,{" "}
              <a href={draft}>open the draft again</a> or email{" "}
              <a href="mailto:hello@azanai.com">hello@azanai.com</a> directly.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
