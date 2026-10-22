import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/content";
import { CTASection } from "@/components/site";
export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);
  return item
    ? pageMetadata(item.title, item.summary, `/insights/${item.slug}/`)
    : { title: "Insight" };
}
export default async function Insight({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);
  if (!item) notFound();
  return (
    <>
      <article className="shell article">
        <Link href="/insights" className="text-link">
          All insights
        </Link>
        <header>
          <p className="project-category">{item.category}</p>
          <h1>{item.title}</h1>
          <p className="article-deck">{item.summary}</p>
        </header>
        <div className="article-body">
          {item.paragraphs.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
        <p className="article-credit">Azan AI · Practical AI guides</p>
      </article>
      <CTASection />
    </>
  );
}
