# Craft techniques for professional, non-"AI-looking" generative image and video work (as of Nov 2026)

Research note scope: what makes work read as "AI", what practitioners do to fix it, hybrid agency workflows and case studies (2024-2026), brand consistency, audience/performance data, and applied advice for a local electrician. Tool pricing and legal licensing are excluded (covered elsewhere).

Source-quality warning for the report writer: the trade-press and research findings (NIQ, Kantar, Harris/4As, IAB, Journal of Business Research, Digiday, Research Live, MediaCat) are solid. Most of the specific post-production numbers (grain %, blur px) come from vendor blogs (invideo, Sunra, OpenArt, Flux-Art). They match common practice but are not authoritative; present them as starting points. Several high-value trade pages (The Drum, Hollywood Reporter, Creative Bloq) were paywalled or blocked, so some case-study details come from secondary coverage.

---

## 1. What visually gives work away as "AI" in 2026?

### Takeaway
The tells have shifted from obvious errors (extra fingers, garbled text) toward a recognisable house style: poreless or waxy skin, hazy, glowing, over-even light, over-saturated colour, a shared palette, micro-sharpened edges, static or expressionless faces, very short shots that hide continuity problems, and above all interchangeable sameness. Kantar's view is that the penalty comes when AI is obvious or poorly integrated. Using AI is not the problem in itself.

### Cited Findings
- **Skin:** Plastic skin comes from the default smoothing in image models, so pores and fine hairs disappear and faces look "waxy". The fix is to drop words like "perfect" and "airbrushed" and ask for "visible pores" and "fine hairs". — [OpenArt, realistic skin prompts](https://openart.ai/blog/midjourney-prompts-for-skin/)
- **A designer's "tell scan" (2026):** Check skin for "plastic smoothness, waxy gradients, poreless surfaces". The guide warns that the retouching fix (texture overlays, frequency separation) is "easy to overdo" and needs restraint. — [Joulyan, Make AI designs look less AI-generated in 2026](https://joulyan.com/en/blog/how-to-make-designs-look-less-ai-generated-in-2026-without)
- **The default look:** Smoothed-over faces, hazy lighting and a shared colour palette, which this vendor blog attributes to generic prompts. — [RedHub, Why AI images all look the same](https://blog.redhub.ai/ai-slop-look)
- **Sameness, not error, is now the main problem:** Images "appear technically competent but remain fundamentally interchangeable, generic, and lacking distinction." — [Medium/Design Bootcamp, Aesthetics in the AI era: 2026 trends](https://medium.com/design-bootcamp/aesthetics-in-the-ai-era-visual-web-design-trends-for-2026-5a0f75a10e98)
- **Three tells of "slop" (Cody Kommers et al., Jan 2026):** it looks fine at a glance, it took almost no effort, and the supply is endless. — [Techspressionism, AI slop in art](https://techspressionism.com/journal/ai-slop/)
- **Posters (RTÉ Brainstorm, 16 Oct 2026):** Generative AI lacks the social and cultural context to design a poster, so you get "similar, nondescript results across different places." — [RTÉ Brainstorm, Why did bland AI design slop become so widespread?](https://www.rte.ie/brainstorm/2026/1016/1595636-ai-design-posters-slop-creativity-art-criticism/)
- **Viewers name over-saturated colour and mismatched lip-sync as tells:** In a 2026 Linnaeus University pilot study (18-30-year-olds), ads with visible AI artefacts such as "over-saturated colours and mismatched lip-syncing" fared worse than realistic ads with subtle AI enhancement. Robotic or fast voiceover pacing was trusted less than natural human pacing. — [MediaCat UK, AI disclosure: when it does and doesn't hurt brands (22 Jun 2026)](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)
- **Uncanny or static faces:** Kantar's facial-coding test of Coca-Cola's 2024 AI holiday ad found its faces "more static, giving less emotional arc", and the ad was "more likely to provoke surprise than smiles". Its view: "when generative AI is obvious or poorly integrated, it can hurt performance." Some viewers noticed the 2024 ad was AI, which "created a disconnect." — [Research Live, Kantar (17 Dec 2025)](https://www.research-live.com/article/news/effective-creative-principles-remain-the-same-whether-or-not-ads-use-ai-finds-kantar/id/5145503)
- **Coca-Cola dropped people to avoid the uncanny:** Its 2025 ad focused on animals (polar bears, pandas, sloths) to avoid uncanny human figures. Coca-Cola said AI could now give animals expressions it could not the year before. — [Marketing AI Institute](https://www.marketingaiinstitute.com/blog/criticism-ai-coke-holiday-ad); [Design Compass (10 Nov 2025)](https://designcompass.org/en/2025/11/10/coca-colas-ai-ad-faces-backlash-again-this-year/)
- **Very short shots hide continuity problems:** In the Kalshi NBA Finals ad (June 2025), "each scene in the ad is very short", because Veo 3 still struggled with continuity. — [Gizmodo](https://gizmodo.com/googles-veo-3-ai-slopfest-just-reached-new-heights-2000615508)
- **Visual "chaos" plus tone:** McDonald's Netherlands' AI Christmas spot (Dec 2025) was called "AI slop" and "soulless", and pulled after about 3 days. Critics also attacked the cynical concept, separate from the AI. — [NBC News](https://www.nbcnews.com/world/europe/mcdonalds-ai-generated-christmas-advert-social-media-backlash-rcna248590); [TechRadar](https://www.techradar.com/ai-platforms-assistants/mcdonalds-pulls-ai-generated-christmas-ad-after-backlash-over-soulless-visuals-and-holiday-chaos); [Inc.](https://www.inc.com/annabel-burba/mcdonalds-just-pulled-its-holiday-ad-after-immediate-internet-outrage-heres-what-went-so-wrong/91279232)
- **The "AI look" is now dated taste:** A 2026 roundup says audiences want "film grain, light leaks, and authentic imperfections". — [Perfect Corp (vendor)](https://www.perfectcorp.com/consumer/blog/generative-AI/best-ai-picture-generators)
- **Grain and blur only fix texture:** A vendor source cautions that grain and blur address texture tells only. Motion, lighting and anatomy problems need separate fixes. — [invideo, Film grain & blur fixes](https://invideo.io/faq/does-adding-film-grain-and-blur-to-ai-generated-video/)
- **People overrate their ability to spot AI faces (Dr James Dunn, British Journal of Psychology, Feb 2026):** Detection confidence was not matched by performance. People with average face-recognition ability did only slightly better than chance. — [MediaCat UK](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)

### Inferences
- In 2026 audiences detect AI less from individual artefacts (they are bad at spotting photoreal faces) and more from a gestalt: effortless, generic, too-perfect, emotionally flat, over-graded. The Dunn finding plus the Kantar and NIQ findings point this way. The fix is therefore as much about specificity and craft (a concept, real places, real people, imperfect light, edit rhythm) as about artefact removal.
- A practical checklist of tells for QA: waxy or poreless skin; hazy bloom and over-even "everywhere" light; teal-orange or over-saturated grade; uniform micro-sharpness; perfect symmetry and centred, stock-like compositions; static or "dead" eyes and faces; morphing objects or hands mid-shot; floaty, weightless motion; every shot 1-3 seconds long; lip-sync drift; robotic VO pacing; gibberish signage and text; and a look that could belong to any brand.

### Gaps
- I could not retrieve Creative Bloq's "5 failed AI ads" ([link](https://www.creativebloq.com/design/branding/5-failed-ai-ads-that-prove-human-creativity-is-still-superior)) or It's Nice That, PetaPixel or Motionographer pieces naming specific tells. Named-critic quotes on "HDR glow" and "over-sharpness" are therefore thin. Those tells are supported only by vendor sources and the Linnaeus pilot.
- I found no controlled study ranking which visual tells most reduce trust.

---

## 2. Techniques that fix it

### Takeaway
The consensus 2026 workflow has four parts. (1) Prompt like a cinematographer or documentary photographer: camera, framing and light first, imperfection named, and "perfect" or "airbrushed" adjectives removed. (2) Anchor generation to real reference photos and real footage, including using a real clip's last frame as the first frame of an image-to-video shot. (3) Finish in post, not in the model: soften AI micro-sharpness, upscale with restraint, desaturate, grade every clip to one reference, add temporally varying grain and subtle halation, and add motion blur or shake where motion is too clean. (4) Do sound, edit rhythm, typography and motion graphics in real tools (Premiere, After Effects, Figma, code-based tools). Ask the model only for plates and footage.

### Cited Findings
**Prompting (photographic and cinematographic language)**
- **Google's Veo guide:** It recommends defining "a unique visual style and tone" up front, and that "the more detail you add, the more control you'll have". Its style examples include "Film noir shot on 35mm" and "the visual texture of a slightly worn-out VHS tape". One example asks for a camera that is "often shaky" in a "found-footage or embedded sports documentary aesthetic". For lighting it asks, "Is it warm lighting that's even across the frame? Or is there a spotlight in one area?" For sound: "Explicitly define the sounds you want to hear, to match the audio to your visuals." — [Google DeepMind, Veo prompt guide](https://deepmind.google/models/veo/prompt-guide/)
- **Google Cloud's Veo docs:** They list camera, lens and focus vocabulary: low-angle, aerial, eye-level and top-down shots, "shallow depth of field, wide-angle lens, soft focus, macro lens, deep focus". — [Vertex AI Veo prompt guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- **A common camera-first prompt formula:** [Camera] + [Subject] + [Action] + [Setting] + [Style & Audio]. — [Easton Dev, Veo 3 prompt formula](https://eastondev.com/blog/en/posts/ai/20251204-veo3-prompt-writing-guide/)
- **Film look in prompts:** Ask for "organic film grain" or "natural analog grain" so the model does not produce digital noise, and "cinematic 24fps motion blur" for motion. — [invideo, AI video post-production](https://invideo.io/blog/ai-video-post-production/); [Floniks, film look and colour grading in prompts](https://floniks.com/learn/cinematography/film-look-and-color-grading)
- **Skin:** Remove "perfect/airbrushed", add "visible pores", "fine hairs" and natural texture, then fix residual problems with inpainting. — [OpenArt](https://openart.ai/blog/midjourney-prompts-for-skin/); [Flux-Art](https://flux-art.net/blog/en/tutorials/ai-sheng-tu-zong-you-yi-gu-ai-wei-zen-me-qu-diao.html)
- **Generate in small batches and overgenerate:** For the Kalshi ad, PJ Accetturo had Gemini turn a rough script into a shot list of Veo 3 prompts, 5 at a time ("more than that and quality starts to slip"). He generated 300-400 clips and used about 15. — [Business Insider NL](https://www.businessinsider.nl/the-chaotic-kalshi-ad-during-the-nba-finals-was-made-with-ai-for-2000-the-guy-behind-the-clip-shared-how-he-made-it/); [eWeek](https://www.eweek.com/news/ai-ad-kalshi-nba-finals/)

**Anchoring to real material**
- **Real-to-AI handoff:** Creators shoot real footage, then use its last frame as the first frame of an AI-generated clip, for a stunt or effect too expensive to shoot. — [Envato, Motion design trends 2026 (Charles Yeager, 19 Jan 2026, updated Aug 2026)](https://elements.envato.com/learn/motion-design-trends)
- **The live plate carries the performance:** An AI VFX artist "can keep the actor's live take, lens choice, movement, and emotion while rebuilding the environment around the plate". Typical AI roles are backgrounds, B-roll, effects (smoke, weather) and shot extensions. — [Databazaar Digital (vendor)](https://www.databazaardigital.com/blog/ai-vfx-live-performance-world-replacement-2026); [Code Designs, why brands blend AI clips with real footage](https://codedesigns.eu/ai-video-production-in-2026-why-brands-blend-ai-clips-with-real-footage/)
- **Plan the hybrid shot properly:** A supervisor still plans plates, camera data, lighting references, continuity, and "the mix of AI and traditional finishing each shot requires". — [Databazaar Digital](https://www.databazaardigital.com/blog/ai-vfx-live-performance-world-replacement-2026)
- **Compositors gain value:** As the heavy lifting moves to AI, the value of the skilled compositor rises. — [Hailuo, Hybrid pipelines](https://hailuoai.video/pages/knowledge/ai-vfx-cgi-workflows-integration)
- **Enhancement beats full generation with audiences:** Realistic footage with subtle AI enhancement fared better than ads with visible AI artefacts. Researchers advise "use AI for enhancement rather than full generation" and "real or realistic human voices and faces wherever possible". — [MediaCat UK (22 Jun 2026)](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)

**Post-production finishing (vendor numbers; treat as starting points)**
- **Order of operations:** Upscale, then soften, then add grain, then grade. Grading before upscaling "bakes in the AI sharpness". An alternative order is to normalise clips with scopes, apply a film LUT, add grain and blur, then match every clip to one reference still. — [invideo, AI video post-production](https://invideo.io/blog/ai-video-post-production/); [invideo, colour grading workflow](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/)
- **Soften micro-sharpening:** A light Gaussian blur of 0.3-0.6 px softens AI's micro-sharpening on skin and edges. Add subtle motion blur where movement looks unnaturally sharp. — [invideo, fix plasticky AI video](https://invideo.io/faq/why-does-ai-generated-video-look-plasticky-or-fake-and/); [Sunra, 5 ways to make AI video look less AI](https://sunra.ai/blog/make-ai-video-look-less-ai)
- **Grain:** Recommended opacity ranges from 2-3% to 8-15%. The temporal (frame-to-frame changing) noise pattern is what reads as film, so judge grain in motion, not on stills. — [invideo](https://invideo.io/faq/does-adding-film-grain-and-blur-to-ai-generated-video/); [Sunra](https://sunra.ai/blog/make-ai-video-look-less-ai)
- **Halation:** Keep it subtle on highlights for cinematic work, and skip it for phone-style or documentary footage. — [invideo](https://invideo.io/blog/ai-video-post-production/)
- **Colour:** Pull saturation down 10-15%, warm the shadows, add a slight S-curve. For consistency across clips, define a colour script of named tonal modes with exact hex values. — [invideo, colour grade AI clips for consistency](https://invideo.io/faq/how-do-you-color-grade-ai-generated-video-clips-to-look/)

**Imperfection as an aesthetic (motion design, 2026)**
- **Raw footage reads as trustworthy:** Viewers respond to handheld, raw, emotionally honest footage: visible camera shake, imperfect lighting, behind-the-scenes cuts. Editors keep unpolished takes and natural background sound. "Imperfection has become its own aesthetic." — [Envato, Motion design trends 2026](https://elements.envato.com/learn/motion-design-trends)
- **Craft as a status signal:** Hand-drawn animation, stop-motion and mixed media counter generative sameness (Hermès and Edd Carr are named). "Craftsmanship isn't nostalgia; it's status." Analog nostalgia (grain, warm tungsten, VHS overlays) "feels real, even when it's digitally recreated." — [Envato](https://elements.envato.com/learn/motion-design-trends)
- **Coded motion:** Procedural and generative systems built in tools like Cavalry and open-source creative-coding frameworks are a 2026 motion trend. — [Envato](https://elements.envato.com/learn/motion-design-trends)
- **Designers are pushing back with visible hand-made traces:** rough illustration, stop-motion, hand-cut collage, grainy photography. — [Visual Vortixel, Anti-slop art (10 Jun 2026)](https://visualvortixel.com/2026/06/10/anti-slop-art-pushes-back-against-ai-visuals/)
- **Illustration is moving away from the polished AI look:** It is moving "away from the overly polished, slightly unnatural look of the mid-2020s" toward handmade warmth, while still mixing in AI. — [Envato, illustration trends 2026](https://elements.envato.com/learn/illustration-styles-and-trends)

**Editing, sound and finishing in real tools**
- **Professional finishing:** The Kalshi ad was assembled and finished by a human editor in CapCut and Adobe Premiere Pro. — [eWeek](https://www.eweek.com/news/ai-ad-kalshi-nba-finals/)
- **AI-assisted craft tooling:** Adobe previewed AI masking and audio cleanup at Adobe MAX 2025. These are AI features inside a human-controlled editor. — [Envato](https://elements.envato.com/learn/motion-design-trends)
- **Music matters:** Kantar notes that the music in Coca-Cola's AI holiday ad "is consistently a top performer". Sound and music remain a strong lever no matter how the visuals were made. — [Research Live](https://www.research-live.com/article/news/effective-creative-principles-remain-the-same-whether-or-not-ads-use-ai-finds-kantar/id/5145503)
- **Voice:** Natural human VO pacing was trusted more than fast or robotic delivery. — [MediaCat UK](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)

### Inferences
- **A practical "de-AI" stack:**
  1. **Concept and reference board:** Start from real photos of the actual location, client and product.
  2. **Prompt:** Camera, lens, framing and light first. Name the imperfection ("overcast window light", "handheld phone, slight motion blur", "mixed fluorescent/tungsten"). Avoid "perfect", "ultra-detailed", "8K" and "cinematic lighting" boilerplate.
  3. **Use real anchors:** image-to-video from real stills, or last-frame handoff from real footage.
  4. **Overgenerate:** Generate a lot and select ruthlessly. A ratio of about 20:1 is not unusual (Kalshi: 300-400 clips for 15 used).
  5. **Composite:** Put AI plates behind or around real subjects, not the reverse.
  6. **Finish in this order:** soften, then upscale with restraint, then grade every clip to one reference still, then add moving grain and subtle halation (none for phone-style), then add motion blur or shake as needed.
  7. **Sound:** Use real or recorded sound design, natural VO, and licensed or composed music.
  8. **Typography, logos, captions and motion graphics:** Build them in After Effects, Figma or code (e.g. Remotion), never in the model. This avoids text errors and keeps brand type and layout exact. This step is an inference from the text-error tell and standard brand practice. No 2026 source in this research explicitly covered Remotion.
- Holding shots longer than 1-3 seconds only works if continuity holds. Image-to-video from a strong real still and a cut rhythm motivated by the story (not by model limits) reduce the "montage of 2-second clips" feel that marked Kalshi-style work.

### Gaps
- I found no authoritative (non-vendor) source for exact grain, blur or halation values. Professional colourists' guidance on AI footage specifically (e.g. from No Film School or Motionographer) was not retrieved.
- I found no primary 2026 source documenting agencies using Remotion or code-based motion graphics over model-rendered text, although it is a logical practice.
- I did not retrieve Midjourney's own documentation on "raw" or photographic style parameters.

---

## 3. Hybrid workflows and case studies (2024-2026): what worked, what got backlash, and why

### Takeaway
Backlash follows a pattern: fully AI work for an emotional, heritage or "handmade" brand moment (holiday ads, fashion models, a beloved brand) that looks low-effort or uncanny, framed by the brand as a cost-saving. Work that lands either commits to a deliberately absurd, internet-native tone where "AI weirdness" is the joke (Kalshi), or uses AI invisibly inside real production. Brand positioning has also split: some advertisers make "no AI, shot on film, real people" a selling point.

### Cited Findings
**Backlash cases**
- **Coca-Cola, "Holidays Are Coming" (2024 and 2025):**
  - **2024:** The AI remake of the classic drew vocal backlash. — [NBC News](https://www.nbcnews.com/tech/innovation/coca-cola-causes-controversy-ai-made-ad-rcna180665)
  - **2025:** The new version was co-produced by Secret Level (some sources say with Silverside, and reports differ on who made what). It swapped people for animals, and drew renewed criticism of quality, loss of emotional "magic", and labour and environmental concerns. — [Marketing AI Institute](https://www.marketingaiinstitute.com/blog/criticism-ai-coke-holiday-ad); [Design Compass (10 Nov 2025)](https://designcompass.org/en/2025/11/10/coca-colas-ai-ad-faces-backlash-again-this-year/); [ContentGrip](https://www.contentgrip.com/coca-cola-ai-holiday-ad-backlash/)
  - **Cost framing:** Coca-Cola's marketing chief Manolo Arroyo credited AI with cutting costs and timelines. Critics pointed to exactly that framing as the core problem. Secret Level founder Jason Zada said the team was about 20 people instead of 50+. Coca-Cola's Pratik Thakar said the "craftsmanship on this ad is ten times better" than in 2024. — [Marketing AI Institute](https://www.marketingaiinstitute.com/blog/criticism-ai-coke-holiday-ad); [Hollywood Reporter (paywalled; via search summary)](https://www.hollywoodreporter.com/business/digital/ai-coke-ad-holiday-studio-interview-1236420358/)
  - **Testing scores were strong despite the backlash:** System1 reportedly scored the AI ads "exceptionally high" with viewers. Kantar found the 2025 animal ad scored higher than the 2024 people ad on most metrics, and the 2024 ad was still one of Coca-Cola's top performers that year. — [Marketing AI Institute](https://www.marketingaiinstitute.com/blog/criticism-ai-coke-holiday-ad); [Research Live (17 Dec 2025)](https://www.research-live.com/article/news/effective-creative-principles-remain-the-same-whether-or-not-ads-use-ai-finds-kantar/id/5145503)
- **McDonald's Netherlands, "It's the most terrible time of the year" (Dec 2025):**
  - **The spot:** a 45-second AI montage of Christmas mishaps, made by TBWA\Neboko and The Sweetshop. It was called "AI slop" and pulled about 3 days after going up on YouTube. — [NBC News](https://www.nbcnews.com/world/europe/mcdonalds-ai-generated-christmas-advert-social-media-backlash-rcna248590); [The Drum (blocked; via search summary)](https://www.thedrum.com/news/the-most-terrible-ad-of-the-year-mcdonald-s-pulls-ai-ad)
  - **Production defence:** The Sweetshop said its team "hardly slept" for 7 weeks, and its CEO said "this wasn't an AI trick". Both claims were widely mocked.
  - **Response:** McDonald's called it "an important learning" about effective AI use. — [Inc.](https://www.inc.com/annabel-burba/mcdonalds-just-pulled-its-holiday-ad-after-immediate-internet-outrage-heres-what-went-so-wrong/91279232); [eMarketer](https://www.emarketer.com/content/mcdonald-s-pulled-ai-ad-offers-lessons-on-what-audiences-will-won-t-accept)
- **Toys "R" Us (2024):** The brand film was made entirely with OpenAI's Sora and met "a tidal wave of backlash for its bizarre AI slop." — [Creative Bloq, via search summary](https://www.creativebloq.com/design/branding/5-failed-ai-ads-that-prove-human-creativity-is-still-superior)
- **Guess in Vogue (Aug 2025):**
  - **The ad:** It featured AI-generated models from agency Seraphinne Vallora. A small AI disclaimer was missed by many readers, and Vogue clarified it was paid content.
  - **Criticism:** Critics raised transparency and the lost work for photographers, lighting crews and models.
  - **Trust stat:** 50% of Brits say they don't trust brands that don't handle AI properly (Photoroom). — [DesignRush](https://news.designrush.com/guess-faces-backlash-over-ai-models-in-vogue-campaign); [FashionNetwork](https://us.fashionnetwork.com/news/Vogue-us-faces-backlash-over-guess-ad-featuring-ai-generated-model%2C1754907.html); [ContentGrip](https://www.contentgrip.com/guess-vogue-ai-model/)

**Cases that "worked" (on their own terms)**
- **Kalshi, NBA Finals (June 2025):**
  - **Production:** PJ Accetturo made the ad alone in 2-3 days for about $2,000, entirely in Veo 3. He generated 300-400 clips, used about 15, and edited in CapCut and Premiere.
  - **Why it worked:** It leaned into a chaotic, absurdist tone where AI weirdness fits the joke.
  - **Reach:** Accetturo claims 30M+ views in 3 weeks (not independently verified). — [Business Insider NL](https://www.businessinsider.nl/the-chaotic-kalshi-ad-during-the-nba-finals-was-made-with-ai-for-2000-the-guy-behind-the-clip-shared-how-he-made-it/); [eWeek](https://www.eweek.com/news/ai-ad-kalshi-nba-finals/); [Gizmodo](https://gizmodo.com/googles-veo-3-ai-slopfest-just-reached-new-heights-2000615508)
- **Semi-ironic "slop":** Almond Breeze and Equinox used AI "slop" semi-ironically in campaigns. Svedka used AI to produce and animate robots in its Super Bowl ad. — [Marketing Brew (24 Jun 2026)](https://www.marketingbrew.com/stories/harris-poll-ai-fatigue-less-trust-ai-generated-ads-cannes-lions)
- **Clean, integrated hybrid work:** By 2025, campaigns were "cleaner, subtler, and better integrated with live action" than earlier AI-heavy ads. — [Envato](https://elements.envato.com/learn/motion-design-trends)

**Counter-positioning: "human-made" as a selling point**
- **He Gets Us, 2026 Super Bowl:** The spot was shot on film with real people. CCO Simon Armour: "Even the use of film, and therefore not using AI, we want it to feel as human as possible." — [Digiday (12 Feb 2026)](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/)
- **Other no-AI or handmade brands:** Aerie and Dove have vowed not to use AI in ads. Porsche ran a hand-drawn holiday campaign (Parallel Studio). Panda Express ran a human-made Lunar New Year short (Passion Pictures). Apple emphasises handcrafted ads through behind-the-scenes footage. — [Digiday](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/); [Marketing Brew](https://www.marketingbrew.com/stories/harris-poll-ai-fatigue-less-trust-ai-generated-ads-cannes-lions)
- **Agencies are changing how they talk about AI:**
  - Agency RFPs that once required AI now ask how agencies would implement it "more thoughtfully", partly because of the Coca-Cola and McDonald's backlash (Atlantic NY).
  - Marco Pupo (Atlantic NY): the backlash reads as "trying to cut costs... cut your head count." He predicts AI disclosure will become like saying you don't use Photoshop: "Use it, but use it in a good sense."
  - Passion Pictures warns that anti-AI claims are risky because "AI is being used everywhere." — [Digiday](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/)
- **Gartner prediction:** 20% of brands will lean into positioning based on the absence of AI. This dates from a Dec 2023 press release. — [Digiday](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/)

### Inferences
- **Backlash risk factors:**
  - A sentimental, heritage or handmade brand moment.
  - Fully AI human characters.
  - Visibly uncanny or low-effort execution.
  - The brand or agency talking up the speed and cost savings.
  - Being a big brand that could obviously afford a real shoot.
- **Lower-risk uses:** absurdist or comedic tone, impossible visuals, background and environment work, post-production enhancement, and anything where viewers don't feel they were sold "fake people".
- **Testing scores and social reaction can diverge.** Coca-Cola's AI ads tested well (System1, Kantar) while drawing loud online criticism. For small brands the social and reputational side tends to dominate, because there is no heritage or media weight to absorb it.

### Gaps
- No primary agency case studies from Silverside or "Phantom" were retrieved. I could not confirm which "Phantom" agency the brief meant.
- Heinz's "A.I. Ketchup" (2022) and other positive hybrid examples were not researched in this pass.
- I found no detailed shot-by-shot director breakdown of a successful 2026 hybrid commercial. The search returned mostly vendor blogs.

---

## 4. Brand consistency: custom models, LoRAs, style references, and when to shoot real

### Takeaway
Brands and agencies lock consistency in four ways. (1) Private custom models trained on their own imagery: Adobe Firefly Custom Models (public beta reported March 2026) and Firefly Foundry for enterprise brand worlds and characters. (2) LoRA-style fine-tunes or reference-image conditioning per client. (3) A locked colour script and LUT applied in post. (4) A rule to use the model for ideation versus brand-safe production by tool tier. For a person's face (the owner of a local business), the evidence favours real photography. Audiences punish "fake people" and reward visible human effort.

### Cited Findings
- **Adobe Firefly Custom Models:**
  - **What they are:** models trained "on a style or subject" from a brand's existing images, shared and managed across an organisation "to maintain brand consistency". — [Adobe, Firefly Custom Models](https://business.adobe.com/products/firefly-business/custom-models.html)
  - **API access:** Each custom model has a unique asset ID for versioning and reuse, and applications can be granted access to list and use the models. — [Adobe Firefly API docs](https://developer.adobe.com/firefly-services/docs/firefly-api/)
  - **Launch timing:** Coverage places the public beta at 19 March 2026. — [Blue Lightning TV](https://bluelightningtv.com/2026/03/19/firefly-custom-models-bring-real-brand-consistency/); [Xainflow](https://www.xainflow.com/blog/adobe-firefly-custom-models-brand-ai-2026)
- **Adobe Firefly Foundry:** "private AI models, securely trained on your proprietary branded content and guidelines". Sources describe it as able to encode characters or brand worlds. — [Adobe Firefly Foundry](https://business.adobe.com/products/firefly-business/firefly-foundry.html)
- **Training-set size:** Estimates conflict, from 10-30 reference images to 40-200 (third-party blogs, not Adobe). — [Xainflow](https://www.xainflow.com/blog/adobe-firefly-custom-models-brand-ai-2026); [AI Productivity guide](https://aiproductivity.ai/guides/custom-ai-models-guide/)
- **How agencies organise it:** Agencies mix models: Firefly for brand-safe, production-ready output, and OpenAI or Google for fast ideation. Agencies with many clients can keep one model per client brand. — [CMO Tech, creative agencies as platforms](https://cmotech.news/story/exclusive-the-future-of-creative-agencies-as-platforms); [AI Productivity](https://aiproductivity.ai/guides/custom-ai-models-guide/)
- **Consistent AI presenters exist, and so does the risk:** Consistent AI presenters and characters that speak many languages are in use (Fiverr's "Gary"). — [Envato](https://elements.envato.com/learn/motion-design-trends). But AI human models drew backlash for Guess/Vogue. — [DesignRush](https://news.designrush.com/guess-faces-backlash-over-ai-models-in-vogue-campaign)
- **Colour lock:** Define a colour script of named tonal modes with exact hex values, and match every clip to a reference still. — [invideo](https://invideo.io/faq/how-do-you-color-grade-ai-generated-video-clips-to-look/)
- **AI ads are less brand-centric:** Brand centricity tends to be lower in generative-AI ads (Kantar). This is a reason to keep real logos, products, vans, uniforms and people in frame. — [Research Live](https://www.research-live.com/article/news/effective-creative-principles-remain-the-same-whether-or-not-ads-use-ai-finds-kantar/id/5145503)
- **The handmade penalty:** The penalty for disclosed AI use is stronger for handmade products (Patil & Rice, Journal of Business Research, 2026). Trades services are arguably "handmade" work. — [MediaCat UK](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/); [ScienceDirect abstract](https://www.sciencedirect.com/science/article/abs/pii/S0148296326003899)

### Inferences
- **For a small business, keep it lightweight:**
  - Keep a reference pack of 20-40 real photos (van, uniforms, logo placement, typical job sites, the owner and team) to condition image-to-image and image-to-video work.
  - Keep a fixed LUT and colour script.
  - Use a brand template in Figma, After Effects or Remotion for all type and logo work.
  - Train a custom model or LoRA on the owner only with written consent, and use it only for low-stakes illustrative frames. Never present those frames as real job photos.
- **Real photography beats a face model for the owner's face.** The value of a local tradie's face is that it is verifiably them. Customers will meet that person on site. An AI likeness that is off, or later discovered, undermines the core trust signal.

### Gaps
- I found no published case of a local service business training a LoRA on its owner, or data on how customers react to that.
- I did not research consistency tools beyond Adobe (e.g. Runway References, Kling or Veo ingredient or reference features, Flux Kontext, Midjourney Omni-reference). Another researcher may cover these.

---

## 5. Audience and performance data on AI-generated vs real imagery

### Takeaway
Surveys show strong stated distrust: about 73-78% say AI makes ads feel less authentic or less trustworthy (Harris/4As, June 2026). Gen Z and millennial negativity roughly doubled from 2024 to 2026 (IAB). Controlled evidence is more nuanced. Obvious or poorly integrated AI hurts (NIQ EEG: weaker memory activation even for high-quality AI ads; Kantar). Disclosure lowers perceived effort and click-through (Journal of Business Research 2026). But undisclosed or well-integrated AI ads can perform at par or better (Kantar 356-ad analysis: same range as conventional ads; a Taboola academic study: AI ads had a higher CTR). The penalty is triggered by perceived low effort and missing human presence, not by AI use as such.

### Cited Findings
**Large surveys**
- **Harris Poll / 4As / Infillion (global, released at Cannes, 24 Jun 2026):**
  - 78% say AI makes ads "feel less authentic".
  - 78% find brands that overuse AI "cringey".
  - 73% are less likely to trust an ad they suspect was made with AI.
  - 63% are less likely to buy from a brand that uses AI-generated ads.
  - 54% say hearing about AI so much annoys them.
  - 65% want brands to stop "meaningless AI marketing".
  - More than two-thirds see AI as largely a "marketing ploy".
  - On the industry side, about half of professionals use AI for visual asset creation.
  - Sample size was not reported in the article. — [Marketing Brew](https://www.marketingbrew.com/stories/harris-poll-ai-fatigue-less-trust-ai-generated-ads-cannes-lions)
- **IAB / Sonata Insights (Jan 2026):**
  - 82% of ad executives think Gen Z and millennials view AI ads positively, but only 45% of those consumers do. The gap has widened since 2024.
  - Gen Z negativity rose from 21% (2024) to 39%.
  - About 73% of Gen Z and millennials say clear disclosure would increase or not affect purchase likelihood. — [Digiday (12 Feb 2026)](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/); [Crossglobe summary](https://crossglobemarketing.com/blogs/ai-generated-content-trust-problem-2026/)
- **VML Intelligence:** 21% would like a campaign less if they learned it was AI-generated. — [Digiday](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/)
- **Canva (2026):** 68% don't mind AI in advertising if it makes ads more helpful or relevant, but 78% would rather see ads made by people. — [Canva newsroom, Marketing AI report 2026](https://www.canva.com/newsroom/news/marketing-ai-report-2026/)
- **Auros / Talker Research (Oct 2026, company-commissioned):** 53% of US adults don't trust products advertised with AI to be described accurately. — [Real Internet Sales summary](https://www.realinternetsales.com/ai-generated-ads-consumer-trust-study/)

**Neuroscience and effectiveness testing**
- **NielsenIQ (Dec 2024, presented at CES 2025):**
  - **Sample:** more than 2,000 participants, about 150 with EEG.
  - **Findings:** Consumers intuitively identified most AI-generated ads and called them "annoying", "boring" and "confusing". Even high-quality AI ads produced weaker memory activation than traditional ads. Low-quality AI visuals raised cognitive load. NIQ warns of a "negative halo" on the brand. On the upside, AI ads reinforced existing brand associations. — [NIQ press release](https://nielseniq.com/global/en/news-center/2024/niq-research-uncovers-hidden-consumer-attitudes-toward-ai-generated-ads/); [BusinessWire](https://www.businesswire.com/news/home/20241212354811/en/NIQ-Research-Uncovers-Hidden-Consumer-Attitudes-Toward-AI-Generated-Ads)
- **Kantar (Research Live, 17 Dec 2025):**
  - Across 356 AI-generated ads, performance spread over the same range as traditionally made ads.
  - Fundamentals (insight, boldness, brand centricity) matter most.
  - Brand centricity tends to be lower in AI ads.
  - "When generative AI is obvious or poorly integrated, it can hurt performance" (Lynne Deason, head of creative excellence).
  - Ads using AI in non-obvious or post-production ways reportedly performed better than obvious applications (secondary coverage). — [Research Live](https://www.research-live.com/article/news/effective-creative-principles-remain-the-same-whether-or-not-ads-use-ai-finds-kantar/id/5145503); [Kantar, efficiency without effectiveness?](https://www.kantar.com/inspiration/analytics/the-future-of-generative-ai-in-advertising-efficiency-without-effectiveness)
  - **Unverified:** A secondary blog claims Kantar's 2026 database puts AI ads at the 54th percentile on average versus the 65th for non-AI ads. — [Crossglobe](https://crossglobemarketing.com/blogs/ai-generated-content-trust-problem-2026/). This conflicts in emphasis with Kantar's own "same range" framing.
- **Taboola, with Columbia, Harvard, TU Munich and Carnegie Mellon researchers:** AI ads averaged 0.76% CTR versus 0.65% for human-made ads. — [Digiday](https://digiday.com/marketing/with-ai-backlash-building-marketers-reconsider-their-approach/). This contrasts with the survey-based distrust. The likely reconciler is that undisclosed, non-obvious AI does not trigger the penalty.

**Peer-reviewed experiments on disclosure and effort**
- **Patil & Rice, "Is that your best effort?" (Journal of Business Research, vol. 215, 2026):**
  - **Method:** 8 studies, including Meta field data.
  - **Findings:** AI-use disclosure makes ads seem less effortful and the product lower quality, reducing engagement. CTR fell by 2.23 percentage points. The penalty was stronger for handmade products and weaker when ads emphasised machine efficiency.
  - Human-involvement cues can *enhance* the negative effect of disclosure, per the abstract. — [ScienceDirect abstract](https://www.sciencedirect.com/science/article/abs/pii/S0148296326003899); [RePEc](https://ideas.repec.org/a/eee/jbrese/v215y2026ics0148296326003899.html); [MediaCat UK](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)
  - **Note the conflict:** MediaCat's practitioner advice is to frame disclosure around human effort, while the JBR abstract says human-involvement cues can worsen the disclosure penalty. The writer should flag this tension.
- **Linnaeus University pilot (Jun 2026, 18-30-year-olds, interviews; small sample):**
  - AI use alone did not reduce trust. Clumsy AI communication and missing human presence did.
  - "Created with AI assistance and human supervision" was trusted more than "fully AI-generated", which respondents called "cheap" and "lazy". — [MediaCat UK](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)
- **Beneficiary-framed disclosures (Journal of Marketing Analytics, 2026):** Explanatory "made with AI because..." disclosures reduced perceived effort, which hurt ad outcomes. — [Springer](https://link.springer.com/article/10.1057/s41270-026-00534-7)
- **Instagram travel ads (Computers in Human Behavior, 2026):** Disclosure of AI-generated content lowered perceived authenticity, which led to lower brand credibility and purchase intention. — [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0747563226001445)
- **Luxury ads (Tarleton State, 2025):** The negative response stems from the belief that AI ads take less effort. It was reduced when the AI ads were highly creative. — [Tarleton](https://www.tarleton.edu/cob/2025/03/17/the-luxury-dilemma-when-ai-generated-ads-miss-the-mark/)
- **Frontiers in Psychology (2026):** Voluntary, direct disclosure of flaws most strongly raised perceived brand authenticity. — [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1892326/full)
- **Nielsen Norman Group:** Labelling an ad as AI-generated led to more critical evaluation (via search summary). — [Crossglobe](https://crossglobemarketing.com/blogs/ai-generated-content-trust-problem-2026/)

**Real vs stock imagery (proxy for local businesses)**
- **MarketingExperiments A/B test:** A founder's real photo beat a stock image, and visitors were about 35% more likely to sign up for a free consultation. This is a single test, not a home-services business. — [MarketingExperiments](https://marketingexperiments.com/digital-advertising/stock-images-tested); [Andy Woolford summary](https://www.andywoolford.co.uk/blog/post/stock-photos-vs-real-photos-the-difference-is-bigger-than-youd-think/)
- **Contractor-specific claims are agency-published and unverified:** e.g. Harrington Movers' "45.45% conversion improvement" after swapping stock for real photos. Widely repeated stats (an "83% trust" figure attributed to PhotoShelter, "29% form completions" attributed to Unbounce) could not be traced to primary sources. — [Hook Agency](https://hookagency.com/blog/why-stock-photos-are-costing-contractors-jobs-and-what-to-use-instead/); [Design Web Local](https://designweblocal.com/local-vs-stock-photography-the-data-behind-authentic-visual-content/)

### Inferences
- **The consistent mechanism is perceived effort and human presence.** NIQ, Patil & Rice, Tarleton, Linnaeus and Kantar converge on it. AI that viewers *notice* signals low effort, and that spills over onto perceived product and service quality. This matters most where the service is craft, skill or labour, which describes trades.
- **Surveys overstate behaviour.** Field CTR data (Taboola) and Kantar's tests show AI ads can perform fine when not obviously AI. Even so, "suspected AI" is a real risk for trust-led local services, where one sceptical comment can travel through a community Facebook group.
- **Disclosure is becoming mandatory on platforms**, per MediaCat. Plan for work that survives being labelled: use AI where the label reads as harmless (illustration, background, explainer), not where it reads as deception (fake job photos, fake team).

### Gaps
- I found no study specific to home services, trades or local service businesses comparing AI vs real imagery. Evidence is extrapolated from general advertising and stock-versus-real tests.
- The Harris/4As sample size and method were not published in the retrieved article.
- Kantar's 2026 percentile figures could not be verified at the primary source.
- Ipsos data on AI ads was not retrieved.

---

## 6. Applied advice: a local electrician

### Takeaway
Keep the trust layer real and use AI for the scaffolding. The owner, team, van, real jobs, before/after photos, reviews and certifications must be real photos or footage, ideally phone-shot and documentary in style, which also fits 2026 taste for imperfection. Generative tools suit environments, backgrounds, seasonal variants, illustrative explainers (how a switchboard upgrade works, safety tips), stylised or clearly illustrative visuals, B-roll fill, and extending or cleaning real footage. Do all text, logos and offers in a design or motion tool, and never pass AI imagery off as a real job.

### Cited Findings
- **Real founder photo:** Showing a founder's real photo instead of stock raised consultation sign-ups by about 35% in an A/B test. — [MarketingExperiments](https://marketingexperiments.com/digital-advertising/stock-images-tested)
- **Handmade services pay a bigger penalty:** The penalty for disclosed AI is stronger for handmade or craft products, and the perceived effort of the ad transfers to perceived product quality. — [MediaCat UK on Patil & Rice (JBR 2026)](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)
- **Human presence is what earns trust:** Ads lacking human presence, with robotic voices or visible artefacts, are trusted less. Researchers advise "real or realistic human voices and faces wherever possible" and using AI "for enhancement rather than full generation." — [MediaCat UK](https://mediacat.uk/ai-disclosure-when-it-does-and-doesnt-hurt-brands/)
- **Suspected AI hurts trust and purchase:** 73% say they are less likely to trust an ad they suspect is AI-made, and 63% less likely to buy. — [Marketing Brew / Harris Poll (Jun 2026)](https://www.marketingbrew.com/stories/harris-poll-ai-fatigue-less-trust-ai-generated-ads-cannes-lions)
- **Negative halo:** NIQ reports that poorly executed AI content can create a negative halo on the brand. — [NIQ](https://nielseniq.com/global/en/news-center/2024/niq-research-uncovers-hidden-consumer-attitudes-toward-ai-generated-ads/)
- **Raw footage signals trust:** Handheld, raw footage, imperfect light, behind-the-scenes cuts and natural sound read as trustworthy in 2026. — [Envato](https://elements.envato.com/learn/motion-design-trends)
- **Last-frame handoff:** A real clip's last frame can seed an AI extension for shots too costly to film. — [Envato](https://elements.envato.com/learn/motion-design-trends)
- **AI suits backgrounds, B-roll, effects and extensions.** Real footage should carry the performance. — [Code Designs](https://codedesigns.eu/ai-video-production-in-2026-why-brands-blend-ai-clips-with-real-footage/); [Databazaar Digital](https://www.databazaardigital.com/blog/ai-vfx-live-performance-world-replacement-2026)
- **Mislabelled AI is a trust risk:** 50% of Brits don't trust brands that don't handle AI properly (Photoroom, via the Guess coverage). — [DesignRush](https://news.designrush.com/guess-faces-backlash-over-ai-models-in-vogue-campaign)

### Inferences
**Must be real (shoot on a phone, documentary style, natural light)**
- **The owner's face** and **team portraits** in uniform with the branded van.
- **Real job sites:** switchboards, before/after photos, meter boxes, the "made safe" outcome.
- **Real customer testimonials** on video, screenshots of real Google reviews, licence and accreditation numbers and badges, and the real service area: streets and landmarks customers recognise.
- **Rule of thumb:** If a photo implies "we did this" or "this is us", it must be real.

**Good to generate or AI-assist (labelled or clearly illustrative where it matters)**
- Neutral environments and backgrounds for ad layouts: generic suburban home exteriors at dusk, kitchens for lighting-upgrade concepts. Generate them from real local reference photos so the architecture matches the region.
- Seasonal variants of a real hero photo: Christmas lights, storm season, summer aircon load. Keep the real van and person, and change the background or sky through compositing.
- Illustrative explainers: cutaways of a switchboard, how RCDs and safety switches trip, solar and battery flow diagrams. A stylised or illustrated look is honest and avoids the uncanny.
- B-roll fill and transitions: abstract sparks, light-bulb macro shots, wiring textures, time-lapse skies. Generate image-to-video from real stills of the company's own work where possible.
- Cleanup and extension of real footage: sky replacement, removing clutter or neighbours' cars, reframing 16:9 to 9:16, extending a too-short real clip by last-frame handoff.

**Never**
- AI "team" members, AI customers presented as real, AI before/after job photos, or AI-generated reviews.
- Model-rendered text or logos. Render type, prices, phone numbers and licence numbers in Figma, After Effects or Remotion templates instead.

**Finishing for a local trades look**
- Grade toward natural daylight and the brand palette rather than cinematic teal-orange.
- Use light grain, no halation for phone-style content, and keep handheld shake.
- Use the owner's real voice for VO, or a natural-paced human voice.
- Record real ambient sound on site.

**Messaging**
- Avoid touting "AI-made".
- If labelling is required, frame it as AI used for illustrations or backgrounds, while the photos of the team and the jobs are real.
- Note the tension in the evidence: some research says human-effort framing helps (Linnaeus), while other work finds that disclosure plus human-involvement cues can worsen the penalty (JBR abstract).

### Gaps
- I found no trade-specific (electrician, plumber, home-services) controlled data on AI vs real imagery, or on owner-face ads versus no-face ads. Recommendations extrapolate from general ad research and one stock-versus-real A/B test.
- I found no 2026 data on Google Business Profile photo engagement (real photos vs AI) for local services.
