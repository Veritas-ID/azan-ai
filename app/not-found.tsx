import { Button } from "@/components/site";
export default function NotFound() {
  return (
    <section className="shell page-hero not-found">
      <p className="section-label">Page not found</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>The page you’re looking for could not be found.</p>
      <div className="actions">
        <Button href="/">Back to home</Button>
        <Button secondary href="/contact">
          Contact us
        </Button>
      </div>
    </section>
  );
}
