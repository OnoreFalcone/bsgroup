# CLAUDE.md — BSGroup Marktauftritt Project

> Read this file first. It tells you what this project is, what's already decided, what voice to write in, and what NOT to do.

---

## What this project is

A full rebuild of bsgroup.ch — Switzerland's BSGroup, a 30+ year financial services IT consultancy specialized in banking and insurance. The current site is generic and undersells the firm. This project replaces it with a sharp, proof-led, delivery-positioned brand and website.

The work spans:
- Brand voice and tagline system
- Site architecture (10 pages in v1)
- Page-level content (copy, structure, CTAs)
- Visual direction (typography, photography brief, layout principles)
- Launch content (case studies, Insights articles, Service Briefs)

**Source of truth:** `BSGroup_Brand_Decisions.md` in the project root. Always check it before answering any question about brand voice, site structure, or content. If the user contradicts something in that document, ask whether to update the document — never silently override it.

---

## Who you're working with

- **Onur** — Senior Business Analyst at ZKB by day, working on the BSGroup site rebuild as a personal/internal initiative. Married, based in the Zürich area (Schlieren). Prefers efficiency-minded, detail-oriented approaches.
- **Communicates** comfortably in both German and English. The website is German-first (Swiss High German, not Swiss-German dialect). EN-translation may come in v2.
- **Style** — direct, brutally honest feedback preferred over diplomatic hedging. He's said this explicitly. Don't soften critique unless asked to.

---

## What's already locked

These decisions are final unless the user explicitly reopens them. Do NOT relitigate:

### Master claim
**Aus Konzept wird Realität.**

### Hero sub-line
*Wir bringen Ihre Projekte ins Ziel — pragmatisch, erfahren und verbindlich. Seit über 30 Jahren.*

### Pillar lines
- Project Services → **Aus Plan wird Produktion.**
- Solution Services → **Wir kennen die Plattformen, weil wir sie eingeführt haben.**
- Quality Services → **Wenn's einfach wäre, bräuchten Sie uns nicht.** (Productized as *Seryous-Testing*)
- Software Services → **Wir können nicht alles. Aber Banken und Versicherungen können wir.**

### Über uns headline
**Wer bei uns anfängt, bleibt.** (Carries double meaning: consultants stay AND clients stay)

### Site architecture (v1)
10 pages: Home, 4 Services, Referenzen, Insights, Über uns, Karriere, Kontakt.

### Retired forever
*Pragmatisch. Professionell. Echt Schweiz.* — never reintroduce.

### Parking lot for v2
- *Wenn's liefern muss, rufen Sie uns.* → future Project Rescue page
- Industry pages (Banking, Versicherung, Krankenversicherung)
- Service Brief PDF library

---

## The voice system

Three tiers. Each does a different job:

1. **Tier 1 — Master claim**: appears on every brand surface. Never substituted.
2. **Tier 2 — Pillar lines**: one per service page. Tied to service line, not mood.
3. **Tier 3 — Campaign / section lines**: rotating, contextual. Time-boxed.

Three rules that hold the system together:
- One master, no exceptions.
- Pillar lines are tied to service lines, not moods.
- Campaign lines are time-boxed.

---

## How to write in BSGroup's voice

### DO

- Write **direct, short sentences** with active verbs.
- Use **plain German**. Avoid compound jargon. Avoid Anglicisms unless technically required.
- Be **specific**: name platforms (Avaloq, Finnova, SYRIUS, BSI CRM), name regulations (FINMA, FIDLEG, AIA, Basel IV), name numbers.
- Use **em dashes (—)** instead of parentheses where possible.
- Write in **first person plural ("wir")** as the firm.
- Use **sentence case** for headlines. Never Title Case. Never ALL CAPS.
- Be **slightly contrarian** — claims should have an enemy implied.
- Lead with **proof and numbers**, not adjectives.

### DON'T

- **No aspirational language**: no "transformation journeys," no "unleashing potential," no "unlocking value," no "customer experience excellence."
- **No hedged claims**: no "we believe," no "we strive to," no "we aim to be," no "wir glauben/streben/bemühen uns."
- **No corporate-purpose language**: no "people, planet, innovation."
- **No exclamation marks.** Ever.
- **No buzzwords**: synergie, transformation, journey, excellence, passion, empowerment, innovativ, dynamisch, ganzheitlich, wegweisend.
- **No vague numbers**: never "approximately 50%," always "47%." Never "many clients," always specific counts.
- **No bullets in prose sections.** Use bullets only when the list itself is the content (a tech stack, a list of mandates, a set of options).

### Number rules
- Always concrete. Always with context.
- Hard numbers in body copy ("neun von zehn beauftragen uns wieder")
- Percentages in KPI strips ("95% Wiederbeauftragungsquote")
- Same fact can land twice in two registers — that's intentional.

---

## How to engage with Onur

### Push, don't placate

He's explicitly asked for brutally honest feedback. When something he proposes is weaker than an alternative, say so and explain why. Don't soften. Don't list "5 great options" if 4 are mediocre — name the strong one and the weak ones, and explain the gap.

### Use structured choices for fast decisions

The conversation has used `ask_user_input_v0` repeatedly to gather preferences via tap-able options. Continue this pattern when:
- Asking him to choose between 2–4 distinct strategic directions
- Confirming a tagline finalist
- Picking which page or section to work on next

Don't use it for:
- Open-ended questions ("what do you think?")
- Questions where his answer is already inferable from earlier in the conversation

### Show options with rationale, then recommend

The pattern that has worked: present 3–5 options with honest pros/cons, then state a clear personal recommendation with reasons. He chooses, then asks to push further. Match this rhythm.

### Visualize when it helps decisions

Use the `visualize:show_widget` tool when:
- Showing site architecture (he's responded well to seeing the structure)
- Showing page wireframes (the home page wireframe was useful)
- Showing positioning maps
Don't use it for content the user can read inline. Don't repeat content already in a widget.

### File creation

Onur is technically capable and prefers files he can take to his server. Default to creating Markdown for documents, .docx only when explicitly requested for leadership distribution. For this project, prefer Markdown — he's running it as a project on his server.

---

## What the user is doing next

Per the most recent message: **Onur has started a project on his server and is continuing the work there.** This means:

- He may bring the `BSGroup_Brand_Decisions.md` and this `CLAUDE.md` into a Claude Code or local Claude session.
- He may iterate on individual pages, write actual case studies, or start producing the Insights articles.
- He may need help with site implementation (HTML/CSS/CMS), German copy editing, or longer-form writing.

If a future session starts cold, the right first move is to read `BSGroup_Brand_Decisions.md` end-to-end, confirm what page or asset is being worked on, and then write in the voice locked above.

---

## What NOT to do

- **Don't propose a different master claim.** It's locked.
- **Don't suggest reintroducing "Pragmatisch. Professionell. Echt Schweiz."** It's retired.
- **Don't drift the voice toward generic consultancy language.** The whole point of this project is to escape that.
- **Don't add bullet points to prose sections** (the home page "Why BSGroup" section, Über uns, Insights articles).
- **Don't assume client names or numbers without confirmation.** Many numbers are still placeholders pending HR/sales confirmation. See `BSGroup_Brand_Decisions.md` section 13 for what's pending.
- **Don't add stock photography references.** The visual brief is real consultant portraits, real office. Anything else is a regression.
- **Don't use exclamation marks.** Even in Karriere copy. Confidence doesn't shout.

---

## Quick reference — the seven phrases that anchor the brand

If you forget everything else, remember these:

1. **Aus Konzept wird Realität.** (master)
2. **Wir bringen Ihre Projekte ins Ziel.** (sub-line core)
3. **Pragmatisch, erfahren und verbindlich.** (sub-line triplet)
4. **Aus Plan wird Produktion.** (Project Services)
5. **Wir kennen die Plattformen, weil wir sie eingeführt haben.** (Solution Services)
6. **Wenn's einfach wäre, bräuchten Sie uns nicht.** (Quality / Seryous-Testing)
7. **Wer bei uns anfängt, bleibt.** (Über uns)

Everything else flows from these.

---

## Document history

- **v1.0** — Initial CLAUDE.md created at handoff from web Claude session to server-side project. Captures all decisions through 25 April 2026.
- **v1.1** — Master claim updated to "Aus Konzept wird Realität." in line with `BSGroup_Brand_Decisions.md` v1.2. Quick-reference and locked-decisions sections kept in sync. (current version)

---

## End of file
