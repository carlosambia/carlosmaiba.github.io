# Switchboard upgrade landing (2026 redesign): research

_Analysed 2026-11-08 from https://www.alphalinkelectrical.com.au/switchboard-upgrade-landing/
(`noindex, nofollow`, so this is a paid-traffic landing page). Assets folder on the site is
`approved-20261029`, so the design was approved on 29 Oct 2026._

## 1. What the page is

A single-goal lead page: **switchboard quote requests** (form + phone + WhatsApp).
Structure (top → bottom):

| # | Section | Content | Visual device |
|---|---|---|---|
| 1 | Hero (dark) | ★★★★★ 5.0 on Google · **H1 "Need a switchboard upgrade in Melbourne?"** · "Old fuse box, power tripping or a new appliance going in? Alphalink Electrical can help you work out what your home needs." · CTAs *Get a switchboard quote* / *0456 788 880* · "Clear quote before work" · "Melbourne's south-east" · handwritten "Not sure? Start with a message." | Real close-up switchboard photo, yellow underline on "switchboard upgrade", Gochi Hand note |
| 2 | Quote form (sticky card) | "The Alphalink Electrical team will call or text within 24 hours." Fields incl. suburb + **photo upload** | Master Electricians badge |
| 3 | Problem cards | **Still using an old fuse box? / Power keeps tripping? / Not enough power for what you're adding?** each with "This is me →" | Real photos (ceramic fuses, new board, EV charger), tag chips |
| 4 | Education | "A tripping switch doesn't automatically mean the whole board needs replacing." Old fuse replacement · Safety switch additions · Circuits for new equipment | Check list |
| 5 | Meet Jimmy | "Jimmy is the electrician behind Alphalink Electrical…" · Fully licensed & insured · handwritten "That's Jimmy." | Cutout + yellow brush "A" mark, credential badges, 15+ badge |
| 6 | Alphalink at work (dark) | Video "Switchboard fitoff" + 4 job photos with captions | Real footage |
| 7 | Reviews | 12 Google review cards with highlighted phrases + job tag, "Google reviews (85)" | Yellow/blue marker highlights |
| 8 | Local (yellow band) | 15 suburbs | Brush curve |
| 9 | FAQ | assessment/call-out charges, cost, power off, whole board?, safety switches, suburbs | — |
| 10 | Before you book | "Sending an enquiry doesn't confirm a booking…" ACL note | — |

## 2. Design language (2026 system)

| Token | Value | Notes |
|---|---|---|
| Paper | `#F8F5ED` (+ `#F1EEE8`, `#F0ECE2`) | warm, tactile, grain overlay |
| Ink | `#101214`, navy `#111B35` / `#16264A`, text `#303538` | |
| Signature | **Yellow `#F6E921`** (button edge `#C6BC19`) | underlines, brush strokes, bands |
| Secondary | blue `#24498B`, marker `#CFE6FF` | review highlights |
| Display | **Figtree** 750-800, tight tracking, sentence case | not uppercase (old system used Poppins caps) |
| Body | **Lato** 400/700 | |
| Hand | **Gochi Hand**: handwritten asides ("That's Jimmy.") | humanising device |
| Motifs | hand-drawn yellow brush lines (curve, loop, crossing, "A"), torn/paper edges, grain, "blue-crossing" light key visual | `brand-library/` |
| Motion | `--ease: cubic-bezier(.22,1,.36,1)` (expo-out) | same family as the studio's house easing |

**Implication for any video/ad work:** the 2026 look is *documentary photo + hand-made marks
on warm paper*: human, local, crafted. That is the opposite of glossy AI aesthetics. Generated
imagery must not pull it toward "AI sheen"; motion should feel like drawn strokes and paper,
not neon/sci-fi (the first demo's circuit-board look belongs to the old system).

## 3. Claims ledger (delta vs `alphalink-electrical/research.md`)

| Claim | Allowed wording | Source |
|---|---|---|
| Rating | "5.0 on Google" · "Google reviews (85)" | hero + reviews section |
| Response | "The Alphalink Electrical team will call or text within 24 hours." | form card |
| Pricing promise | "Clear quote before work" · "quote before the work" | hero, Meet Jimmy |
| Licensing | "Fully licensed & insured" | Meet Jimmy |
| Services | old fuse replacement · safety switch additions · circuits for new equipment | education section |
| Myth-bust (allowed!) | "A tripping switch doesn't automatically mean the whole board needs replacing." | education section |
| Area | "Melbourne's south-east" + 15 named suburbs | hero, local section |
| Person | "Jimmy is the electrician behind Alphalink Electrical" | Meet Jimmy |
| Reviews (verbatim) | e.g. Sal: "The professionalism and ease of the entire process were outstanding." (Switchbox replacement) · Lyly Hong: "…made sure the circuit board could handle the extra load." · Christian Tendi: "Jimmy was easy to deal with, explained things clearly…" | review cards |

**Language shift to respect:** the page avoids fear/urgency. It positions Alphalink as the
calm expert who *explains the options*. Ads that scream "FIRE RISK" would mismatch the page.
Hooks should mirror the three problem cards word for word.

## 4. Asset audit

| Asset | State | Action |
|---|---|---|
| Logo | ✅ approved SVG (196×52) | use as-is |
| Hero switchboard photo | 1600×1000 | ask for original; fine for 1080p |
| Ceramic fuses photo | ⚠ 600×450 | ask for original; else precision upscale (not creative) |
| EV charger photo | ⚠ 646×1400 | ask for original |
| Jimmy cutout | ✅ 776×1404 RGBA, clean, no badges | great for layered motion (parallax, brush reveal) |
| Jimmy/team/job photos | 1000-1500 px, documentary | ✅ strongest trust assets |
| Brush/line motifs | ✅ 1600 px RGBA + SVG | animatable as "drawn" strokes |
| Fit-off video | ⚠ 720×1280, **CapCut watermark** + burned-in caption, 20 s | request raw phone clip(s); this footage is gold |
| Google reviews | ✅ 85 reviews, many job-specific | quote verbatim |

**Gaps to fill (candidates for new shoots or careful generation):** before/after of the same
board, close-ups of hands at work, Jimmy talking to camera (10-20 s, phone is fine), suburban
house exteriors (real, local), the yellow brush motif as animated strokes, seasonal variants.

## 5. Your Drive kit (for reference)

The Drive folder shared with this request is the **City Rock y Ramen / NXT Concept** final kit
(7 Nov 2026): stories with/without the Joinnus strip, transparent frames per artist, A2 print
files, Joinnus banners, a 4.2 s intro (with/without sound) plus its three parts
(`parte-1-velocidad`, `parte-2-generica`, `parte-3-3artistas`), and NXT logos. It contains no
Alphalink logos, so this project uses the approved SVG from the landing page.
