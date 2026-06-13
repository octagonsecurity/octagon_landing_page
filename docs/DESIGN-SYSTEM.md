# Octagon Security — Design System (technical reference)

> For brand voice, colors, typography, and component details.  
> **Non-technical owners:** start with the main [README](../README.md) instead.

This document is the original design-system readme — useful when asking AI to match Octagon's look and voice.

---

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

---

## 2. Content Fundamentals (voice & copy)

**Vibe:** Trustworthy, plain-spoken, blue-collar-professional. Reads like a straight-talking
contractor who shows up on time. Confidence without hype. Local and accountable.

- **Person:** Speaks as **"we"** (the Octagon team), addresses the reader as **"you / your property."**
- **CTAs:** short, imperative, uppercase — `GET A QUOTE`, `Free Quote`, `Learn More`
- **Signature line:** *"Don't get robbed—call Rob."* — use sparingly
- **Avoid:** jargon-for-its-own-sake, exclamation spam, fear-mongering

---

## 3. Visual Foundations

- **Brand red:** `#BE1F24`
- **Fonts:** Saira Condensed (headlines), Open Sans (body) — see `tokens/`
- **Photography:** real install photos in `assets/`

See `tokens/colors.css`, `tokens/typography.css`, and `guidelines/` for full specs.

---

## 4. Index / Manifest

**Root**
- `styles.css` — global entry (import this). Imports fonts + all tokens + base.
- `base.css` — element defaults + utility classes
- `tokens/` — colors, typography, spacing, fonts
- `assets/` — logos, photos, certification marks
- `components/core/` — Button, Card, Badge, etc.
- `ui_kits/website/` — the actual marketing website files

_Generated files (do not edit): `_ds_bundle.js`, `_ds_manifest.json`_
