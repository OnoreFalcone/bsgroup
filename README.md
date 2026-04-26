# bsgroup.ch

Marketing site for [Business Solution Group AG](https://bsgroup.ch) — a Swiss financial-services IT consultancy specialised in banking and insurance. Astro + Tailwind, deployed as a static site.

## Quickstart

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the built site
```

## Tests

Playwright responsive + smoke suite. Runs on every push and PR via GitHub Actions.

```sh
npm test           # full suite (~1 min)
npm run test:ui    # interactive UI mode
npm run test:headed
```

What it covers:
- Hamburger menu opens/closes on mobile and tablet, hides on desktop.
- Every route returns 2xx, has an `<h1>`, and produces no console errors.
- No horizontal overflow at 7 viewport widths × 7 routes.
- 404 page renders for unknown routes.

## Branches

- `main` — production. Deploys to bsgroup.ch.
- `test` — staging review.
- `dev` — active development.

Standard flow: feature work → `dev` → `test` → `main`.

## Project structure

```
src/
  pages/                     Routes (file-based)
  components/
    layout/                  Header, Footer
    sections/                Reusable page sections
  data/                      Typed content (services, cases, milestones, site)
  content/case-studies/      MDX collections (template only — Wave 4)
  layouts/                   BaseLayout
  assets/photos/portraits/   Leader portraits (Astro-optimised)
public/
  logos/                     Brand + client logos
  images/scenery/            Service-page heroes
  images/old/                Legacy assets pending replacement
tests/                       Playwright specs
.github/workflows/           CI
```

## Strategy documents

- `BSGroup_Brand_Decisions.md` — locked brand voice, voice tiers, anchor phrases.
- `bsgroup_ch_current_content.md` — audit of the legacy site.
- `Relaunch_Plan.md` — staged checklist toward relaunch.
- `CLAUDE.md` — context for Claude Code sessions.

## License

Proprietary. All rights reserved by Business Solution Group AG.
