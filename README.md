# RAVISH NGO — website

Astro 5 + Tailwind 4, static output, deploying to Netlify. Built from
`RAVISH-BUILD-BRIEF.md`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run check    # astro check — currently 0 errors, 0 warnings
```

38 pages. Homepage gzips to ~24 KB of HTML plus ~10 KB of CSS; there is no
client-side framework and no runtime JS bundle — every script is a few lines
inlined into the page.

---

## What is where

```
src/
├── data/            The facts. Edit these, not the pages.
│   ├── site.ts          org details, nav, clinic, bank account, status disclosure
│   ├── stats.ts         every published IMPACT figure + the growth table
│   ├── chapters.ts      all 41 cabinet entries, city coordinates for the map
│   ├── programmes.ts    the 8 programmes, awareness topics, webinar series
│   ├── partners.ts      Label STEP + the full partner list
│   ├── timeline.ts      milestones, governance, named people
│   └── voices.ts        testimonial quotes and the Urdu/hadith lines
│
├── content/         Markdown, for cabinet officers. See content/README.md.
│   ├── camps/           → /what-we-do/medical-camps + homepage "recent work"
│   ├── news/            → /news
│   └── stories/         → /stories + homepage "voices"
│
├── components/      Logo, Nav, Footer, Icon, Button, Card set, Counter,
│                    Disclosure (the "see more"), NetworkMap, LeafField
├── layouts/         BaseLayout — head, schema.org, reveal + copy scripts
├── styles/global.css   The whole design system. Read the comments before
│                       changing any colour.
└── pages/           One file per route
```

`public/impact/2024|2025/` hold the annual report slides at 1440px, and
`public/archive/cabinets/` the cabinet reveal slides. Both are shown as
galleries rather than as decoration.

---

## Design system, and the rules that are load-bearing

The palette was sampled from the logo file and the IMPACT decks rather than
guessed. Logo cream is exactly `#FDEECA`; the wordmark crimson is `#A1080A`
(deeper than the brief's `#A11212`); the silk backdrop ramps
`#611925 → #991115 → #BC1A25 → #DA1F30 → #FB723C → #FDCC4C`.

Four constraints hold the whole thing together. Breaking any of them is
visible immediately:

1. **Cormorant Garamond never appears below 24px.** `h1`–`h3` default to the
   display face, so a heading dropped to a body size is silently rendered in
   Cormorant at 15–18px, which turns to mush. `global.css` enforces the switch
   to Inter for `h1/h2/h3.text-body`, `.text-small` and `.text-caption`.
2. **`--saffron` is never text on cream** (1.9:1). `--gold` is text only on the
   crimson and deep grounds. For small text on the silk band use
   `--gold-light` (5.3:1) or full-opacity cream (6.0:1) — the audit found 13px
   captions at `text-paper/85` failing at 4.16:1, which is why the floor is now
   `/92`.
3. **The silk band's brightness is capped deliberately.** Its warm accents are
   low-alpha overlays, not solid light stops, so the brightest point it can
   reach is `rgb(165 50 33)`. Raise those alphas and small cream text starts
   failing AA. The numbers are in the comment above `@utility band-silk`.
4. **The logo PNG only works on `--paper`.** It is a knockout with no alpha
   channel. It is also very slightly lighter inside than at its edge, so it is
   always masked to a circle — otherwise it shows a faint box. For crimson and
   deep grounds use `<Logo variant="mark">` or `"lockup"`, which are tintable
   SVG derived from the same artwork.

Still worth requesting from the designer: a real SVG and a transparent PNG.

### Motion

Fade-and-rise, 14–26px, 720ms, once per element, staggered via
`--reveal-delay`. Counters tick up once on enter. The hero's gold leaves drift
and take one slow parallax pass — nothing else moves on its own.
`prefers-reduced-motion` disables all of it, and a load-time fallback reveals
everything after 1.2s if the reveal script never runs, so content legibility
never depends on an animation script.

The hero adds: line-by-line mask reveals on the H1 (`.line-mask`), a slow
gradient sweep across the accent line (`.sweep-text`), a rotating conic ring
around the badge (`.badge-ring`), and a scroll cue that hides itself under
780px of viewport height.

### The intro

`Preloader.astro` — the RAVISH badge with a gradient ring that draws as a
counter climbs 0→100, over the Urdu tagline, then two cream panels part
vertically to reveal the page. It creeps to ~92% on a timer and lets the real
`load` event carry it home, so the number means something.

Shown **once per session** (`sessionStorage`), never under
`prefers-reduced-motion`, with a 4.2s hard ceiling in the script and an
8s pure-CSS failsafe behind that. A visitor cannot get trapped behind it even
if the script dies.

### Heroes

Every hero is `.band-hero`: `min-height: calc(100svh - 5.4rem)` with the
content vertically centred, so the whole opening statement is visible without
scrolling. `min-height` alone is not sufficient — on a short laptop screen the
content is taller than the viewport — so the type and rhythm are also sized
against viewport *height* (`.hero-title`, `.hero-lead`, `.mt-hero-*`), and
`.band-hero` drops to flat 10px padding under 800px tall. Verified to fit at
1280×700, 1440×900 and 390×780.

### Progressive disclosure

Long sections collapse behind a "See more" (`<Disclosure>`): a peek height, a
cream fade, and a labelled toggle with a count. Used on the eight programmes,
the 41-cabinet directory, the partner list, the timeline, the awareness
topics, the report galleries and the voices. Without JavaScript everything is
fully expanded and the button hides itself, and if nothing is actually clipped
the button removes itself rather than doing nothing.

---

## Decisions worth knowing about

**Photography is deliberately secondary.** The 116-image library is all
640×640, and most of it is Instagram video frames with play buttons baked in
or poster graphics. Only eight are clean, usable photographs; they are in
`src/assets/photos/` and are only ever displayed at card size, where a 640px
source is still retina-crisp. The hero and section grounds are carried by
typography, the logo's tree-and-leaf motif and the sunrise gradient instead.
When real 1080px+ photography arrives this swaps in without a redesign.

**Two components were ported from React rather than installed.** The skew
gradient card and the dotted map both arrived as React/Next components
(`framer-motion`, `next/image`, `next-themes`, shadcn layout). This project is
Astro — adding `@astrojs/react` plus `framer-motion` would have shipped ~95 KB
of runtime JS to a site that currently ships none, for two pieces of
decoration. Both are now native `.astro`:

- `SkewCard.astro` — the whole effect was CSS transforms already. The one real
  change is structural: the original floats near-transparent glass over a dark
  page so its gradient reads straight through the content. On a cream page that
  would wreck text contrast, so the gradient slab sits *outside* the content
  card instead — visible above, below and to the right, spreading as it
  straightens on hover.
- `NetworkMap.astro` — `dotted-map` runs at **build time** in Node
  (`countries: ['PAK']`), so the page receives finished SVG. `getPoints()`
  returns each pin's coordinates in the same space, which is how the arcs and
  the HTML label overlay line up exactly. Arcs draw with a CSS
  `stroke-dashoffset` transition; pins pulse with SMIL. Still zero client-side
  framework.

Labels carry per-city pixel nudges (`labelDx`/`labelDy`/`labelAnchor` in
`chapters.ts`) because Islamabad and Rawalpindi are 13 km apart and Gujrat and
Kharian 25 km. Those offsets were **solved programmatically**, not eyeballed —
a sweep in the browser pushed clashing labels apart until zero rectangles
overlapped, and the result was baked into the data. If you move a city or
change the map height, re-run that check; hand-tuning them is a trap.

**The two city counts are different things and both are true.** A cabinet is
based in 15 cities. IMPACT 2025 reports "25+ major cities covered" and its own
"Our Presence" slide names 26. The map plots 27, because Gujrat holds a
cabinet but is absent from RAVISH's own list, which names Gujranwala instead.
Site copy quotes the published 25+; the map caption states what it plots; and
`/impact` explains the difference in full. **Worth confirming with the cabinet
which figure they want to lead with.**

**Lahore shows 16 cabinets, not 17.** KEMU has a published handle but no
2025–26 president listed, so it is marked dormant — excluded from counts,
still listed in the directory with a note. Confirm whether it is actually
dormant.

**The legal status disclosure is visible body text, not fine print.** It
appears in full on `/donate#status`, in full on `/about#status`, in short form
in the footer and on every donate band, and in the partner form's sidebar
because registered status is a common procurement requirement. Copy is from
the brief and **needs client sign-off**.

**Chapter Instagram handles are transcribed, never inferred.** Six naming
patterns are in use, two colleges changed handle between terms, and Ayub's
really is `@amc.ravishingo` with the extra "i". 29 of 41 have a public handle;
the other 12 say so rather than linking somewhere that 404s.

---

## Netlify

`netlify.toml` is configured. Four forms use Netlify Forms and all four
register in the static output: `volunteer`, `ambassador`, `partner`,
`contact`. Each posts to `/get-involved/thanks/` and carries a honeypot. This
retires the Google Form.

Before launch you still need to: register `ravishngo.org`, get the
"Register Your Donation" QR link from IMPACT 2024 and wire it into `/donate`,
and confirm the clinic's actual opening day and hours (currently the page says
"weekly" and points people at Instagram and the phone number, which is honest
but vaguer than it should be).

---

## Verified

`astro check` passes with 0 errors and 0 warnings. An automated audit across
all 21 routes at 1400px and 390px reports zero contrast failures against
WCAG AA, zero horizontal overflow, zero images without alt text, zero form
controls without labels, and no Cormorant below 24px. Urdu renders in Noto
Nastaliq at line-height 2.15+ with `direction: rtl`, left-aligned so it sits
with the English around it. Touch targets are 46px.
