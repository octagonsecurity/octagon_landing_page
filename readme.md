# Octagon Security Website — Owner's Guide

**Welcome.** This folder is the **source code** for your marketing website at [octagonsecured.com](https://www.octagonsecured.com).

You do **not** need to be a programmer to use it. Think of this repo like the **master copy** of your site — similar to a Word document, but for a website. When you (or AI) change something here and publish it, the live site updates.

---

## The 30-second version

| What | Where |
|------|--------|
| **Live website** | [octagonsecured.com](https://www.octagonsecured.com) (hosted on **Vercel**) |
| **Code storage** | [github.com/octagonsecurity/octagon_landing_page](https://github.com/octagonsecurity/octagon_landing_page) |
| **Quote / contact forms** | [Formspree](https://formspree.io) |
| **Google reviews on the site** | Google Places API (key stored in Vercel, not in this folder) |

**How it goes live:** You change files → push to GitHub → Vercel automatically rebuilds and publishes. Usually takes 1–2 minutes.

---

## How the website works (ELI5)

Imagine your website as three layers:

```
┌─────────────────────────────────────────────┐
│  WHAT VISITORS SEE                          │
│  Pages, photos, text, contact form          │
│  (built from files in ui_kits/website/)     │
├─────────────────────────────────────────────┤
│  THE LOOK — colors, fonts, spacing          │
│  (styles.css, tokens/, site.css)            │
├─────────────────────────────────────────────┤
│  THE HOST — Vercel                          │
│  Serves the site + runs Google Reviews API  │
└─────────────────────────────────────────────┘
```

1. **Pages** — HTML files and small “building block” scripts (`.jsx` files) that draw the header, hero, services grid, reviews, contact form, etc.
2. **Styling** — CSS files that control colors (Octagon red `#BE1F24`), fonts, layout, mobile sizing.
3. **Hosting** — Vercel takes the code from GitHub, runs a short build step, and puts it on the internet. One small **API** function fetches your Google reviews securely (your API key never appears on the public site).

**Important:** The site uses **React** (a common way to build interactive pages) loaded from the internet, plus **Babel** to read the `.jsx` files in the browser. You don’t install React yourself — it’s all wired up already.

---

## Where everything lives

Use this map when you or AI need to find something:

| Folder / file | Plain English — what it is |
|---------------|----------------------------|
| **`ui_kits/website/`** | **The actual website.** Start here for almost any content change. |
| `ui_kits/website/index.html` | Homepage shell — title, SEO tags, loads all sections |
| `ui_kits/website/Hero.jsx` | Big photo banner + headline at the top |
| `ui_kits/website/Header.jsx` | Top navigation, phone number, “Free Quote” button |
| `ui_kits/website/Services.jsx` | Service cards on the homepage |
| `ui_kits/website/Reviews.jsx` | Google reviews section |
| `ui_kits/website/ContactForm.jsx` | Contact form + pop-up quote form |
| `ui_kits/website/Footer.jsx` | Bottom footer, social links, license # |
| `ui_kits/website/service-data.js` | **All text for the 7 service pages** (benefits, FAQs, descriptions) |
| `ui_kits/website/about/index.html` | About Us page |
| `ui_kits/website/services/*/index.html` | Individual service pages (cameras, alarms, etc.) |
| **`assets/`** | **Photos and logos** (PNG + WebP). Swap images here. |
| **`tokens/`** + `styles.css` + `base.css` | Brand colors, fonts, spacing (the “theme”) |
| `ui_kits/website/site.css` | Layout for header, hero, footer, reviews, etc. |
| **`scripts/prepare-deploy.mjs`** | Build script — bundles the site before Vercel publishes |
| **`scripts/generate-seo.mjs`** | Rebuilds service pages after you edit `service-data.js` |
| **`api/google-reviews.js`** | Server-side Google reviews fetch (runs on Vercel only) |
| **`vercel.json`** | Tells Vercel how to build + old URL redirects |
| **`vercel.json` redirects** | Old Duda links (e.g. `/about-us`) → new pages |

**Do not edit** (unless a developer asks you to): `_ds_bundle.js`, `dist/` folder — these are auto-generated.

**Brand / voice reference for AI:** [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)

**Technical website notes:** [ui_kits/website/README.md](ui_kits/website/README.md)

---

## Accounts you should have access to

Save these logins in your team password manager:

| Service | Used for |
|---------|----------|
| **GitHub** (`octagonsecurity/octagon_landing_page`) | Stores the code |
| **Vercel** | Hosts the live site, environment variables |
| **Formspree** | Receives contact / quote form submissions |
| **Google Cloud Console** | Places API key for live Google reviews |
| **Google Search Console** | SEO — sitemap, indexing (optional but recommended) |
| **Domain registrar** | Where `octagonsecured.com` DNS is managed |

---

## Clone the repo on your computer

“Clone” = download a copy you can edit locally.

### One-time setup

1. Install **Git**: [git-scm.com/downloads](https://git-scm.com/downloads)
2. Install **Node.js** (LTS): [nodejs.org](https://nodejs.org) — needed for the build script
3. Optional but helpful: **[Cursor](https://cursor.com)** or **VS Code** — editors with built-in AI

### Download the project

Open **Terminal** (Mac) or **Command Prompt** (Windows) and run:

```bash
git clone https://github.com/octagonsecurity/octagon_landing_page.git
cd octagon_landing_page
```

You now have a folder called `octagon_landing_page` on your machine.

---

## Preview the site on your computer

Before changing the live site, you can preview locally:

```bash
node scripts/prepare-deploy.mjs
npx serve dist
```

Then open **http://localhost:3000** in your browser.

> **Note:** Google reviews may not load locally — that’s normal. The reviews API only runs on Vercel. Everything else should look like the live site.

---

## Making changes with AI (recommended workflow)

You don’t need to edit code by hand. **Cursor**, **ChatGPT**, or **Claude** can do it if you point them at the right folder and describe what you want.

### Step-by-step

1. **Open the project** in Cursor (File → Open Folder → select `octagon_landing_page`)
2. **Open AI chat** (Cursor: Cmd+L or the chat panel)
3. **Tell AI what you want** — be specific. Mention the file if you know it.
4. **Review the diff** — AI shows what it changed. Read it like track changes in Word.
5. **Preview locally** (commands above) if it’s a visual change
6. **Publish** (see below)

### Example prompts that work well

**Change phone number everywhere:**
> “Update the phone number from 786-928-0986 to 786-555-1234 everywhere it appears on the website — header, hero, contact form, footer, and SEO meta tags.”

**Edit service page copy:**
> “In `ui_kits/website/service-data.js`, update the burglar alarm page FAQs — add a question about pet-friendly motion sensors.”

**Swap a photo:**
> “Replace the hero background with `assets/team-van.png` in Hero.jsx and site.css.”

**Fix a typo:**
> “On the homepage hero, change ‘Installed Right the First Time’ to ‘Installed Right, the First Time’ in Hero.jsx.”

**After service-data changes:**
> “I edited service-data.js. Run generate-seo.mjs to regenerate the service pages.”

### Tips for better AI results

- Say **“only change what I asked for”** — keeps edits small and safe
- Reference **file names** from the table above
- Ask AI to **run the build** and confirm no errors before you publish
- For brand-consistent writing, add: *“Follow the voice in docs/DESIGN-SYSTEM.md”*

---

## Common changes — quick reference

| I want to… | Edit this |
|------------|-----------|
| Change homepage headline or hero text | `ui_kits/website/Hero.jsx` |
| Change service card text/images on homepage | `ui_kits/website/Services.jsx` |
| Change a full service page (body, FAQs) | `ui_kits/website/service-data.js` → then run `node scripts/generate-seo.mjs` |
| Change phone number | Search whole project for `786-928-0986` (AI can do this) |
| Change contact / quote form fields | `ui_kits/website/ContactForm.jsx` |
| Change footer links or social URLs | `ui_kits/website/Footer.jsx` |
| Change navigation menu | `ui_kits/website/Header.jsx` |
| Replace a logo or photo | Put file in `assets/`, update reference in the `.jsx` file |
| Change brand red / fonts | `tokens/colors.css`, `tokens/fonts.css` |
| Change page title for Google | `index.html` or service `index.html` — the `<title>` and `<meta name="description">` tags |
| Add old URL redirect | `vercel.json` → `redirects` array |

---

## Publish changes to the live site

After AI (or you) edits files and you’re happy with the preview:

```bash
git add -A
git commit -m "Describe what you changed in plain English"
git push
```

Vercel watches GitHub. Within **1–2 minutes** it rebuilds and updates octagonsecured.com.

You can watch progress at [vercel.com](https://vercel.com) → your project → **Deployments**.

### If you don’t use Terminal

- **Cursor** can run git commands for you: *“Commit and push my changes with message: Updated hero headline”*
- **GitHub Desktop** ([desktop.github.com](https://desktop.github.com)) is a visual alternative to Terminal

---

## Google reviews on the site

The reviews section pulls **live data from Google** via the Places API.

- **Secret key** lives in Vercel → Project → **Settings → Environment Variables** → `GOOGLE_PLACES_API_KEY`
- **Never** put the API key in this GitHub repo
- **Code** that uses the key: `api/google-reviews.js` (runs on Vercel’s servers only)
- **Display** code: `ui_kits/website/Reviews.jsx`

If reviews show an error on the live site:
1. Check the key in Google Cloud Console (Places API enabled, billing on)
2. Check the key is set in Vercel Production env vars
3. **Redeploy** after adding/changing the key

Test URL: `https://www.octagonsecured.com/api/google-reviews` — should return JSON, not an error.

---

## Contact & quote forms (Formspree)

Forms send email via **Formspree** (`formspree.io/f/xrevrzbr`).

In Formspree dashboard:
- **Allowed Domains** must include `octagonsecured.com` and `www.octagonsecured.com`
- Check the **Inbox** if submissions stop arriving
- Form field code: `ui_kits/website/ContactForm.jsx`

---

## Old website links still work

Your previous site (Duda) had many URLs. Those are mapped in **`vercel.json`** so bookmarks and Google results still work — e.g. `/about-us` → `/about/`, long service URLs → clean `/services/.../` paths.

City landing pages (`/service-area/...`) currently redirect to the homepage. That’s intentional until city pages are built.

---

## Troubleshooting

| Problem | Likely fix |
|---------|------------|
| Site looks unstyled (plain Times New Roman) | Build issue — redeploy on Vercel; ensure latest code is pushed |
| Reviews don’t load | Fix Google API key in Vercel → redeploy |
| Form submits but no email | Check Formspree allowed domains + spam folder |
| Change pushed but site unchanged | Wait 2 min; check Vercel deployment succeeded (green checkmark) |
| `/about/` or service page 404 | Run `node scripts/prepare-deploy.mjs` locally to test; push again |
| AI broke something | `git log` to see commits; revert with AI: *“Revert the last commit”* or ask a developer |

---

## Glossary (plain English)

| Term | Means |
|------|--------|
| **Repo / repository** | The project folder tracked by Git — lives on GitHub |
| **Clone** | Download a copy of the repo to your computer |
| **Commit** | Save a snapshot of your changes with a description |
| **Push** | Upload your commits to GitHub (triggers Vercel deploy) |
| **Deploy** | Publish the latest code to the live website |
| **Build** | Script that assembles the site into a `dist/` folder for hosting |
| **JSX** | JavaScript files that describe page sections (header, hero, etc.) |
| **CSS** | Files that control colors, fonts, spacing |
| **API** | A behind-the-scenes service — here, fetches Google reviews securely |
| **Env variable** | Secret setting stored on Vercel (like the Google API key), not in code |
| **SEO** | How Google reads your page titles, descriptions, sitemap |
| **Redirect** | Automatically sends old URLs to new ones |

---

## Site map (what pages exist)

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/about/` | About Us |
| `/services/burglar-alarm/` | Burglar alarms |
| `/services/cameras/` | Security cameras |
| `/services/fire-alarm/` | Fire alarms |
| `/services/access-control/` | Access control |
| `/services/structured-cabling/` | Structured cabling |
| `/services/home-security/` | Home & business security |
| `/services/warehouse/` | Warehouse security |
| `/#contact` | Contact section (homepage) |
| `/#reviews` | Reviews section (homepage) |

Full list for Google: `https://www.octagonsecured.com/sitemap.xml`

---

## Pre-launch / maintenance checklist

- [ ] Google Places API key valid in Vercel
- [ ] Formspree receiving test submissions on live domain
- [ ] `www.octagonsecured.com` loads with correct styling
- [ ] Phone number and license # correct everywhere
- [ ] Google Search Console — sitemap submitted
- [ ] Google Business Profile — website URL updated

---

## Getting help

1. **Small content changes** — use AI in Cursor with this README open
2. **Something broke after a change** — ask AI to revert; or restore from GitHub history
3. **Domain, DNS, or Vercel** — whoever manages your IT / the person who connected Vercel
4. **Formspree / Google Cloud billing** — need login access to those dashboards

---

## License & business info (for reference)

- **FL License:** EF0000848  
- **Phone:** 786-928-0986  
- **Tagline:** Get Octagon Secured.  
- **Service area:** Miami-Dade, Broward, Palm Beach Counties  

---

*Last updated: June 2026 — Octagon Security website rebuild (Vercel + GitHub)*
