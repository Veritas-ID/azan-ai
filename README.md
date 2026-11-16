# Azan AI website

Next.js App Router, TypeScript, Tailwind CSS, Lucide and Motion. Static export for hosting.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run build` for the production export in `out/`. Run `npm run typecheck` after Next has generated its route types.

## Brand assets

`public/brand/` preserves the supplied primary logo, secondary logo and standalone icon source files. The site uses tightly cropped, lossless WebP derivatives: the primary logo on light backgrounds, the secondary logo on dark backgrounds, and the standalone icon in the hero and About page. Asset references and intrinsic dimensions are centralized in `lib/brand.ts`.

The favicon is derived directly from the standalone icon, centered on a transparent square with padding. `public/favicon.ico` includes 16, 32 and 48 pixel versions, with a 32 pixel PNG and 180 pixel Apple touch icon also declared in page metadata. The source artwork is unchanged.

## Contact form

The form submits directly to FormSubmit’s HTTPS AJAX endpoint for `hello@azanai.one`; visitors remain on the site. The recipient and canonical domain are defined in `lib/site.ts`. No email service credentials are exposed or required.

**Activation is required:** click the “Activate Form” link in FormSubmit’s confirmation email sent to `hello@azanai.one`. The initial setup request returned an activation-required response, so actual inbox delivery must be confirmed after activation. Further submissions before activation can trigger additional confirmation emails. If activation is scoped to a hostname, activate the production form on `www.azanai.org` as well as any preview host used for real submissions.

Submissions include the visitor’s name, reply-to email, organization, service, topic and message. A hidden honeypot complements the provider’s spam filtering. The form blocks duplicate submissions while sending, retains entries on failure, times out after 20 seconds, and confirms success only after the service explicitly accepts the request. It does not open a mail app. With JavaScript disabled, the native form submits to FormSubmit’s hosted flow.

FormSubmit processes the submitted personal information; its privacy policy is linked beside the form. The site does not save enquiries in browser storage. Check the provider’s current policies and limits before a public launch. The social profile placeholders remain labeled as coming soon.

## Project visuals and content

Dukani, Veritas ID and WorkPal visuals are illustrative UI concepts, not screenshots or evidence of project results. Descriptions follow the supplied brief. Insights are original introductory guides, without invented dates, authors, statistics or client claims. YAHfrika links to the supplied website.

## Labs (labs.azanai.org)

`labs/` is a separate Next.js app for Azan AI Labs, with its own `package.json` and lockfile. It is not part of the main site’s build: the root `tsconfig.json` excludes it, and the main site only links to it from the footer through `labsOrigin` in `lib/site.ts`.

Run it with `cd labs`, `npm ci`, then `npm run dev` (port 3001). It is a standard Next.js build, not a static export, so server routes can be added for interactive demos later.

Experiments are listed from `labs/lib/experiments.ts`. Add real entries only, each with an honest status label. If the list is ever empty, the page shows a “nothing public yet” state. Focus areas restate themes from the main site’s services and projects; they are not claims about specific experiments. The Labs contact buttons link to the main site’s contact page.

To deploy on Vercel:

1. Create a second Vercel project from this same repository and set its **Root Directory** to `labs`. The framework preset is Next.js with default build settings.
2. In that project’s **Domains**, add `labs.azanai.org`.
3. At the DNS provider for `azanai.org`, add the record Vercel shows for the subdomain, normally a `CNAME` for `labs`. If the domain already uses Vercel’s nameservers, Vercel adds it for you.
4. Optionally enable Vercel’s setting to skip deployments when nothing in the Root Directory changed, so Labs and the main site do not rebuild for each other’s commits.

The footer link to Labs on the main site will not resolve until steps 2 and 3 are complete.

## Deployment

`.openai/hosting.json` retains the existing Sites project ID. Publishing is owner-private unless the owner changes the audience. Canonical metadata, robots and sitemap use `https://www.azanai.org`, the production domain on Vercel. `azanai.one`, `www.azanai.one` and `azanai.org` redirect to it.
