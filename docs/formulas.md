# Ad Formula Library

The "perfect formula" isn't one script. It is a small set of **proven structures**, each with a
fixed job per second, plus **rules that every ad must pass**. Claude picks a formula in
`/ad-concepts`, writes the spec in `/ad-spec`, and is graded against the rubric in `/ad-qa`.

---

## 1. Non-negotiable rules (every formula, every format)

| # | Rule | Why | How the studio enforces it |
|---|------|-----|-----------------------------|
| R1 | **Hook lands in < 1.5 s, value is clear by 3 s** | Most of a video ad's value is delivered in the first seconds; viewers decide to scroll in 2-3 s. | `hook` scene ≤ 3 s; `headlineIntro()` timing; QA frame at 0.6 s. |
| R2 | **Brand visible early (by ~3-5 s)** | Google's ABCD: "Brand" early and often. | `logoBug: true` shows the logo from frame 4. |
| R3 | **Works with sound OFF** | Feeds autoplay muted. | Every key line is on-screen type; optional `captions`. |
| R4 | **One message, one action** | Splitting attention kills recall and CTR. | One `cta` scene, one button verb. |
| R5 | **Message match** | Ad promise = landing page H1/offer, or conversion drops. | `landingPage` in spec. Copy items are lifted from the page (see AlphaLink). |
| R6 | **Every claim is sourced** | Legal + trust. No invented stats, reviews or guarantees. | `research.md` **claims ledger**; QA rejects unsourced claims. |
| R7 | **Text inside platform safe zones** | Platform UI covers ~14% top / 35% bottom on Reels. | `safeZone` profile; red box on QA sheets. |
| R8 | **Specific > generic** | "Old ceramic fuses?" beats "Electrical problems?" | Hook bank scoring (specificity). |
| R9 | **Show a human / real proof** | Faces + real reviews outperform claims. | `hero` cutouts, `testimonial` scenes. |
| R10 | **Native pacing** | A new visual beat every 1.5-3 s on short-form. | Scene durations; listicle items paced automatically. |

**Google ABCD** (Attract, Brand, Connect, Direct): Google reports that ads following the ABCDs are
associated with up to a 30% lift in short-term sales likelihood and a 17% lift in long-term brand
contribution (Google/Kantar, 2021). Formulas below are ABCD-shaped:
*Hook = Attract · logo bug + end card = Brand · problem/proof/testimonial = Connect · CTA = Direct.*

---

## 2. Hook bank (12 archetypes)

Generate **at least 10 hooks** per concept across these archetypes, score each 1-5 on
*stop-power, specificity, relevance, brand-fit, honesty*, and A/B the top 2-3 (variants via `extends`).

| Archetype | Template | AlphaLink example |
|---|---|---|
| Question | Is your [thing] [risk]? | Is your switchboard *still safe?* |
| Pain callout | [Specific symptom]? | Power keeps *tripping?* |
| Number/list | [N] signs you need [X] | 3 signs it's time for an *upgrade* |
| Audience callout | [Who], this is for you | Melbourne homeowners with *old fuses* |
| Myth-bust | Stop [common belief] | A trip isn't always a *new switchboard* |
| Cost of inaction | [Bad outcome] starts with [small sign] | Burnt smell? *Don't wait.* |
| Before/after | From [bad] to [good] | From *1970s fuses* to modern safety switches |
| Social proof | "[Verbatim review fragment]" | "Jimmy worked *magic*" |
| Face/founder | I'm [name], I [credential] | I'm Jimmy, a *Master Electrician* |
| Curiosity gap | The [thing] most [people] miss | The switchboard check *most homes skip* |
| Offer-first | [Offer] this [period] | Quote response in *24 hrs* |
| Pattern interrupt | Visual first, words second | Arcing fuse graphic + flash cut |

---

## 3. Formulas with second-by-second timing

Scene names map 1:1 to spec scene `type`s.

### F1 · PAS-15 (Problem → Agitate → Solve), 15 s, any service business
| Time | Scene | Job | Copy limit |
|---|---|---|---|
| 0-2.5 | `hook` | Name the problem, pattern interrupt | ≤ 7 words |
| 2.5-6 | `statement` / `listicle` | Agitate: consequence or symptoms | ≤ 12 words |
| 6-10 | `hero` | The fix + the human + 2-3 benefit chips | ≤ 8 + chips |
| 10-12.5 | `stats` or `testimonial` | Proof | 1 number or 1 quote |
| 12.5-15 | `cta` | One verb + contact | ≤ 5 words |

### F2 · Educational listicle, 18-22 s *(used for AlphaLink "switchboard-3-signs")*
| Time | Scene | Job |
|---|---|---|
| 0-2.8 | `hook` | Question/number hook + graphic |
| 2.8-9.5 | `listicle` (3 items) | Value: each item ≈ 2 s, active item lit |
| 9.5-13.3 | `hero` | Who fixes it (face, name tag, chips) |
| 13.3-17.4 | `testimonial` | Relevant real review |
| 17.4-20.4 | `cta` | Button label = landing page CTA |

### F3 · Testimonial-led, 20-30 s
`hook` (verbatim review fragment as headline) → `testimonial` (full quote) → `hero` → `stats` → `cta`.

### F4 · Before / After / Bridge, 15 s
`statement` with *before* media → `statement` with *after* media (flash transition) → `hero` (bridge = you) → `cta`.

### F5 · Offer / urgency, 10-15 s
`hook` (offer-first) → `offer` (sticker + terms) → `stats` (1 proof) → `cta`.

### F6 · Bumper, 6 s (YouTube bumper, retargeting)
`stats` or `statement` (3-3.5 s) → `cta` (2.5-3 s). No more than ~12 words total.

### F7 · Poster-to-motion (events, launches), 8-12 s
One `layers` scene built from the key visual:
| Time | Beat |
|---|---|
| 0-0.3 | Lights-off base (artwork at ~30% brightness) |
| 0.3-1.5 | Talent panels strike on one by one (`light-up`) |
| 1.5-2.9 | Title ignites (keyed/cut-out title layer) |
| 2.9-3.4 | Whole artwork switches on |
| 3.4-4.2 | Info box rises, **live** date/venue text pops |
| 4.5-8+ | Urgency sticker (live text), hold for reading |

### F8 · Founder / UGC-style, 20-40 s (needs real footage)
`statement` scenes with `media.kind: "video"` (talking-head clips) + `captions: true`, then `cta`.
Footage is a layer; type, captions and end card stay in the brand system.

### F9 · Landing-page hero loop, 8-12 s
Muted, no button (the page has the CTA), seamless start/end frame, ≤ 3 MB. Usually
`statement`/`stats` scenes over client footage. Render with `--web`.

---

## 4. QA rubric (score /50, ship at ≥ 40 with no hard fails)

| Criterion | 5 = | Hard fail |
|---|---|---|
| Hook stop-power (frame at 0.6 s) | Instantly legible, specific, visual interrupt | Unreadable at 0.6 s |
| Clarity of single message | One idea per scene, one CTA | Two CTAs |
| Brand presence | Logo by 0.2 s and on end card; colours/type on-system | Off-brand colours/fonts |
| Proof | Sourced number, badge or real review | Unsourced claim |
| Legibility | ≥ 4.5:1 contrast, ≥ 40 px body at 1080 | Text over busy image without plate |
| Safe zones | All text/logos inside red box | CTA under platform UI |
| Pacing | New beat every 1.5-3 s | Dead air > 4 s |
| Message match | Copy mirrors landing page | Promise not on page |
| Craft | Consistent easing, no jank, no overlaps | Overlapping/clipped elements |
| Format fit | Each aspect ratio composed, not cropped | Key element cropped |
