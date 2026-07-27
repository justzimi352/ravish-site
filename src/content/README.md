# Adding content without touching code

Three folders in here drive parts of the site. Add a file, commit it, and Netlify
rebuilds. Nothing else needs to change.

- `camps/` → the archive at `/what-we-do/medical-camps` and the "Recent work" strip on the homepage
- `news/` → `/news`
- `stories/` → `/stories` and the "Voices" section on the homepage

Name files `YYYY-MM-DD-short-name.md`. Everything between the two `---` lines is
data; everything after is the write-up.

## Camp template

```markdown
---
title: Free Medical Camp, Kot Lakhpat
date: 2026-08-14
location: Government Girls High School, Kot Lakhpat
city: Lahore
chapter: LMDC
patients: 240
kind: general # general | flood-relief | label-step | dental | blood | screening | clinic
partners:
  - Yaseen Medical Centre
summary: One sentence that will show on the card. Keep it under about 30 words.
instagram: https://www.instagram.com/p/XXXXXXXXX/
featured: false
---

Write the recap here. Two or three paragraphs is plenty. Say what the community
was, what the team found, and what happens next for the patients who need
follow-up.
```

`patients`, `chapter`, `partners`, `instagram` and `featured` are all optional.
Leave `patients` out rather than guessing — an accurate blank is better than a
round number nobody can source.

## News template

```markdown
---
title: MoU signed with Care Campaign PK
date: 2026-07-26
kind: partnership # camp | partnership | appointment | milestone | campaign
summary: One sentence for the list view.
instagram: https://www.instagram.com/p/XXXXXXXXX/
---

The body of the announcement.
```

## Story template

```markdown
---
title: A day at the camp taught me more than a week of lectures
voice: Name, or leave as a role if they would rather not be named
role: Fourth-year MBBS, Rashid Latif Medical College
chapter: RLMC
date: 2026-07-01
excerpt: The pull quote. This is what appears on the card and on the homepage.
---

The full piece.
```

## Two house rules

1. **Patient photographs.** Documentation photography is covered by the camp
   registration terms, but do not publish a photograph in which a patient is
   identifiable alongside a named diagnosis.
2. **Never put a personal JazzCash or EasyPaisa number on this site.** Campaign
   wallets belong on Instagram, where they are time-boxed. The national UBL
   account on `/donate` is the only payment detail the website carries.
