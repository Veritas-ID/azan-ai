import { mainOrigin } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="shell not-found">
      <p className="section-label">Page not found</p>
      <h1>
        This experiment
        <br />
        isn’t here.
      </h1>
      <p>The page you’re looking for could not be found.</p>
      <div className="actions">
        <a className="button" href="/">
          Back to Labs
        </a>
        <a className="button secondary" href={mainOrigin}>
          Visit azanai.org
        </a>
      </div>
    </section>
  );
}
