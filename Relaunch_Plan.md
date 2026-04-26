# Relaunch Plan — bsgroup.ch

> Working punch list to take the new site from "skeleton + voice" to "ready to replace the live site". Ordered in five waves: launch-blockers first, then placeholder cleanup, then verification, then content depth, then launch ops. Tick items as you go.
>
> **Source documents:** `BSGroup_Brand_Decisions.md` (locked decisions), `bsgroup_ch_current_content.md` (old-site audit), `CLAUDE.md` (voice rules).
>
> **Last updated:** 2026-04-26.

---

## How to use this file

- Each item is a checkbox. Mark `[x]` when done.
- "Decisions needed" up front — these unblock multiple downstream items.
- Waves are roughly sequential, but Wave 3 (external verification) starts in parallel with Wave 1.
- The **Relaunch gate** at the bottom defines the minimum to take the live site offline.

---

## Decisions needed (resolve first — they unblock everything else)

- [x] **Founding year:** **1995** — already aligned in Hero eyebrow, `milestones[0]`, HistoryTimeline.
- [x] **Canonical contact email:** **backoffice@bsgroup.ch** for marketing-site contact, applications, and footer.
- [x] **Footer entity name:** **Business Solution Group AG** (legal name); "BSGroup" remains the trade name in headers/marketing.
- [x] **AGB:** **In scope for v1** — drafted as `/agb` (Swiss B2B IT-consulting boilerplate, 19 sections). Owner-review before relaunch.
- [ ] **Analytics:** Parked. GA paragraph kept in Datenschutz; consent-banner / GA tag wiring deferred to Wave 5.
- [x] **Insights at relaunch:** **Hide the teaser from home** until articles exist. `InsightsTeaser` import removed from `index.astro`; component file kept for re-use.
- [x] **Referenzen at relaunch:** **Ship as is** for owner review.

---

## Wave 1 — Launch-blockers (code-only, no external dependency)

Goal: every header/footer link resolves. Mobile is usable.

- [x] Propagate the founding-year decision: confirmed 1995 throughout (no changes needed).
- [x] Build `/kontakt` — clean contact card with address, mailto + tel buttons, "Was uns hilft" guidance section. No web form (decision: mailto-first for B2B audience).
- [x] Build `/impressum` — Firma, Adresse, Kontakt, Handelsregister (UID CHE-111.756.901, CH-ID, EHRA-ID), MWST, Haftungsausschluss, Urheberrecht, Datenschutz-Verweis.
- [x] Build `/datenschutz` — full Datenschutzerklärung in 11 sections, incl. Bewerber-Block. Swiss DSG primary, DSGVO referenced for EU visitors. Google Analytics paragraph retained.
- [x] Build `/agb` — 19-section Swiss B2B IT-consulting AGB (Geltungsbereich, Vertragsgegenstand, Leistung & Mitwirkung, Vergütung, Termine, IP, Geheimhaltung, Datenschutz, Gewährleistung, Haftung, Vertragsdauer, Abwerbeverbot, Referenznennung, Anwendbares Recht / Gerichtsstand Zürich). Owner-review pending.
- [x] Build `/karriere` — Macher-gesucht voice, 9 substantive benefits cards, two open roles with per-role mailto-CTA (subject pre-filled), Initiativbewerbung block, FinalCta override.
- [x] Add `src/pages/404.astro` — "Hier ist nichts." + 6 quick-link tiles to main routes.
- [x] Wire `Header.astro` mobile hamburger — toggle, aria-expanded, icon-swap, re-binds on Astro view-transitions.
- [x] Footer: email → `backoffice@bsgroup.ch`, entity → "Business Solution Group AG · Zürich", AGB link kept (page now exists).
- [ ] Footer: verify the LinkedIn URL `https://linkedin.com/company/bsgroup` actually exists; replace or remove if not. *(Owner action — left unchanged for now.)*
- [x] Build verified: `npm run build` succeeds, 13 pages generated, no errors.
- [x] Automated test suite (Playwright) — 97 tests covering: hamburger menu open/close at mobile and tablet, desktop nav visibility at lg+, every page returns 2xx with an `<h1>` and zero console errors, and no horizontal overflow at 7 viewport widths × 7 routes. Runs on every push/PR via `.github/workflows/test.yml`.
- [ ] Manual click-through: open dev server, click every link in header + footer from every page — confirm no 404s. *(Recommend doing this before relaunch.)*

---

## Wave 2 — Kill placeholders before relaunch

Goal: no UI promises content that isn't there. Fake proof undercuts the entire voice play.

- [ ] `cases.ts` — all 12 entries have `href: '#'`. Either remove the click affordance on tiles until written, or split into "linked" vs "preview" variants of the case-tile component.
- [ ] `InsightsTeaser.astro` — three article cards with `href: '#'`. If no real article exists by relaunch, replace this section with something else (featured case, Service Brief teaser per v2 parking lot, or remove entirely).
- [ ] `LeadershipTeam.astro` — six "Name folgt" + "B&W PORTRAIT" placeholders. Decide: ship 2–3 real cards (CEO + heads who agree to publish), or swap for an anonymized "Beratendenkollektiv" block with stats until photos are in.
- [ ] `OfficePhotos.astro` — three hard-coded label tiles. Get one decent office photo and run single-image variant, or hide the section.
- [ ] `LeadershipTeam.astro` — LinkedIn `href="#"` on every card. Real URLs or remove the link.
- [ ] `ReferenzenHero` `FinalCta` — verify `primaryHref` and `secondaryHref` resolve (currently relying on defaults).

---

## Wave 3 — Verification (start in parallel with Wave 1; external dependencies)

Goal: every number and named client on the site is signed off in writing.

- [ ] **HR sign-off** on these numbers (currently in `site.ts` `homeKpis` and `referenzenKpis`):
  - [ ] `80+ Beraterinnen und Berater`
  - [ ] `8+ Jahre durchschnittliche Beratertenure`
  - [ ] `95% Wiederbeauftragungsquote`
  - [ ] `200+ abgeschlossene Projekte`
  - [ ] `0 öffentlich bekannte Projektabbrüche in 30 Jahren` ← extraordinary claim, get explicit written confirmation.
- [ ] **Sales/legal sign-off** on the 9 named client logos (UBS, ZKB, Julius Bär, PostFinance, BKB, Clientis, SWICA, Visana, Sanitas) for marketing-site usage.
  - [ ] If any not approved → fall back to category-only `proofPoints` string already in `site.ts` ("4 Schweizer Privatbanken · 3 Kantonalbanken · 6 Krankenversicherer …").
- [ ] **Identify the 2–3 strongest case studies** to convert into written pages. Start NDA / client-permission conversations now (long lead time).
- [ ] **Photographer booked** for B&W consultant portraits + office photos (Schlieren). Half-day shoot.
- [ ] Confirm the live company email (`info@bsgroup.ch`) and main phone (`+41 44 441 44 44`) still in use.

---

## Relaunch gate

Don't take the live site offline until **all of these are true**:

- [ ] Wave 1 fully ticked — site has no broken links and no missing pages from the locked architecture.
- [ ] Wave 2 placeholders neutralized — nothing on the site clicks through to `#`.
- [ ] Wave 3 numbers + logos signed off, OR fallbacks applied.
- [ ] At least one human has clicked every nav item on desktop and mobile.
- [ ] Impressum and Datenschutz are correct (legal review if possible).
- [ ] Master claim "Aus Konzept wird Realität." appears nowhere with the retired "Pragmatisch. Professionell. Echt Schweiz!" alongside it.

When the gate passes → swap DNS / deploy → relaunch.

---

## Wave 4 — Depth (post-relaunch, weeks 1–8)

Goal: turn the credible skeleton into a proof-led site. Order by ROI on credibility.

- [ ] Write 2–3 case studies in MDX following `src/content/case-studies/_template.mdx`. **Don't skip "Was wir daraus gelernt haben"** — it's the differentiator. Suggested first three (from `cases.ts`):
  - [ ] Avaloq Kernbanken-Migration (280'000 Kundenstämme, 3 Wochen vor Plan)
  - [ ] SYRIUS Release-Testing (18 → 6 Tage, +40% Abdeckung)
  - [ ] BSI CRM-Einführung (11 Monate, 4 Altsysteme abgelöst)
- [ ] Replace placeholder tiles with linked tiles as each case study lands.
- [ ] Real leadership portraits + bios in `LeadershipTeam.astro` (B&W per visual brief).
- [ ] Real office photos in `OfficePhotos.astro`.
- [ ] Replace `Engagement.astro` collage image (`public/images/old/BSG-Engagement_Uu-1.jpg`) with three clean photos. Current asset is a PicCollage stitch with watermark — temporary placeholder.
- [ ] Write 3 Insights articles. Suggested first three (from `InsightsTeaser.astro`):
  - [ ] "Was Schweizer Krankenversicherer beim nächsten SYRIUS-Release falsch machen"
  - [ ] "Avaloq-Migrationen: Die fünf Fallen, die wir am häufigsten sehen"
  - [ ] "Self-Onboarding richtig: Warum 23 Minuten zu viel sind"
- [ ] Build `/insights` as a real listing page once ≥ 2 articles exist.
- [ ] Per-service-page `ReferenceCase`: once real cases exist, decide if linked case should be curated (not first-match).

---

## Wave 5 — Launch ops + polish (parallel with Wave 4)

- [ ] Sitemap (`src/pages/sitemap.xml.ts` or via Astro integration).
- [ ] `robots.txt`.
- [ ] Favicon set.
- [ ] OG image (use the master claim).
- [ ] Analytics integration (per decision in Decisions section).
- [ ] Consent banner (only if GA / external tracking is used).
- [ ] Image optimization pass on case/insights/team/office photos as they land.
- [ ] Lighthouse / accessibility check before relaunch.
- [ ] Fix the legacy graphic typos for any future republish: "BPMB" → "BPMN" (×2 in Kompetenzen graphic), "Finanical" → "Financial" (in Firmengeschichte).

---

## v2 parking lot (do not touch in v1)

From `BSGroup_Brand_Decisions.md` and `CLAUDE.md`:

- Industry pages (Banking, Versicherung, Krankenversicherung).
- Service Brief PDF library.
- Project Rescue page (carrying *Wenn's liefern muss, rufen Sie uns.*).
- EN translation of the site.

---

## This weekend's focus (one-session chunk)

If you have one focused session, do **Wave 1 items 1–7**: founding-year decision, /kontakt, /impressum, /datenschutz, /karriere, 404, mobile menu. Self-contained, no external dependency. Afterwards every header/footer link resolves and you have a real 10-page site.

In parallel, send the email to HR/sales requesting Wave 3 sign-offs — those are the long pole on the critical path, and they're free to start now.
