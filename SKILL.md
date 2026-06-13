---
name: octagon-security-design
description: Use this skill to generate well-branded interfaces and assets for Octagon Security (South-Florida commercial & residential security-systems installer), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick map
- `readme.md` — brand guide: company context, content/voice, visual foundations, iconography, manifest.
- `styles.css` — global entry (link this); imports fonts + tokens + base.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing/radius/elevation/motion), `fonts.css`.
- `assets/` — logos (`logo-full.png`, `logo-footer.png`), certs, and real install photography.
- `components/core/` — React primitives: Button, IconButton, Badge, StatusPill, Card, Input, Eyebrow, SectionTitle.
- `ui_kits/website/` — interactive recreation of the marketing site.
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).

## Brand in one breath
High-contrast, industrial, no-nonsense. Brand **red #BE1F24** for action/alert (a spotlight,
not a wash), concrete grays for structure, black-on-white for reading. Squared geometry,
tight radii, firm shadows, no bounce. Display type = **Saira Condensed** (uppercase), body =
**Open Sans**, mono = **IBM Plex Mono**. Voice: plain-spoken, trustworthy contractor —
"we / your property," uppercase CTAs, no emoji. Signature line: *"Don't get robbed—call Rob."*
