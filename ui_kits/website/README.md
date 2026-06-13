# Website UI Kit — Octagon Security

An interactive, high-fidelity recreation of the Octagon Security marketing site
(octagonsecured.com). Built from the live site's copy, structure, imagery, and the
brand foundations in this design system. Composes the core component primitives —
it does not re-implement them.

## Run locally

**Production preview (recommended):**

```bash
node scripts/prepare-deploy.mjs   # from repo root — builds dist/
npx serve dist
```

Open `http://localhost:3000`. Root-relative paths (`/assets/`, `/services/…`) require a static server.

**Dev / design-system preview:** open `index.html` directly only works for the homepage; nested routes (`/about/`, `/services/…`) need `serve`.

## Deploy (Vercel)

1. Connect this repo to [Vercel](https://vercel.com) — framework **Other**, build `node scripts/prepare-deploy.mjs`, output `dist/`
2. Add `GOOGLE_PLACES_API_KEY` in Vercel env vars (see `.env.example`) for live Google reviews
3. Legacy URL redirects live in `vercel.json`; Apache fallback in `.htaccess` / `_redirects`
4. Submit `https://www.octagonsecured.com/sitemap.xml` in Google Search Console after cutover

## SEO / launch files

| File | Purpose |
|------|---------|
| `sitemap.xml` | 9 indexed URLs (home, about, 7 services) |
| `robots.txt` | Allows crawlers, points to sitemap |
| `llms.txt` | Entity summary for AI crawlers (GEO) |
| `manifest.json` | PWA manifest + theme color |
| `_redirects` / `.htaccess` | 301s from old octagonsecured.com paths |
| Static `<head>` + `<noscript>` | Meta, OG, Twitter, JSON-LD on every page (crawler-visible without JS) |

Regenerate service pages after editing `service-data.js`:

```bash
node scripts/generate-seo.mjs
```

## URL structure

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about/` |
| Services | `/services/{slug}/` — e.g. `/services/burglar-alarm/` |
| Contact / Reviews | `/#contact`, `/#reviews` |

Legacy paths (`/about-us`, `/burglar-alarm-installation-and-intrusion-detection`, `service.html?s=cameras`, etc.) redirect via `_redirects`.

## Screens / sections

- **Header.jsx** — sticky top bar + nav with a Services mega-menu, phone, "Free Quote" button, mobile menu.
- **Hero.jsx** — full-bleed photo hero with scrim, display headline, dual CTA, trust badges.
- **WhyChoose.jsx** — 4 value-prop cards on a concrete band.
- **Services.jsx** — 7 photo service cards + a dark "talk to an expert" CTA tile.
- **CtaBand.jsx** — full-bleed "Don't get robbed—call Rob." conversion band.
- **ContactForm.jsx** — contact section with info rail + form, plus a `QuoteModal`. Submits via Formspree.
- **Footer.jsx** — dark footer: brand, license #, social, services / quick-links columns.

## Interactions

- Services mega-menu on hover · mobile hamburger menu
- "Free Quote" / "Get a Quote" → modal with form → thank-you state
- Contact form → thank-you state → "send another"

## Notes

- Photography is the real site imagery in `/assets/` (WebP + PNG fallbacks for hero backgrounds).
- Icons are Lucide (substitution — the live site has no consistent icon set; see readme §5).
- React production builds via CDN; Babel still transpiles JSX in-browser (acceptable for this static site).
