# AI Video Generation Models for Professional Marketing Use (state as of 8 Nov 2026)

Scope note: this covers text/image-to-video models only. Prices are USD unless noted. Many 2026 details come from third-party blogs and aggregators because vendors publish little. Where a figure comes from a primary page (Google AI Studio pricing/deprecations, Runway changelog/API pricing, Artificial Analysis leaderboards, Luma's info page, the Kling and FLUX press releases), that is said. Anything dated before mid-2026 is marked with its date.

**The landscape changed a lot between late 2025 and Nov 2026. The brief's list is partly out of date:**
- **OpenAI Sora is discontinued.** The app closed on 26 Apr 2026 and the API closed on 24 Sep 2026.
- **Google has replaced Veo with Gemini Omni on the Gemini API.** The Veo 3.1 previews shut down on 22 Oct 2026. Veo 3.1 GA remains on Google's enterprise platform, the renamed Vertex AI.
- **Kling has reached 4.0** (Oct 2026).
- **MiniMax Hailuo is now "MiniMax H3"** (Jul 2026), with open weights under a restricted licence.
- **Seedance is at 2.5** (Jul/Aug 2026).
- **Wan 3.0 is closed-weight.** The latest open Wan model is still 2.2.
- **Lightricks is at LTX-2.5** (Aug 2026, open weights).
- **Midjourney still only has Video V1.**
- **Several new entrants top the leaderboards:** Utopai X, HeyGen Video 1, FLUX 3 (Black Forest Labs), Grok Imagine Video 1.5, SkyReels V4, HappyHorse, P-Video-2 and others.

---

## 1. Which video models lead in Nov 2026 (realism, motion, physics, prompt adherence, faces/hands)? Leaderboards and per-vendor status

### Takeaway
On blind-vote leaderboards in Nov 2026, the top tier is ByteDance Seedance 2.5, MiniMax H3 and its fine-tunes (Utopai X, HeyGen Video 1, Pika H3 Flex), Alibaba Wan 3.0 and FLUX 3. Google's new Gemini Omni 1.2 Flash tops LMArena's image-to-video board, but its earlier 1.1 version ranks mid-table on Artificial Analysis. Kling 3.0/4.0, Veo 3.1 and LTX-2.5 sit in the second tier on Artificial Analysis but are still widely used. Sora is gone, and Runway, Luma, Midjourney, Pika and Moonvalley are absent from the Artificial Analysis video boards. Leaderboards disagree with each other, so treat a lead of fewer than about 20 Elo points as noise and test models on your own shots.

### Cited Findings

**Artificial Analysis (AA) Text-to-Video leaderboard (AA-Video-T2V v2.1, "with audio" board, read 8 Nov 2026; Kling 3.0 1080p Pro is the fixed 1000 anchor)** — [AA T2V leaderboard](https://artificialanalysis.ai/video/leaderboard/text-to-video)

The price/min column is AA's figure; per-second is that figure divided by 60.

| Rank | Model (creator) | Elo | Released | AA price/min (≈ per s) |
|---|---|---|---|---|
| 1 | Wan 3.0 (Alibaba) | 1172 | Aug 2026 | $12.00 (≈$0.20/s) |
| 2 | Utopai X (Utopai Studios) | 1167 | Sep 2026 | no API |
| 3 | MiniMax H3 768p (MiniMax) | 1160 | Jul 2026 | $4.80 (≈$0.08/s) |
| 4 | FLUX 3 Max (BFL, via fal) | 1156 | Oct 2026 | $4.35 (≈$0.07/s) |
| 5 | Dreamina Seedance 2.5 (ByteDance) | 1155 | Jul 2026 | $34.12 (≈$0.57/s) |
| 6 | HeyGen Video 1 (HeyGen) | 1152 | Oct 2026 | $2.40 (≈$0.04/s) |
| 7 | MiniMax H3 Max (via fal) | 1145 | Aug 2026 | $9.60 |
| 8 | FLUX 3 (BFL) | 1138 | Jul 2026 | $17.40 |
| 9 | SkyReels V4 (Skywork) | 1137 | Mar 2026 | $21.00 |
| 10 | Seedance 2.0 (ByteDance) | 1135 | Mar 2026 | $22.45 |
| 11 | P-Video-2-Pro (Pruna AI) | 1128 | Sep 2026 | $5.70 |
| 12 | Gemini Omni Flash 1.1 (Google) | 1127 | Aug 2026 | $9.12 |
| 13 | Agnes-Video-2.5 (Sapiens AI) | 1066 | Aug 2026 | $2.40 |
| 14 | Grok Imagine Video 1.5 (listed as "SpaceXAI") | 1055 | May 2026 | $15.00 |
| 15 | HappyHorse-1.1 (Alibaba-ATH) | 1048 | Jun 2026 | $10.80 |
| 16 | MAGI-2 Preview (Sand.ai) | 1040 | Sep 2026 | coming soon |
| 17 | Wan2.7 (Alibaba) | 1034 | Jun 2026 | $9.00 |
| 19 | Kling 3.0 Omni 1080p Pro | 1021 | Feb 2026 | $8.40 |
| 20 | Kling 3.0 1080p Pro (anchor) | 1000 | Feb 2026 | $10.08 |
| 22 | PixVerse V6 | 980 | Mar 2026 | $6.90 |
| 23–25 | Veo 3.1 / Veo 3.1 Fast / Veo 3.1 Lite (Google) | 963 / 956 / 949 | Jan / Jan / Mar 2026 | $24.00 / $7.20 / $4.80 |
| 26–27 | LTX-2.5 Fast / Pro (Lightricks) | 942 / 941 | Aug 2026 | $7.80 / $10.20 |
| 28 | Vidu Q3 Pro | 937 | Jan 2026 | $7.20 |
| 30–31 | LTX-2.3 Pro / Fast | 883 / 838 | Mar 2026 | $4.80 / $3.60 |

**AA Image-to-Video leaderboard (read 8 Nov 2026)** — [AA I2V leaderboard](https://artificialanalysis.ai/video/leaderboard/image-to-video)

| Rank | Model | Elo |
|---|---|---|
| 1 | Seedance 2.5 | 1158 |
| 2 | Utopai X | 1149 |
| 3 | Seedance 2.0 | 1137 |
| 4 | MiniMax H3 768p | 1133 |
| 5 (tie) | HeyGen Video 1 | 1123 |
| 5 (tie) | SkyReels V4 | 1123 |
| 7 | Hyperflow H3 (Video Rebirth) | 1120 |
| 8 | P-Video-2-Pro | 1117 |
| 9 | MiniMax H3 Max | 1115 |
| 10 | Wan 3.0 | 1109 |
| 11 | Agnes-Video-2.5 | 1104 |
| 12 | HiDream-O1-Video | 1101 |
| 13 | FLUX 3 | 1071 |
| 14 | FLUX 3 Max | 1067 |
| 15 | Grok Imagine 1.5 | 1050 |
| 16 | Gemini Omni Flash 1.1 | 1045 |
| 17 | HappyHorse-1.1 | 1038 |
| 18 | Vidu Q4 Preview (Oct 2026) | 1028 |
| 20 | Kling 3.0 Omni Pro | 1004 |
| 21 | Kling 3.0 Pro | 1000 |
| 25 | Veo 3.1 | 955 |
| 29–30 | LTX-2.5 Fast / Pro | 912 / 911 |

Sora, Runway, Luma Ray, Midjourney, Moonvalley Marey and Pika do not appear on this board. — [AA I2V leaderboard](https://artificialanalysis.ai/video/leaderboard/image-to-video)

**Other rankings and leaderboard notes**
- **AA has three video boards:** Text-to-Video, Image-to-Video and Video Editing. Its Video Arena offers "With Audio" and "No Audio" modes. — [AA T2V page](https://artificialanalysis.ai/text-to-video/arena?tab=leaderboard)
- **LMArena (now "Arena", arena.ai) image-to-video snapshot of 6 Nov 2026:** Gemini Omni 1.2 Flash is #1 with a score of 1502, MiniMax H3 is #2 and Seedance 2.5 (720p) is #3. The snapshot covers about 2.52M votes across 50 models. I only saw this through search-result text, because direct fetches returned 403. — [Arena I2V leaderboard](https://arena.ai/leaderboard/video/image-to-video)
- **Arena text-to-video, reported secondhand by llm-stats:** "Kling v3" leads at 1934, followed by Happy Horse 1.0 (1816) and Seedance 2.0 Fast (1747). This is unverified, uses a different scale and conflicts with AA. — [llm-stats](https://llm-stats.com/leaderboards/best-ai-for-video-creation)
- **OpenRouter usage, by request volume rather than quality, data through 7 Nov 2026:** HeyGen Video is #1 and Veo 3.1 Lite is #2. — [OpenRouter video rankings](https://openrouter.ai/rankings/video)
- **Editorial ranking:** videogen.io puts Gemini Omni Flash first, then Seedance 2.5, then MiniMax H3. Its methodology is not stated. — [videogen.io](https://videogen.io/best-ai-video-models)

**Per-vendor status, Nov 2026**
- **OpenAI Sora (DISCONTINUED).**
  - Shutdown announced 24 Mar 2026. Web and app closed 26 Apr 2026. API discontinued 24 Sep 2026. — [OpenAI Help: Sora discontinuation](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation); [Sora (Wikipedia)](https://en.wikipedia.org/wiki/Sora_(text-to-video_model))
  - Oct 2026 reports say OpenAI is in talks with a filmmaker-focused startup, co-founded by Jeffrey Katzenberg and former Sora lead Bill Peebles, that wants access to Sora. These are talks only. — [PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/openais-video-model-sora-could-get-a-second-act/)
  - Aggregator posts about a "Sora Turbo 2026 update" conflict with OpenAI's own help page and should be ignored. — [af.net](https://af.net/realtime/openai-launches-2026-sora-update-with-advanced-video-generation-features/)
- **Google: Gemini Omni has replaced Veo as the lead model.**
  - Omni was announced at I/O on 19 May 2026. Omni Flash reached paid Google AI tiers in the Gemini app and Flow that day. — [TechTimes](https://www.techtimes.com/articles/316859/20260519/google-launches-gemini-omni-video-model-holds-back-its-riskiest-feature.htm); [BuildFastWithAI review](https://blog.buildfastwithai.com/gemini-omni-google-ai-video-model-review)
  - Gemini API releases: `gemini-omni-flash-preview` on 30 Jun 2026, `gemini-omni-1.1-flash` on 27 Aug 2026 (shuts 3 Dec 2026), `gemini-omni-1.2-flash` on 5 Nov 2026. — [Google AI Studio deprecations](https://aistudio.google.com/docs/deprecations)
  - Google names Omni 1.2 Flash as the replacement for every Veo model on the Gemini API. — [Google AI Studio deprecations](https://aistudio.google.com/docs/deprecations)
- **Google Veo 3.1 (Oct 2025) is now legacy on the Gemini API.**
  - The `veo-3.1-generate-preview`, `veo-3.1-fast-generate-preview` and `veo-3.1-lite-generate-preview` endpoints (Lite released 31 Mar 2026) were shut down on the Gemini API on 22 Oct 2026. — [Google AI Studio deprecations](https://aistudio.google.com/docs/deprecations); [Google AI Studio video docs](https://aistudio.google.com/docs/video)
  - Veo 2 and Veo 3 GA endpoints had a shutdown date of 30 Jun 2026. — [Google AI Studio deprecations](https://aistudio.google.com/docs/deprecations)
  - Google points users to "GA Veo models on Gemini Enterprise Agent Platform". That is the 22 Apr 2026 rename of Vertex AI. — [Google AI Studio deprecations](https://aistudio.google.com/docs/deprecations); [Gemini Enterprise Agent Platform (Wikipedia)](https://en.wikipedia.org/wiki/Gemini_Enterprise_Agent_Platform)
- **Kling (Kuaishou): the current flagship is Kling 4.0.**
  - Kling 4.0 was announced fully available on 16 Oct 2026 (some sources say 15 Oct). — [Kling 4.0 press release via Yahoo/GlobeNewswire](https://finance.yahoo.com/technology/ai/articles/kling-ai-launches-kling-4-105300062.html)
  - A "Kling 4.0 Flash" preview opened to top-tier annual subscribers on 28 Sep 2026. — [Kling AI (Wikipedia)](https://en.wikipedia.org/wiki/Kling_AI)
  - Kling 3.0 and Kling 3.0 Omni ("O3") were released on 4–5 Feb 2026. — [MindStudio: Kling O3](https://www.mindstudio.ai/blog/what-is-kling-o3-latest-video-model)
  - Kling 4.0 does not yet appear on the AA boards. — [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- **Runway.**
  - Gen-4.5 was released on 1 Dec 2025. At launch it was #1 on AA with 1,247 Elo, ahead of Veo 3 and Sora 2 Pro. That was Dec 2025, on an older board. — [CNBC](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html)
  - Image-to-video was added on 21 Jan 2026. No Gen-5 appears anywhere in the 2026 changelog. — [Runway changelog](https://runway.com/changelog)
  - The editing model Aleph 2.0 launched with Edit Studio on 21 May 2026. — [Runway News: Aleph 2](https://runway.com/news/introducing-aleph-2-and-edit-studio)
  - In 2026 Runway turned into a multi-model platform. It hosts Kling 3.0/O3/4.0, Seedance 2.0/2.5, Gemini Omni Flash, MiniMax Hailuo 3.0 (H3), Wan 3.0 and Grok Imagine 1.5. — [Runway changelog](https://runway.com/changelog); [Runway API pricing](https://docs.dev.runwayml.com/guides/pricing/)
- **Luma.**
  - The current model is Ray3.2 (June 2026). Ray3.14 came out in Jan 2026. Ray2 and "Dream Machine" are described as deprecated. — [Luma llm-info](https://lumalabs.ai/llm-info); [Luma Ray3.14 news](https://lumalabs.ai/news/ray3_14)
  - The Luma app also hosts Seedance 2.0, Veo 3.1 and Kling 3.0/Omni. — [Luma llm-info](https://lumalabs.ai/llm-info)
- **Pika.**
  - The latest model is Pika H3 Flex (29 Oct 2026). It is post-trained on MiniMax H3, open weights. Pika claims it is the top open-weights model on DesignArena's text-to-video board and #7 for video quality (self-reported). — [Yahoo Finance: Pika H3 Flex](https://finance.yahoo.com/technology/ai/articles/pika-launches-pika-h3-flex-184000848.html); [Pika](https://pika.art/)
  - Pika 2.5 is still listed. — [Pika](https://pika.art/)
- **MiniMax: the current model is MiniMax H3, also called "Hailuo 3.0".**
  - Unveiled at WAIC on 17 Jul 2026 and launched 31 Jul 2026. — [Picassoia](https://blog.picassoia.com/hailuo-3-0-release-date-minimax-new-video-model-explained); [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0)
  - Weights were reportedly posted to Hugging Face (MiniMaxAI/MiniMax-H3) on 3 Aug 2026 under the "MiniMax H3 Community License". — [ComfyUI-Wiki](https://comfyui-wiki.com/en/news/2026-08-03-minimax-h3-open-weights-comfyui); [RunPod](https://www.runpod.io/blog/minimax-h3-the-open-weight-omni-modal-video-model-and-what-it-takes-to-run-it)
  - H3 is the base for Utopai X, HeyGen Video 1 and Pika H3 Flex. — [Utopai blog](https://www.utopaistudios.com/en/blog/introducing-the-all-new-pai-and-utopai-x); [OrcaRouter](https://www.orcarouter.ai/blog/heygen-video-1-launch); [Yahoo Finance: Pika](https://finance.yahoo.com/technology/ai/articles/pika-launches-pika-h3-flex-184000848.html)
  - Per the HF explainer, AA ranked H3 #1 in Video Editing. — [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0)
- **ByteDance Seedance.**
  - Seedance 2.0 launched on 12 Feb 2026. — [MakerPulse](https://makerpulse.ai/seedance-2-copyright-fight/)
  - Seedance 2.5 came out in late Jul 2026; sources give 31 Jul or 7 Aug for the OpenRouter listing. — [OpenRouter Seedance 2.5](https://openrouter.ai/bytedance/seedance-2.5); [Gate.AI](https://gate.ai/blog/seedance-2-5-bytedance-specs-pricing-api-use-cases)
  - It is #1 on AA image-to-video. — [AA I2V](https://artificialanalysis.ai/video/leaderboard/image-to-video)
- **Alibaba Wan.**
  - Wan 3.0 went into public beta on 6 Aug 2026. As of 5 Nov 2026 it was hosted only, with no weights or licence published. A GitHub repo exists with only a README and licence file. — [KenerateAI](https://kenerateai.com/blogs/is-wan-3-0-open-source); [Evolink](https://evolink.ai/blog/wan-3-0-release)
  - The newest open Wan flagship is still Wan 2.2 (Apache 2.0, Jul 2025). — [KenerateAI](https://kenerateai.com/blogs/is-wan-3-0-open-source)
  - Claims of an April 2026 Apache-licensed Wan 3.0 come from lookalike sites and are unverified. — [JXP](https://www.jxp.com/wan/blog/is-wan-3-0-open-source)
  - Alibaba-ATH's "HappyHorse" 1.0 (Apr 2026) and 1.1 (Jun 2026) are separate models. — [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- **Lightricks.**
  - LTX-2.5 open weights were released on 11 Aug 2026 (GitHub v1.2.0). — [ComfyUI-Wiki LTX-2.5](https://comfyui-wiki.com/en/news/2026-08-11-ltx-2-5-open-weights-release)
  - LTX-2.3 came out in Mar 2026. — [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- **Midjourney.**
  - Video V1 (June 2025) is still the only video model. It is image-to-video only, with no text-to-video or audio. — [TechCrunch (Jun 2025)](https://techcrunch.com/2025/06/18/midjourney-launches-its-first-ai-video-generation-model-V1); [Reel Stack](https://reel-stack.com/tools/midjourney)
  - Video V2 is on the roadmap with no date. — [Startup Fortune](https://startupfortune.com/midjourneys-v8-alpha-signals-the-platform-is-quietly-entering-a-new-era-of-image-and-video-generation/); [Blake Crosley guide](https://blakecrosley.com/guides/midjourney)
  - V8.2 has been the default image model since 24 Jul 2026. — [Gradually.ai](https://www.gradually.ai/en/midjourney-statistics/)
- **Moonvalley Marey.**
  - Marey became publicly available in Jul 2025, marketed as an "ethical"/licensed-data model for filmmakers (Jul 2025). — [TechCrunch (Jul 2025)](https://techcrunch.com/2025/07/08/moonvalleys-ethical-ai-video-model-for-filmmakers-is-now-publicly-available/)
  - I found no 2026 version update. Public pricing is limited and enterprise is sales-led. — [Zekai review](https://zekaiwork.com/ai-tools/moonvalley/); [The Rundown](https://www.therundown.ai/tools/marey-moonvalley)
- **New 2026 entrants.**
  - **Utopai X:** launched 30 Sep 2026 and available only inside Utopai's PAI production platform, credit-billed with no API. It is #2 on AA T2V and I2V. — [Utopai blog](https://www.utopaistudios.com/en/blog/introducing-the-all-new-pai-and-utopai-x); [Variety](https://variety.com/2026/biz/news/utopai-studios-defining-production-intelligence-for-film-television-1236878187/)
  - **HeyGen Video 1:** launched 30 Sep 2026. It is a general-purpose prompt-to-clip model, not an avatar tool. — [HeyGen Oct 2026 updates](https://www.heygen.com/blog/heygen-october-2026-release); [HeyGen Help](https://help.heygen.com/en/articles/17272995-introducing-heygen-video-generate-cinematic-clips-from-a-prompt)
  - **FLUX 3 (Black Forest Labs):** announced 23 Jul 2026; video became GA on 4 Aug 2026. — [The Decoder](https://the-decoder.com/black-forest-labs-makes-flux-3-video-generally-available-and-claims-it-beats-seedance-2-0/); [MarkTechPost](https://www.marktechpost.com/2026/07/26/black-forest-labs-releases-flux-3-a-multimodal-flow-model-for-image-video-audio-and-robot-action-prediction/)
  - **Others on the boards:** Grok Imagine Video 1.5 (May 2026), SkyReels V4, P-Video-2-Pro, Vidu Q3/Q4 and PixVerse V6. — [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video)

**Practitioner and reviewer tests (small samples, often vendor-affiliated)**
- **Kapwing realistic-humans test (3 Jun 2026; Sora 2, Veo 3.1, Kling, Seedance 1.8).** — [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)
  - Sora 2 was strongest overall for natural human delivery. Sora is now discontinued.
  - Veo 3.1 was best for speech and lip sync, but looked "too polished/staged".
  - Kling was best for smooth motion when dialogue matters less.
  - Seedance 1.8 was weakest; its subject walked through a plant.
- **Hands:** several 2026 tests favour Kling. One found Kling 2.6 had clean hand anatomy versus Seedance 1.5 Pro. Others reverse that and give Seedance the edge on portraits and anatomy. — [VidGuru (Seedance 1.5 Pro vs Kling 2.6)](https://www.vidguru.ai/blog/seedance-1.5-pro-vs-kling-v2.6-comparison-benchmark.html); [MagicShot](https://magicshot.ai/blog/kling-vs-veo-vs-seedance-comparison)
- **Seedance 2.5 vs Kling vs MiniMax:** one test found Seedance 2.5 strongest for product shots and photoreal people, with Kling close behind on realism at lower cost. I saw only the search snippet. — [MindStudio comparison](https://www.mindstudio.ai/blog/seedance-kling-minimax-video-model-comparison)
- **Seedance vs Kling 3.0 Omni (vendor-affiliated Seedance site):** Seedance wins landscape and product shots; Kling wins close-up portraits and character acting. — [seedance.tv](https://www.seedance.tv/blog/seedance-2-5-vs-kling-3-0-omni-2026)
- **Gemini Omni Flash (May–Jun 2026):** independent testers rate its raw visual fidelity below Seedance 2.0 and Kling 3.0. Its differentiator is multi-turn conversational editing. — [BuildFastWithAI](https://blog.buildfastwithai.com/gemini-omni-google-ai-video-model-review)
- **Gemini Omni 1.2:** a 20-call Segmind test found it weaker at "cinematic advertising and photoreal people". — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)

### Inferences
- **For photoreal ad and people work, the shortlist to test in Nov 2026 is:**
  - Seedance 2.5 (or 2.0)
  - MiniMax H3 and its derivatives
  - Kling 3.0/4.0
  - Wan 3.0
  - FLUX 3
- **Gemini Omni 1.2 and Veo 3.1 fit specific jobs:**
  - Omni 1.2 is for cheap volume and conversational edits.
  - Veo 3.1 is for lip-synced dialogue, but only via Google's enterprise platform or third-party hosts.
- **H3's architecture has spread across the market.** At least four leaderboard entries are H3 post-trains (Utopai X, HeyGen Video 1, H3 Max, Pika H3 Flex). An agency can reach that quality through several price points.
- **Gemini Omni 1.2 Flash is probably not yet on AA's board.** The board lists only Omni Flash 1.1, and 1.2 was released on 5 Nov. That likely explains why Omni is #1 on Arena but #12–16 on AA.
- **Runway's value in 2026 is mostly its editing tools and its multi-model hub,** rather than Gen-4.5 image quality. The tools include Aleph 2, ProRes export, HDR conversion and Premiere/Resolve plugins.

### Gaps
- I could not load the LMArena (arena.ai) tables directly (HTTP 403). The Arena figures above come from search snippets.
- There is no category-level leaderboard (physics, hands, faces, prompt adherence) for Nov 2026. AA's category filters were not exposed in what I fetched.
- Kling 4.0, Gemini Omni 1.2, Runway Gen-4.5, Luma Ray3.2, Pika H3 Flex and Marey have no current AA Elo in what I retrieved.

---

## 2. Specs per model (duration, resolution, fps, audio/lip sync, aspect ratios, start/end frames, references, camera control, motion brush, video-to-video, extend)

### Takeaway
By late 2026, native synchronized audio, 10–30 s clips, first/last-frame control and multi-image references are standard on the leaders. The main differences are:
- **Max length:** Seedance 2.5, Kling 4.0 and Wan 3.0 reach 30 s; Omni, H3 and Kling 3.0 reach 15 s; Runway Gen-4.5 reaches 10 s.
- **True resolution:** FLUX 3 is native 720p with upscaling; Omni's 1080p and 4K are upsampled; H3 is native 2K; Kling and LTX offer 4K.
- **Editing ability:** Omni, H3, Aleph 2, Kling O3 and Luma Modify are the edit-capable models.

### Cited Findings

**Google Gemini Omni 1.2 Flash (GA 5 Nov 2026)**
- 3–15 s per clip, in 1 s steps. Omni 1.1 was capped at 10 s. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/); [Google AI Studio video docs](https://aistudio.google.com/docs/video)
- Output ranges from 360p to 4K. Google's price table labels 1080p and 4K as "upsampled", so 720p is the native output. — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
- Native audio: synced speech, music and SFX. Audio *references* are allowlist-gated on Google Cloud. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- Up to 6 reference images for character consistency. — [Google AI Studio video docs](https://aistudio.google.com/docs/video)
- Up to 3 videos per prompt as references. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- Workflows: text-to-video, image-to-video, first/last-frame interpolation, upscaling. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- Multi-turn edits: change background, product, lighting, weather or aspect ratio while keeping the rest of the scene. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- Extension appends 3–10 s to up to the last 30 s of an input clip. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- Every output carries an imperceptible SynthID watermark. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- API constraints: Interactions API only, with no GenerateContent, batch, grounding or caching. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- Latency in Segmind's test was 28–136 s, mostly 40–90 s. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- At the May 2026 launch, editing or replacing speech in *existing* footage was withheld for safety reasons. — [BuildFastWithAI](https://blog.buildfastwithai.com/gemini-omni-google-ai-video-model-review); [TechTimes](https://www.techtimes.com/articles/316859/20260519/google-launches-gemini-omni-video-model-holds-back-its-riskiest-feature.htm)
- Camera moves are made with text instructions; there is no dedicated camera-control UI spec. — [BuildFastWithAI](https://blog.buildfastwithai.com/gemini-omni-google-ai-video-model-review)

**Google Veo 3.1 (released Oct 2025; Lite added Mar 2026; legacy)**
- Resolutions are 720p and 1080p, plus 4K on Standard and Fast; there is no 4K on Lite. Audio is included in the base price. — [BenchLM Veo pricing](https://benchlm.ai/media-pricing/veo); [CloudZero](https://www.cloudzero.com/blog/veo-3-pricing/)
- Standard and Fast have been GA on Vertex AI (now Gemini Enterprise Agent Platform) since 17 Nov 2025. Sources conflict on whether Lite is GA or preview. — [CloudZero](https://www.cloudzero.com/blog/veo-3-pricing/)
- In Jun 2026 testing, Veo 3.1 had the best lip sync of the models tested. — [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)

**Kling 3.0 / 3.0 Omni "O3" (Feb 2026)**
- 3–15 s per clip, with up to 6 shots (multi-shot storyboard). — [Krea API guide](https://www.krea.ai/blog/kling-3-0-api-access-guide-pricing-code-examples-for-multi-shot-ai-video); [Genly](https://blog.trygenly.io/en/kling-3-0-ai-video-model)
- Outputs 720p and 1080p, plus native 4K (reported as added 23 Apr 2026). — [Krea](https://www.krea.ai/blog/kling-3-0-api-access-guide-pricing-code-examples-for-multi-shot-ai-video)
- A "60 fps" claim appears only in some vendor blogs and is unverified. — [MindStudio O3](https://www.mindstudio.ai/blog/what-is-kling-o3-latest-video-model)
- Native audio, with speech in Chinese, English, Japanese, Korean and Spanish. — [Krea](https://www.krea.ai/blog/kling-3-0-api-access-guide-pricing-code-examples-for-multi-shot-ai-video)
- O3 is the reference/control-heavy variant: Reference-to-Video and Edit Video. Plain 3.0 is the cheaper, prompt-first option. — [Picsart V3 vs O3](https://picsart.com/blog/kling-v3-vs-o3/); [fal pricing](https://fal.ai/pricing)
- An editing-focused O3 upgrade shipped on 17 Jun 2026 (single vendor blog). — [AtlasCloud](https://atlascloud.ai/blog/guides/kling-3-0-omni-upgrade)
- Kling 3.0 Motion Control and Kling O3 4K are also hosted in Runway's MCP. — [Runway changelog](https://runway.com/changelog)

**Kling 4.0 (16 Oct 2026; official press release)** — [Kling 4.0 press release](https://finance.yahoo.com/technology/ai/articles/kling-ai-launches-kling-4-105300062.html)
- Native 30 s generation, and existing videos can be extended up to 2 minutes.
- Up to 10 keyframes.
- Up to 15 multimodal references (image, video, audio) for character consistency across shots.
- Reference videos, including white-model and depth-map videos, can drive performance, camera and pacing.
- Push-in, pull-out, pan, tracking and orbit moves.
- Prompts up to 8,000 tokens.
- Languages: English (US, UK and Indian accents), Japanese, Korean, Spanish, Portuguese, German, French and Hindi.
- 10-bit HDR at 1080p/4K and 21:9 are "soon". The developer API is "soon" for enterprise.
- Runway already lists Kling 4.0 at 720p and 1080p, and Kling 4.0 Flash at 720p. — [Runway API pricing](https://docs.dev.runwayml.com/guides/pricing/)

**ByteDance Seedance 2.5 (late Jul 2026) and 2.0 (Feb 2026)**
- Seedance 2.5 does up to 30 s per generation, takes up to 50 combined multimodal references and supports local in-scene editing. — [Gate.AI](https://gate.ai/blog/seedance-2-5-bytedance-specs-pricing-api-use-cases)
- Output is priced at 480p, 720p and 1080p, with 4K listed on OpenRouter. Some sources say native output is only 480p/720p, so resolution is unconfirmed. — [OpenRouter](https://openrouter.ai/bytedance/seedance-2.5); [Gate.AI](https://gate.ai/blog/seedance-2-5-bytedance-specs-pricing-api-use-cases)
- On Runway, Seedance 2.5 offers native audio, text/image/video-to-video and first-frame/last-frame/reference-image controls. 1080p was added on 15 Aug 2026, and a 480p Draft Mode on 2 Oct 2026. — [Runway changelog](https://runway.com/changelog)
- Seedance 2.0 accepts text, image, video or audio inputs, both to generate and to edit. It goes up to 4K, and the 4K tier must be requested explicitly. Fast (480/720p) and Mini tiers also exist. — [Runway changelog](https://runway.com/changelog); [Runway API pricing](https://docs.dev.runwayml.com/guides/pricing/)

**MiniMax H3 / Hailuo 3.0 (31 Jul 2026)** — [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0)
- 4–15 s per clip, at 24 fps (per Morphic and AA).
- Native 2K output (1440 px short edge), with 768p in closed beta.
- Native stereo audio covering dialogue, SFX and room tone. It can transfer a voice from a reference clip.
- Up to 9 image, 3 video and 3 audio references, 12 files maximum.
- First/last frame control. Image-to-video and reference-to-video can't be mixed in one request.
- Instruction-based editing from one sentence.
- Weights (reported 33B) are on Hugging Face under a community licence that reportedly excludes the US, EU, UK and South Korea from local deployment. — [RunPod](https://www.runpod.io/blog/minimax-h3-the-open-weight-omni-modal-video-model-and-what-it-takes-to-run-it); [explainx](https://explainx.ai/blog/minimax-h3-open-video-model-hailuo-july-2026); [Miraflow](https://miraflow.ai/blog/minimax-h3-open-weight-omni-modal-architecture-explained-2026)
- The planned licence terms allowed commercial use for organisations under $20M revenue. — [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0)
- Runway hosts H3 with keyframes and reference images/videos/audio. — [Runway changelog](https://runway.com/changelog)

**Alibaba Wan 3.0 (public beta 6 Aug 2026; closed weights)**
- Clips up to 30 s in a single shot. — [Morphic](https://morphic.com/resources/models/wan-3-0); [Siray](https://blog.siray.ai/wan-3-0-explained-alibabas-30-second-ai-video-model/)
- Workflows: text-to-video, first/last-frame image-to-video, reference-video. — [KenerateAI](https://kenerateai.com/blogs/is-wan-3-0-open-source)
- On Runway it outputs 480p/720p/1080p with audio and takes image, video and audio references. A "Prime" tier also exists. — [Runway changelog](https://runway.com/changelog); [Runway API pricing](https://docs.dev.runwayml.com/guides/pricing/)

**Runway Gen-4.5 (Dec 2025) and Aleph 2.0 (May 2026)**
- Gen-4.5 durations are 5, 8 or 10 s. Inputs are text-to-video and image-to-video only, with "additional inputs coming soon". — [Runway Help Center](https://help.runwayml.com/hc/en-us/articles/46974685288467)
- Sources conflict on resolution (720p vs 1080p). Most say there is no native audio. — [invideo](https://invideo.io/blog/runway-gen-4-5-complete-guide/); [Freepik](https://www.freepik.es/runway-gen-4-5)
- Gen-4.5 and Aleph 2 outputs can be exported as ProRes 4444 or PNG sequences (Pro+ plans, from 10 Aug 2026). — [Runway changelog](https://runway.com/changelog)
- Aleph 2.0 is an editing model. You edit one frame and the change propagates through the shot. It takes inputs up to 30 s and outputs 1080p. — [Runway News](https://runway.com/news/introducing-aleph-2-and-edit-studio); [Scenario help](https://help.scenario.com/articles/6499445829-runway-aleph-the-essentials)
- Gen-4 Aleph (Jul 2025) was deprecated on 30 Jul 2026. — [AtlasCloud Aleph](https://www.atlascloud.ai/blog/tips/runway-aleph)
- Other 2026 Runway tools: Act-Two performance transfer, SAM3 video segmentation (transparent WebM), Enhance Frame Rate (to 25–120 fps, up to 4K), Ruby (SDR to HDR10/HLG grading), and plugins for Premiere/After Effects and DaVinci Resolve. — [Runway changelog](https://runway.com/changelog); [Runway API pricing](https://docs.dev.runwayml.com/guides/pricing/)

**Luma Ray3.2 (Jun 2026)** — [Luma llm-info](https://lumalabs.ai/llm-info); [AIUnpacking](https://aiunpacking.com/review/luma-dream-machine/)
- Text-to-video and image-to-video at 1080p.
- Native 16-bit HDR with EXR (ACES2065-1) export.
- Up to 16 keyframes per clip.
- Modify Video V2 (video-to-video) handles up to 20 s at 1080p.
- Reframe to any aspect ratio while keeping motion and facial performance.
- Draft Mode for cheap exploration.
- No native audio is listed.
- Ray3.14 (Jan 2026) brought native 1080p and was 4× faster and 3× cheaper. — [Luma Ray3.14](https://lumalabs.ai/news/ray3_14)

**Lightricks LTX-2.5 (11 Aug 2026, open weights)** — [ComfyUI-Wiki](https://comfyui-wiki.com/en/news/2026-08-11-ltx-2-5-open-weights-release); [ComfyUI-Wiki model page](https://comfyui-wiki.com/en/models/ltx-video/ltx-2-5); [innFactory](https://innfactory.ai/en/ai-models/lightricks-ltx/)
- 22B-parameter audio-video model.
- Modes: text-to-video, image-to-video, video-to-video, text-to-audio and audio-to-video.
- Up to 4K at 50 fps with synced audio.
- The Fast variant supports 720p–2160p and clips up to 20 s. One source says the open weights run 121 frames at 24 fps per pass (about 5 s), which conflicts with the 20 s claim.
- Dev, distilled, int8 and NVFP4 checkpoints are available.
- LTX-2.x Community License: companies above $10M revenue need a paid commercial agreement.

**FLUX 3 Video (Black Forest Labs, GA 4 Aug 2026)** — [The Decoder](https://the-decoder.com/black-forest-labs-makes-flux-3-video-generally-available-and-claims-it-beats-seedance-2-0/); [Kingy.ai](https://kingy.ai/blog/flux-3-video-general-availability-world-model/); [eWeek](https://www.eweek.com/news/black-forest-labs-flux-3-multimodal-ai-robotics/)
- Clips up to 20 s.
- Native audio with lip-synced dialogue in 14+ languages.
- Text-to-video, image-to-video, keyframes, video continuation, and multiple scenes and camera angles in one clip.
- Reported as native 720p with Full HD via upscaling. This conflicts with "Full HD" claims elsewhere.
- An open-weight "FLUX 3 Dev" is planned for later in 2026.

**Other models**
- **HeyGen Video 1 (Sep 2026; MiniMax H3 post-train):** 5–15 s with synthesized audio. Inputs are a prompt, a first frame or references. Available via API, MCP and Creative Studio. — [HeyGen Help](https://help.heygen.com/en/articles/17272995-introducing-heygen-video-generate-cinematic-clips-from-a-prompt); [OrcaRouter](https://www.orcarouter.ai/blog/heygen-video-1-launch); [HeyGen Oct 2026](https://www.heygen.com/blog/heygen-october-2026-release)
- **Pika H3 Flex (29 Oct 2026):** synced video with stereo audio up to 15 s, generated in 6 denoising steps (faster than realtime). Up to 12 references, 5 separate audio stems, up to 4K, open weights. — [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/pika-launches-pika-h3-flex-184000848.html); [CompleteAITraining](https://completeaitraining.com/news/pika-labs-releases-open-weight-h3-flex-video-model/)
- **Grok Imagine Video 1.5:** 1–15 s, native audio, up to 1080p, text-to-video and image-to-video. — [Runway changelog](https://runway.com/changelog)
- **Utopai X:** text-to-video with synced audio. The studio claims strengths in physics, sound matching, lighting and camera control. It is post-trained on H3 using the studio's production material. — [Utopai blog](https://www.utopaistudios.com/en/blog/utopai-x-ai-video-model-filmmaking); [GMI Cloud](https://www.gmicloud.ai/en/blog/inside-utopai-x-how-a-film-studio-built-a-top-ranked-video-model-on-gmi-cloud)
- **Midjourney Video V1 (Jun 2025):** image-to-video only. Each job returns four 5 s clips. No text-to-video and no audio. — [TechCrunch](https://techcrunch.com/2025/06/18/midjourney-launches-its-first-ai-video-generation-model-V1); [Reel Stack](https://reel-stack.com/tools/midjourney)
- **Moonvalley Marey (2025):** public "Marey Realism" endpoints are available on fal. — [The Rundown](https://www.therundown.ai/tools/marey-moonvalley)

### Inferences
- **Minimum durations matter for 3–6 s inserts:**
  - Gemini Omni 1.2 and Kling 3.0 go down to 3 s.
  - H3 goes down to 4 s.
  - Runway Gen-4.5's minimum is 5 s.
  - Shorter minimums mean lower cost per usable insert and less footage to trim.
- **Specs are summarised in this matrix.** "?" means not confirmed in the sources. Dates as above.

| Model | Max s | Max res (native) | Audio | Start/end frame | Refs | V2V edit | Extend | Open weights |
|---|---|---|---|---|---|---|---|---|
| Gemini Omni 1.2 Flash | 15 | 720p native; 1080p/4K upsampled | Yes | Yes | 6 img / 3 vid | Yes (multi-turn) | Yes (+3–10 s) | No |
| Veo 3.1 (legacy) | ? (see Gaps) | 1080p / 4K | Yes, best lip sync (Jun 2026 test) | ? | ? | ? | ? | No |
| Kling 3.0 / O3 | 15 (6 shots) | 4K | Yes (5 langs) | ? | O3: yes | O3: yes | ? | No |
| Kling 4.0 | 30 | 4K (HDR "soon") | Yes (8+ langs) | 10 keyframes | 15 | ? | To 2 min | No |
| Seedance 2.5 | 30 | 1080p (4K on OpenRouter) | Yes | Yes | Up to 50 | Yes (in-scene) | ? | No |
| MiniMax H3 | 15 | 2K | Stereo + voice transfer | Yes | 9 img / 3 vid / 3 aud | Yes (instruction) | ? | Yes (restricted licence) |
| Wan 3.0 | 30 | 1080p | Yes | Yes | img / vid / aud | Ref-video | ? | No |
| Runway Gen-4.5 | 10 | 720p/1080p (conflict) | No (mostly) | First frame | No | Via Aleph 2 | ? | No |
| Luma Ray3.2 | ? (Modify 20 s) | 1080p, 16-bit HDR | Not listed | 16 keyframes | ? | Modify V2 | ? | No |
| LTX-2.5 | 20 (Fast) | 4K / 50 fps | Yes | ? | ? | Yes | ? | Yes (community licence) |
| FLUX 3 | 20 | 720p native, upscaled to 1080p | Yes, lip sync 14+ langs | Keyframes | ? | Continuation | Yes | Dev planned |
| HeyGen Video 1 | 15 | 768p–1080p/2K (conflict) | Yes | First frame | Yes | ? | ? | No |
| Pika H3 Flex | 15 | 4K | Stereo, 5 stems | ? | 12 | ? | ? | Yes |
| Midjourney V1 | 5 | ? | No | Image start | No | No | ? | No |

### Gaps
- **Veo 3.1 clip durations and controls:** my background knowledge from the Oct 2025 launch is 4/6/8 s clips, up to 3 reference images, first/last frame and Extend. I did not re-verify this from a 2026 primary page, so treat it as unconfirmed.
- **Frame rates** are not stated for most models (Omni, Kling 4.0, Seedance 2.5, Wan 3.0).
- **Aspect-ratio lists** per model were not in the sources. Kling 4.0 is adding 21:9 "soon", and Omni and Luma support reframing.
- **Motion brush:** I found no 2026 source confirming a motion-brush tool on any current flagship. Kling's older motion brush (2024–25) has no confirmed status in 3.0/4.0.
- **Luma Ray3.2 audio** and max text-to-video duration are not confirmed.
- **Marey 2026 specs** were not found.

---

## 3. Price per second / per clip: maker platform vs APIs, and cheapest legitimate route

### Takeaway
- **Cheapest good-quality API routes in Nov 2026:**
  - Gemini Omni 1.2 Flash: about $0.07/s at 720p on the Gemini API.
  - MiniMax H3: about $0.08–0.15/s (768p–2K), or via HeyGen Video at about $0.03/s list.
  - Wan 3.0: $0.10/s at 720p via Runway.
  - Kling 3.0: about $0.07/s at 1080p with audio when spent through Kling's Ultra-plan credits, or $0.14/s on fal.
- **Expensive options:**
  - Seedance 2.5: about $0.23/s at 720p and $0.57/s at 1080p on BytePlus.
  - Veo 3.1 Standard with audio: $0.40/s.
- Runway's API rate card is a useful single cross-model price reference at $0.01 per credit.

### Cited Findings

**Primary rate cards**
- **Gemini API, Gemini Omni 1.2 Flash** — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
  - Per-second prices: 360p $0.023, 720p ~$0.07, 1080p (upsampled) $0.104, 4K (upsampled) $0.209.
  - Per clip at 720p: about $0.70 for 10 s and $1.04 for 15 s.
  - Billing basis: $12.00 per 1M output tokens, at 5,792 tokens per second of 720p.
  - Omni 1.1 Flash cost about $0.10/s ($17.50 per 1M tokens). It is deprecated and routes to 1.2 from 3 Dec 2026.
- **Runway API rate card ($0.01 per credit; my conversion to USD/s)** — [Runway API pricing](https://docs.dev.runwayml.com/guides/pricing/)

| Model | Price per second |
|---|---|
| Runway Gen-4.5 | $0.12 |
| Gen-4 Turbo | $0.05 |
| Aleph 2 | $0.28 (minimum $0.56 per generation) |
| Veo 3.1 | $0.40 with audio / $0.20 without |
| Veo 3.1 Fast | $0.15 / $0.10 |
| Gemini Omni Flash 1.2 | $0.02 / $0.07 / $0.10 / $0.21 (360p / 720p / 1080p / 4K), +$0.01 per reference image |
| Seedance 2.5 | $0.20 / $0.30 / $0.68 (480p / 720p / 1080p), minimum $0.80 |
| Seedance 2.0 | $0.14 / $0.30 / $0.40 / $1.50 (480p / 720p / 1080p / 4K) |
| Seedance 2.0 Fast | $0.11 / $0.24 (480p / 720p) |
| Seedance 2.0 Mini | $0.07 / $0.15 (480p / 720p) |
| Kling 3.0 Standard | $0.09 / $0.13 (no audio / audio) |
| Kling 3.0 Pro | $0.12 / $0.17 (no audio / audio) |
| Kling 3.0 4K | $0.43 |
| Kling O3 | $0.13 / $0.17 / $0.43 (Std / Pro / 4K) |
| Kling 4.0 | $0.126 / $0.188 at 720p / 1080p, promo through 30 Nov 2026 (list $0.157 / $0.235) |
| Kling 4.0 Flash (720p) | $0.094 |
| MiniMax H3 | $0.10 / $0.15 (768p / 2K) |
| MiniMax H3 Max | $0.05 / $0.08 (480p / 768p) |
| Wan 3.0 | $0.05 / $0.10 / $0.20 (480p / 720p / 1080p) |
| Wan 3.0 Prime | $0.068 / $0.14 / $0.28 |
| Grok Imagine 1.5 | $0.10 / $0.16 / $0.29 (480p / 720p / 1080p) |
| Grok Imagine 1.5 Lite | $0.02 / $0.03 / $0.14 |
| Act-Two | $0.05 |

- **Runway team plan:** each seat adds 6,900 credits/month to a shared pool, for up to 9 people. — [Runway changelog](https://runway.com/changelog)
- **MiniMax's own API, H3** — [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0)
  - 2K: $0.13/s ($7.80/min).
  - 768p: $0.09/s (closed beta as of 1 Aug 2026).
  - First 5 reference images are free, then $0.04 each.
  - Pay-as-you-go only, no subscription.

**Kling app plans (around Oct 2026, from third-party summaries of kling.ai)** — [HeyGen blog on Kling pricing](https://www.heygen.com/blog/kling-ai-pricing); [AIToolAnalysis](https://aitoolanalysis.com/kling-ai-pricing/); [Framesurfer](https://framesurfer.com/blogs/kling-ai-pricing)
- Plans, as first-month price then ongoing price:
  - Standard: $6.99 → $8.80/month for 660 credits.
  - Pro: $25.99 → $32.56 for 3,000 credits.
  - Premier: $64.99 → $80.96 for 8,000 credits.
  - Ultra: $127.99 → $159.99 for 26,000 credits.
- The free tier is 720p with a watermark and is not licensed for commercial use.
- Kling 3.0 credit costs per second:
  - 720p: 6 credits, or 9 with audio.
  - 1080p: 8 credits, or 12 with audio.
  - 4K: 30 credits.
- A 5 s 1080p clip with audio costs about $0.80 on Standard and about $0.37 on Ultra.
- Kling 4.0 had no published credit price as of these sources.

**Veo 3.1 on Google's enterprise platform (ex-Vertex), third-party reports of a rate card dated 13 Oct 2026** — [CloudZero](https://www.cloudzero.com/blog/veo-3-pricing/); [BenchLM](https://benchlm.ai/media-pricing/veo)
- Standard: $0.40/s at 720p/1080p and $0.60/s at 4K, with audio. About $0.20/s without audio.
- Fast: $0.10 / $0.12 / $0.30 per s (720p / 1080p / 4K).
- Lite: $0.05 / $0.08 per s (720p / 1080p). No 4K.
- One blog's figure of $0.75/s is an outlier.

**Seedance 2.5**
- BytePlus ModelArk (ByteDance's official API): about $0.10 / $0.23 / $0.57 per s at 480p / 720p / 1080p. This is reported by aggregators; I did not fetch it primary. — [search summary of Gate.AI / Framesurfer](https://framesurfer.com/blogs/seedance-2-0-pricing)
- MindStudio puts 720p at about $0.23/s, roughly 52% more than Seedance 2.0's ~$0.15/s. Video-reference inputs are cheaper per second but use far more input tokens. — [MindStudio Seedance 2.5 review](https://www.mindstudio.ai/blog/seedance-2-5-review-pricing)
- OpenRouter runs from about $0.103/s at 480p up to $2.08/s at 4K with audio. — [OpenRouter](https://openrouter.ai/bytedance/seedance-2.5)
- Kie.ai (Oct 2026) charges $0.14 / $0.315 / $0.79 per s at 480p / 720p / 1080p. — [Kie.ai](https://kie.ai/blog/seedance-2-5-pricing)

**fal.ai list prices (pricing page, Nov 2026)** — [fal pricing](https://fal.ai/pricing)
- Kling v3 and O3 (Std or Pro, all modes): $0.14/s.
- MiniMax H3 Max: $0.05/s. H3 Max Turbo: $0.025/s.
- Grok Imagine video: $0.05/s.
- FLUX 3 Max: $0.085/s.
- Seedance 2.0 Fast and Mini are billed per token.
- The page summary did not show resolution or audio qualifiers, and some figures (for example Grok 1.5 at $0.01/s) disagree with AA and Runway. Check each model page before budgeting.
- fal also hosts LTX-2.5 and Marey. — [fal LTX-2.5](https://fal.ai/ltx-2.5); [The Rundown](https://www.therundown.ai/tools/marey-moonvalley)
- Marey on fal: $1.50 per 5 s or $3.00 per 10 s (about $0.30/s), checked 29 Aug 2026. — [The Rundown](https://www.therundown.ai/tools/marey-moonvalley)
- Marey's 2025 direct credit packs were $14.99 for 100 credits, $34.99 for 250 and $149.99 for 1,000. These are Jul 2025 figures and may be outdated. — [The Rundown](https://www.therundown.ai/tools/marey-moonvalley)

**HeyGen Video 1**
- List price is $0.03/s at 768p. A 50% launch promo ran until 31 Oct 2026. — [HeyGen Oct 2026](https://www.heygen.com/blog/heygen-october-2026-release)
- Another report gives $0.01 / $0.018 / $0.05 per s at 480p / 768p / 1080p as promo prices. — [OrcaRouter](https://www.orcarouter.ai/blog/heygen-video-1-launch)

**Google consumer plans (May 2026)**
- AI Plus $7.99/month, AI Pro $19.99, AI Ultra $99.99 or $199.99 tiers.
- Omni Flash is free on YouTube Shorts and YouTube Create.
- Source: [BuildFastWithAI](https://blog.buildfastwithai.com/gemini-omni-google-ai-video-model-review)

**OpenAI Sora:** there is no route; the API ended 24 Sep 2026. — [OpenAI Help](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)

### Inferences
**Cheapest legitimate route per top model** (my synthesis of the figures above, 720p–1080p with audio):

| Model | Cheapest legit route | ~USD per second | 5 s insert |
|---|---|---|---|
| Gemini Omni 1.2 Flash | Gemini API direct | $0.07 (720p) / $0.104 (1080p upsampled) | $0.35 / $0.52 |
| MiniMax H3 | MiniMax API ($0.13 at 2K) or Runway (768p $0.10). HeyGen Video 1, an H3 post-train, lists $0.03 at 768p. | $0.03–0.15 | $0.15–0.75 |
| Kling 3.0 | Kling app on Ultra plan (12 credits/s × $0.00615/credit), or fal | ~$0.074 (Ultra) / $0.14 (fal) | ~$0.37 / $0.70 |
| Kling 4.0 | Runway API promo until 30 Nov; Kling's own API "soon" | $0.188 (1080p) | $0.94 |
| Seedance 2.5 | BytePlus ModelArk | $0.23 (720p) / $0.57 (1080p) | $1.15 / $2.85 |
| Seedance 2.0 | Runway ($0.30 at 720p) or fal per-token Fast/Mini | $0.11–0.40 | $0.55–2.00 |
| Wan 3.0 | Runway API | $0.10 (720p) / $0.20 (1080p) | $0.50 / $1.00 |
| Veo 3.1 Fast | Google enterprise platform (ex-Vertex) | $0.12 (1080p) | $0.60 |
| Veo 3.1 Standard | Google enterprise platform; Runway same price | $0.40 (audio) / $0.20 (silent) | $2.00 / $1.00 |
| Runway Gen-4.5 | Runway API | $0.12 | $0.60 |
| LTX-2.5 | Self-host free under $10M revenue; hosted ~$0.13–0.17 (AA) | ~$0–0.17 | – |
| Marey | fal | $0.30 | $1.50 |

Notes on the table:
- The "true" cost per approved clip is a multiple of these figures because of rerolls. MindStudio explicitly flags rerolls for Seedance. — [MindStudio](https://www.mindstudio.ai/blog/seedance-2-5-review-pricing)
- For silent b-roll under typography, audio-off pricing is cheaper on several models: Kling Standard drops from $0.13 to $0.09, Veo Standard from $0.40 to $0.20.

### Gaps
- **AUD:** I did not retrieve an authoritative USD→AUD rate. Convert at the current rate when you budget.
- **Seedance 2.5 primary prices:** the BytePlus ModelArk figures are reported by aggregators; I did not fetch the official BytePlus page.
- **Luma Ray3.2:** no per-second or plan prices found; the info page lists only plan names (Plus, Pro, Ultra, Enterprise).
- **Pika:** no H3 Flex plan or API prices found.
- **Runway plans:** Gen-4.5 subscription prices per plan were not retrieved.
- **Kling 4.0 official prices:** neither credit nor API prices are published yet.
- **Google enterprise Veo:** I did not get Veo 3.1 GA pricing from a primary Google Cloud page; the figures above come from third-party copies of the rate card.
- **Replicate:** I found no current Replicate prices in this pass.

---

## 4. Known weaknesses, tell-tale AI artifacts, and best/worst jobs per model

### Takeaway
- **Common 2026 tells:**
  - An over-polished, "staged" look (Veo 3.1).
  - Small identity and background drift over a clip (Kling).
  - Gesture misreads and speech distortion (Seedance).
  - Object-permanence and cause-and-effect errors (Runway Gen-4.5).
  - Weaker photoreal people and cinematic ad looks (Gemini Omni).
- **Hands and faces are better but not solved.** Testers disagree on whether Kling or Seedance is better at anatomy.

### Cited Findings
- **Seedance 2.0/2.5**
  - Often renders gestures toward the ear or forehead as kisses.
  - Occasional speech distortion: "I know" comes out as "I low".
  - Prompt-following quirks force rerolls; these quirks appear in both 2.0 and 2.5.
  - Strong image clarity, convincing continuous shots and implicit physical detail.
  - Source: [MindStudio Seedance 2.5 review](https://www.mindstudio.ai/blog/seedance-2-5-review-pricing)
- **Seedance 1.8 (Jun 2026 test)**
  - Facial distortion, a mispronounced word, an uncontrolled slow zoom and object-permanence failures (walked through a plant).
  - Exaggerated facial movement during speech.
  - Source: [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)
- **Seedance policy constraints**
  - ByteDance relaunched with a block on uploading photoreal human faces, plus IP filters and C2PA watermarks. — [Phemex](https://phemex.com/news/article/bytedance-relaunches-seedance-20-globally-with-restrictions-on-realface-uploads-68605); [Ruoqijin](https://ruoqijin.com/blog/seedance-access-and-face-policy)
  - It drew cease-and-desist letters from major studios after the Feb 2026 launch. — [Al Jazeera](https://www.aljazeera.com/news/2026/2/16/bytedance-pledges-fixes-to-seedance-2-0-after-hollywood-copyright-claims); [NBC News](https://www.nbcnews.com/tech/tech-news/seedance-2-bytedance-copyright-infringement-concerns-hollywood-rcna259173)
  - Seedance 2.0 on Runway is "available outside the US" on Unlimited and Enterprise plans. — [Runway changelog](https://runway.com/changelog)
- **Veo 3.1 (Jun 2026 test)**
  - Overly polished, studio-produced look.
  - Actions look stitched together.
  - A subject paused and stared at the camera.
  - Best lip sync of the models tested.
  - Source: [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)
- **Kling (version as tested in Jun 2026)**
  - Weak or missing audio and unreliable lip sync.
  - Generic environments.
  - Subtle shifts in subject and background details over the clip; looks detailed at first glance, but the realism doesn't hold.
  - One line was rendered with an extra word.
  - Smooth motion overall.
  - Source: [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)
  - Other tests rate Kling's hands highly, but still note "hands: fewer issues than a year ago but not solved". — [VidGuru](https://www.vidguru.ai/blog/seedance-1.5-pro-vs-kling-v2.6-comparison-benchmark.html); [MagicShot](https://magicshot.ai/blog/kling-vs-veo-vs-seedance-comparison)
- **Sora 2 (before shutdown; Jun 2026 test)**
  - Morphing during complex facial movement.
  - Failed object manipulation.
  - Source: [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)
- **Gemini Omni**
  - Google says work continues on fast sports action, rapid scene changes and complex physics. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
  - Segmind found it weaker at cinematic advertising and photoreal people. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
  - Vague edit prompts risk over-editing. — [BuildFastWithAI](https://blog.buildfastwithai.com/gemini-omni-google-ai-video-model-review)
  - Google publishes no benchmarks for lip sync or physics. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- **Runway Gen-4.5 (Dec 2025)**
  - Occasional object-permanence lapses.
  - Causal errors: effects can appear before their causes.
  - Improved liquids, momentum and collision physics.
  - Sources: [CNBC](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html); [Wes Roth on X](https://x.com/WesRoth/status/1995787525613560298)
- **MiniMax H3**
  - 15 s cap, so longer pieces must be chained.
  - Image-to-video and reference modes are mutually exclusive.
  - No technical report.
  - The open-weights licence is restrictive.
  - Source: [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0)
- **Midjourney V1:** limited to 5 s image-to-video clips with no audio. Useful for stylised motion from MJ stills. — [Reel Stack](https://reel-stack.com/tools/midjourney)

### Inferences
- **Best/worst job fit**, synthesised from the leaderboards and tests above. Validate with your own tests.

| Model | Best at | Weak at |
|---|---|---|
| Seedance 2.5 / 2.0 | Product shots, clean photoreal scenes, long continuous shots, multi-reference brand consistency | Animating photos of real staff (face-upload ban), nuanced gestures and speech |
| Kling 3.0 / 4.0 | Human motion and close-ups, hands, multi-shot sequences, controllable camera moves, low cost via credits | Detail drift over long clips; dialogue/lip sync weaker than Veo (Jun 2026 test) |
| MiniMax H3 and derivatives | Top-tier realism per dollar, stereo audio, editing; derivatives give price options (HeyGen Video 1) or production fine-tunes (Utopai X) | – |
| Veo 3.1 | On-camera dialogue and lip sync, polished commercial look | "Too polished" for UGC-style authenticity, expensive, now enterprise-platform/legacy |
| Gemini Omni 1.2 | Cheap iteration, conversational edits to existing clips (swap background, product, weather, aspect ratio), extension | Hero photoreal people, cinematic hero shots |
| Runway | Finishing and editing: Aleph 2 restyle and edits, ProRes/HDR, NLE plugins, multi-model access | Gen-4.5 as a hero generator in late 2026 (silent, 10 s) |
| Luma Ray3.2 | HDR/EXR grading pipelines, keyframed motion-graphic-style moves, Modify V2 restyles | – |
| LTX-2.5 / open weights | Private, fine-tunable, self-hosted pipelines | Lower leaderboard realism than closed models |

### Gaps
- **Category scores:** no systematic 2026 benchmark scores text rendering (signage, labels), temporal flicker or "plastic skin" by model. The artifact notes above come from small reviewer tests.
- **Latest versions untested:** I found no independent artifact testing for Kling 4.0, Seedance 2.5 faces, Wan 3.0, FLUX 3, Luma Ray3.2 or Pika H3 Flex.
- **Face-upload policies:** I did not verify Kling, H3 or Omni policies on uploading real-person photos for image-to-video.

---

## 5. Melbourne electrician brand: tradespeople, tools, switchboards, interiors, vans; and 3–6 s b-roll under live typography

### Takeaway
No source tests trades or electrical content specifically, so these recommendations are inferred from general realism rankings and specs.
- **Real people and hands handling tools:** test Kling 3.0/4.0 and MiniMax H3 (or HeyGen Video 1) first, then Seedance 2.5.
- **Product/hardware-style shots of switchboards, vans and interiors:** Seedance 2.5 or 2.0 is the reported product-shot leader.
- **Cheap 3–6 s silent inserts:** use Gemini Omni 1.2 at 720p ($0.07/s; 3 s minimum) or Kling's audio-off tiers.
- **Accuracy of real equipment, vans and staff:** use image-to-video from real brand photos rather than text-to-video. Avoid Seedance for photos of real staff because of its face-upload ban.

### Cited Findings
- **Product vs people split:** Seedance 2.5 was reported strongest for product shots and photoreal people, with Kling close behind at lower cost. — [MindStudio comparison](https://www.mindstudio.ai/blog/seedance-kling-minimax-video-model-comparison)
- **Seedance vs Kling by shot type (vendor-affiliated Seedance site):** Seedance wins landscape and product shots; Kling wins close-up portraits and character acting. — [seedance.tv](https://www.seedance.tv/blog/seedance-2-5-vs-kling-3-0-omni-2026)
- **Model choice for people (Jun 2026):** Kling is best for smooth motion when dialogue matters less; Veo 3.1 is best for lip sync. — [Kapwing](https://www.kapwing.com/resources/best-ai-video-models-for-realistic-humans/)
- **Seedance real-face block:** ByteDance blocks uploads of photoreal human faces in Seedance. — [Phemex](https://phemex.com/news/article/bytedance-relaunches-seedance-20-globally-with-restrictions-on-realface-uploads-68605)
- **Minimum durations:** Omni 1.2 is 3–15 s in 1 s steps; Kling 3.0 is 3–15 s; H3 is 4–15 s; Runway Gen-4.5 has fixed 5/8/10 s options. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/); [Krea](https://www.krea.ai/blog/kling-3-0-api-access-guide-pricing-code-examples-for-multi-shot-ai-video); [HF blog](https://huggingface.co/blog/ResterChed/minimax-h3-hailuo-3-0); [Runway Help](https://help.runwayml.com/hc/en-us/articles/46974685288467)
- **Omni edits on existing footage:** Gemini Omni can change background, product, lighting, weather or aspect ratio on an existing clip while keeping the rest. This is useful for reusing one real shoot across seasons and formats. — [MLQ.ai](https://mlq.ai/news/google-releases-gemini-omni-12-flash-with-15-second-video-and-lower-api-pricing/)
- **Luma reframing:** Luma Ray3.2 can reframe to any aspect ratio while keeping the motion. — [Luma llm-info](https://lumalabs.ai/llm-info)
- **Runway finishing tools for b-roll:**
  - Aleph 2 for one-frame edits that propagate through the shot. — [Runway News](https://runway.com/news/introducing-aleph-2-and-edit-studio)
  - SAM3 segmentation to a transparent WebM, for isolating a subject behind live type. — [Runway changelog](https://runway.com/changelog)
  - Enhance Frame Rate, up to 120 fps, for smooth slow-mo. — [Runway changelog](https://runway.com/changelog)
  - ProRes 4444 export. — [Runway changelog](https://runway.com/changelog)
- **Kling 4.0 reference video:** "white-model"/depth-map reference videos can drive camera moves and pacing, for example a precise slow push-in on a switchboard. — [Kling 4.0 press release](https://finance.yahoo.com/technology/ai/articles/kling-ai-launches-kling-4-105300062.html)
- **Licence note for self-hosting in Australia:** MiniMax H3's reported territorial exclusions are the US, EU, UK and South Korea. Australia is not named, but verify the licence file. — [RunPod](https://www.runpod.io/blog/minimax-h3-the-open-weight-omni-modal-video-model-and-what-it-takes-to-run-it)
- **Commercial-use rules:** LTX-2.5 needs a paid agreement only above $10M revenue. — [innFactory](https://innfactory.ai/en/ai-models/lightricks-ltx/)
- **Kling free tier:** not licensed for commercial use, so paid plans are needed. — [HeyGen blog on Kling pricing](https://www.heygen.com/blog/kling-ai-pricing)

### Inferences
**Recommended model per job**, inferred from the findings above:

| Job | Suggested model(s) | Why |
|---|---|---|
| Tradespeople on camera, hands with tools (multimeter, screwdriver, cable) | Kling 3.0/4.0 or MiniMax H3/HeyGen Video 1 first; Seedance 2.5 if no real-face photo is involved | Kling rates well on hands and motion; H3 leads realism per dollar |
| Dialogue to camera | Veo 3.1 (enterprise platform/Runway) for lip sync, or H3/FLUX 3 (lip-synced dialogue) | Veo had the best lip sync in Jun 2026; H3 and FLUX 3 offer native dialogue |
| Switchboards, tools and products as heroes | Seedance 2.5/2.0 image-to-video from a real photo of the brand's board | Reported product-shot leader; image-to-video keeps real hardware accurate |
| Home interiors (lights coming on, downlights, smart switches) | Seedance or Wan 3.0 (cheap 720p via Runway), Luma Ray3.2 if HDR grading matters | Clean photoreal scenes; HDR/EXR export |
| Vans (brand livery, Australian road context) | Image-to-video from real van photos (Kling, Omni, H3), with the livery locked in the first frame | Generated livery text and logos are a likely failure point |
| 3–6 s silent b-roll under live typography | Gemini Omni 1.2 at 720p (3 s minimum, about $0.21–0.42 per insert) or Kling 3.0 Standard audio-off ($0.09/s via Runway); Kling 4.0 depth reference for exact moves | Slow, locked or simple dolly moves; generate a little longer than needed and trim |
| Reusing one hero shot across formats and seasons | Gemini Omni edits/aspect change, Luma Reframe, Runway Aleph 2 | Edit-capable models |

Further inferences:
- **Under live type, leave negative space and avoid generated readable text.** No 2026 source benchmarked text or signage rendering, but text was a classic failure point in earlier generations. Ask for no visible text and add brand and type in post (Remotion or the NLE).
- **Australian accuracy needs real references.** Text-only prompts are likely to produce US-style panels, left-hand-drive vans or non-local hardware. Australian switchboard hardware, right-hand-drive vans and AS/NZS-compliant PPE are better handled by giving real reference photos to an image-to-video or multi-reference model (Seedance's 50 references, Kling 4.0's 15, H3's 9 images) than by text prompts.
- **Compliance risk:** AI may show unsafe electrical practice, such as working live, no PPE or wrong cable handling. A licensed electrician should review every on-screen task before publishing.
- **Budget example:** 20 approved 5 s inserts at about 3 generations each is about 300 generated seconds. That costs about $21 on Omni 1.2 at 720p, about $36 on Kling 3.0 Pro at 1080p with no audio via Runway, or about $69 on Seedance 2.5 at 720p via BytePlus. USD, my arithmetic on the rates above.

### Gaps
- I found no published tests of AI video models on trades, electrical or construction content, switchboards or vans specifically. All job-to-model mapping here is inference from general realism and product-shot tests.
- I found no data on how each model renders Australian-specific context (RHD vehicles, AS/NZS switchgear, local streetscapes).
- I did not verify per-model policies on animating photos of real employees, other than Seedance's ban.
