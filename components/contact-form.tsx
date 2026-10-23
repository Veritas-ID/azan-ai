"use client";
import { useState, useEffect, useRef } from "react";
import { services } from "@/lib/content";
import {
  contactEmail,
  contactFormAction,
  contactFormEndpoint,
  siteOrigin,
} from "@/lib/site";
import { Check, LoaderCircle } from "lucide-react";

type SubmissionStatus = "idle" | "sending" | "success";

export function ContactForm() {
  const [service, setService] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState("");
  const inFlight = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const isSending = status === "sending";

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("project") === "Dukani")
      setTopic("I’d like to learn more about Dukani");
    const requested = q.get("service");
    if (requested && services.some((item) => item.id === requested))
      setService(requested);
  }, []);

  useEffect(() => {
    if (status === "success") confirmation.current?.focus();
  }, [status]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const value = (key: string) => String(fields.get(key) ?? "").trim();
    const name = value("name");
    const email = value("email");
    const message = value("message");
    const selected = services.find((item) => item.id === service);
    if (!name || !email || !message || (!selected && service !== "other")) {
      setError("Please complete your name, work email, service and message.");
      return;
    }
    if (value("_honey")) {
      setError(
        "We couldn’t submit this enquiry. Please refresh the page and try again.",
      );
      return;
    }
    const serviceName = selected?.name ?? "Other";
    const payload = {
      name,
      email,
      company: value("company") || "Not provided",
      service: serviceName,
      topic: value("topic") || "Not provided",
      message,
      _replyto: email,
      _subject: `Azan AI enquiry — ${serviceName}`,
      _template: "table",
      _url: `${siteOrigin}/contact/`,
      _honey: "",
    };

    inFlight.current = true;
    setError("");
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
        credentials: "omit",
      });
      const result: { success?: boolean | string } = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error("The email service did not accept the enquiry.");
      }
      form.reset();
      setService("");
      setTopic("");
      setStatus("success");
    } catch {
      setStatus("idle");
      setError(
        "We couldn’t confirm your submission. Your details are still here. Please try again, or email us directly.",
      );
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      action={contactFormAction}
      method="POST"
      onSubmit={submit}
      aria-busy={isSending}
      onChange={() => {
        if (status === "success") setStatus("idle");
        if (error) setError("");
      }}
    >
      <fieldset disabled={isSending} className="form-fields">
        <legend className="sr-only">Send an enquiry to Azan AI</legend>
        <input type="hidden" name="_subject" value="Azan AI website enquiry" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_url" value={`${siteOrigin}/contact/`} />
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="_honey"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
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
          onChange={(event) => setTopic(event.target.value)}
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
          onChange={(event) => setService(event.target.value)}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
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
      </fieldset>
      <p id="form-delivery" className="form-note">
        We use your details to respond to your enquiry. Submissions are
        processed by{" "}
        <a
          href="https://formsubmit.co/privacy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          FormSubmit
        </a>
        .
      </p>
      {error && (
        <p role="alert" className="form-error">
          {error} <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      )}
      <button className="button" type="submit" disabled={isSending}>
        {isSending && (
          <LoaderCircle
            size={16}
            className="submission-spinner"
            aria-hidden="true"
          />
        )}
        {isSending ? "Sending…" : "Start the conversation"}
      </button>
      {status === "success" && (
        <div
          ref={confirmation}
          role="status"
          tabIndex={-1}
          className="form-status"
        >
          <Check size={20} aria-hidden="true" />
          <div>
            <strong>Your enquiry has been submitted.</strong>
            <p>Thank you for getting in touch with Azan AI.</p>
          </div>
        </div>
      )}
    </form>
  );
}
