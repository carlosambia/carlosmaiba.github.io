# AI Image Generation and Editing Models for Agency Work (as of 8 Nov 2026)

Scope: still-image generation and editing models plus upscalers, for a small agency choosing a model per job (photoreal people and places, product, editing client photos, brand series, typography, vector, upscaling). Research date: 2026-11-08. All prices in USD unless a source gives EUR. "Secondary" marks a reseller or blog source rather than the vendor. Leaderboards change daily, so every leaderboard figure below is a snapshot.

Source quality note: Arena (arena.ai, formerly LMArena) and Midjourney's own docs blocked direct fetching (HTTP 403), so Arena figures come from search snapshots and a third-party roundup, and Midjourney V8.x facts come from a third-party guide that cites Midjourney's changelog. The Artificial Analysis (AA) text-to-image leaderboard was fetched directly. The AA image-editing leaderboard URL returned 404 and was not retrieved.

---

## 1. Which models lead in Nov 2026 for photorealism and for editing?

### Takeaway
OpenAI dominates both blind-vote leaderboards in Nov 2026. GPT Image 2.6 Sunburst/Flare (released 4 Nov 2026) and 2.5 Sunburst/Flare (Sep 2026) hold AA text-to-image #1-4, and GPT Image 2.5 Sunburst led Arena's image-edit board on 6 Nov. Google's Nano Banana 2.1 (6 Oct 2026) is the best value at near-top quality. In hands-on realism tests it and Nano Banana 2 are the most "photographic", especially for interiors and homes. Next come Microsoft MAI-Image-2.6, xAI Grok Imagine Image 2.0, Meta Muse Image, FLUX 3 Image (Oct 2026) and Seedream 5.0 Pro. Midjourney V8.2 (default since 24 Jul 2026) is absent from all leaderboards because it has no API. It remains the pick for art direction and aesthetics rather than documentary realism. Specialists: Recraft V4.1 (vector and brand), Ideogram 4/4.5 (typography and precise edits), Qwen-Image 3.0 Pro (dense or multilingual text), Firefly Image 5 (commercially safe, inside Adobe).

### Cited Findings

**Independent leaderboard: Artificial Analysis Text-to-Image (AA-Image-T2I v2.1, fetched 8 Nov 2026; the page shows no "as of" date, but its newest entries are Nov 2026). Elo, creator, release date and API price per 1k images at 1024²:**
- #1 GPT Image 2.6 Sunburst (max): 1259, OpenAI, Nov 2026, $210.72/1k. #2-3 GPT Image 2.6 Flare (max): 1228. #2-3 GPT Image 2.5 Sunburst (max): 1227, Sep 2026. #4 GPT Image 2.5 Flare (max): 1208. #5-6 GPT Image 2 (high): 1188, Apr 2026, $211/1k — [Artificial Analysis T2I leaderboard](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- #5-8 Nano Banana 2.1: 1176, Google, Oct 2026, $33.60/1k. #6-8 MAI-Image-2.6: 1168, Microsoft AI, Aug 2026, $38.91/1k. #6-8 Grok Imagine Image 2.0: 1166, creator listed as "SpaceXAI", Aug 2026, $60/1k. #9 Nano Banana 2 (Gemini 3.1 Flash Image): 1142, Feb 2026, $67/1k — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- Mid-pack: Meta Muse Image 1128 ($10/1k, Jul 2026); GPT Image 1.5 (high) 1124; Nano Banana Pro (Gemini 3 Pro Image) 1119 ($134/1k, Nov 2025); FLUX 3 Image 1117 ($48/1k, Oct 2026); Seedream 5.0 Pro 1101 ($90/1k, Jul 2026); Qwen-Image-3.0-Pro 1095 ($40/1k, Jul 2026); FLUX 3 Image Klein 1043 ($9/1k); Bria Fibo 2.0 1039; Krea 2 Large 1035 ($60/1k, May 2026); Seedream 4.5 1030; Recraft V4.1 Utility 1028 ($35/1k); Ideogram 4.0 (Quality) 1027 ($100/1k, Jun 2026); Luma UNI 1 Max 1026; FLUX.2 [max] 1021 ($70/1k); Krea 2 Medium Turbo 1020 ($15/1k); Seedream 5.0 Lite 1019; Ideogram 4.5 (High) 1016 (Sep 2026); FLUX.2 [pro] 1003; FLUX.2 [dev] 1000 — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- Laggards (older generation): FLUX.1 Kontext [max] 930, Kontext [pro] 921, Ideogram 3.0 913, Leonardo Lucid Origin Ultra 879 ($86.71/1k, Aug 2025), Lucid Origin Fast 863, Leonardo Phoenix 0.9 Ultra 831 and Phoenix 1.0 Fast 828, FLUX1.1 [pro] 871 — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- Open weights on AA: one cached snapshot shows Qwen-Image-2.1 leading the open-weights board (Elo 1045). The full board above also lists FLUX 3 Klein, FLUX.2 [dev], Ideogram 4.0, Krea 2 and NVIDIA Cosmos3 — [AA open-weights leaderboard (search snapshot)](https://artificialanalysis.ai/image/leaderboard/text-to-image/open-weights)
- Not on AA at all: Midjourney (no API), Reve 2.1 and Adobe Firefly Image 5 — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text) (absence observed in the fetched list)

**Independent leaderboard: Arena (arena.ai, formerly LMArena):**
- Image-edit board, updated 6 Nov 2026 (search snapshot): GPT-Image-2.5 Sunburst #1 (1517±5), GPT-Image-2.5 Flare #2 (1483±4). Nano Banana Pro, which led edits earlier in the year, is no longer near the top. GPT Image 2.6 was not reported in this snapshot — [Arena image-edit leaderboard](https://arena.ai/leaderboard/image/image-edit/single-image)
- A Sep 2026 edit snapshot had a top five of Sunburst (1,526), Flare, GPT-Image-2, Grok Imagine Image 2.0 and MAI-Image-2.6 — [models.fru.dev Arena edit tracker](https://models.fru.dev/boards/lmarena-image-edit)
- Text-to-image board (as of 29 Oct 2026): GPT Image 2.5 Sunburst #1 (1427), Flare #2 (1401), GPT Image 2 #3, MAI-Image-2.6 #4 (1329), Nano Banana 2.1 #5 (1325), Grok Imagine Image 2.0 #6 (1317), Reve 2.1 #7 (1300), Meta Muse Image #9 (1269), Qwen-Image 3.0 Pro #12 (1254), Seedream 5.0 Pro #14 (1250), Ideogram 4 Quality #20 (1200), Recraft V4.1 Utility Pro #26 (1168). FLUX 3 Image was outside the top 30 — [TeamDay "Best AI Image Models Nov 2026" (secondary, updated 29 Oct 2026)](https://www.teamday.ai/blog/best-ai-image-models-2026)
- Microsoft previewed MAI Image 2.7 on 27 Oct 2026 for editing only. Generation is "coming soon", with no API or price yet. Microsoft's claim that it debuted at #3 on Arena's edit board is unconfirmed in the Arena snapshot — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

**Model-by-model status (versions and dates):**
- **OpenAI GPT Image.** GPT Image 2 (ChatGPT Images 2.0) launched 23 Apr 2026 and replaced DALL-E 3 in ChatGPT. Images 2.5 (Sep 2026) introduced the API models Flare (fast) and Sunburst (precision and editing). GPT Image 2.6 was announced 4 Nov 2026 as `gpt-image-2.6-flare` and `gpt-image-2.6-sunburst`, "50% faster", on every ChatGPT plan including Free. 2.6 adds GIF output, SVG export (API), saved reference images and markup editing — [eesel AI (secondary)](https://www.eesel.ai/blog/chatgpt-images-2-6); 2.5 Sunburst/Flare launched 8 Sep 2026, and OpenAI recommends Sunburst where "editing precision matters most" — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- One early tester found 2.6 Flare "too simplistic" or broken in some cases and rolled back to 2.5 Flare. The same tester found Sunburst "seems solid" — [eesel AI](https://www.eesel.ai/blog/chatgpt-images-2-6)
- **Google Nano Banana.** Nano Banana 2.1 (`gemini-nano-banana-2.1`) has been generally available since 6 Oct 2026 and replaced Nano Banana 2 (`gemini-3.1-flash-image`, Feb 2026). Nano Banana Pro (`gemini-3-pro-image`, Nov 2025) and Nano Banana 2 Lite (`gemini-3.1-flash-lite-image`, Jun 2026) are still listed — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing); [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- **Black Forest Labs FLUX.** FLUX 3 Image launched about 1-2 Oct 2026. It adds bounding-box (JSON) layout control and multi-turn edits that "leave the rest of the picture alone". Commercial self-host weights are sold, and open "Dev" weights were promised without a date — [Tech Times](https://www.techtimes.com/articles/328502/20261002/black-forest-labs-launches-flux-3-image-json-bounding-boxes-lock-unchanged-pixels-numerically.htm); [AI Frontier Post](https://aifrontierpost.com/articles/flux-3-image-black-forest-labs-launch/). FLUX 3 Image Klein is listed by BFL as a 5.6B-parameter model that "runs on a single consumer GPU", with self-host licensing — [BFL pricing](https://bfl.ai/pricing). FLUX.2 [max]/[pro]/[flex]/[dev] date from Nov-Dec 2025, and FLUX.2 [klein] 4B/9B from Jan 2026 — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text). FLUX.1 Kontext (May 2025) is still sold but is now low-ranked — [BFL pricing](https://bfl.ai/pricing)
- **Midjourney.** V8.2 has been the default since 24 Jul 2026 ("aesthetics, image quality, Personalization"). V8.1 shipped 14-30 Apr 2026 and V8.0 alpha on 17 Mar 2026. V7 (Apr 2025) is still selectable. The V8 Edit Model opened to everyone on 27 Aug 2026. Thinking Mode (alpha, 7-8 Oct 2026) targets typography and prompt accuracy — [Blake Crosley Midjourney guide (secondary, cites MJ changelog)](https://blakecrosley.com/guides/midjourney); "No public API" — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- **ByteDance Seedream.** Seedream 5.0 Pro launched 8 Jul 2026 (BytePlus ID `dola-seedream-5-0-pro-260628`). It is built for infographics and for edits guided by boxes, arrows and sketches — [mer.vin (secondary)](https://mer.vin/2026/07/seedream-5-0-pro-api-on-byteplus-precision-image-generation-and-multi-reference-editing/); 5.0 Lite (`seedream-5-0-260128`, Feb 2026); 5.0 Flash arrived in early Oct 2026 — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- **Ideogram.** Ideogram 4 was released 3 Jun 2026 with open weights (9.3B parameters, 2K output). Ideogram 4.5 (about 30 Sep 2026) is hosted only and focuses on precise mask- and reference-based editing. Weights for 4.5 are "planned" — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026); [Puter Ideogram pricing (secondary)](https://developer.puter.com/tutorials/ideogram-api-pricing/)
- **Recraft.** V4.1 (May 2026; V4.1 Vector 13 May 2026) is design-focused with native SVG. "V4 Styles" (Aug 2026) keeps style consistent across batches. A price cut on 31 Jul 2026 set V4.1 at $0.035 per image — [Morphic (secondary)](https://morphic.com/resources/models/recraft-v4-1); [tech-insider (secondary)](https://tech-insider.org/?p=18813); [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- **Adobe Firefly.** Firefly Image Model 5 was announced at MAX on 28 Oct 2025 (public beta). It has native 4MP output, Prompt to Edit (GA), Layered Image Editing (in development) and Firefly Custom Models (private beta, expected Nov 2025) — [Adobe newsroom](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly). Adobe MAX 2026 runs 10-12 Nov 2026 in Miami Beach, two days after this research date, so a newer Firefly image model may be announced right after these notes — [Creative Bloq](https://www.creativebloq.com/design/design-software/adobe-max-2026s-lineup-tells-us-a-lot-about-the-companys-ai-priorities-right-now)
- **Reve.** Reve 2.1 shipped about 9 Jul 2026 (about a month after Reve 2.0). It is "layout-first" with native 4K output — [eesel AI Reve 2.1 pricing (secondary)](https://www.eesel.ai/blog/reve-2-1-pricing); [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- **Krea's own model.** Krea 2 (12 May 2026) is Krea's first from-scratch foundation model, built for aesthetics and style control. Krea's docs say to use the Large variant "for the richest texture or full photorealism". Open weights followed on 22 Jun 2026 (Krea 2 RAW and Turbo) under a custom license with requirements above 50 seats — [Krea docs](https://www.krea.ai/docs/user-guide/features/krea-2); [VentureBeat](https://venturebeat.com/ai/enterprise-grade-ai-image-generation-in-2-seconds-is-here-krea-2-raw-and-turbo-available-as-open-weights-under-custom-license)
- **Leonardo.** No confirmed new Leonardo-native image model in 2026 was found. Lucid Origin (Aug 2025) is still its flagship, and Phoenix 1.0 dates from Dec 2024. A "Phoenix 2.0" claim comes from one promotional blog with no official backing — [search summary incl. YesPress, Flowith](https://yespress.io/leonardo-ai); AA ranks Lucid Origin Ultra 879 and Phoenix 1.0 Fast 828, far below the frontier — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text). Leonardo reportedly added Nano Banana 2.1 on 9 Oct 2026 (single source, unverified) — [tech-insider (secondary)](https://tech-insider.org/leonardo-ai-image-generator-tutorial-2026)
- **Alibaba Qwen.** Qwen-Image 3.0 Pro was released 21 Jul 2026 and became GA on 5 Aug 2026. It claims prompts up to 4.5K tokens, text as small as 10px and 12 languages, and was the slowest in one test at 40-70 s per image — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026). Qwen-Image 2.1 open weights came out 20 Sep 2026 under a non-commercial research licence, a departure from the earlier Apache-2.0 Qwen-Image line — [invideo licence matrix / search summary](https://invideo.io/blog/open-source-image-models-licenses/)
- **2026 newcomers:** Microsoft MAI-Image-2.5/2.6/2.6-Flash (Jun-Sep 2026), xAI Grok Imagine Image 2.0 (Aug 2026), Meta Muse Image (Jul 2026, "a reasoning model that plans the layout before rendering"), Luma UNI 1 (May 2026), Bria Fibo 2.0 (Oct 2026), HiDream-O1 (May-Jun 2026), NVIDIA Cosmos3 (May 2026) and Tencent Hy Image 3.5 Preview (22 Sep 2026, up to 4K, no verified price) — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text); [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

**Recommendations from a third-party roundup (TeamDay, 29 Oct 2026):** GPT Image 2.5 Sunburst for general production and precise edits. Nano Banana 2.1 for realistic people and products on a budget (Grok Imagine 2.0 runner-up). Qwen-Image 3.0 Pro for dense or multilingual text. FLUX 3 for bounding-box layout. Muse Image for lowest-cost volume. Recraft V4.1 for brand, icons and vector. Midjourney V8.2 for art direction. Firefly Image 5 for Adobe-centred teams — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

### Inferences
- For a small agency, the top tier is effectively three API families: GPT Image 2.5/2.6 (best adherence and editing, priciest at high quality), Nano Banana 2.1 (best quality per dollar, strongest "photographic" look in tests) and FLUX 3 (layout control and pixel-locked edits). Midjourney sits beside them as an aesthetic and art-direction tool rather than a production editing tool.
- GPT Image 2.6 is four days old. Its leaderboard lead is in "max" quality mode (about $0.21 per image), and one early tester reverted Flare 2.6 to 2.5. Sensible practice is to keep 2.5 Sunburst as the edit default until 2.6 shows up on Arena's edit board.
- Leonardo's own models (Phoenix, Lucid Origin) are a generation behind on independent boards. Leonardo's value is now as a host for third-party models, which is aggregator territory and out of scope here.

### Gaps
- Could not fetch arena.ai directly (403), so Arena figures come from search snapshots and TeamDay. The AA image-editing leaderboard was not retrieved, so there is no independent AA edit ranking in these notes.
- Midjourney official docs (docs.midjourney.com) returned 403. V8.x facts rely on a third-party guide that cites MJ changelogs.
- No independent leaderboard includes Midjourney, Reve (Reve is on Arena but not AA) or Firefly Image 5, so their realism rank is not benchmarked.
- No official Google announcement page for Nano Banana 2.1 was retrieved. Specs come from the pricing page plus secondary coverage.
- Whether Adobe launches a Firefly Image 6 at MAX (10-12 Nov 2026) is unknown at this research date.

---

## 2. Capability matrix (references, consistency, multi-image, real-photo editing, in/outpainting, text, resolution, aspect ratios, brand training, vector, transparency)

### Takeaway
For editing real client photos while keeping identity, use GPT Image 2.5/2.6 Sunburst (Arena edit #1, markup and mask edits), Nano Banana 2.1 (14 references, 4-character consistency), FLUX 3 (pixel-locked multi-turn edits) or Ideogram 4.5 (mask and reference precise edits). Native vector and brand styles are Recraft V4.1's niche. GPT Image 2.6 now exports SVG via the API, but static and one image per call. For trainable brand models, the options are FLUX (Klein/FLUX.2 [dev] with LoRA rights under BFL licences, plus commercial FLUX 3 weights), Krea 2 open weights (commercial-friendly under a revenue/seat line) and Adobe Firefly Custom Models (enterprise). Midjourney has strong style tools (--sref, moodboards, personalization) but is "not character-consistent". On V8 its edit model (4 references) replaced Omni Reference, which is now V7-only.

### Cited Findings

**OpenAI GPT Image 2 / 2.5 / 2.6**
- Quality levels low, medium, high, xhigh and max (xhigh and max are new in 2.5). Background can be transparent, opaque or auto. Masks are supported but "Masking with GPT Image is entirely prompt-based", so the model may not follow the mask's exact shape. Markup-guided edits (2.5/2.6) take a transparent PNG annotation layer of up to 16,777,216 px. 2.6 supports SVG and animated GIF output through the Image API. A "complexity" setting (low/medium/high) notes "Higher complexity can increase latency and introduce unwanted changes" — [OpenAI image generation guide](https://developers.openai.com/api/docs/guides/image-generation)
- SVG export is API-only: `n` must be 1, it costs two model calls, edits cannot output SVG and the file is static. GIF has 2-64 frames and is not available on the edits endpoint. ChatGPT now has saved reference images. Outputs carry C2PA metadata and a SynthID watermark — [eesel AI](https://www.eesel.ai/blog/chatgpt-images-2-6)
- Size contract (reported for gpt-image-2): max edge 3840 px, edges in multiples of 16, long-to-short ratio ≤3:1, total 655,360 to 8,294,400 px. 4K presets are 3840×2160 and 2160×3840, and several sources call 4K experimental — [yingtu.ai (secondary)](https://yingtu.ai/en/blog/gpt-image-2-4k-image-generation); [API易 docs (secondary)](https://docs.apiyi.com/en/news/gpt-image-2-launch)
- Sources conflicted on transparency for gpt-image-2. An Apr-era report said transparent requests failed, while API易 says transparency was enabled 21 Aug 2026 with PNG/WebP output. The current OpenAI guide lists transparent background as an option — [API易](https://docs.apiyi.com/en/news/gpt-image-2-launch); [OpenAI guide](https://developers.openai.com/api/docs/guides/image-generation)
- Multi-reference editing works in practice: one test ran a 16:9 thumbnail with 4 references and a 4:5 ad with 5 references on 2.6 — [Mockingbird](https://www.mockingbirdhouse.com/guides/gpt-image-2-6-pricing)
- Sunburst is "more consistent across edits at medium or high quality". Flare can return a low-quality image "in as little as six seconds" — [eesel AI](https://www.eesel.ai/blog/chatgpt-images-2-6)

**Google Nano Banana 2.1 / Pro**
- Up to 14 reference images, with character consistency for up to 4 characters and object fidelity for up to 10 objects. Output tiers are 1K, 2K and 4K, and panoramic ratios run 1:8 to 8:1 (sources count 14 or 15 ratios in total). Tiling artifacts at 2K/4K on panoramic ratios are reportedly fixed. The kie.ai host caps references at 10 — [zko.world (secondary)](https://zko.world/blog/nano-banana-2-1-generally-available-reference-images); [search summary incl. cellcog/kju](https://cellcog.ai/blog/nano-banana-2-1/); Google's own post shows 4:1, 1:4, 8:1 and 1:8 ratios — [Nano Banana on X](https://x.com/NanoBanana/status/2027062140419334147?lang=en)

**Black Forest Labs FLUX 3 / FLUX.2 / tools**
- FLUX 3 Image does text-to-image and image-to-image. Reference images carry no extra charge up to the documented maximum and are accepted up to 16 MP (above 4 MP they are downscaled to 4 MP). Output tiers run from 768² to 4K (about 16 MP) — [BFL pricing](https://bfl.ai/pricing); it takes up to 10 reference images, offers JSON bounding-box layout and multi-turn edits "without changing any other pixel", and has native 2K/4K — [Tech Times](https://www.techtimes.com/articles/328502/20261002/black-forest-labs-launches-flux-3-image-json-bounding-boxes-lock-unchanged-pixels-numerically.htm); [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- FLUX.2: max 4 MP output for all operations, and multi-reference is supported (each reference counts as 1 MP). BFL Image Tools: Fill [pro] for inpainting and outpainting with mask and prompt, Outpainting [high]/[fast], Erase (masked object removal), Deblur and VTO (virtual try-on), all max 4 MP — [BFL pricing](https://bfl.ai/pricing)
- Brand training: BFL self-host licences (Builder, Platform, Professional, Enterprise) for FLUX 3 Image Klein, FLUX.2 [klein] and FLUX.2 [dev] include "fine-tuning and LoRA rights" (Builder: 10K images/month, 1 domain, 10 users) — [BFL pricing](https://bfl.ai/pricing); FLUX 3 commercial weights can be fine-tuned on your own infrastructure — [search summary of FLUX 3 launch coverage](https://aifrontierpost.com/articles/flux-3-image-black-forest-labs-launch/)

**Midjourney V8.1 / V8.2**
- HD outputs at 2048 px natively with no upscaler step. Max aspect ratio 14:1, or 4:1 in HD. Pan, Zoom Out and Vary Region on HD images drop to SD — [Blake Crosley guide](https://blakecrosley.com/guides/midjourney)
- Style tools: `--sref` (colour, lighting, technique, mood), moodboards and multiple personalization profiles (about 40 ratings minimum, 200 for stability). V7 profiles work in V8.2 — [Blake Crosley guide](https://blakecrosley.com/guides/midjourney)
- Edit Model (27 Aug 2026): instruction edits of existing images, generation from up to 4 reference images, and inpainting and outpainting in the Editor (`--edit` on Discord). It replaces Omni Reference (`--oref`/`--ow`, now V7-only) and Character Reference (`--cref`). Midjourney is "not described as character-consistent". Text rendering is "best yet" on V8.1/8.2 but still weak on long sentences, complex fonts and small or multiple text elements. Draft mode gives 24 drafts at 512 px for 0.4 GPU-min — [Blake Crosley guide](https://blakecrosley.com/guides/midjourney); [search summary of MJ docs](https://tech-insider.org/how-to-use-midjourney-v8-2-2026/)
- No public API, "so it can't be used in automated pipelines" — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

**Ideogram 4 / 4.5**
- 4.5: precise editing with masks and references. "Precise Edit" is priced in tiers. A reference character dropped into an edit stayed consistent in early (anecdotal) testing — [Puter (secondary)](https://developer.puter.com/tutorials/ideogram-api-pricing/); [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- 4: open weights, 9.3B parameters, 2K output. In one test every word rendered correctly, but the headline came out small and the layout judgment was weak — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026). The weights are under an "Ideogram Non-Commercial Model Agreement" (inference code Apache 2.0) — [search summary of invideo licence matrix](https://invideo.io/blog/open-source-image-models-licenses/)

**Recraft V4.1**
- Native editable SVG (opens in Figma and Illustrator), brand colour input (up to 5 brand colours plus a background colour) and V4 Styles (Aug 2026) for consistent style across batches — [search summary incl. Moda, tech-insider](https://moda.app/resources/models/recraft-v4-1)
- API covers raster, vector, Pro raster 2K and Pro vector generation, style references (+$0.005), "Create style" ($0.005), vectorize, crisp and creative upscale, remove background, inpainting, outpainting and background replacement (on V3), erase region and remix — [Recraft API pricing docs](https://www.recraft.ai/docs/api-reference/pricing)
- Paid plans give full ownership and commercial rights, and images stay private. Free-plan images are owned by Recraft, public and not licensed for commercial use — [Recraft pricing](https://www.recraft.ai/pricing)

**Adobe Firefly Image 5**
- Native 4MP, Prompt to Edit (also works with BFL, Google and OpenAI partner models inside Firefly), Layered Image Editing (in development as of Oct 2025) and Custom Models trained on images you have rights to (private by default) — [Adobe newsroom](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly)
- Firefly outputs are "safe for commercial use", the models are trained on licensed and public-domain content, and Content Credentials are attached. Eligible enterprise customers can get IP indemnification. Custom Models are enterprise-plan only. Partner-model outputs are the user's responsibility — [Adobe Firefly plans](https://www.adobe.com/products/firefly/plans.html)

**Seedream 5.0 Pro / Lite**
- Pro: up to 10 references (Lite: up to 14), coordinate- and anchor-based edits, sketch edits and multi-reference fusion. Synchronous only, with no batch. Max output is disputed: one source says 2K/3K only on Pro with 4K on Lite, another says about 2.7K long edge at launch with 4K "expected" — [search summary incl. Atlas Cloud, mer.vin](https://www.atlascloud.ai/blog/ai-updates/seedream-5-0-pro-price)

**Others**
- Qwen-Image 3.0 Pro: prompts up to 4.5K tokens, text down to 10 px, 12 languages — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- Reve 2.1: layout-first, native 4K, with edit and remix endpoints (remix takes 1-6 reference images) — [search summary incl. Atlas Cloud](https://www.atlascloud.ai/models/reve-ai/reve-2.1/edit)
- Krea 2: style control and moodboards; open weights drew 3,813 new LoRAs on Civitai. The Krea 2 Community License permits commercial use below a revenue line — [search summary incl. invideo licence matrix](https://invideo.io/blog/open-source-image-models-licenses/); [Krea docs](https://www.krea.ai/docs/user-guide/features/krea-2)
- Meta Muse Image "plans the layout before rendering" — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

**Compact matrix (each cell is from the findings above; "?" = not found)**

| Model (latest, date) | Max res | Ref images / consistency | Real-photo edit | In/outpaint | Text | Brand/custom training | Vector | Transparency | API |
|---|---|---|---|---|---|---|---|---|---|
| GPT Image 2.6 Sunburst/Flare (4 Nov 2026) | ~3840 px edge, ≤3:1 (reported for gpt-image-2) | multi-ref (4-5 tested); saved refs in ChatGPT | Yes, Arena edit #1 (2.5 Sunburst) | Mask (prompt-based, imprecise), markup | Strong | No | SVG export (API, static, n=1) | Option in API (conflicting history) | Yes |
| Nano Banana 2.1 (6 Oct 2026) | 4K | 14 refs; 4 characters / 10 objects | Yes | via edit prompts | Strong (small spec text can soften) | No | No | ? | Yes |
| FLUX 3 Image (1-2 Oct 2026) | 4K (~16 MP) | up to 10 refs, no extra charge | Yes, pixel-locked multi-turn | BFL Fill/Outpaint tools (≤4 MP) | Good (bounding-box layout) | Commercial weights; Klein/FLUX.2 LoRA licences | No | ? | Yes |
| Midjourney V8.2 (24 Jul 2026) | 2048 px HD | Edit model 4 refs; --sref, moodboards; not character-consistent | Yes (Edit model) | Yes (Editor) | Improved, weak on long/small | Personalization profiles only | No | ? | No |
| Seedream 5.0 Pro (8 Jul 2026) | 2K-3K (4K disputed) | 10 refs (Lite 14) | Yes, box/sketch-guided | Region edits | Strong for infographics | No | No | ? | Yes |
| Ideogram 4.5 (~30 Sep 2026) / 4 (3 Jun 2026) | 2K (v4) | Character reference | Yes, mask + refs | Yes | Strong | v4 open weights (non-commercial) | No | ? | Yes |
| Recraft V4.1 (May 2026) | Pro raster 2K | Style refs, brand colours, V4 Styles | V3 edit tools | Yes (V3) | Good for graphics | Custom styles | Native SVG | Remove-bg tool | Yes |
| Firefly Image 5 (Oct 2025) | 4MP | ? | Prompt to Edit | Gen Fill (Photoshop) | ? | Custom Models (enterprise) | No | ? | Firefly Services (enterprise) |
| Reve 2.1 (~9 Jul 2026) | 4K | 1-6 refs (remix) | Edit endpoint | ? | Layout-first | No | No | ? | Credit API |
| Krea 2 (12 May 2026) | ? | Style/moodboards | ? | ? | Word marks | Open weights + LoRA | No | ? | Yes |

Sources for matrix: as cited in the bullets above.

### Inferences
- **Editing real client photos and keeping identity:** shortlist GPT Image 2.5 Sunburst (best on Arena edit), Nano Banana 2.1 (cheap, many references) and FLUX 3 (pixel-locked edits, useful when the client's background must not change). OpenAI's masks are "prompt-based", so for strict local retouching a true mask-based fill (BFL Fill [pro], Photoshop Generative Fill or Ideogram 4.5 mask edits) is more predictable.
- **Brand-consistent series:** reference-heavy models (Nano Banana 2.1 with 14 references, FLUX 3 with 10) beat style-only tools for product and character continuity. Midjourney --sref and moodboards beat them for a stable look or mood. Fine-tuning (LoRA) is realistically only possible on FLUX Klein/FLUX.2 [dev] (licensed), Krea 2 (community licence) or Firefly Custom Models (enterprise).
- **Vector output:** Recraft remains the only purpose-built native vector generator. GPT Image 2.6's SVG is a convenience export (two calls, static), not a replacement for Recraft's editable vectors. This is untested here.

### Gaps
- Official max-resolution and transparency specs for gpt-image-2.6 were not confirmed from OpenAI's model page (404); the guide page was truncated before custom-size limits.
- Transparency (alpha PNG) support for Nano Banana 2.1, FLUX 3, Midjourney V8 and Seedream 5 was not found.
- Firefly Image 5's reference-image and text-rendering capabilities and its status after Oct 2025 (GA or not) were not confirmed.
- No source confirms whether Midjourney V8.2 offers any character-consistency feature beyond the 4-reference edit model.

---

## 3. Upscalers and finishing (Magnific, Topaz, Krea enhancer, Clarity, built-ins): when they add or remove the "AI look"; skin enhancers

### Takeaway
Faithful upscalers do not add the AI look: Magnific Precision, Topaz Gigapixel's fidelity models and SeedVR2 on fal at $0.001/MP. Use them for real client photos, packaging, text and faces. Creative or generative upscalers re-invent detail and can add it: Magnific Creative, Topaz Bloom/Redefine, Krea enhancer at high settings, Recraft creative upscale. They are useful for rescuing waxy AI renders but drift faces and redraw small text. Dedicated skin tools add pores and grain to counter "plastic" skin: Magnific Skin Enhancer (Detail/Grain/Sharpness sliders) and Topaz Face Enhancer. Overdone, they over-texture. Midjourney V8.x outputs 2048 px HD natively, and several frontier models now render 4K natively (Nano Banana 2.1, FLUX 3, Reve 2.1, GPT Image 2 presets), so upscaling is often only needed for print.

### Cited Findings
- **Magnific Creative vs Precision:** Creative "re-imagines skin, texture, and material". Faces may drift, patterns may change and small text may be redrawn. It "will change pixels" and goes up to 16×. Precision "preserves small text, UI, and fine details without adding elements", with halo suppression, artifact cleanup and colour consistency. It supports 16× but 2-4× is optimal. Magnific Skin Enhancer "rebuilds skin texture on faces only" to counter waxy AI portraits (article dated 6 Aug 2026) — [invideo upscaler comparison](https://invideo.io/blog/ai-image-upscalers/)
- Creative's downside is "unwanted artifacts, over-processed textures, or results that diverge significantly from the original". Precision "cleanly enlarges real photography and packaging without distorting facial likeness or typography". Magnific rebranded from Freepik in Apr 2026 — [search summary of 2026 reviews incl. Wireflow, Oakgen](https://www.wireflow.ai/blog/magnific-ai-pricing)
- Magnific's Skin Enhancer has Detail, Grain and Sharpness sliders, and Grain is meant to bring back texture so skin stops looking artificial — [search summary incl. OpenArt skin-upscaler guide](https://openart.ai/blog/best-ai-image-upscalers-for-skin-texture)
- **Topaz:** Gigapixel models are Wonder 2 and 3, Standard, Standard Max, High Fidelity, Low Res, Text & Shapes, Art & CG, Recover, Redefine and Face Recovery. The Web Image workflows include Wonder 3, Bloom Creativity, Creative Upscale, Face Enhancer and Denoise Max. Export limits are 32 MP on standard plans, 100 MP on Studio Pro and 256 MP on Web Pro — [Topaz pricing](https://www.topazlabs.com/pricing)
- Topaz positions Bloom as a creative upscaler and Gigapixel as detail-preserving. In one hands-on test, Bloom "tends to favor cohesive realism: skin tones remain smooth", with limited control. Another test found Gigapixel produced "weird fractalization patterns on the skin texturing" (single-image tests) — [search summary incl. Aiarty Bloom review, raxxo comparison](https://www.aiarty.com/ai-image-enhancer/topaz-bloom.htm)
- **Krea Enhancer:** bundles Krea's own models with Topaz, Bloom and Magnific engines. Krea's docs warn that high sharpness and clarity settings "can over-texture smooth skin, adding pores and fine lines that weren't in the original", and that generative models can add undesired detail. One reviewer called it "more creative than Topaz, more faithful than Magnific" — [Krea Enhancer docs (via search)](https://www.krea.ai/docs/user-guide/features/enhancer); [picassoia comparison](https://blog.picassoia.com/topaz-vs-krea-enhance-ai-image-upscaler-test)
- **Other API upscalers:** SeedVR2 Image Upscale on fal costs $0.001 per megapixel — [fal pricing](https://fal.ai/pricing). P-Image Upscale has a "Realism toggle on by default tuned for AI-generated images", returns in under a second up to 4 MP and runs 1-8×. A truly degraded source "stays mediocre, just larger and cleaner". BytePlus Ultra HD has fixed 2K/4K/8K targets — [invideo](https://invideo.io/blog/ai-image-upscalers/). Recraft offers Crisp upscale at $0.004 and Creative upscale at $0.25 per request — [Recraft API pricing](https://www.recraft.ai/docs/api-reference/pricing). BFL sells FLUX video "Upscale [precise]" and "[creative]" (video only) — [BFL pricing](https://bfl.ai/pricing)
- **Built-in resolution:** Midjourney V8.1/8.2 HD renders 2048 px "natively, with no separate upscaler step" — [Blake Crosley guide](https://blakecrosley.com/guides/midjourney). Firefly Image 5 renders native 4MP "without upscaling" — [Adobe newsroom](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly). Nano Banana 2.1 has a 4K tier — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing). FLUX 3 has a 4K tier — [BFL pricing](https://bfl.ai/pricing)

### Inferences
- **Real client photos (electrician portraits, homes):** use only faithful upscalers (Magnific Precision, Gigapixel High Fidelity/Standard, SeedVR2). Creative modes change faces, which also matters for consent and likeness.
- **AI-generated people with waxy skin:** a light pass of a skin enhancer (Magnific Skin Enhancer with Grain up, Sharpness low) or Topaz Face Enhancer reduces the plastic look. High sharpness or creativity re-introduces an AI look (uniform pores, fine lines, fractal skin). Adding film grain is safer than adding "detail".
- **Text and labels in images (e.g. switchboard labels, van signage):** never use a creative upscaler, because it redraws small text. Use Precision, Gigapixel "Text & Shapes" or Recraft crisp.
- Native 2K/4K output now covers most digital deliverables, so upscaling is mainly for print or large-format work.

### Gaps
- No 2026 test of the Clarity upscaler (open-source or hosted) was found.
- Exact Topaz Bloom and Redefine behaviour (creativity levels) is not described on Topaz's pricing page. Bloom standalone pricing conflicts across sources.
- No controlled multi-tool skin-texture comparison with a stated methodology was found; the evidence is anecdotal single-image tests.
- Krea Enhancer pricing (compute units) was not retrieved.

---

## 4. Prices per image: own subscription and API (fal.ai, Replicate, OpenAI, Google, BFL); cheapest legit route per top model

### Takeaway
Per-image API costs at 1K now range from about $0.01 (Muse Image, FLUX 3 Klein) to $0.21 (GPT Image 2.6 at max). The best quality per dollar is Nano Banana 2.1 at $0.034 (1K) / $0.050 (2K) / $0.113 (4K) on Google's API, halved in batch. GPT Image 2.6 costs about $0.044 (medium) to $0.053 (high), $0.094 (xhigh) and $0.211 (max) at 1024². Its low and medium settings cost roughly 3-4× more than 2.5's. Going direct to the vendor is usually the cheapest legit route: fal charges $0.08 for Nano Banana 2 against Google's $0.067, and $0.0675 for Seedream 5.0 Pro against BytePlus's $0.045. For manual work, a Midjourney Standard plan ($30/mo, unlimited Relax) or ChatGPT Plus ($20) is the cheapest per image. Recraft V4.1 vector is $0.08 per SVG via API.

### Cited Findings

**OpenAI (GPT Image 2.5/2.6)**
- Token billing per 1M: text input $5.00 (cached $1.25), image input $8.00 (cached $2.00), image output $30.00. Same as 2.5. No 2.6 batch rate yet — [eesel AI](https://www.eesel.ai/blog/chatgpt-images-2-6); [search summary incl. datastudios](https://www.datastudios.org/post/ai-api-pricing-this-week-gpt-6-cyber-gemini-omni-1-2-flash-opus-4-8-fast-mode)
- 1024² output-cost estimates for 2.6: low about $0.025, medium $0.044, high $0.053, xhigh $0.094, max $0.211. 2.5 used fewer tokens at low (about $0.0059) and medium (about $0.0132); high, xhigh and max are unchanged — [eesel AI](https://www.eesel.ai/blog/chatgpt-images-2-6). AA lists 2.6 Sunburst (max) at $210.72/1k — [AA T2I](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- Measured on 2.6 at high quality: $0.060 for a one-image edit, $0.071 for a 16:9 image with 4 references, $0.088-0.108 for a 4:5 ad with 5 references. Flare and Sunburst cost the same per token — [Mockingbird](https://www.mockingbirdhouse.com/guides/gpt-image-2-6-pricing)
- 2.5 batch output was $15/M tokens — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026). A reseller (CometAPI) advertises 20% below OpenAI's rate — [search summary](https://www.cometapi.com/models/openai/gpt-image-2-6/)
- ChatGPT plans: Free $0 (limited), Go $8, Plus $20 ("more complex and accurate image creation", with Thinking), Pro $100 (unlimited, faster) — [eesel AI citing OpenAI pricing page](https://www.eesel.ai/blog/chatgpt-images-2-6)

**Google (Gemini API / AI Studio)**
- Nano Banana 2.1: $0.0336 (1K), $0.0504 (2K), $0.113 (4K). Batch: $0.0168 / $0.0252 / $0.0567. Nano Banana 2: $0.045 (0.5K), $0.067 (1K), $0.101 (2K), $0.151 (4K). Nano Banana 2 Lite: $0.0336 (1K; batch $0.0168). Nano Banana Pro: $0.134 (1K/2K), $0.24 (4K). No free API tier for these models — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
- Conflict: some outlets report $0.0756 for Nano Banana 2.1 at 4K, against $0.113 on Google's page. Google Cloud (Vertex) and the Gemini API count 4K output tokens differently (3,780 vs 2,520) — [search summary incl. AndroidHeadlines](https://www.androidheadlines.com/2026/10/google-launches-nano-banana-2-1-ai-images-price.html); prefer [Google's page](https://aistudio.google.com/docs/pricing)

**Black Forest Labs (bfl.ai API)**
- FLUX 3 Image: $0.041 (768²), $0.048 (1K), $0.07 (1.5K), $0.10 (2K), $0.607 (4K); references free. FLUX 3 Image Klein: $0.008 / $0.009 / $0.011 / $0.014 / $0.036 — [BFL pricing](https://bfl.ai/pricing)
- FLUX.2 (first MP / additional MP / per reference MP): [max] $0.07/$0.03/$0.03; [pro] $0.03/$0.015/$0.015; [flex] $0.05/$0.05/$0.05; [klein] 9B $0.015/$0.002/$0.002; [klein] 4B $0.014/$0.001/$0.001 — [BFL pricing](https://bfl.ai/pricing)
- Kontext [max] $0.08, Kontext [pro] $0.04, FLUX1.1 [pro] Ultra $0.06, Fill [pro] $0.05, Erase $0.03/MP, Outpainting [high] $0.10/MP, Outpainting [fast] $0.045 — [BFL pricing](https://bfl.ai/pricing)

**fal.ai (aggregator API; the pricing page is undated)**
- Nano Banana 2 (and Edit) $0.08 per image; Nano Banana Pro (and Edit) $0.15; FLUX 2 $0.012/MP; FLUX 2 Flash $0.005/MP; FLUX 3 Image Edit $0.048/MP; Seedream 4.5 $0.04; Seedream 5.0 Pro $0.0675; SeedVR2 upscale $0.001/MP. Nano Banana 2.1 and GPT Image 2 show only as "$1 per unit" with the unit undefined — [fal pricing](https://fal.ai/pricing)
- Ideogram on fal: 4.5 at $0.03 (Low), $0.06 (Medium), $0.22 (High); Ideogram 4 at $0.03 (Turbo), $0.06 (Balanced), $0.10 (Quality) per 2048² — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

**Midjourney (subscription only)**
- Basic $10/mo (3.3 fast hrs), Standard $30 (15 hrs plus unlimited Relax), Pro $60 (30 hrs, Stealth), Mega $120 (60 hrs). Annual billing is 20% off ($96/$288/$576/$1,152 per year). Extra fast time is $4/GPU-hr. A V8 job (4-image grid) costs 0.8 GPU-min in SD and 1.3 in HD. An Edit-model job costs about 1 GPU-min in SD and 2.3 in HD — [Blake Crosley guide](https://blakecrosley.com/guides/midjourney); [search summary of MJ plan pages](https://www.toolcolumn.com/tools/midjourney)
- No official API. Third-party "Midjourney APIs" (e.g. EvoLink at $0.089 per Edit request) are unofficial — [search summary](https://evolink.ai/midjourney-v8-2)

**Ideogram (own subscription and API)**
- Plus $20/mo ($15 annual), 2,400 priority credits. Pro $60 ($42 annual), 7,500. Team $30/user ($20 annual), 3,600/user. Pay as you go: 1¢ per credit. Free: weekly credits. Default API rate limit: 10 in-flight requests — [Ideogram pricing](https://ideogram.ai/pricing/?pricing_tab=api)
- API (secondary): 4.5 at $0.03 Low / $0.06 Medium / $0.10 High ($0.22 with source images). Precise Edit tiers $0.008-0.22. Ideogram 3.0 character reference raised prices to $0.10/$0.15/$0.20 — [Puter](https://developer.puter.com/tutorials/ideogram-api-pricing/)

**Recraft**
- API per image (raster / vector / Pro raster 2K / Pro vector): V4.1 and V4.1 Utility $0.035 / $0.08 / $0.21 / $0.30. V4.1 Flash $0.007 raster. V4 Styles $0.035 / $0.05 / $0.10 / $0.12. Style references +$0.005. Vectorize $0.01, Crisp upscale $0.004, Creative upscale $0.25, Remove background $0.01, V3 inpaint/outpaint $0.04 raster / $0.08 vector. 1,000 API units = $1 — [Recraft API pricing](https://www.recraft.ai/docs/api-reference/pricing)
- Subscription: the free plan gives 30 credits/day with public, non-commercial images. Paid plans reportedly start around $12/mo (secondary), and annual billing saves 20% — [Recraft pricing](https://www.recraft.ai/pricing); [Aixploria (secondary)](https://www.aixploria.com/en/?p=16855)

**Adobe Firefly**
- Standard $9.99/mo (2,000 credits), Pro $19.99 (4,000), Pro Plus $49.99 (10,000), Premium $199.99 (50,000). All paid plans include partner models (GPT Image, Gemini/Nano Banana, FLUX), standard features like Generative Fill are unlimited, and credits don't roll over — [Adobe Firefly plans](https://www.adobe.com/products/firefly/plans.html)
- An Adobe help table lists Firefly Image 5 at 10 credits per generation (locale and date unclear) — [Adobe generative credits FAQ (via search)](https://helpx.adobe.com/firefly/using/generative-credits-faq.html). The Firefly Services API is enterprise-only, with no published per-image price — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)

**Others**
- Seedream 5.0 Pro (BytePlus): $0.045 per image up to about 2.36 MP and $0.09 above. The first reference is free, then $0.003 each. A conflicting listing says $0.135 for 2K and 4K — [mer.vin / search summary](https://mer.vin/2026/07/seedream-5-0-pro-api-on-byteplus-precision-image-generation-and-multi-reference-editing/); [Zalify](https://zalify.com/ai-models/seedream-5-0-pro). Seedream 5.0 Lite about $0.035; Flash about $0.018 (reseller figure, unverified) — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- Qwen-Image 3.0 Pro: $0.04 (1K), $0.075 (2K) in the international region — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- Grok Imagine Image 2.0: $0.04 per image per TeamDay vs $60/1k on AA (conflict) — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026); [AA](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text). Meta Muse Image: $0.01 — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026). MAI-Image-2.6: token-priced preview on Microsoft Foundry, about $38.91/1k per AA — [AA](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- Reve 2.1: no official per-image price list. The API is pay-as-you-go, and third-party hosts charge about $0.20-0.25 per full-resolution image (Atlas Cloud $0.24 at 4K). The app has a free tier and a $19.99 Pro tier — [eesel AI Reve pricing](https://www.eesel.ai/blog/reve-2-1-pricing)
- Krea 2 (AA, Krea API): Large $0.06, Medium $0.03, Medium Turbo $0.015 per image — [AA](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)
- Leonardo Lucid Origin Ultra about $0.087, Fast about $0.018 (AA API price) — [AA](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text)

**Upscaler prices**
- Magnific: Premium $20/mo ($14.50 annual; 240K credits/yr), Plus $45 ($33.75), Pro $110 ($82.50). Precision costs 90 credits per 2K image. Creative is variable — [Magnific pricing](https://www.magnific.com/pricing). Precision works out to about $0.06-0.09 per 2K image. The Creative API runs about €0.10 (small 2×) to €0.50 (8×) — [search summary incl. Wireflow](https://www.wireflow.ai/blog/magnific-ai-pricing). Precision API costs €0.20 for 1080p→4K — [invideo](https://invideo.io/blog/ai-image-upscalers/)
- Topaz: Gigapixel $29/mo ($19 with annual commitment) or $149/yr; Gigapixel Pro $499/yr; Studio (all apps) $399/yr; Studio Pro $799/yr; Topaz for Web Image $19/mo (unlimited image rendering); Web Pro $59/mo. Standard plans allow commercial use only for organisations under $1M annual revenue. Perpetual licences ended Oct 2025 (secondary) — [Topaz pricing](https://www.topazlabs.com/pricing); [search summary](https://www.myarchitectai.com/blog/topaz-ai-pricing)

### Inferences
- **Cheapest legit route per top model (manual work vs pipeline):**
  - GPT Image 2.5/2.6: ChatGPT Plus ($20) for manual work. Via API, go direct to OpenAI and use 2.5 at low/medium for drafts (about $0.006-0.013), which is 3-4× cheaper than 2.6 at the same settings, or 2.5 batch. Reserve 2.6 high (about $0.053) for finals and max ($0.21) only when needed.
  - Nano Banana 2.1: Gemini API batch at $0.0168 (1K) / $0.0252 (2K). That is about 5× cheaper than Nano Banana 2 on fal ($0.08) and the cheapest frontier-quality route found.
  - FLUX 3: BFL direct at $0.048 (1K) / $0.10 (2K). Klein at $0.009 for drafts.
  - Midjourney: Standard $30/mo ($24 annual) with unlimited Relax. Rough maths: 15 fast hours ÷ 0.8 GPU-min per 4-image job ≈ 4,500 SD images, about $0.007 each in Fast. Third-party MJ APIs are unofficial and should not be treated as a legit route.
  - Seedream 5.0 Pro: BytePlus direct ($0.045) over fal ($0.0675).
  - Recraft: API ($0.035 raster / $0.08 SVG) is cheaper per image than most subscriptions for low volume. Recraft's paid plan is still needed for commercial rights on web-app output.
  - Firefly: the Standard plan ($9.99, 2,000 credits) at 10 credits per Image 5 generation is about 200 generations, roughly $0.05 each. It also bundles partner models, which may make it the cheapest legit way for an Adobe-centric team to get GPT Image and Nano Banana inside Photoshop.
- Replicate prices were not retrieved, but vendor-direct prices beat the fal prices found in every case checked.

### Gaps
- Replicate per-image prices for these models were not retrieved.
- fal's per-image price for Nano Banana 2.1 and GPT Image 2.x ("$1 per unit") was ambiguous.
- Official GPT Image 2.6 per-image numbers come from secondary calculators (OpenAI publishes token rates only).
- Recraft subscription tiers and credits per image were not found on the official page (it lists no figures).
- Firefly per-model credit costs (Image 5 vs partner models such as GPT Image or Nano Banana) were not confirmed from a dated Adobe page.
- Reve has no official API price list. Seedream 5.0 Pro pricing and 4K support conflict across sources.

---

## 5. Tell-tale artifacts per model, and which models suit natural documentary-style photos (e.g. a Melbourne electrician on a job, suburban homes, switchboards)

### Takeaway
In the only systematic multi-model realism test found (getimg.ai, Aug-Oct 2026, 25 models), GPT Image 2.5 Flare and Nano Banana 2 were the only models rated top on every prompt. Close behind were GPT Image 2, GPT Image 2.5 Sunburst, Nano Banana 2.1, FLUX.2 [max] and Seedream 5.0 Pro. Nano Banana 2 "led outright" on architecture and homes. GPT Image 2 / 2.5 Flare and Nano Banana 2/2.1 were best for candid and documentary people. The common tells are waxy or over-smooth skin (FLUX.2 [pro]/[klein], Seedream 4.x/5 Lite, Qwen Image, Z-Image), over-etched detail (FLUX.2 [max] eyebrows, Nano Banana Pro skin), a posed or staged feel (GPT Image 2.5 Sunburst portraits, FLUX 3 / FLUX 3 Klein), and garbled small text such as book spines, spec lines, decimals and currency symbols. Hands remain the most common failure even on the leaders. No test covered Australian trade scenes or switchboards.

### Cited Findings
- **getimg.ai realism test (published 21 Aug 2026, updated Oct 2026):** identical prompts with no prompt enhancement, one generation per prompt. Categories: beauty portraits, a product with exact label text, a multi-person candid flash scene, a Mediterranean interior, dense ad-panel text and reference-based identity. Defects in hands, text and identity were weighted most heavily — [getimg.ai](https://getimg.ai/blog/ai-realism-test-comparing-realistic-image-generation-models)
- Per-model artifacts — [getimg.ai](https://getimg.ai/blog/ai-realism-test-comparing-realistic-image-generation-models):
  - GPT Image 2.5 Flare: "few flaws; natural pores, convincing wet hair, authentic flash, faithful likeness".
  - GPT Image 2.5 Sunburst: misspelled a book spine; added unrequested slogans to an ad.
  - GPT Image 2: "slightly oily, wet-looking skin" in the beauty shot; interior books soft.
  - Nano Banana 2.1: odd condensation trails; smallest spec line soft.
  - Nano Banana 2: crisp skin, "slightly less gritty in candid shots", strongest interior realism.
  - Nano Banana Pro: skin "a bit over-detailed", odd ear, floating digits, spec-text errors.
  - Nano Banana 2 Lite: mangled hands and repeated sign text; drafts only.
  - Seedream 5.0 Pro: "atmospheric, slightly soft", strong interiors and text.
  - Seedream 5.0 Flash: subject gazes at the camera, red-eye overdone, dropped price text.
  - Seedream 5.0 Lite: soft "AI-like" skin, mangled hands, typos, £ instead of €.
  - FLUX 3: clean texture, but unrequested eyeliner, droplets everywhere and a misspelled footer; "slightly posed".
  - FLUX 3 Klein: glassy eye whites, staged feel.
  - FLUX.2 [max]: "over-etched, frozen eyebrows", overdone condensation, a stray element added.
  - FLUX.2 [pro]/[klein]: waxy skin, awkward hands, different face in the reference test.
  - Grok Imagine 2.0: heavy freckles; hair changed in the reference test.
  - Qwen Image 3.0 Pro: "smooth but believable", "showroom-tidy interior".
  - Qwen Image (2025): "plasticky CGI sheen", blue cast.
  - Z-Image Turbo: lacks skin detail, different face.
- Best by use case in that test: candid/documentary = GPT Image 2, Nano Banana 2, GPT Image 2.5 Flare, GPT Image 2.5 Sunburst, Nano Banana 2.1 ("always check hands, even on the leaders"). Architecture and homes = Nano Banana 2 first, then GPT Image 2, Nano Banana Pro, Seedream 5.0 Pro and FLUX.2 [max] ("book spines were the most common failure"). Products and text = GPT Image 2 and Nano Banana 2 — [getimg.ai](https://getimg.ai/blog/ai-realism-test-comparing-realistic-image-generation-models)
- **TeamDay test (23 Sep 2026, 8 models, 3 prompts):** GPT Image 2.5 Sunburst made the best poster "but gave a posed, not candid, portrait". Meta Muse Image gave "the only candid portrait" but swapped an em dash for an en dash. Grok Imagine 2.0 had "strong portrait texture". Nano Banana 2 produced "the most photographic results". Seedream 5.0 Lite skin "looked smooth" and the model missed two instructions. FLUX.2 [max] produced the weakest poster. Conclusion: short text rendering is now handled well by all eight, so layout judgment, instruction nuance and price separate them — [TeamDay](https://www.teamday.ai/blog/best-ai-image-models-2026)
- A Sep 2026 same-prompt test found Nano Banana 2 and Grok Imagine Image 2.0 made the most convincing photographs ("real skin texture, flour and believable hands"). Sources agree that smooth, even, pore-less skin is the main AI tell, and some suggest prompting film stock and camera details — [search summary incl. morphed.app, Mage blog](https://morphed.app/blog/realistic-ai-image-generator)
- **Midjourney V8.2:** a bolder default look that "may be a regression for workflows tuned to V8.1's calmer look". Hands can look wrong and faces can blur. Low-quality outliers are "dramatically reduced", not eliminated — [Blake Crosley guide](https://blakecrosley.com/guides/midjourney)
- **Krea 2 Large** is positioned for "raw aesthetics like natural grain, motion blur, and true dynamic range" (vendor/partner claim, not independently tested) — [Scenario model listing (via search)](https://www.scenario.com/models/krea-2-large)
- **Firefly Image 5** claims "lifelike portraits with accurate anatomy" and natural lighting and texture (vendor claim) — [Adobe newsroom](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly)
- **Upscaler-induced tells:** Krea enhancer at high sharpness adds pores and fine lines that "weren't in the original" — [Krea docs (via search)](https://www.krea.ai/docs/user-guide/features/enhancer). Magnific Creative causes "over-processed textures" — [search summary](https://www.wireflow.ai/blog/magnific-ai-pricing). Gigapixel showed fractal skin patterns in one test — [raxxo comparison (via search)](https://raxxo.shop/blogs/lab/magnific-vs-topaz-vs-krea-which-ai-upscaler-actually-works)

### Inferences
- **Melbourne electrician on a job (candid person, natural light):** generate with GPT Image 2.5 Flare/2.6 Sunburst or Nano Banana 2.1, using phone or documentary camera cues in the prompt. Avoid Sunburst's default "posed" portrait by explicitly prompting a candid, mid-action, off-camera gaze. Check hands and tools, then finish with a faithful upscale plus a light skin-grain pass. Grok Imagine 2.0 or Muse Image are cheap second opinions for candid texture.
- **Suburban homes / streetscapes:** Nano Banana 2/2.1 have the best evidence (top on interiors/homes). Seedream 5.0 Pro and FLUX.2 [max] are alternates. Watch for "showroom-tidy" staging (noted for Qwen 3.0 Pro), which reads as AI or CGI for documentary use.
- **Switchboards / technical close-ups:** these combine dense small text with exact hardware layout, the two weakest areas across the field ("book spines", "spec lines", "dropped decimals"). The safest route is to photograph the real switchboard and use AI only for edits (FLUX 3 pixel-locked edits, GPT Image Sunburst, or mask-based fill), or to composite real labels in post. Models are likely to default to non-Australian (e.g. US-style) panels and labelling. That is an inference from training-data bias, not a tested result.
- Over-detail is as much an AI tell as over-smoothness (Nano Banana Pro, FLUX.2 [max], aggressive enhancers). Documentary realism favours slightly imperfect, softer and grainier output over maximal sharpness.

### Gaps
- No test covered Australian trade or job-site scenes, Australian suburban architecture (weatherboard or brick veneer, Colorbond roofs) or Australian switchboards, so model suitability for these is extrapolated from general candid and interior results.
- Midjourney V8.2, Reve 2.1, Ideogram 4.5, Krea 2, Firefly Image 5 and GPT Image 2.6 were not in the getimg realism test, so their artifact profiles are unbenchmarked (vendor claims only).
- No systematic source on HDR glow, symmetry bias or "generic composition" per model was found beyond the "posed/staged" and "showroom-tidy" notes above.
- All realism tests found use one generation per prompt, so per-model variance is unknown.
