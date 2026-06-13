# Octagon Security — Design System

> **"Get Octagon Secured."**
> Commercial & Residential Security Systems — Installed Right the First Time.

This is the brand + product design system for **Octagon Security**, a South-Florida
security-systems installer (Miami-Dade, Broward & Palm Beach). It contains the brand
foundations (color, type, spacing, elevation), real logo + photo assets, reusable React
UI components, and a Website UI kit recreating the marketing site.

---

## 1. Company Context

Octagon Security designs and installs **commercial-grade and residential security
systems** across South Florida. Family-run feel, contractor-direct, "installed right the
first time." Over **65 years of combined experience**; built on repeat clients and
referrals. Licensed (FL License **EF0000848**), **ETL** and **UL** listed.

**Service lines (the products they sell):**
- **Burglar Alarm Systems & Monitoring** — 24/7 monitored intrusion detection
- **Security Cameras & Surveillance** — CCTV / video surveillance, remote access
- **Fire Alarm Installation & Inspections** — code-compliant, monitored
- **Access Control Systems** — keyless entry, biometrics, accountability
- **Structured Cabling & Network Infrastructure** — clean, scalable low-voltage

**Service area:** Miami-Dade, Broward, Palm Beach & surrounding South Florida.
**Phone:** 786-928-0986 · **Site:** octagonsecured.com · **Portal:** customer login.
**Trust badges used in market:** FREE ESTIMATES · LICENSED & INSURED.

### Sources used to build this system
- **Website:** https://www.octagonsecured.com/ (homepage + service pages) — primary source
  for copy, structure, service taxonomy, and imagery.
- **Logo (icon):** https://lirp.cdn-website.com/fabae90c/dms3rep/multi/opt/cut+out+logo-1920w.png
- **Logo (wordmark/footer):** Octagon-Security-Logo3 (from site footer)
- **Brand color brief (from client):** Red `rgb(190,31,36)` primary; concrete gray secondary;
  black/white for high-contrast UI.
- No codebase or Figma was provided — foundations are reconstructed from the live site +
  client color brief. Fonts are closest-match substitutions (see §4).

---

## 2. Content Fundamentals (voice & copy)

**Vibe:** Trustworthy, plain-spoken, blue-collar-professional. Reads like a straight-talking
contractor who shows up on time. Confidence without hype. Local and accountable.

- **Person:** Speaks as **"we"** (the Octagon team), addresses the reader as **"you / your
  property."** "We handle everything in-house." "We stay responsive after the job is done."
- **Casing:** Sentence case for body. **UPPERCASE** for the wordmark, eyebrows, CTAs
  (`GET A QUOTE`, `FREE ESTIMATES`) and trust badges. Section titles are Title Case.
- **Tone levers:** outcome + reassurance ("installed cleanly, backed by fast response,
  supported long-term"), specifics over fluff ("24/7 monitoring," "65+ years," "code-compliant").
- **Signature line:** *"Don't get robbed—call Rob."* — the one place humor/personality shows.
  Use sparingly; it's the hook, not the house style.
- **Numbers as proof:** "65+ Years of Combined Experience," "24/7 Monitoring," phone number
  shown prominently and often. License # is shown for credibility.
- **CTAs:** short, imperative, uppercase — `GET A QUOTE`, `Free Quote`, `Learn More`,
  `LOG IN TO PORTAL`, and a tappable phone number `786-928-0986`.
- **Emoji:** none. Not used in brand voice. Don't introduce them.
- **Avoid:** jargon-for-its-own-sake, exclamation spam, fear-mongering. Calm authority.

**Real examples (verbatim from site):**
- H1: "Commercial & Residential Security Systems Installed Right the First Time"
- Sub: "Reliable CCTV, 24/7 monitored alarm systems, fire alarm solutions, access control,
  and professional network cabling—installed cleanly, backed by fast response, and supported long-term."
- Value props: "Clean, Professional Installations" · "24/7 Monitoring & Rapid Support"

---

## 3. Visual Foundations

**Overall:** High-contrast, industrial, no-nonsense. White space + concrete-gray bands +
decisive red. Squared geometry echoing the octagon mark. Photography-forward (real installs).

- **Color:** Brand **red `#BE1F24`** for action/alert/accents only — it's a spotlight, not a
  wash. **Concrete grays** for structure and section bands. **Black text on white** is the
  default reading surface. Dark gray (`--gray-900`) for footer / dramatic bands. Status colors
  (armed-red, secure-green, warning-amber, offline-gray) for monitoring UI. See `tokens/colors.css`.
- **Type:** **Saira Condensed** (black/800) for hero display & wordmark feel — chunky, squared,
  industrial. **Saira** for section headings. **Open Sans** for body (dependable, legible).
  **IBM Plex Mono** for license #s, system IDs, monitoring data. Uppercase + wide tracking
  (`--tracking-eyebrow`) for kickers. See `tokens/typography.css`.
- **Spacing:** 4px base grid. Generous section rhythm (`--section-pad-y`, clamp 3–7rem).
  Containers cap ~1200px.
- **Backgrounds:** Mostly solid — white, `--surface-concrete` (light gray), and `--surface-dark`.
  **Full-bleed photography** for hero/feature bands (security installs, cameras, panels). No
  decorative gradients as a brand device; the logo itself has a subtle gray gradient on the lids
  but UI surfaces stay flat. No repeating patterns or hand-drawn illustration.
- **Imagery vibe:** Real, documentary install photography — neutral/cool daylight, clean cable
  runs, mounted devices, concrete & white walls. Not stocky-glossy. Crop tight on the hardware.
- **Corner radii:** small & squared — `--radius-md` (6px) for cards/controls, `--radius-sm` (4px)
  for chips. Pills only for status/contact tags. The brand reads angular, not soft.
- **Cards:** white surface, 1px `--border-default`, `--shadow-sm`; lift to `--shadow-md` on hover.
  Feature/service cards often lead with a full-width photo, then title + copy + "Learn More".
- **Borders & accents:** 1px hairline borders; a **3px red accent rule** (`.os-accent-rule`) under
  section titles is the signature divider. Red top-border on emphasised cards is OK; avoid the
  generic "rounded card + colored left-border" trope.
- **Elevation/shadows:** firm, low-spread, neutral (not floaty, no colored glows). See
  `--shadow-xs…lg`.
- **Motion:** short and businesslike — `--dur-base` 200ms, `--ease-standard`. Fades + small
  translate-ups on scroll/hover. **No bounce, no springy overshoot.** Respect reduced-motion.
- **Hover states:** primary buttons darken (`--color-primary-hover`); cards raise shadow + nudge
  up 2px; links underline. **Press:** darken further (`--color-primary-active`) + slight scale-down
  (0.98). Focus: 3px red ring (`--shadow-focus`).
- **Transparency/blur:** sparing. Dark photo overlays use a semi-opaque black scrim for legible
  white text; otherwise surfaces are opaque. No glassmorphism.
- **Layout rules:** sticky top nav (white, logo left, phone + red "Free Quote" button right).
  Trust badges and phone number recur. Footer is dark with services/quick-links columns +
  license # + ETL/UL marks.

---

## 4. Typography & Font Substitution  ⚠️

The brand wordmark uses a bespoke chunky condensed sans. We substitute the closest free
Google Fonts:
- **Saira Condensed** → hero display / wordmark feel
- **Saira** → headings
- **Open Sans** → body (matches the live Duda site)
- **IBM Plex Mono** → technical/monitoring data

> **ASK:** If you have the licensed brand font files (or a preferred foundry face), send them
> and we'll self-host via `@font-face` and update `tokens/typography.css`.

---

## 5. Iconography

See the `assets/` folder for logos, certification marks, and real install photography.
Icon system documented in the ICONOGRAPHY note below.

### ICONOGRAPHY
- The live site does **not** ship a consistent icon set — it uses generic stock glyphs
  (map pins, 5-star rows, quotation marks, arrows). There is **no brand icon font**.
- **Adopted set (substitution, flagged):** **Lucide** (https://lucide.dev) via CDN — clean,
  consistent **stroke** icons (~1.75–2px) that fit a security/industrial product: `shield`,
  `shield-check`, `camera`, `video`, `bell`, `bell-ring`, `flame`, `cable`, `key-round`,
  `lock`, `door-closed`, `fingerprint`, `map-pin`, `phone`, `star`, `quote`, `clock`,
  `check-circle`, `alert-triangle`. Default stroke color `currentColor`; accents in red.
- **Logo mark** = the octagon "eye" (`assets/logo-full.png`); never redraw it — use the file.
- **Certification marks:** ETL (`assets/cert-etl.png`) and UL — use as supplied, don't recolor.
- **Emoji:** never. **Unicode glyphs as icons:** avoid; use Lucide.
- Don't hand-roll SVG icons — pull from Lucide so stroke weight stays consistent.

---

## 6. Index / Manifest

**Root**
- `styles.css` — global entry (import this). Imports fonts + all tokens + base.
- `base.css` — element defaults + utility classes (`.os-display`, `.os-eyebrow`, `.os-accent-rule`).
- `readme.md` — this file. · `SKILL.md` — Agent-Skill wrapper.

**tokens/** — `colors.css`, `typography.css`, `spacing.css` (spacing+radius+elevation+motion), `fonts.css`

**assets/** — `logo-full.png` (octagon eye), `logo-footer.png` (wordmark), `cert-etl.png`,
`hero-og.png`, and real install photos (`svc-*.png`, `install-*.png`).

**guidelines/** — foundation specimen cards (Type, Colors, Spacing, Brand) for the Design System tab.

**components/** — reusable React primitives (see Components group cards):
- `core/` — `Button`, `IconButton`, `Badge`, `StatusPill`, `Card`, `Input`, `Eyebrow`, `SectionTitle`

**ui_kits/website/** — Website UI kit: interactive recreation of the marketing site
(`index.html` + screen JSX).

---

_Compiler note: `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated — do not edit._
