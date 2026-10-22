# Azan AI website

Next.js App Router, TypeScript, Tailwind CSS, Lucide and Motion. Static export for hosting.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run build` for the production export in `out/`. Run `npm run typecheck` after Next has generated its route types.

## Brand assets

`public/brand/` preserves the supplied primary logo, secondary logo and standalone icon source files. The site uses tightly cropped, lossless WebP derivatives: the primary logo on light backgrounds, the secondary logo on dark backgrounds, and the standalone icon in the hero and About page. Asset references and intrinsic dimensions are centralized in `lib/brand.ts`.

The favicon is derived directly from the standalone icon, centered on a transparent square with padding. `public/favicon.ico` includes 16, 32 and 48 pixel versions, with a 32 pixel PNG and 180 pixel Apple touch icon also declared in page metadata. The source artwork is unchanged.

## Contact form

The form validates required fields, then opens an email draft to the supplied placeholder `hello@azanai.com`. It does **not** send messages or store enquiries. Its interface explicitly explains this behavior. Connect a verified form delivery service before enabling direct submission. The email address and social profiles need confirmation before a public launch; social placeholders are labeled as coming soon.

## Project visuals and content

Dukani, Veritas ID and WorkPal visuals are illustrative UI concepts, not screenshots or evidence of project results. Descriptions follow the supplied brief. Insights are original introductory guides, without invented dates, authors, statistics or client claims. YAHfrika links to the supplied website.

## Deployment

`.openai/hosting.json` retains the existing Sites project ID. Publishing is owner-private unless the owner changes the audience. Set `metadataBase` and sitemap origins to the final canonical domain when a custom domain is connected.
