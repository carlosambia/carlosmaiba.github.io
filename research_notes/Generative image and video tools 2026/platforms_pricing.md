# Platforms, aggregators and pricing/usage economics for generative image and video (Nov 2026)

Research date: 2026-11-08. All prices USD unless stated. "Verified (primary)" means read on the vendor's own pricing page, API docs or live account tooling on 2026-11-08. "Third-party" means blogs or aggregators; treat those as approximate. No vendor page I read showed AUD; every AUD figure is a gap.

Two primary sources are live tool responses, not web pages:
- **Higgsfield MCP** (`show_plans_and_credits`, `models_explore`) returned the live pricing config and model catalog for the user's connected account on 2026-11-08. The account reports `current_plan: "ultra"`, `workspace_kind: "individual"`.
- **Magnific MCP** (`simulate_cost`) returned exact credit quotes from Magnific, formerly Freepik, on 2026-11-08. It is read-only and charges nothing.

---

## 1. Higgsfield: plans, credit costs, "unlimited" limits, reputation, controversies, unique features

### Takeaway
Higgsfield is an aggregator. It wraps Kling, Veo, Seedance, Wan, Nano Banana, GPT Image and others, and adds its own Soul, Cinema Studio, Marketing Studio and Genjutsu tools. On Ultra annual, its subscription credits are among the cheapest ways to buy Kling and Seedance: about $0.033 per credit, so a 1080p 5-second Kling 4.0 clip costs about $0.54. The real cost rises because of three things:
- Monthly credits are forfeited at renewal.
- Top-ups cost 75% more per credit and expire in 90 days.
- Prices change often.

The "unlimited" offers are time-boxed promos. They work only on the web, sit in a slower queue, and do not apply to MCP or API use.

### Cited Findings

**Plans and prices (verified via live Higgsfield MCP pricing config, 2026-11-08)**
- **Ultra:** $99/mo billed annually, against an original price of $129. It includes 3,000 credits/mo, "up to 8 Videos, 8 Images" in parallel, all models including all Seedance models, and "Credit top-ups with discount" badged "70% cheaper". The annual saving is $360/yr. The tooltip says 3,000 credits ≈ "~12000 images or ~500 videos or ~100 character generations", "= 1,500 Nano Banana Pro Generations", "~500 Kling 3.0 videos". — [Higgsfield MCP pricing config / higgsfield.ai/mcp-pricing](https://higgsfield.ai/mcp-pricing)
- **Other plans (third-party, Oct 2026):**
  - Free: $0, 0 credits.
  - Starter: $19/mo, 270 credits, Seedance 2.0 Fast/Mini only, no annual discount.
  - Plus: $47/mo annual or $59 monthly, 1,200 credits.
  - Ultra: $99 annual or $129 monthly, 3,000 credits.
  - Prices exclude VAT. — [Krea blog, updated 2026-10-23](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs). HeyGen's October 2026 update gives the same monthly prices. — [HeyGen blog](https://www.heygen.com/blog/higgsfield-pricing)
- **Plans are renamed and repriced often.**
  - As of 2026-08-05: Basic $9 (120 credits), Pro $29 (600), Max $79 (1,800); promotional annual prices were Pro $18 and Max $41. — [Segmind blog, 2026-08-06](https://blog.segmind.com/higgsfield-credits-explained-expiry-rules-and-real-cost/)
  - A late-October 2026 snapshot showed Starter $15 (200 credits) and Plus $49 (1,000). — summarized in search results from [diyai.io](https://diyai.io/ai-tools/video-generation/higgsfield-pricing/)
  - Usage Pricing logged a "2026-08-14 basic/pro/max reprice". — [usagepricing.com](https://www.usagepricing.com/blueprint/activity/higgsfield-2026-08-14-basic-pro-max-reprice)
- **Top-ups (verified, live MCP config):**
  - 500 credits $30, 1,000 $59, 2,000 $115, 4,000 $230. That is about 17 credits per dollar, or $0.0575–$0.060 per credit.
  - Auto-refill gives 20 credits per dollar ($0.05/credit), in bundles of $20, $40, $90, $150 or $300.
  - `topup_expire_days: 90`: "One-time top-up credits expire after 90 days." — [Higgsfield MCP pricing config](https://higgsfield.ai/mcp-credits)
- **Team plans (third-party, checked about 2026-10-27 and 2026-11-03):**
  - Team: $79/seat/mo monthly or $65 annual, 1,000 credits/seat, 2–9 seats.
  - Scale: $215/seat/mo monthly or about $150 annual, 2,500 credits/seat, 5–15 seats.
  - Enterprise: custom.
  - Business ($89/seat, 1,500 credits) was split into Team and Scale in August 2026. — [Higgsfield blog, team plans compared](https://higgsfield.ai/blog/ai-video-team-plans-compared); [usagepricing.com](https://usagepricing.com/blueprint/higgsfield)
  - Team gives 16 parallel videos and 16 images, with pooled credits. Scale gives 32 parallel and includes SSO. Enterprise adds SOC 2 support. — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)

**Credit costs per model (Higgsfield)**
- **Kling 4.0 at 1080p:** 16.25 credits for 5 s, 32.5 for 10 s. — [Higgsfield blog (geo.higgsfield.ai), published 2026-11-03, pricing checked 2026-11-02](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
- **Veo 3.1 at 720p:** 80 credits for 8 s, 40 for 4 s, which is 10 credits/s. No 1080p figure is given. — [same Higgsfield blog](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
  - Older third-party figures conflict: about 40 credits per 4 s at 1080p, about 58 credits per 1080p clip, and "15–48 credits". — [search summary of saascrmreview / aiimagetovideo.pro](https://saascrmreview.com/?p=13747)
  - Veo 3.1 on Higgsfield accepts durations of 4, 6 or 8 s, quality tiers basic, high or ultra, and the variants veo-3-1-preview and veo-3-1-fast (the default). — [Higgsfield MCP models_explore get veo3_1](https://higgsfield.ai)
- **Other video models:**
  - WAN 3.0 at 720p: 9 credits for 5 s, 18 for 10 s.
  - Seedance 2.5 at 720p: 35 credits for 5 s, 70 for 10 s.
  - Cinema Studio 4.0 at 720p: 35 credits for 5 s, 70 for 10 s, 210 for 30 s. — [Higgsfield blog 2026-11-03](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
- **Settings matrix (5 s 720p / 5 s 1080p / 10 s 720p / 10 s 1080p):**
  - Seedance 2.0: 23 / 45 / 45 / 90.
  - Kling 3.0: 10 / 12.5 / 20 / 25.
  - Cinema Studio: 25 / 50 / 50 / 100.
  - Wan 2.7: 8 / 13 / 15 / 25.
  - Single figures: Seedance 2.5 is 52 credits for 8 s at 720p. Seedance 2.0 Fast is about 17 credits per 5 s.
  - Re-rolls and upscales also cost credits. — [Krea blog, updated 2026-10-23](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs). Krea is a competitor, so treat these with care.
- **Nano Banana Pro:** about 2 credits per standard image and 4 at 4K. — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs). This matches the live tooltip "3,000 credits = 1,500 Nano Banana Pro generations". — [Higgsfield MCP pricing config](https://higgsfield.ai/mcp-pricing)
- **The live tooltip conflicts with the blog:** "~500 Kling 3.0 videos" per 3,000 credits implies 6 credits per Kling 3.0 video. That is lower than the 10 credits Krea gives for 5 s at 720p, so the tooltip probably assumes the cheapest settings. — [Higgsfield MCP pricing config](https://higgsfield.ai/mcp-pricing) vs [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)

**Credit rules**
- Subscription credits reset at renewal and do not roll over. Packs and auto-refill credits expire 90 days after purchase. Subscription credits are spent first. — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs); [Segmind](https://blog.segmind.com/higgsfield-credits-explained-expiry-rules-and-real-cost/)
- Unused credits expire when you cancel. Credits have no cash value. Section 9.4 of the terms lets Higgsfield change what credits buy "at its sole discretion" with no notice period. — [Segmind, 2026-08-06](https://blog.segmind.com/higgsfield-credits-explained-expiry-rules-and-real-cost/)
- Higgsfield's own Trustpilot replies confirm that "any unused monthly credits do not roll over... remaining credits that you paid for are forfeited." — summarized from [Trustpilot](https://uk.trustpilot.com/review/higgsfield.ai?page=9)

**"Unlimited" offers and their real limits (verified, live MCP config 2026-11-08)**
- All current Unlimited items are promotions marked "Buy until: Nov 9". All are "Available on web".
- **7-Day Unlimited:**
  - Monthly Ultra card: Nano Banana 2 (1K/2K) and Nano Banana Pro (1K/2K).
  - Annual Ultra card: the same, plus Kling 3.0 "(720p/5s)".
- **"365-day Unlimited":** Seedream 4.5 (2K/4K), Seedream 5.0 Lite (2K/3K), Flux.2 Pro (1K), Nano Banana (v1), Kling O1 Image and GPT Image.
- **Free gens:** "5,000 FREE GENS" (monthly Ultra) or "10,000 FREE GENS" (annual Ultra) of Soul V2 and Soul Cinema. — [Higgsfield MCP pricing config](https://higgsfield.ai/mcp-pricing)
- MCP, CLI and Canvas runs still deduct credits; Unlimited does not exempt every model; "dynamic speed adjustments" apply under high demand. — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)
- **Slower queue for unlimited use:**
  - The Terms reportedly put unlimited-tier generations on "a separate, slower queue" and allow throttling of "excessive" use. Users report "throttled at 15min per gen on a paid unlimited pack". — summarized from [Register](https://www.theregister.com/2026/02/06/higgsfield_ai_job_loss/) and [aiimagetovideo.pro](https://aiimagetovideo.pro/blog/?p=1341)
  - Higgsfield's Trustpilot reply says unlimited runs through "the standard queue and speed may vary during periods of high demand". — [Trustpilot](https://ca.trustpilot.com/review/higgsfield.ai?page=4)

**Reputation, controversies and complaints**
- **Slowdowns and bots:** Higgsfield says the slowdowns were partly bot-driven. The cofounder said "In December and January, we had to shut down around 40,000 accounts", and the company says it refunded $1.35M to affected users. — [digitalbusiness.kz, 2026-02-11](https://digitalbusiness.kz/2026-02-11/higgsfield-unlimited-mnenie-storon-o-situatsii-s-beskonechnimi-podpiskami-v-dekabre/)
- **Job-replacement backlash:** In February 2026 Higgsfield drew backlash for boasting about replacing creative jobs. — [The Register, 2026-02-06](https://www.theregister.com/2026/02/06/higgsfield_ai_job_loss/)
- **Forbes AU coverage:** "Racist videos and payment problems: the dark side of this AI startup's super-fast growth". — [Forbes Australia](https://www.forbes.com.au/?p=177110)
- **Billing complaints:**
  - Auto-renewals after little use.
  - Refunds described as "an obstacle course"; using even one credit may disqualify a refund.
  - Annual billing preselected at checkout.
  - A December 2025 report of an unauthorized monthly-to-annual upgrade.
  - A risk that a failed seat payment locks the whole workspace. — [search summary of Trustpilot and third-party reviews](https://ucstrategies.com/news/higgsfield-ai-review-2026-pros-cons-pricing-features/); [MindStudio, cancellation complaints](https://www.mindstudio.ai/blog/higgsfield-subscription-cancellation-complaints)
- **Price volatility:** Early Creator subscribers paid $149.40/mo for a plan later offered at $37.40/mo. Reddit users documented 2–6x price increases within three months. — [search summary](https://geo.higgsfield.ai/task/blog/why-is-higgsfield-called-shady-billing-wrapper-controversies). That page is hosted by Higgsfield itself, which is notable.
- **Trustpilot rating:** about 4.0/5 on 3,600–4,468 reviews; one aggregator says 19% of ratings are 1-star (as of 2026-09-19). Another source cites 3.2/5 on 1,200+ reviews. These are self-selected reviews. — [Trustpilot AU](https://au.trustpilot.com/review/higgsfield.ai?page=3); [search summary](https://www.imagine.art/blogs/higgsfield-ai-pricing)
- **Support:** mixed. Some reviewers praise quick refunds; others call the service hard to cancel. — [Trustpilot CA](https://ca.trustpilot.com/review/higgsfield.ai?page=2)

**Unique features (live Higgsfield MCP catalog and tool list, 2026-11-08)**
- **Video model catalog:**
  - Higgsfield's own models: Cinema Studio Video 3.0 (480p–4K, 4–15 s, genre hints such as noir, horror and epic), Cinema Studio 3.5 and 4.0, Marketing Studio video, Genjutsu motion-control and replace-object, Higgsfield Intone, and Draw-to-Video.
  - Third-party models: Kling 2.6, 3.0, 3.0 Turbo, 3.0 Omni, 4.0 and 4.0 Flash; Veo 3.1 and 3.1 Lite; Seedance 1.5 Pro, 2.0, 2.0 Mini and 2.5; Wan 2.6, 2.7, 3.0 and 3.0 Prime; Gemini Omni Flash 1.1 and 1.2; FLUX 3 Video; Grok Video 1.5; MiniMax Hailuo and H3; Happy Horse.
  - Upscalers and tools: Topaz, Topaz Hyperion 2.5, ByteDance Video Upscale, FPS boost and deflicker.
  - The catalog has no Sora. — [Higgsfield MCP models_explore list](https://higgsfield.ai)
- **Other tools exposed via MCP:**
  - Ads Studio (brands, products, story presets).
  - AI Influencer builder, character sheets and Soul models.
  - Apps, and an image model default of `gpt_image_2_6`.
  - 3D scene builder, virality predictor, TikTok publish, website builder, dubbing and voice, batch generation, upscaling, reframe and relight. — [Higgsfield MCP tool list](https://higgsfield.ai)
- "Popcorn" did not appear by that name in the catalog, so I could not verify it.

### Inferences
- **Effective cost per credit:**
  - Ultra annual: about $0.033 ($1,188 / 36,000).
  - Ultra monthly: about $0.043.
  - Plus annual: about $0.039. Plus monthly: about $0.049.
  - Starter: about $0.070.
  - Top-up: $0.0575–$0.060. Auto-refill: $0.050.
  - Team: about $0.065–$0.079 per seat-credit.
- Burst usage beyond the plan is therefore 50–80% more expensive than plan credits.
- **Breakeven on utilization:** If an agency uses only 60% of Ultra's monthly credits, the effective rate rises to about $0.055/credit, which is roughly top-up pricing.
- The 7-day and 365-day "unlimited" offers are rolling, time-limited promotions. Each carries a "Buy until" date, so they are not a durable plan feature to budget on. They also do not apply to automated MCP or API runs.
- Higgsfield's value is strongest for heavy Kling and Seedance users who burn all credits monthly. It is weakest for bursty agency workloads, because of monthly forfeiture and 90-day top-up expiry.

### Gaps
- Higgsfield's public pricing page renders client-side and returned no text to the fetcher. Starter and Plus prices come from the Oct 2026 third-party snapshot; only Ultra was confirmed live.
- I found no primary per-credit cost for Veo 3.1 at 1080p, Nano Banana Pro at 2K versus 1K, or image and video upscales on Higgsfield. The MCP `models_explore` response did not include credit prices.
- Higgsfield's commercial-use terms were not read on a primary page. Sources generally say commercial use requires a paid plan.

---

## 2. Alternatives: plans, what credits buy, limits, terms

### Takeaway
Magnific (formerly Freepik) is the closest like-for-like aggregator. Its distinguishing feature for an agency is an annual credit pool with "no monthly resets". Its credit prices on Kling 3.0 are lower than Higgsfield's, but Veo and Seedance are expensive there.

Other notes:
- Runway's old "Unlimited" plan appears to have been replaced by a $95 "Max" plan (9,500 credits). Pro and Max get unlimited Topaz and 4K upscaling.
- Google AI Pro and Ultra are the cheapest per Veo clip if you stay within Flow.
- OpenAI Sora is gone: the app closed in April 2026 and the API on 2026-09-24.
- Adobe Firefly is the "commercially safe" option, with unlimited standard image generation.

### Cited Findings

**Magnific (formerly Freepik)**
- freepik.com/pricing 301-redirects to magnific.com/pricing; the page title reads "Magnific (formerly Freepik)". — [magnific.com/pricing](https://www.magnific.com/pricing) (verified 2026-11-08)
- **Plans (verified, primary):**
  - Premium: $20/mo, or $14.50/mo billed annually, 240K credits/year.
  - Plus: $45, or $33.75 annually, 600K credits/year, "Best value".
  - Pro: $110, or $82.50 annually, 1.5M credits/year.
  - "Credits valid for 1 year, no monthly resets."
  - All plans include Spaces, 250M+ stock assets, a commercial license and "API access with credit-based usage" (marked New).
  - Premium gets the Magnific image and video upscalers; Plus and Pro add Topaz. Plus and Pro add music rights. — [magnific.com/pricing](https://www.magnific.com/pricing)
- **Unlimited (verified, primary):**
  - Plus has "UNLIMITED generations": Nano Banana 2 (1K) "All year" and Kling 2.5 "Until Dec. 4".
  - The cards also list Nano Banana Pro under Unlimited.
  - The page does not make clear which plan each unlimited tag applies to. — [magnific.com/pricing](https://www.magnific.com/pricing)
- **Exact credit costs (verified via Magnific MCP `simulate_cost`, 2026-11-08):**
  - Veo 3.1, 5 s at 1080p with sound: **1,500 credits**.
  - Kling 3.0, 5 s at 1080p: **450**.
  - Kling 4.0, 5 s at 1080p: **1,400**.
  - Seedance 2.0 Pro, 5 s at 1080p: **3,500**.
  - Image at 2K, requested as "nano-banana-pro": **75**. This matches the page's figure for Nano Banana 2 at 2K, so the mode may have defaulted.
  - Image upscale: base 72 credits; range 90 / 180 / 270 / 1,080 by S/M/L/XL size tier. — [Magnific MCP](https://www.magnific.com/pricing)
- **Page examples (verified, primary):**
  - Veo 3.1 at 4K with audio: 2,080 credits per 4 s.
  - Kling 4.0 at 1080p: 840 per 3 s.
  - Kling 2.5 at 720p: 140 per 5 s.
  - Seedance 2.5: 4,400 per 4 s at 1080p, 1,760 per 4 s at 720p.
  - Magnific One High: 180 credits per 2K image, 250 per 4K.
  - Sora is not listed. — [magnific.com/pricing](https://www.magnific.com/pricing)

**Krea (verified primary page, 2026-11-08)**
- **Plans:**
  - Free: 100 units per day.
  - Basic: $5/mo shown, struck through from $9, 5,000 units.
  - Pro: $21, struck through from $35, 20,000 units.
  - Max: $63, struck through from $105, 60,000 units.
  - Business: $160, struck through from $200, 80,000 units, up to 50 seats included.
  - Enterprise: custom.
  - A "40% off" yearly toggle is shown; the page is unclear which price is annual.
- **Concurrency (image/video):** Basic 4/2, Pro 8/4, Max unlimited/8, Business unlimited/unlimited.
- **What units buy:**
  - Veo 3.1 (4 s, 720p, no audio): about 33 clips on Pro, 67 on Max.
  - Kling 3.0 (3 s, no audio): about 107 on Pro.
  - Seedance 2.5 (5 s, 720p): about 65 on Pro and 197 on Max. The page's own comparison table conflicts with this.
- **Other features:**
  - "Unlimited relaxed generations" with in-house image models on all plans.
  - Topaz upscaling up to 22K on Basic and above.
  - Commercial license on paid plans.
  - A separate API pricing page exists. — [krea.ai/pricing](https://www.krea.ai/pricing)

**Runway (verified primary page, 2026-11-08; runwayml.com redirects to runway.com)**
- **Plans:**
  - Free: 125 one-time credits.
  - Standard: $15/mo, or $12 annually, 625 credits.
  - Pro: $35, or $28 annually, 2,250 credits.
  - Max: $95, or $76 annually, 9,500 credits.
- **Credit rules:** Credits roll over one month on Max only. Purchased top-ups never expire, with a minimum of 1,000 credits.
- **Unlimited:** Pro and Max include Unlimited Topaz AI Upscale and Unlimited 4K video upscaling.
- **Video costs:**
  - Gen-4.5: 60 credits per 5 s (12/s).
  - Aleph 2.0: 140 per 5 s.
  - Kling 4.0 at 1080p: 118 per 5 s, or 89 with 25% off until Nov 30.
  - Seedance 2.0 Pro at 1080p: 160 per 4 s.
- **Image costs:** Gen-4 Image 8 credits; Nano Banana Pro 20 at 2K.
- **Not on the page:** The fetched page did not describe an Explore or relaxed mode, and Veo was not listed. — [runway.com/pricing](https://runway.com/pricing)

**Kling direct (Kling blog dated 2026-07-28, partly primary)**
- **Plans (first-month price, renewal price, credits):**
  - Standard: $6.99 first month ($10 shown), renews at $8.80, 660 credits/mo.
  - Pro: $25.99 ($37 shown), renews at $32.56, 3,000 credits.
  - Premier: $64.99 ($92 shown), renews at $80.96, 8,000 credits.
  - Ultra: $127.99 ($180 shown), renews at $159.99, 26,000 credits.
- 4K on the Kling 3.0 series costs 30 credits/s. — [Kling blog](https://kling.ai/blog/kling-video-3-0-credit-cost-guide)
- **Third-party per-second rates for Kling 3.0:**
  - 1080p: 8 credits/s without audio, 12 with audio.
  - 720p: 6 without audio, 9 with audio.
  - Free tier: 66 credits per day.
  - The API is priced in units of about $0.14 each. — [search summary of magichour/eesel/fluxnote](https://magichour.ai/blog/kling-ai-pricing)

**Google (Gemini, Flow, Veo)**
- **Google AI plans (verified, US page):**
  - AI Pro: $19.99/mo, or $199.99/yr, 1,000 Flow credits/mo, 5 TB.
  - AI Ultra 5x: $99.99/mo, 10,000 Flow credits, 20 TB.
  - AI Ultra 20x: not priced on the page, 25,000 Flow credits, 30 TB, with 4K image and video upscaling.
  - AI Plus: 200 Flow credits; no price shown.
  - Video is listed as "Omni Flash"; Veo tiers are not named on the page. — [one.google.com/about/google-ai-plans](https://one.google.com/about/google-ai-plans/)
- **Veo 3.1 in Flow:**
  - Lite 10 credits, Fast 20 and Quality 100 per generation. Ultra halves Lite and Fast to 5 and 10.
  - Capped at 8 s per generation.
  - Google AI Pro gives about 10 Quality clips per month.
  - Ultra is "$99.99/month with 10,000 Flow credits, or $199.99 with 25,000". — [Higgsfield blog 2026-11-03](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits); consistent with [search summary of mindstudio/saascrmreview](https://www.mindstudio.ai/blog/google-flow-pricing-credits-tiers-explained). Some sources say Ultra costs $249.99; this conflicts.
- **Gemini API (verified, aistudio.google.com/docs/pricing; ai.google.dev redirects there):**
  - Nano Banana Pro (`gemini-3-pro-image`): $0.134 at 1K or 2K, $0.24 at 4K.
  - Nano Banana 2: $0.067 at 1K, $0.101 at 2K, $0.151 at 4K.
  - Nano Banana 2.1: $0.0336 at 1K, $0.0504 at 2K, $0.113 at 4K. Batch is 50% off: $0.0252 at 2K.
  - Omni 1.2 Flash video: about $0.07/s at 720p, about $0.104/s at 1080p, about $0.209/s at 4K.
  - Veo 3.1 rates were not in the portion of the page I read. — [aistudio.google.com/docs/pricing](https://aistudio.google.com/docs/pricing)
- Google's Veo 3.1 API rate is reported as $0.40/s at 720p–1080p and $0.60/s at 4K. — [invideo, Aug 2026, via search](https://invideo.io/blog/ai-video-model-pricing). This matches the fal rate below.

**OpenAI (Sora and ChatGPT)**
- **Sora API:**
  - Notice of 2026-03-24: the Videos API, `sora-2`, `sora-2-pro` and their snapshots were scheduled for "removal from the API on September 24, 2026". No replacement is listed. — [OpenAI deprecations](https://developers.openai.com/api/docs/deprecations) (verified primary)
  - The Sora app and web experience ended 2026-04-26. — [The Decoder](https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/); [AP via OPB, 2026-03-24](https://www.opb.org/article/2026/03/24/openai-pulls-the-plug-on-sora-the-viral-ai-video-app-that-sparked-deepfake-concerns)
  - One source claims Sora 2 stays available inside ChatGPT. This is unverified.
- **GPT Image:**
  - `gpt-image-1` shut down 2026-10-23.
  - `gpt-image-1.5`, `gpt-image-1-mini` and `chatgpt-image-latest` shut down 2026-12-01. The replacements are "gpt-image-2.6-sunburst or gpt-image-2.6-flare". — [OpenAI deprecations](https://developers.openai.com/api/docs/deprecations)

**Adobe Firefly (verified, adobe.com plans page)**
- **Individual plans, monthly:**
  - Standard: $9.99, 2,000 credits, "up to 20" 5-second videos.
  - Pro: $19.99, 4,000 credits, up to 40.
  - Pro Plus: $49.99, 10,000 credits, up to 100.
  - Premium: $199.99, 50,000 credits, with "Unlimited Firefly Video Model access".
- **Teams:** Pro, Pro Plus and Premium for teams have the same per-license prices.
- **Unlimited:** All paid plans have unlimited standard image features and Boards.
- **Partner models:** GPT Image, Gemini/Nano Banana, FLUX, Runway, Kling, Luma, Topaz Astra and ElevenLabs. Partner outputs use credits. Veo and Sora are not listed on the plans page.
- **Commercial use:** "Outputs from Adobe Firefly AI models are safe for commercial use." You are responsible for partner-model content. — [adobe.com/products/firefly/plans](https://www.adobe.com/products/firefly/plans.html)
- Credits reset monthly with no rollover. — [Adobe FAQ](https://www.adobe.com/cc-shared/fragments/products/firefly/plans/faq)

**Midjourney (third-party only; docs.midjourney.com returned 403)**
- **Plans:**
  - Basic: $10, about 3.3 Fast hours, no Relax.
  - Standard: $30, 15 Fast hours, unlimited Relax images.
  - Pro: $60, 30 Fast hours, Stealth, Relax SD video.
  - Mega: $120, 60 Fast hours, 12 concurrent fast video jobs.
- **Other terms:** About 20% off annually. Extra Fast hours cost $4. Relax queue waits run 0–30 minutes. — [eesel.ai](https://eesel.ai/blog/midjourney-pricing); [krater.ai](https://krater.ai/blog/midjourney-pricing)

**LTX Studio (third-party and Lightricks help center)**
- **Plans:** Lite $15/mo, Standard $35, Pro $125 (about $12, $28 and $100 annually).
- **Credits:** 8,000, 28,000 and 110,000 per month respectively; Free gets 800 one-time.
- **Commercial rights:** Free and Lite are personal use only; Standard and above include commercial rights.
- **Collaboration:** Standard allows 5 collaborators per project, Pro 10. — [G2](https://www.g2.com/products/ltx/pricing); [Lightricks help](https://help.ltx.io/hc/en-us/sections/29870262567314-About-Plans-and-Pricing); [Tools for Humans](https://toolsforhumans.ai/ai-tools/ltx-studio)

**OpenArt and Leonardo (third-party only, conflicting)**
- **OpenArt:** Essential $14/seat with 4,000 credits ("~4,000 images or ~50 videos"); Plus $34, Pro $56, Wonder $240. A review from August 2026 notes that prices rose. — [search summary](https://diyai.io/ai-tools/video-generation/openart-pricing/)
- **Leonardo:** Maestro $60/mo ($48 annually), 60,000 tokens; Free gets 150 tokens per day. The API is billed separately from subscriptions. Tier names conflict across sources. — [search summary](https://dev.to/techsifted/leonardo-ai-pricing-2026-free-credits-paid-plans-and-api-costs-16a2)

**Node-canvas tools, pricing only**
- **Figma Weave, formerly Weavy (verified, weave.figma.com/pricing):**
  - Plans, billed annually:
    - Free: 150 credits.
    - Starter: $24/mo ($202/yr), 1,500 credits, no rollover.
    - Professional: $45/mo ($378/yr), 4,000 credits, rolls over up to 3x.
    - Max: $100/mo ($840/yr), 10,000 credits, rolls over up to 4x.
    - Team: $42/user/mo ($504/yr), 4,500 credits/user, pooled.
  - Top-ups: $10 per 1,000–1,200 credits, valid 12 months.
  - API: Enterprise only.
  - Generation counts per plan:
    - Nano Banana 2.1: 571 images on Professional, about 7 credits each.
    - Kling 3: 324 videos on Professional, about 12.3 credits each; the settings are not stated.
    - Seedance 2.5: 308 videos on Professional.
    - Topaz upscale: 211 on Professional. — [weave.figma.com/pricing](https://weave.figma.com/pricing)
  - Veo 3.1 costs 120 credits (Fast) or 320 (Standard) per run. — [Wireflow](https://www.wireflow.ai/blog/figma-weave-pricing) (third-party)
- **FLORA (verified, flora.ai/pricing):**
  - Plans:
    - Free: $0.
    - Starter: $18/seat/mo.
    - Pro: $50/seat.
    - Max: $200/seat.
    - Enterprise: custom.
  - Usage comes from a pooled "shared dollar pool that scales with your seats", "metered at published model rates". Nano Banana 2 averages $0.151.
  - API and MCP are included from Starter. — [flora.ai/pricing](https://www.flora.ai/pricing)
- **Freepik/Magnific Spaces:** included in all Magnific plans. — [magnific.com/pricing](https://www.magnific.com/pricing)

**API marketplaces (fal, Replicate)**
- **fal video (verified):**
  - Veo 3.1 at 720p or 1080p: $0.20/s without audio, $0.40/s with audio. At 4K: $0.40/s without, $0.60/s with. — [fal Veo 3.1 llms.txt](https://fal.ai/models/fal-ai/veo3.1/llms.txt)
  - Kling v3 Pro: $0.112/s audio off, $0.168/s audio on, $0.196/s with voice control. — [fal Kling v3 Pro llms.txt](https://fal.ai/models/fal-ai/kling-video/v3/pro/text-to-video/llms.txt). This conflicts with fal's pricing page, which lists Kling v3 at $0.14/s. — [fal.ai/pricing](https://fal.ai/pricing)
  - Seedance 2.0: $0.682/s at 1080p ($3.41 per 5 s), $0.3034/s at 720p. — [fal Seedance 2.0 llms.txt](https://fal.ai/models/bytedance/seedance-2.0/text-to-video/llms.txt)
- **fal images, upscaling and GPUs (verified):**
  - Images: Nano Banana Pro $0.15, Nano Banana 2 $0.08, Seedream 4.5 $0.04, FLUX 2 $0.012 per megapixel.
  - Upscaling: SeedVR2 costs $0.001 per megapixel.
  - Serverless GPUs: H100 $4.50/hr list ("as low as" $2.49/hr), RTX PRO 6000 $4.00/hr. — [fal.ai/pricing](https://fal.ai/pricing)
- **Replicate (verified):**
  - Images: flux-1.1-pro $0.04 per image, flux-dev $0.025.
  - Video: Wan 2.1 i2v at 720p $0.25/s.
  - Hardware: H100 $5.49/hr, A100 80GB $5.04/hr, L40S $3.51/hr.
  - Prices for other models are on their individual model pages. — [replicate.com/pricing](https://replicate.com/pricing)

### Inferences
- **Magnific's effective cost per credit:**
  - Premium: about $0.000725 annually, $0.001 monthly.
  - Plus: about $0.000675 annually, $0.0009 monthly.
  - Pro: about $0.00066 annually, $0.00088 monthly.
  - All figures assume the full annual pool is used. The 12-month pool makes underuse far less costly than Higgsfield's monthly forfeiture.
- **Runway's effective cost per credit:** Standard about $0.019 annually; Pro about $0.0124; Max about $0.008 annually or $0.010 monthly.
- **Kling direct:** Pro at the renewal price is about $0.0109 per credit, and Ultra about $0.0062.
- **Google Flow:** On AI Pro, if all 1,000 credits go to Veo 3.1 Fast, that is 50 clips of 8 s at about $0.40 each. On Ultra 5x, a Quality clip works out to about $1.00 if the plan is fully used.
- Sora should be removed from any comparison. The OpenAI video option no longer exists as of 2026-11-08.

### Gaps
- No AUD prices appeared on any vendor page I read.
- **Not captured from primary pages:**
  - Midjourney (403 error).
  - OpenArt, Leonardo and Pollo (not fetched; Pollo not researched).
  - Runway's team and API pricing (on separate tabs).
  - Krea's API prices.
  - Magnific's Teams pricing (the tab showed no figures).
  - Google's Veo 3.1 API rate (outside the portion of the page I read).
- Whether Runway still offers an Explore or relaxed mode on any plan is unconfirmed. The fetched page did not mention it.
- Flow's output resolution for Veo 3.1 Fast and Quality (720p native versus 1080p) was not verified.

---

## 3. Cost table: (a) 100 photoreal 2K images, (b) 50 five-second 1080p clips, (c) 10 upscales to 4K

### Takeaway
- **Images:** Pay-per-use APIs or Magnific match or beat Higgsfield. All options fall roughly in the $5–$15 range, and they are close to free inside promo "unlimited" windows.
- **Video:** The cost depends heavily on the model.
  - Kling: Magnific at about $15, Kling direct at about $22, Higgsfield at about $21–27, and fal at about $28 (no audio) are all close.
  - Veo with audio: about $50 on Magnific, about $100 on fal per-second, and lowest per clip on Google AI Pro/Ultra inside Flow.
  - Seedance 2.0 at 1080p is the expensive outlier: about $74 on Higgsfield Ultra and $115–$170 elsewhere.
- **4K upscales:** effectively free on Runway Pro/Max and Krea, about $0.08 on fal SeedVR2, and about $1–2 on Magnific.

### Cited Findings (unit prices used; see the sections above for sources)
- **Higgsfield:**
  - Nano Banana Pro about 2 credits per image. — [Higgsfield MCP config](https://higgsfield.ai/mcp-pricing); [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)
  - Kling 4.0 at 1080p: 16.25 credits per 5 s. — [Higgsfield blog](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
  - Kling 3.0 at 1080p: 12.5 per 5 s; Seedance 2.0 at 1080p: 45 per 5 s. — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)
  - Veo 3.1 at 720p: 10 credits/s. — [Higgsfield blog](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
- **Magnific (MCP-exact):**
  - Kling 3.0 at 1080p, 5 s: 450 credits. Kling 4.0: 1,400. Veo 3.1 with audio: 1,500. Seedance 2.0 Pro: 3,500.
  - Image at 2K: 75.
  - Upscale: 90–1,080 by size tier. — [Magnific MCP / magnific.com/pricing](https://www.magnific.com/pricing)
- **Runway:**
  - Kling 4.0 at 1080p: 118 credits per 5 s (89 on promo).
  - Seedance 2.0 Pro: 160 per 4 s.
  - Nano Banana Pro at 2K: 20.
  - Upscaling is unlimited on Pro and Max. — [runway.com/pricing](https://runway.com/pricing)
- **fal:**
  - Kling v3 Pro: $0.112 or $0.168/s. Veo 3.1: $0.20 or $0.40/s. Seedance 2.0 at 1080p: $0.682/s.
  - Nano Banana Pro $0.15, Nano Banana 2 $0.08, Seedream 4.5 $0.04, FLUX 2 $0.012 per megapixel.
  - SeedVR2 $0.001 per megapixel. — [fal](https://fal.ai/pricing)
- **Google API:** Nano Banana Pro at 2K $0.134; Nano Banana 2 at 2K $0.101; Nano Banana 2.1 at 2K $0.0504 (batch $0.0252); Omni 1.2 Flash at 1080p about $0.104/s. — [aistudio.google.com/docs/pricing](https://aistudio.google.com/docs/pricing)
- **Google Flow:** AI Pro $19.99 for 1,000 credits; Veo 3.1 Fast 20 credits and Quality 100 per 8 s generation. — [one.google.com](https://one.google.com/about/google-ai-plans/); [Higgsfield blog](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
- **Kling direct:** Pro renews at $32.56 for 3,000 credits. — [Kling blog](https://kling.ai/blog/kling-video-3-0-credit-cost-guide). Kling 3.0 at 1080p costs 8 credits/s without audio and 12 with audio (third-party). — [magichour](https://magichour.ai/blog/kling-ai-pricing)

### Inferences: computed cost table

**Assumptions.**
- Subscription credits are priced at their fully-used effective rate.
- Higgsfield: Ultra annual $0.033/credit; burst (top-up) $0.0575/credit.
- Magnific: Pro annual $0.00066/credit.
- Runway: Max annual $0.008/credit.
- Kling direct: Pro renewal $0.01085/credit.
- Each clip is one generation with no rerolls. Real projects typically need 2–4 rerolls per keeper; multiply accordingly.
- All costs exclude VAT and GST.

**(a) 100 photoreal 2K images**

| Where | Model | Unit cost | 100 images |
|---|---|---|---|
| Higgsfield Ultra (plan credits) | Nano Banana Pro | 2 cr × $0.033 | **$6.60** ($11.50 at top-up rate; $0 marginal inside a 7-day unlimited window, which is web-only and slower) |
| Magnific Pro annual | Nano Banana 2 at 2K (75 cr) | about $0.05 | **about $4.95** (Nano Banana 2 1K is unlimited on Plus) |
| Magnific Pro annual | Magnific One High 2K (180 cr) | about $0.12 | about $11.90 |
| Runway Max annual | Nano Banana Pro at 2K (20 cr) | $0.16 | $16.00 |
| Google Gemini API direct | Nano Banana Pro at 2K / Nano Banana 2 at 2K / Nano Banana 2.1 at 2K | $0.134 / $0.101 / $0.0504 | **$13.40 / $10.10 / $5.04** ($2.52 in batch) |
| fal | Nano Banana Pro / Nano Banana 2 / Seedream 4.5 / FLUX 2 (about 4.2 MP) | $0.15 / $0.08 / $0.04 / about $0.05 | $15.00 / $8.00 / $4.00 / about $5.00 |
| Figma Weave Professional | Nano Banana 2.1 (about 7 cr) | about $0.08 | about $7.90 (settings not stated) |
| Self-hosted FLUX or open model on a rented RTX 5090 ($0.69/hr) | open weights | about $0.002–0.004 (assumes 10–20 s per image; unverified) | about $0.20–0.40 in compute, plus setup and operator time |

**(b) 50 five-second 1080p clips**

| Where | Model | Per clip | 50 clips |
|---|---|---|---|
| Higgsfield Ultra | Kling 4.0 (16.25 cr) | $0.54 | **$26.80** ($46.70 at top-up rate) |
| Higgsfield Ultra | Kling 3.0 (12.5 cr) | $0.41 | $20.60 |
| Higgsfield Ultra | Seedance 2.0 (45 cr) | $1.49 | **$74.25** ($129 at top-up rate) |
| Higgsfield Ultra | Veo 3.1, 6 s at **720p** (60 cr; 1080p price unknown) | $1.98 | about $99 |
| Magnific Pro annual | Kling 3.0 (450 cr) | $0.30 | **$14.85** |
| Magnific Pro annual | Kling 4.0 (1,400 cr) | $0.92 | $46.20 |
| Magnific Pro annual | Veo 3.1 with audio (1,500 cr) | $0.99 | **$49.50** |
| Magnific Pro annual | Seedance 2.0 Pro (3,500 cr) | $2.31 | $115.50 |
| Runway Max annual | Kling 4.0 (118 cr; 89 on promo) | $0.94 ($0.71) | $47.20 ($35.60 until Nov 30) |
| Runway Max annual | Seedance 2.0 Pro (about 200 cr per 5 s) | $1.60 | $80 (exceeds the monthly 9,500 credits) |
| Kling direct, Pro plan | Kling 3.0 without / with audio (40 / 60 cr) | $0.43 / $0.65 | **$21.70 / $32.60** (third-party credit rates) |
| fal API | Kling v3 Pro audio off / audio on | $0.56 / $0.84 | **$28 / $42** ($35 at fal's $0.14/s page rate) |
| fal API | Veo 3.1 no audio / with audio (only 4/6/8 s allowed; priced per 5 s equivalent) | $1.00 / $2.00 | $50 / $100 (6 s clips: $60 / $120) |
| fal API | Seedance 2.0 at 1080p | $3.41 | $170.50 |
| Google AI Studio API | Omni 1.2 Flash at 1080p (upsampled) | about $0.52 | about $26 |
| Google AI Pro, Flow | Veo 3.1 Fast (20 cr per 8 s clip) | about $0.40 | **$19.99**, the whole month's 1,000 credits (resolution unverified) |
| Google AI Ultra 5x, Flow | Veo 3.1 Quality (100 cr per 8 s) | about $1.00 | about $50 of a $99.99 plan |
| Self-hosted LTX-2/2.3 or Wan 2.2 on a rented 5090 | open weights at 720p (1080p needs upscaling) | about $0.005 (LTX) to about $0.05–0.10 (Wan) | about $0.25–$5 in compute (see section 4) |

**(c) 10 upscales to 4K**

| Where | Cost for 10 |
|---|---|
| Runway Pro/Max | $0 marginal ("Unlimited Topaz AI Upscale", "Unlimited 4K video upscaling") |
| Krea Basic and above | Included (Topaz up to 22K; Enhancer counts 625 on Basic, 2,500 on Pro) |
| Google AI Ultra 20x | Included (4K image and video upscaling) |
| fal SeedVR2 (8.3 MP output) | about $0.08 |
| Magnific Pro annual (M–L tier, 180–270 cr; XL 1,080 cr) | about $1.19–1.78 (XL: about $7.13) |
| Figma Weave Professional (Topaz, about 19 cr) | about $2.10 |
| Higgsfield | Unknown: no primary upscale credit price found |

**Summary.** For the user's likely mix of Kling and Nano Banana Pro, Higgsfield Ultra annual is competitive *if credits are fully used*. Magnific is about 30–45% cheaper on Kling 3.0 and has annual credit pooling. For Veo with audio, Magnific ($0.99 per 5 s) or Google Flow beat fal and likely beat Higgsfield. Seedance 2.0 at 1080p is cheapest on Higgsfield.

### Gaps
- Higgsfield's Veo 3.1 1080p and upscale credit costs; Krea's 1080p clip costs; Adobe's partner-model credit costs for Kling and Runway at 1080p (only "up to 40 five-second videos" on Pro for Adobe's own Firefly Video model, about 100 credits each, i.e. about $0.50 per clip).
- Resolution parity: Flow and some "1080p" options may be upscaled from 720p. Quality per clip is not normalized here; other researchers cover quality.
- Queue speed: no hard benchmarks were found. The only data points:
  - Higgsfield unlimited "throttled at 15 min per gen".
  - Midjourney Relax waits of 0–30 minutes.
  - Krea and Higgsfield concurrency caps: Ultra 8 videos and 8 images; Krea Pro 8 images and 4 videos.

---

## 4. Self-hosting / open-source economics (ComfyUI + Wan/Flux/LTX)

### Takeaway
Rented consumer GPUs make the marginal cost of open-model generation nearly zero: fractions of a cent to about $0.10 per clip. The real costs are setup, maintenance, VRAM limits at 1080p, iteration time and a quality gap against Veo, Kling and Seedance. For an agency, self-hosting pays off only for high-volume drafting, LoRA and brand-style work, or privacy-sensitive jobs.

### Cited Findings
- **RunPod pod rates:**
  - RTX 5090: $0.69/hr Community, $0.94/hr Secure.
  - RTX 4090: $0.34/hr Community, about $0.69/hr Secure. Other quotes are $0.59 and $0.89.
  - H100 PCIe: $1.99/hr Community, $2.89/hr Secure.
  - H100 SXM: from $2.69/hr Community, $3.99/hr Secure.
  - Billed per second. — [runpod.io pricing](https://www.runpod.io/pricing); [runpod.io gpu-instance](https://www.runpod.io/gpu-instance/pricing); [thundercompute](https://thundercompute.com/blog/runpod-pricing-vs-thunder-compute)
- **RunPod serverless:** RTX 4090 about $1.10/hr, RTX 5090 about $1.58/hr. Community Cloud is reportedly no longer accepting new hosts. — [diyai.io](https://diyai.io/ai-tools/hosting/runpod-pricing/)
- **Other GPU hosts:** fal serverless H100 $4.50/hr list ("as low as" $2.49). — [fal.ai/pricing](https://fal.ai/pricing). Replicate H100 $5.49/hr. — [replicate.com/pricing](https://replicate.com/pricing)
- **LTX-2 speed:** On an RTX 5090 (32 GB), "a 720p 24fps 4-second clip" generates in about 25 seconds when it fits in VRAM. An 8-second clip takes about 3 minutes because of weight streaming. — [NVIDIA LTX-2 ComfyUI guide](https://www.nvidia.com/en-gb/geforce/news/rtx-ai-video-generation-guide)
- **LTX versus Wan:** On an RTX 4090, LTX-2.3 is 10–14x faster than Wan 2.2 (about 18x on simple scenes). Wan 2.2 "needed more babysitting above 768p". — [ltxworkflow, 2026-04-19](https://ltxworkflow.com/blog/ltx-23-vs-wan-22-comparison-2026)
- **Wan 2.2 on weak hardware:** Wan 2.2 14B on an RTX 3060 12GB took about 15 minutes for 81 frames at 840×420. On an M1 Max it took 82 minutes per 2-second clip. — [lilting.ch](https://lilting.ch/en/articles/ltx2-wan22-mac-local-video-gen)
- **Hosted open models are not cheap:** Replicate charges $0.25/s for Wan 2.1 at 720p, which is $1.25 per 5 s. — [replicate.com/pricing](https://replicate.com/pricing). Higgsfield prices Wan 3.0 at 720p at 9 credits per 5 s. — [Higgsfield blog](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)

### Inferences
- **Per clip on a RunPod 5090 at $0.69/hr:**
  - LTX-2 4 s at 720p: about 25 s of compute, or about $0.005.
  - An 8 s clip: about 3 minutes, or about $0.035.
  - Wan 2.2: about 10–14x slower, so roughly 4–6+ minutes per clip, or about $0.05–0.10.
  - Even with 3–4 rerolls, 50 clips cost under $10 in GPU time.
- **Per image:** Flux or other open image models likely cost under $0.005 each on rented 4090/5090s. The per-image timing was not verified.
- **Owning a 4090 or 5090:** only electricity is marginal, and the card takes months of heavy use to pay back against $20–100/mo subscriptions.
- **Hidden costs:**
  - Pod spin-up and idle billing.
  - Model downloads of tens of GB.
  - ComfyUI node breakage.
  - VRAM ceilings at 1080p and beyond 5 s.
  - Operator time, which usually dominates for a small agency.
  - The quality and consistency gap at 1080p against Veo, Kling and Seedance. Quality is covered by other researchers.

### Gaps
- No verified absolute timings for Wan 2.2 at 5 s 720p or 1080p on a 4090 or 5090. The chimolog.co benchmark exists but its timings were not retrieved.
- Vast.ai and Modal rates were not retrieved.
- Local GPU purchase prices were not researched.

---

## 5. Automation (APIs/MCP from Claude Code) and team/seat features

### Takeaway
Higgsfield, Magnific/Freepik, fal, FLORA and Figma Weave can already be driven from Claude Code via MCP. Three are live in this session: Higgsfield MCP, Magnific MCP, and Figma MCP's `weave_*` tools. Google, Kling, Runway and Replicate offer REST APIs.

For seats:
- Higgsfield Team/Scale, Krea Business (up to 50 seats flat), Adobe Firefly for teams, Weave Team, FLORA per-seat and LTX collaborators are the agency-relevant options.
- On Higgsfield, MCP calls always spend credits; unlimited does not apply.

### Cited Findings
- **Higgsfield MCP (observed live in this session, 2026-11-08):**
  - Exposes generate_image, generate_video and their batch versions, upscale_image and upscale_video, balance, transactions, Ads Studio, Marketing Studio, workspaces and team top-up links.
  - Team owners get team top-up and auto-refill links; team members cannot buy credits. — [Higgsfield MCP](https://higgsfield.ai/mcp-credits)
  - MCP, CLI and Canvas runs deduct credits even when unlimited is active. — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)
- **Magnific MCP (observed live):**
  - Exposes images_generate, video_generate, video_upscale, spaces_* and flows_*, brand kits, a read-only `simulate_cost` estimator, projects sharing and comments.
  - "API access with credit-based usage" on all individual plans. — [magnific.com/pricing](https://www.magnific.com/pricing)
- **fal official hosted MCP:**
  - Claude Code setup: `claude mcp add --transport http fal-ai https://mcp.fal.ai/mcp` with an API-key header.
  - A newer OAuth relay endpoint is `https://mcp.fal.ai/mcp-relay`; the docs conflict on which to use. — [fal MCP docs](https://fal.ai/docs/documentation/setting-up/mcp)
- **FLORA:** "API and MCP" included from the Starter plan ($18/seat). — [flora.ai/pricing](https://www.flora.ai/pricing)
- **Figma Weave:**
  - Public API is Enterprise-only per the pricing page. — [weave.figma.com/pricing](https://weave.figma.com/pricing)
  - The Figma MCP server in this session exposes `weave_run_model` and `weave_run_tool`. — observed in session tool list.
- **Replicate:** No official MCP server was found in search. Its REST API is pay-per-second or per-output. — [replicate.com/pricing](https://replicate.com/pricing)
- **Google:** Gemini API and AI Studio sell Nano Banana and Omni Flash per image or second, with a 50% Batch discount. — [aistudio.google.com/docs/pricing](https://aistudio.google.com/docs/pricing)
- **Kling:** separate API priced in units (about $0.14 each, third-party). — [magichour](https://magichour.ai/blog/kling-ai-pricing)
- **Runway:** has a Dev pricing tab, which was not captured. — [runway.com/pricing](https://runway.com/pricing)
- **Krea:** has a separate API pricing page. — [krea.ai/pricing](https://www.krea.ai/pricing)
- **Seats and teams:**
  - Higgsfield: Team (2–9 seats, pooled credits, 16 + 16 parallel) and Scale (5–15 seats, SSO, 32 + 32). — [Krea blog](https://www.krea.ai/blog/higgsfield-pricing-explained-2026-unlimited-credits-and-real-monthly-costs)
  - Krea Business: $160/mo shown, up to 50 seats, unlimited concurrency. — [krea.ai/pricing](https://www.krea.ai/pricing)
  - Adobe: Firefly Pro, Pro Plus and Premium for teams at $19.99, $49.99 and $199.99 per license. — [adobe.com](https://www.adobe.com/products/firefly/plans.html)
  - Figma Weave Team: $42/user/mo annual, shared credit pool and admin. — [weave.figma.com/pricing](https://weave.figma.com/pricing)
  - FLORA: per-seat billing with pooled usage and per-member caps on Pro and Max. — [flora.ai/pricing](https://www.flora.ai/pricing)
  - LTX Studio: Standard 5 and Pro 10 collaborators per project. — [Tools for Humans](https://toolsforhumans.ai/ai-tools/ltx-studio)

### Inferences
- **Automation fit for Claude Code:**
  - fal and Gemini API are the cleanest pay-per-use backends: per-second or per-image billing, no expiry, and every major non-Google model on fal.
  - Magnific MCP is the best subscription-backed MCP for budgeting, because `simulate_cost` lets an agent quote before spending and credits last 12 months.
  - Higgsfield MCP is feature-rich, with Ads Studio and Marketing Studio, but always burns credits.
- **Seat economics:** Krea Business is the cheapest per head for teams of 5 or more if units suffice. Higgsfield Team at $65–79 per seat for 1,000 credits costs about $0.065–0.079 per credit, roughly twice Ultra individual.

### Gaps
- Runway API rates, Krea API rates, Magnific Teams pricing and Higgsfield's public API (beyond MCP) were not verified.
- No official Replicate MCP server was confirmed.

---

## 6. Recommendation patterns

### Takeaway
The pattern the evidence supports is one exploration subscription with long-lived or annual credits and the agency's preferred UX, plus pay-per-use APIs (fal or Gemini) for automated production runs, plus included-unlimited upscaling (Runway, Krea or Topaz-inclusive plans). Avoid buying Higgsfield top-ups for bursts; they cost $0.0575 per credit and expire in 90 days.

### Cited Findings
- Higgsfield monthly credits are forfeited at renewal and top-ups expire in 90 days. — [Higgsfield MCP config](https://higgsfield.ai/mcp-credits); [Segmind](https://blog.segmind.com/higgsfield-credits-explained-expiry-rules-and-real-cost/)
- Magnific credits are "valid for 1 year, no monthly resets". — [magnific.com/pricing](https://www.magnific.com/pricing)
- Runway top-ups never expire; Pro and Max upscaling is unlimited. — [runway.com/pricing](https://runway.com/pricing)
- Weave Pro and Max credits roll over 3–4x; top-ups last 12 months. — [weave.figma.com/pricing](https://weave.figma.com/pricing)
- fal and Gemini API are pure pay-per-use (per second or per image). — [fal.ai/pricing](https://fal.ai/pricing); [aistudio.google.com/docs/pricing](https://aistudio.google.com/docs/pricing)
- Google AI Pro at $19.99 gives 1,000 Flow credits (about 50 Veo 3.1 Fast or 10 Quality clips). — [one.google.com](https://one.google.com/about/google-ai-plans/); [Higgsfield blog](https://geo.higgsfield.ai/blog/veo-3-1-cost-and-limits)
- Adobe Firefly states its own models are "safe for commercial use"; partner-model outputs are the user's responsibility. — [adobe.com](https://www.adobe.com/products/firefly/plans.html)

### Inferences
- **Pattern A: keep Higgsfield, but right-size it.**
  - Stay on Ultra annual only if the agency consistently burns about 3,000 credits a month on Kling and Seedance. Its per-credit rate (about $0.033) is the best seen for Seedance 2.0 at 1080p.
  - Use promo unlimited windows for image exploration only.
  - Route automated or MCP work and any overflow to fal or Gemini instead of Higgsfield top-ups.
- **Pattern B: switch the exploration seat to Magnific Plus or Pro (annual).**
  - Cheaper Kling 3.0 and Veo-with-audio per clip.
  - Spaces, stock, Topaz/Magnific upscalers and an MCP with cost simulation.
  - No monthly forfeiture.
  - Seedance at 1080p is costly there, so buy it via Higgsfield or fal only when needed.
- **Pattern C: Google-centric.**
  - Google AI Pro ($19.99) or Ultra 5x ($99.99) for Veo 3.1 and Nano Banana Pro in Flow.
  - Gemini API for scripted Nano Banana batches: $0.0252–0.134 per 2K image.
  - A Kling or Seedance supplement via fal.
- **Pattern D: hybrid with self-hosting.**
  - LTX-2.3 or Wan on a rented 5090 for animatics and drafts, plus brand LoRAs.
  - A closed model for hero shots.
- **Team:** For 3 or more creatives, compare Krea Business (flat, up to 50 seats) or Weave Team ($42/user) against Higgsfield Team ($65–79 per seat for 1,000 credits).
- **Sora:** Remove it from planning; the API ended 2026-09-24.

### Gaps
- No independent benchmark of queue latency across platforms at peak times.
- No AUD pricing found on any vendor page I read.
- Commercial and IP terms beyond one-liners are delegated to the legal researcher.
