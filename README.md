# Azan AI website

Next.js App Router, TypeScript, Tailwind CSS, Lucide and Motion. Static export for hosting.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run build` for the production export in `out/`. Run `npm run typecheck` after Next has generated its route types.

## Brand assets

`public/brand/` preserves the supplied primary logo, secondary logo and standalone icon source files. The site uses tightly cropped, lossless WebP derivatives: the primary logo on light backgrounds, the secondary logo on dark backgrounds, and the standalone icon in the hero and About page. Asset references and intrinsic dimensions are centralized in `lib/brand.ts`.

The favicon is derived directly from the standalone icon, centered on a transparent square with padding. `public/favicon.ico` includes 16, 32 and 48 pixel versions, with a 32 pixel PNG and 180 pixel Apple touch icon also declared in page metadata. The source artwork is unchanged.

## Contact form

The form submits directly to FormSubmit’s HTTPS AJAX endpoint for `hello@azanai.one`; visitors remain on the site. The recipient and canonical domain are defined in `lib/site.ts`. No email service credentials are exposed or required.

**Activation is required:** click the “Activate Form” link in FormSubmit’s confirmation email sent to `hello@azanai.one`. The initial setup request returned an activation-required response, so actual inbox delivery must be confirmed after activation. Further submissions before activation can trigger additional confirmation emails. If activation is scoped to a hostname, activate the production form on `azanai.one` as well as any preview host used for real submissions.

Submissions include the visitor’s name, reply-to email, organization, service, topic and message. A hidden honeypot complements the provider’s spam filtering. The form blocks duplicate submissions while sending, retains entries on failure, times out after 20 seconds, and confirms success only after the service explicitly accepts the request. It does not open a mail app. With JavaScript disabled, the native form submits to FormSubmit’s hosted flow.

FormSubmit processes the submitted personal information; its privacy policy is linked beside the form. The site does not save enquiries in browser storage. Check the provider’s current policies and limits before a public launch. The social profile placeholders remain labeled as coming soon.

## Project visuals and content

Dukani, Veritas ID and WorkPal visuals are illustrative UI concepts, not screenshots or evidence of project results. Descriptions follow the supplied brief. Insights are original introductory guides, without invented dates, authors, statistics or client claims. YAHfrika links to the supplied website.

## Deployment

`.openai/hosting.json` retains the existing Sites project ID. Publishing is owner-private unless the owner changes the audience. Canonical metadata, robots and sitemap use `https://azanai.one`. The Sites preview remains separately hosted; custom-domain DNS must be configured with the domain’s hosting provider before `azanai.one` serves this site.
