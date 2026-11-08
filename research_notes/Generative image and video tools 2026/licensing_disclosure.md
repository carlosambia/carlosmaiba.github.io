# Commercial licensing, IP indemnity, likeness and ad-platform disclosure for AI images and video in client advertising (Australia focus, as of 8 November 2026)

> Research notes, not legal advice. Every rule below is dated where the source gave a date. Items marked **[OLDER]** come from sources dated before 2026 and should be re-checked. Items marked **[SECONDARY]** were not confirmed against the vendor's or regulator's own page; several vendor terms pages (Midjourney, OpenAI, Adobe partner-model page, Getty) returned HTTP 403 to the fetch tool, so their exact wording could not be read directly. A lawyer should review client contracts, indemnity reliance and any likeness or voice use.

## 1. Commercial-use terms, output ownership and IP indemnity by vendor

### Takeaway
Almost every paid plan now allows commercial use of outputs, but **IP indemnity is rare and mostly enterprise-only**: Adobe Firefly (enterprise, select outputs), Google Cloud Vertex AI (paid, listed, generally available services, unmodified output), OpenAI (API / ChatGPT Enterprise, [SECONDARY]), Getty (per-image cap), Shutterstock (enterprise, human review, [OLDER]), Higgsfield (Enterprise plan only) and Freepik/Magnific (top or enterprise tier). **No indemnity covers trademark claims from use in commerce, modified output, or "knew or should have known" cases.** The biggest licensing trap for a small agency is **FLUX [dev] open weights**: their non-commercial licence makes producing client work with them a likely breach, even though the licence says BFL claims no ownership of outputs.

### Cited Findings

**Adobe Firefly**
- Adobe's plans page states that "eligible enterprise customers can also receive IP indemnification for select Adobe Firefly outputs"; a community expert says beta features are excluded (unofficial) — [Adobe Community](https://community.adobe.com/questions-404/using-firefly-ai-assistant-beta-for-final-production-and-i-indemnification-1640494); [Computerworld](https://www.computerworld.com/article/1628682/adobe-offers-copyright-indemnification-for-firefly-ai-based-image-app-users.html)
- Individual Firefly plans ($9.99–$199.99/month) carry **no indemnity**. Enterprise indemnity requires an enterprise contract that references the Firefly product description. Beta and trial features and non-Adobe models are excluded — [Beri, 18 Oct 2026](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- **Partner models (Google/OpenAI models inside Firefly)**: Adobe's general partner-model terms exclude non-Adobe-trained models from the Firefly indemnity. A supplemental term **effective 8 May 2026** covers copyright, patent and trade-secret claims on *unmodified* output from listed Google/OpenAI partner models. It requires Creative Cloud Edition 4 with Premium Stock or a licence that links to the partner-model terms, and it excludes **trademark, publicity and privacy claims** — [Beri, 18 Oct 2026](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- A CDW reseller brief (April 2026) lists indemnity limits of **$10k per asset** for some offers, and an enterprise cap of the **greater of $3M or 2x fees under the ETLA** ("terms apply") — [CDW brief 2026-04](https://webobjects2.cdw.com/is/content/CDW/cdw/on-domain-cdw/brands/adobe/cc-business-solution-brief-2026-04.pdf)
- Conflict: one source says partner-model outputs are excluded from indemnity, and another says Adobe indemnifies eligible GA Google/OpenAI models. These reconcile as "excluded by default, covered only under the 8 May 2026 supplemental term on qualifying plans" — [Beri](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock); [Redress Compliance](https://redresscompliance.com/adobe-firefly-generative-ai-enterprise-licensing)

**Google (Imagen / Veo / Gemini on Vertex AI)**
- Google Cloud Service Specific Terms §20(i)(i) indemnify allegations that **unmodified** Generated Output from a listed "Generative AI Indemnified Service" (not provided free of charge) infringes third-party IP. Exclusions:
  - the customer knew or should have known the output was likely infringing;
  - the customer disregarded or disabled citations, filters or other responsible-use tools;
  - the customer used the output after a rightsholder's notice;
  - **trademark-related claims arising from use in trade or commerce**;
  - the customer lacked rights to the data used for fine-tuning.
  §20(i)(ii) separately indemnifies claims about Google's training data. Pre-GA (preview, alpha, beta) offerings are "not covered by any SLA or Google indemnity" — [Google Cloud Service Terms](https://cloud.google.com/terms/service-terms) (page notes 18 Feb 2026 renumbering)
- Modified output, **including Photoshop retouching**, falls outside the cover. Veo 3.1 on Google Cloud is reported as indemnified (from a related-article teaser). Indemnified services list snapshot dated 22 April 2026 — [Beri, 18 Oct 2026](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- Gemini API / AI Studio indemnity status is unclear. One comparison says the Gemini API has no IP indemnity and Vertex AI does [SECONDARY] — [terms.law Gemini](https://www.terms.law/ai-output-rights/gemini/)
- All Veo output carries SynthID. Sources conflict on whether there is also a visible "Veo" watermark; one says Ultra users don't get the visible mark [SECONDARY] — [Flowith Veo FAQ](https://flowith.io/blog/veo-faq-commercial-rights-watermarks); [workalizer](https://workalizer.com/insights/gemini/navigating-geminis-commercial-use-synthid-watermarks-essential-insights-and-gemini-alerts-for-workspace-users)

**OpenAI (GPT Image / Sora)**
- Indemnity is offered for copyright claims on output for **API and ChatGPT Enterprise** customers. It excludes trademark claims, modified or combined output, disabled safety features and third-party offerings. The author could not open OpenAI's terms and relied on a third-party summary dated 29 Sep 2026 [SECONDARY] — [Beri](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- Consumer Terms of Use reportedly assign OpenAI's interest in outputs to the user, so commercial use is allowed as between the user and OpenAI. Consumer terms put indemnity obligations on the user. One ConductAtlas summary of the Service Terms claims the opposite (OpenAI retains ownership), which is unresolved [SECONDARY] — [terms.law forum](https://terms.law/forum/thread/openai-sora-commercial-rights-2026.html); [ConductAtlas](https://conductatlas.com/platform/openai/openai-service-terms/user-content-ownership-and-license-grant/)
- Sora: real people can appear only through a **verified cameo**. Cameo owners are notified of each use and can delete videos or revoke access [SECONDARY] — [licenseorg Sora guide 2026](https://licenseorg.com/blog/sora-licensing-guide-2026); [implicator.ai](https://www.implicator.ai/openais-sora-bet-copyright-first-permission-later/)
- OpenAI API image outputs carry **C2PA Content Credentials plus SynthID**, with no documented opt-out (provenance post updated 31 Jul 2026). The source found no indemnity on the pages it cited — [Digital Applied, 9 Aug 2026](https://www.digitalapplied.com/blog/ai-creative-licensing-landmines-agency-client-work)
- OpenAI's service-terms page itself returned 403 and could not be read — [OpenAI Service Terms](https://openai.com/policies/service-terms/)

**Midjourney**
- The official ToS page shows an effective date of **27 May 2026**, but its text could not be retrieved. Secondary summaries say companies, or employees of companies, with **>US$1M gross annual revenue must use Pro or Mega** to own outputs. Free-trial images are CC BY-NC 4.0 (non-commercial). Stealth mode hides images from other users but not from Midjourney [SECONDARY] — [terms.law 2026 guide](https://terms.law/2026/01/15/midjourney-commercial-use-rights-complete-2026-guide/); [ConductAtlas Midjourney](https://conductatlas.com/platform/midjourney/midjourney-terms-of-service/provision/CA-P-023523/pro-or-mega-plan-required-for-company-ownership/); [Midjourney ToS](https://docs.midjourney.com/docs/terms-of-service)
- No Midjourney indemnity was documented in any source found. Midjourney has no public API (subscription surfaces only) — [Digital Applied](https://www.digitalapplied.com/blog/ai-creative-licensing-landmines-agency-client-work); [Beri](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)

**Higgsfield** (primary source: Higgsfield help centre, published 2 Aug 2026, modified 12 Sep 2026) — [Higgsfield help centre](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Higgsfield claims no ownership of outputs (§4.4). Outputs may be used commercially in ads, client work and products. **Commercial rights are not tied to plan**, though watermark-free downloads are a paid-plan feature.
- Higgsfield **may train on user content** (§4.4). Deleting content stops future use, but content already in trained models can't be removed. Enterprise content isn't used for training.
- **IP indemnity is available on the Enterprise plan only.**
- Users may not upload or use another person's image without permission, and remain responsible for copyright, trademark and likeness. Outputs may not be used to train other AI models.
- The page does **not** address pass-through terms for the third-party models Higgsfield hosts (Kling, Veo, Sora and others).

**Runway**
- Paid plans allow commercial use, and the free plan is personal/non-commercial. ToS clause: "does not restrict your commercial use of your Outputs". Runway keeps a training licence over inputs and outputs except on Enterprise. Outputs may not be used to build competing products [SECONDARY] — [ConductAtlas Runway](https://conductatlas.com/platform/runway/runway-terms-of-service/company-does-not-restrict-commercial-use-of-outputs/); [terms.law Runway](https://terms.law/ai-output-rights/runway/)
- The Enterprise Services Terms are dated 1 Jun 2026. **No confirmed output IP indemnity**: a procurement review says Runway has none, and a blog says its IP defence covers patents but not outputs [SECONDARY] — [Runway enterprise terms](https://runwayml.com/enterprise-terms); [TrustAtlas](https://trustatlas.pages.dev/vendors/runway/procurement-pack); [somantix](https://somantix-ledger.pages.dev/posts/runway-widens-ip-defense-beyond-patents-but-outputs-stay-on-you)
- The Runway Usage Policy includes an IP and living-artist-style prohibition — [ConductAtlas Runway usage policy](https://conductatlas.com/platform/runway/runway-usage-policy/provision/CA-P-016461/intellectual-property-and-living-artist-style-prohibition/)

**Kling**
- Free (Basic) plan content "is not for commercial use" and carries a watermark. **Standard and above** remove the watermark and allow commercial use. ToS §4.6 reportedly bars commercial use without permission, and §4.7 keeps a broad licence for Kling to reuse outputs (promotion, training, third-party licensing) even on paid plans. No indemnity was found [SECONDARY] — [WaveSpeed](https://wavespeed.ai/blog/commercial-compliance/is-kling-seedance-output-safe-for-commercial-use/); [ConductAtlas Kling](https://conductatlas.com/platform/kling-ai/kling-ai-terms-of-service/); [licenseorg AI video 2026](https://licenseorg.com/blog/ai-video-licensing-2026)
- Removing a watermark yourself does not change the licence — [Fluxnote](https://fluxnote.io/guides/kling-ai-no-watermark-2026)

**Freepik / Magnific** (Freepik has rebranded as Magnific)
- Paid plans include a commercial licence for AI output, and free plans are personal-use only. Freepik says full copyright ownership "may not be guaranteed in all jurisdictions". Users are responsible for ensuring output doesn't infringe — [Freepik AI docs](https://www.freepik.es/ai/docs/ai-content-and-copyright); [Magnific enterprise](https://www.magnific.com/vectors/enterprise)
- Legal indemnification for AI-generated content is listed on the top commercial / enterprise tier and applies to use "in good faith and in line with the terms of your agreement". Sources conflict on whether regular Premium qualifies — [Freepik enterprise](https://freepik.com/enterprise); [TechRadar](https://www.techradar.com/pro/freepik-launches-new-enterprise-ai-plan-but-is-it-enough-to-tackle-adobes-dominance-in-the-field)

**Getty Images / Shutterstock**
- Getty's generator offers per-image legal protection with a standard cap "up to"/"starts at" **US$50,000 per image**. It is uncapped only on custom enterprise contracts, so get the amount in writing — [Beri](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock) (Getty's own page returned 403)
- Shutterstock: indemnity for enterprise customers on request, with **human review of each image**. **[OLDER]** It was announced in 2023, and no current public document states the cap or exclusions — [Shutterstock investor release](https://investor.shutterstock.com/node/13136); [Digiday](https://digiday.com/marketing/by-adding-human-review-of-ai-content-shutterstock-expands-indemnity-to-enterprise-clients); [Beri](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)

**Black Forest Labs (FLUX)**
- The **FLUX Non-Commercial License (revised 25 Nov 2025)** covers FLUX.1 [dev], Fill/Depth/Canny/Redux [dev], FLUX.1 Kontext [dev], FLUX.1 Krea [dev] and **FLUX.2 [dev]**.
  - "Non-commercial" excludes revenue-generating activity and anything with direct impact on end users.
  - The licence says BFL claims no ownership of outputs and that outputs "may be used for any purpose (including commercial)". But §4(a) restricts commercial use of the model "or any data produced by" it, which is an internal inconsistency.
  - Producing client work is **likely commercial use** and needs a BFL commercial licence, which BFL grants at its discretion, possibly for fees or revenue share.
  - [BFL Non-Commercial License](https://bfl.ai/legal/non-commercial-license-terms)
- "Running the model to produce client deliverables is itself commercial use", and running it through a host doesn't avoid the restriction. Commercially licensed hosted API tiers: flux-2-klein (from $0.014/image), flux-2-pro (from $0.03), flux-2-max ($0.07), flux-2-flex ($0.05). "FLUX 3" is described as the video line — [Digital Applied, 9 Aug 2026](https://www.digitalapplied.com/blog/ai-creative-licensing-landmines-agency-client-work)
- BFL self-hosted licensing tiers (2026):
  - **Builder**: "Not meant for client use or downstream applications".
  - **Platform**: includes FLUX.2 [dev].
  - **Professional**: up to 3 domains, "first 3 clients included", then per-client fees.
  - **Enterprise**: bespoke terms.
  - The page lists "FLUX 3 Image Klein", which conflicts with the description of FLUX 3 as video-only. It mentions no indemnity.
  - [BFL licensing](https://bfl.ai/licensing)
- BFL Developer (API) Terms: "you own all right, title, and interest in and to Output" — [BFL Developer ToS](https://bfl.ai/legal/developer-terms-of-service)

**Stability AI**
- The Community License is free for organisations with **< US$1M annual revenue**, and the Enterprise licence is required above that for commercial use. The licence page lists only the Community and Enterprise tiers. Whether the $1M line applies to API credit purchases is unclear — [Stability license page](https://stability.ai/license); [Stability license update](https://stability.ai/news/license-update); [fast.io review 2026](https://fast.io/resources/stability-ai-review-2026/)

**Krea**
- **Krea 2 open-weight Community License**: you own outputs. Commercial use is allowed only below a company-wide annual revenue threshold of US$1M; otherwise an Enterprise License is needed — [Krea 2 Community License](https://krea.ai/krea-2-licensing); [Krea 2 Enterprise License](https://www.krea.ai/krea-2-commercial-license)
- The hosted platform is governed by the Krea Terms of Use. Krea "reserves the right to modify the terms of commercial use of Content generated from the Services at any time". Reviews say Basic ($9/mo) and above include commercial rights and the free tier doesn't [SECONDARY] — [Krea terms](https://www.krea.ai/terms-of-use); [Krea AUP](https://krea.ai/krea-2-use-policy); [zsky.ai](https://zsky.ai/blog/is-krea-free)

**fal.ai / Replicate (pass-through hosts)**
- fal: each model has its own licence. Models are marked with a "Commercial use" badge, or as research-only. Provider terms apply on top of fal's [SECONDARY] — [Oakgen](https://oakgen.ai/blog/oakgen-commercial-use-licensing)
- Replicate: customers must "fully comply with Third-Party Terms… including all Additional Terms and licenses associated with the Models". Output rights, including commercial use, are granted subject to those terms. The customer indemnifies Replicate for use, inputs and outputs, and §8.3 disclaims any warranty that third-party model outputs don't infringe. There are model-specific restrictions (e.g. Ideogram non-compete, Stability weight redistribution) [SECONDARY] — [Replicate ToS](https://replicate.com/terms); [ConductAtlas Replicate](https://conductatlas.com/platform/replicate/replicate-terms-of-service/provision/CA-P-047255/replicate-grants-customer-rights-in-output-including-commercial-use/); [ConductAtlas Replicate AUP](https://conductatlas.com/platform/replicate/replicate-acceptable-use-policy/broad-customer-indemnification-obligation/)
- A Reddit claim that Replicate/fal have a special BFL deal making FLUX.1 [dev] commercially usable is **unverified/anecdotal** — [r/StableDiffusion](https://lr.in.psf.lt/r/StableDiffusion/comments/1fri6e0/commercial_use_of_flux1dev_through_replicate_or)

**Cross-vendor**
- "None covers trademark claims in campaign use. Every indemnity is voided if the customer knew or should have known an output was infringing" — [Beri, 18 Oct 2026](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- The Adobe Firefly indemnity is the only one documented on the vendor's own page among the tools in that article. Recommended agency practice:
  - route all billable renders through commercially licensed tiers;
  - disclose provenance marking (C2PA/SynthID) in the statement of work;
  - set `end_user_id` per client on shared API keys.
  - [Digital Applied, 9 Aug 2026](https://www.digitalapplied.com/blog/ai-creative-licensing-landmines-agency-client-work)

### Inferences
- Quick reference (summary of the findings above; verify before relying on it):

| Tool | Commercial use | Output ownership | IP indemnity |
|---|---|---|---|
| Adobe Firefly | Yes (paid) | User | Enterprise only; Adobe models; partner models only under the 8 May 2026 supplement; excludes beta, trademark, publicity/privacy |
| Google Vertex (Imagen/Veo/Gemini) | Yes | User | Paid, listed GA services; unmodified output; excludes trademark-in-commerce and preview models |
| Google Gemini app / AI Studio | Yes | User | Unclear / likely none |
| OpenAI API / ChatGPT Enterprise | Yes | Assigned to user | Copyright on output (API/Enterprise) [SECONDARY] |
| OpenAI consumer (ChatGPT Plus, Sora app) | Yes | Assigned to user | None; the user indemnifies OpenAI [SECONDARY] |
| Midjourney | Paid; Pro/Mega if >$1M revenue | User (subject to tier) | None found |
| Higgsfield | Yes, any plan | User | Enterprise only; pass-through for hosted models unaddressed |
| Runway | Paid | User | Not confirmed |
| Kling | Paid (Standard+) | Disputed; Kling keeps a broad licence | None found |
| Freepik/Magnific | Paid | Not guaranteed | Top/enterprise tier |
| Getty generative | Yes | Licence | Per image, ~US$50k standard |
| Shutterstock generative | Yes | Licence | Enterprise, human-reviewed [OLDER] |
| BFL FLUX API (pro/max/flex/klein) | Yes | User | None found |
| BFL FLUX [dev] weights | **No without a BFL commercial licence** | User, but use restricted | None |
| Stability (self-host) | Yes if <$1M revenue; Enterprise above | User [SECONDARY] | None found |
| Krea 2 weights / hosted | <$1M revenue / paid plan | User | None found |
| fal / Replicate | Depends on each model's licence | Subject to model terms | None; the user indemnifies the host |

- **The agency is usually the licensee.** Revenue thresholds (Midjourney, Stability, Krea) are tested against the subscribing entity. For a small agency, the agency's own revenue (and possibly its client's, if the client holds the account) determines the tier. This is a lawyer question when the client is larger than the agency.
- **Indemnity seldom reaches the end client.** Vendor indemnities run to the contracting customer (the agency), not the electrician client. Agency-to-client contracts should therefore not give unlimited IP warranties.
- **Retouching voids cover.** Most indemnities cover only "unmodified" output, so heavy retouching or compositing (standard ad workflow) may void the vendor cover. Keep the unmodified original as evidence.
- **Aggregators add a licence layer.** On Higgsfield, fal, Replicate, Krea and Freepik, the licence chain includes each underlying model's terms (Kling, Veo, Seedance, FLUX). The aggregator's "you own outputs" statement does not override a restrictive model licence.

### Gaps
- Could not read primary text of Midjourney ToS (27 May 2026), OpenAI Service Terms / Terms of Use, Adobe partner-model page, Getty generative terms (all 403). Kling and Runway primary terms were not retrieved; all claims are secondary.
- Google's current indemnified-services list could not be rendered; whether Gemini image models ("Nano Banana") and the Gemini API paid tier are on it is unconfirmed.
- Whether Higgsfield Enterprise indemnity covers outputs of third-party models it hosts (e.g. Kling, Veo, Sora) is not stated anywhere found.
- No source confirmed whether Sora remains available or under what current terms in Nov 2026.
- Shutterstock's current (2026) indemnity cap and process are unpublished.

## 2. Ad-platform AI disclosure rules in 2026 (Meta, Google/YouTube, TikTok), C2PA/SynthID, and label effects on performance

### Takeaway
As of Nov 2026, for an ordinary **commercial (non-political) ad shown in Australia**:
- **Meta** auto-labels ("AI info" in "About this ad", or next to "Sponsored" when there is a photorealistic AI person). No self-disclosure obligation for commercial ads was confirmed on Meta's own pages.
- **Google Ads** (July 2026) gives an optional AI label setting and auto-labels Google-tool assets. It is driven by EU, India and New York law, not Australian law.
- **TikTok** has an Ads Manager self-disclosure toggle, and its ad policy requires realistic AI content to be disclosed.

**Political/social-issue/election ads carry mandatory disclosure on Meta and Google, and TikTok bans political ads.** C2PA metadata often triggers automatic labels but is frequently stripped on upload, while SynthID-style watermarks persist. Evidence on whether labels hurt performance conflicts: a display field study found big CTR drops, while a video study found none. No platform says labels affect auction or delivery.

### Cited Findings

**Meta (Facebook/Instagram)**
- Ads created or significantly edited with **Meta's own generative AI ad tools** get labelled. If the tools include an **AI-generated photorealistic human**, the label sits **next to "Sponsored"**. Limited edits with no photorealistic human get no label. **Update of 1 June 2026**: Meta auto-detects ads made or edited with **third-party AI tools** using industry-standard signals and adds an "AI info" label inside "About this ad" (three-dot menu). Meta's post says nothing about effects on delivery or performance — [Meta Newsroom, 3 Feb 2025, updated 1 Jun 2026](https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/)
- Advertisers must still **self-disclose** AI use to create or alter ads about **social issues, elections or politics** "in certain cases". "AI info" applies to organic content detected via C2PA and other signals. Users must disclose organic photorealistic video or realistic audio that was digitally created or altered — [Meta Newsroom, 19 Feb 2026 + 1 Jun 2026 update](https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/)
- For political/social ads, disclosed ads get "AI info" near "Paid for by". Non-disclosure can mean ad removal and account penalties. For other ads the label is automatic and "still rolling out" ("not all ads using Meta's generative AI creative features will have AI info"). Trade coverage dates an update to 7 Jul 2026 — [Digital Applied labeling reference, 3 Aug 2026](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference)
- Widely repeated claims of a "global Meta mandate since March 2026" for commercial ads, a "three-strikes rule" and "14% rejection share" appear on **no primary page** — [Digital Applied labeling reference](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference). Contradicting blogs: [Commonthread](https://commonthreadco.com/blogs/coachs-corner/meta-ai-ad-labels-mandatory-disclosure-ecommerce-2026); [Techjack](https://techjacksolutions.com/ai-brief/meta-now-requires-advertisers-to-disclose-ai-generated-conte/)

**Google Ads / YouTube ads**
- **Google Ads policy update (posted 9 Jul 2026)**:
  - Advertisers can add text or visual labels to AI-generated or modified image and video creatives, and these labels are **exempt from text-overlay and watermark policies**.
  - Google Ads **may automatically label assets made with Google AI tools**.
  - An "AI label setting" rolled out through July across Google Ads, DV360, CM360, Merchant Center and Ads Editor.
  - The stated reason is AI transparency rules in the **EU, India and New York**. Using the setting "doesn't guarantee compliance".
  - **Election ads** must still tick "Altered or synthetic content".
  - [Google Ads Policy Help 17257106](https://support.google.com/adspolicy/answer/17257106?hl=en)
- Labels appear in a "How this ad was made" panel in My Ad Center, not stamped on the ad in most cases. Secondary sources claim commercial disclosure is now mandatory for third-party-tool assets globally, but this is **unconfirmed** on Google's page — [ppc.land](https://ppc.land/google-adds-how-this-ad-was-made-ai-labels-24-days-before-eu-deadline/); [Truelogic](https://www.truelogic.com.ph/?p=91504); [Digital Applied](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference)
- YouTube organic content: creators must disclose realistic altered or synthetic media a viewer could mistake for real. The label usually sits in the description, and is more prominent for health, news, elections and finance. Exempt: clearly unrealistic content and beauty filters — [Digital Applied](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference)

**TikTok**
- Ads Manager has a self-disclosure toggle, "**This ad contains AI-generated content**", for ads that are completely AI-generated or significantly AI-modified, and users see an **AIGC label**.
  - It applies only to non-Spark ads.
  - It can't be unselected after submission unless the media changes.
  - **Campaign duplication resets the toggle.**
  - The help article was last updated **September 2025 [OLDER]**.
  - [TikTok Ads Help: About ad disclaimers](https://ads.tiktok.com/help/article/about-ad-disclaimers-in-tiktok-ads-manager); [TikTok: Add disclaimers](https://ads.tiktok.com/help/article/add-disclaimers-to-ads)
- The TikTok ads policy allows AI content only if disclosed. A vendor blog claims mandatory labels on all AI ad content from **21 Jul 2026** [SECONDARY/unconfirmed]. TikTok uses C2PA to auto-label. The Verge (Mar 2026, via secondary) found the AI label appears on some but not all ads — [Commonthread](https://commonthreadco.com/blogs/coachs-corner/tiktok-ai-ad-disclosure-rules-ecommerce-2026); [AInauten](https://news.ainauten.com/en/story/tiktoks-policy-for-ai-ads-isnt-working); [Billo](https://billo.app/blog/ai-labeling/)
- Paid political ads are prohibited on TikTok, and creators must label realistic AI scenes or people — [Digital Applied](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference)
- A labelled ad can still be rejected for misleading claims (e.g. a fake discount) — [Novoads](https://novoads.ai/blog/tiktok-misleading-content-policy-ai-ads)

**C2PA / Content Credentials / SynthID**
- C2PA Specification 2.3 was published 5 Jan 2026. C2PA metadata is "typically stripped on re-encode or upload", while the **SynthID watermark survives** those transformations. Marked assets carry attribution the agency cannot remove — [Digital Applied, 9 Aug 2026](https://www.digitalapplied.com/blog/ai-creative-licensing-landmines-agency-client-work)
- Meta and TikTok use C2PA signals for detection, and detection depends on the tool writing metadata, so some AI-edited ads go unlabelled — [Meta Newsroom](https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/); [Billo](https://billo.app/blog/ai-labeling/)
- EU AI Act Art. 50 transparency obligations have applied since **2 Aug 2026**: providers machine-mark synthetic output, and deployers disclose deepfakes (relevant only if campaigns reach the EU) — [Digital Applied](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference)

**Do labels affect performance?**
- NYU/Emory Google Display Network field study: unlabelled fully AI-generated ads had 19% higher CTR than human-made controls. When labelled "AI-generated" or "AI-edited", performance dropped; a secondary write-up says about 31.5% relative, and that exact figure is unverified — [The Decoder](https://the-decoder.com/telling-consumers-an-ad-is-ai-generated-cuts-clicks-by-31-percent-study-finds/); [MediaPost](https://mediapost.com/publications/article/417340/iab-ai-labeling-cuts-clickthroughs-by-a-third.html)
- MediaScience (900 US respondents, four label formats on video ads vs no-label control): **no decline** in measured video ad performance — [ContentGrip](https://www.contentgrip.com/ai-ad-labeling-study/); [Marketing Dive](https://marketingdive.com/news/ai-disclosure-labels-dont-hurt-ad-performance-heres-what-the-numbers-say/822711/)
- Gartner (Mar 2026, Oct 2025 survey): 50% of US consumers prefer brands that don't use genAI in consumer-facing ads. IAB: 82% of ad executives think Gen Z/Millennials feel positive about AI ads, versus 45% of those consumers — [Search summary of eMarketer/IAB](https://www.emarketer.com/content/ai-ads-isn-t-problem-most-consumers-lack-of-disclosure); [ppc.land IAB](https://ppc.land/iab-introduces-disclosure-framework-as-gen-z-trust-in-ai-ads-plummets-19-points/)
- No platform documentation found states that AI labels change auction or delivery — [Meta Newsroom](https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/); [Digital Applied](https://www.digitalapplied.com/blog/ai-content-labeling-rules-advertisers-2026-reference)

### Inferences
- **Labels are mostly automatic.** For a Melbourne electrician's commercial ads, labels will often be applied automatically (Meta detection, Google own-tool assets, TikTok C2PA), whether or not the agency discloses. The agency should assume an AI label may appear and design creative and claims so a label doesn't undermine trust.
- **Photorealistic people make the label prominent.** On Meta they move the label next to "Sponsored". This is the case most relevant to "AI electrician" or "AI happy customer" imagery.
- **Disclose on TikTok every time.** TikTok's toggle resets on duplication, so it is an operational checklist item, and turning it on is the safest default for realistic AI ads there.
- **Keep provenance metadata intact.** Stripping C2PA to avoid labels is a poor strategy: watermarks like SynthID survive, and platforms treat deliberate concealment as a policy issue.
- **Performance evidence is mixed.** Clicks may drop on static/display ads, while video brand metrics may be unaffected. Agencies should A/B test rather than assume.

### Gaps
- Meta Business Help Center "About AI info on ads" and the Meta ad-standards page for AI disclosure were not retrieved directly. Whether Meta's political/social-issue AI disclosure rule applies to Australian issue ads in 2026 (and the exact "certain cases") is undefined on the pages found.
- TikTok's own 2026 ad creative policy text on AIGC was not found; the "21 Jul 2026 mandatory" date is unverified.
- Google's Australian election-ad synthetic content rules were not separately checked.
- No platform-published data on label effects on delivery or CPM was found.

## 3. Australia: ACL/ACCC, AI regulation status, Ad Standards/AANA, copyright in AI output, privacy and likeness

### Takeaway
Australia has **no AI-specific advertising or labelling law** as of Nov 2026. The **Australian Consumer Law** (s18 misleading or deceptive conduct, s29 false representations) applies to AI imagery the same way it applies to any image. Penalties doubled from **28 Mar 2026** to the greatest of **A$100M, 3x benefit or 30% of turnover**. The National AI Plan (2 Dec 2025) dropped mandatory guardrails in favour of existing laws plus voluntary Guidance for AI Adoption (21 Oct 2025). The AANA Code of Ethics is under review, with AI rules being considered, and no outcome was found. Purely AI-generated output likely has **no copyright** in Australia (human authorship). A statutory privacy tort has been in force since **10 June 2025**, and a private member's "My Face, My Rights" deepfake bill (Nov 2025) is not law.

### Cited Findings

**Australian Consumer Law / ACCC**
- Astor Legal (principal Avinash Singh), 6 Jul 2026:
  - ACL **s18** (misleading or deceptive conduct) and **s29** (false or misleading representations about characteristics, quality, benefits) apply to AI images.
  - "There is currently **no legal obligation** to tell consumers when AI has been used to create or enhance marketing images."
  - Use AI to enhance, not fundamentally change, what is shown, and be able to show the marketing accurately reflects the product.
  - Knowingly deceptive AI misrepresentation for gain could be fraud.
  - [Cyber Daily, 6 Jul 2026](https://www.cyberdaily.au/digital-transformation/13855-legal-trouble-misleading-ai-images-could-lead-to-millions-in-fines)
- Images, social posts and testimonials may be misleading if they create a false overall impression, and disclaimers may not cure a misleading overall impression — [Sharon Givoni](https://sharongivoni.com.au/?p=4266); [Lawyers Weekly](https://www.lawyersweekly.com.au/sme-law/44359-moderation-cannot-be-an-afterthought-what-to-know-before-you-post-an-albo-meme)
- **Penalties**: new maximums apply to conduct from **28 Mar 2026**. For corporations, the greatest of **A$100M**, 3x the benefit, or 30% of adjusted turnover during the breach period. Individual maximums are unchanged (A$2.5M per the ACCC's page) — [JWS, 8 Apr 2026](https://jws.com.au/what-we-think/double-trouble-penalties-for-breaches-of-competition-and-consumer-laws-have-increased-again/); [ACCC fines and penalties](https://www.accc.gov.au/business/compliance-and-enforcement/fines-and-penalties); [Moray & Agnew](https://www.moray.com.au/insights-media-events/publications/commercial-directions/april-2026/competition-and-consumer-law-penalties-to-double)
- Treasury's **Review of AI and the ACL final report (3 Oct 2025)**:
  - The ACL, with other laws, can generally handle AI.
  - No AI-specific consumer provisions or mandatory standards; minor clarifications only.
  - The minister said the ACCC "has the tools it needs".
  - [Treasury review page](https://treasury.gov.au/review/review-ai-and-australian-consumer-law); [Final report PDF](https://treasury.gov.au/sites/default/files/2025-10/p2025-702329-fr.pdf); [Minister Leigh release, 3 Oct 2025](https://ministers.treasury.gov.au/ministers/andrew-leigh-2025/media-releases/review-confirms-consumer-law-protects-australians-age); [G+T](https://www.gtlaw.com.au/insights/ai-and-the-australian-consumer-law-governments-final-report-finds-framework-fit-for-purpose)
- **Enforcement on fake reviews and testimonials**:
  - **PhotobookShop** paid **A$39,600** in infringement notices (Mar 2026) after instructing influencers 107 times not to disclose payment — [ACCC media release](https://www.accc.gov.au/media-release/photobookshop-pays-penalties-for-influencer-reviews); [Mediaweek](https://mediaweek.com.au/news/photobookshop-accc-influencer-reviews-fine)
  - **HiSmile** was penalised for fake testimonials created by employees, then ran AI ads with glitches weeks later (B&T, Jun 2026) — [B&T](https://www.bandt.com.au/decayed-teeth-glitching-mouths-hismile-using-ai-ads-weeks-after-being-fined-for-misleading-content/); [B&T penalty](https://www.bandt.com.au/hismile-to-pay-138k-after-fake-reviews-misleading-social-ads/)
  - **Electrodry**, a franchised home-services cleaner, faces an ACCC **allegation** of a contractor publishing fictitious Google reviews, and of the franchisor encouraging false testimonials. This is directly analogous to trades businesses — [Search summary: Sharon Givoni](https://sharongivoni.com.au/influencer-marketing-online-reviews-and-the-law/)
- The ACCC warns that AI makes it easier to create convincing fake websites, ads and images, and its AI industry snapshot says AI fuels fake reviews and "ghost stores" — [SmartCompany](https://www.smartcompany.com.au/artificial-intelligence/accc-warns-ai-ghost-stores-online-shopping/)

**Australian AI regulation status**
- The **National AI Plan (2 Dec 2025)** brings no standalone AI Act and will not mandate the proposed guardrails. It relies on existing laws updated "case by case", with about A$30M for an AI Safety Institute. The **Guidance for AI Adoption (21 Oct 2025)** effectively replaces the Voluntary AI Safety Standard — [MinterEllison](https://www.minterellison.com/articles/australia-introduces-a-national-ai-plan-four-things-leaders-need-to-know); [White & Case](https://www.whitecase.com/insight-alert/australias-national-ai-plan-big-ambitions-light-details); [Region, 3 Dec 2025](https://region.com.au/mandatory-ai-guardrails-put-on-hold-with-the-release-of-national-plan/926410/)
- On **15 Jul 2026** the PM announced a dedicated Office of AI — [Hall & Wilcox, 9 Oct 2026](https://hallandwilcox.com.au/news/copyright-ai-and-the-shifting-onus-on-australian-creators)

**Ad Standards / AANA**
- **AANA Code of Ethics review**: the discussion paper (Oct 2025) asks whether the Code should include "a specific rule or guidance dealing with AI in advertising", or whether a general "misleading and deceptive" rule aligned with the ACL would cover genAI. Submissions closed **16 Jan 2026** — [AANA Discussion Paper Oct 2025](https://info.aana.com.au/hubfs/Self-Regulation/20251007%20Code%20of%20Ethics%20Review%20-%20Discussion%20Paper/AANA%20Code%20of%20Ethics%20Review%202025%20Discussion%20Paper.pdf); [Ad Standards](https://adstandards.com.au/article/have-your-say-on-the-aana-code-of-ethics/)
- Ad Standards' Greg Wallace (Feb 2026): "relatively small" number of AI complaints, and **existing rules apply regardless of how content is made** — [Search summary of SmartCompany](https://www.smartcompany.com.au/?p=344045)
- Submissions call for stronger oversight of AI-generated advertising (Collective Shout, Mar 2026) — [Collective Shout](https://www.collectiveshout.org/submission-aana-code-review-2026)
- Comparative (not Australian): the UK Advertising Association's GenAI best-practice guide (Feb 2026), ICC AI guidance (20 Mar 2026), IAB AI Transparency & Disclosure Framework v2 (18 Aug 2026), and UK ASA deepfake guidance — [AA guide](https://adassoc.org.uk/our-work/best-practice-guide-for-the-responsible-use-of-generative-ai-in-advertising/); [IAB](https://iab.com/news/updates-industry-framework-ai-transparency-disclosure-advertising); [ASA](https://www.asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html)

**Copyright in AI output (Australia)**
- *Telstra v Phone Directories* (2010, Full Federal Court): "'authorship' denotes human authorship". There is no copyright in largely automated works — [Hall & Wilcox, 9 Oct 2026](https://hallandwilcox.com.au/news/copyright-ai-and-the-shifting-onus-on-australian-creators)
- The human-authorship requirement "points strongly" to purely AI-generated outputs attracting no copyright. How much human input is enough is untested — [IBA](https://www.ibanet.org/AI-and-copyright-in-Australia); [search summary](https://www.ilnipinsider.com/2026/08/not-so-free-to-roam-australias-shifting-approach-to-copyright-protection-in-the-age-of-ai/)
- The AGD consulted the CAIRG (Oct–Dec 2025) on three priorities: licensing for AI use, "**improving certainty on how copyright law applies to material generated using AI**", and cheaper enforcement. No decisions yet — [IP Australia, Australian IP Report 2026](https://ipaustralia.gov.au/tools-and-research/professional-resources/data-research-and-reports/australian-ip-report-2026/copyright/key-copyright-policy-priorities)
- AG Rowland ruled out a TDM exception (Oct 2025), and the PM reiterated this in July 2026. A leaked AGD paper ("AI on Australian Terms", reported Sept 2026) proposes an opt-out "Mandatory Data Access Arrangements" model. Draft legislation is possibly expected early 2027, with no committed timetable — [Bird & Bird](https://cm.twobirds.com/en/insights/2025/australia/3-key-takeaways-from-australia’s-latest-ai-copyright-law-reform-announcement); [Region, 17 Sep 2026](https://region.com.au/?p=1000327); [Hall & Wilcox](https://hallandwilcox.com.au/news/copyright-ai-and-the-shifting-onus-on-australian-creators); [Mondaq](https://www.mondaq.com/australia/licensing-syndication/1819184/australia-%7c-the-copyright-stalemate-deepens-as-albanese-centralises-ai-policy)

**Privacy, likeness, deepfakes**
- The **statutory tort for serious invasions of privacy** (Privacy Act Sch 2) commenced **10 June 2025** for conduct after that date. A plaintiff must show the invasion was serious, there was a reasonable expectation of privacy, and the conduct was intentional or reckless. **No proof of damage is needed** — [OAIC](https://www.oaic.gov.au/privacy/your-privacy-rights/more-privacy-rights/statutory-tort-for-serious-invasions-of-privacy)
- Damages for non-economic loss plus exemplary damages are capped at the greater of A$478,550 or the defamation cap. Deepfake images are a named concern, and whether republishing a deepfake creates liability is untested — [NSW Parliament research](https://www.parliament.nsw.gov.au/researchpapers/Pages/NSW-privacy-law-and-the-new-tort-of-serious-invasion-of-privacy.aspx); [Gadens](https://www.gadens.com/legal-insights/denmark-to-let-you-control-the-use-of-your-voice-and-likeness-what-about-australia/)
- **My Face, My Rights Bill 2025** (Sen. David Pocock, introduced 24 Nov 2025) would amend the Online Safety Act and Privacy Act to restrict non-consensual AI depictions of a person's face or voice. Consent must be "express, voluntary and informed". It is a private senator's bill, and **no evidence it has passed** — [Pocock](https://www.davidpocock.com.au/new_bill_to_protect_identity_in_deepfake_future); [Digital Policy Alert](https://digitalpolicyalert.org/event/35681-online-safety-and-other-legislation-amendment-my-face-my-rights-bill-2025-including-content-moderation-regulation-was-introduced-to-senate); [AAP](https://aapnews.aap.com.au/news/i-own-my-face-ai-deepfake-victims-may-be-able-to-sue)
- Australia has no standalone deepfake statute. Criminal Code s474.17A covers non-consensual sexual deepfakes, and eSafety's powers over non-sexual deepfakes are limited (Oct 2026) — [Dundas Lawyers](https://www.dundaslawyers.com.au/?p=65823); [MLex](https://www.mlex.com/mlex/articles/2539881)

### Inferences
- **Fake depictions are the core ACL risk.** For a Melbourne electrician, the highest-risk AI uses are depictions presented as real: "our team" photos of people who aren't staff, "completed jobs" or switchboard upgrades not actually done, before/after results, vans, licences or certifications, and AI "customer" testimonials or reviews. Each can create a false overall impression under s18/s29 even with an "AI" label.
- **AI-made stock-like scenes carry lower risk.** Illustrative scenes such as a generic lightbulb or a stylised house are lower risk when the overall impression isn't a factual claim about the business.
- **Penalty mechanics.** From general knowledge of the ACL (not verified in this session), s18 itself does not attract civil pecuniary penalties; s29 and similar specific provisions do, and s18 exposes the business to injunctions, damages and corrective advertising. This should be confirmed by a lawyer.
- **No copyright in raw outputs.** Because purely AI-generated assets likely lack copyright in Australia, the client may not be able to stop competitors copying an AI ad. Documenting human creative contribution (composition, editing, compositing with real photos) may strengthen ownership claims.
- **Real-person likeness.** Using a real tradesperson's face or voice to train or generate content without clear consent risks:
  - the privacy tort (if "serious" and intentional or reckless);
  - ACL misrepresentation of endorsement or affiliation;
  - passing off;
  - platform-policy breaches.
  If "My Face, My Rights" or similar passes, express informed consent may become a statutory requirement. Draft consent to that standard now.
- **Biometric data.** From general knowledge (not verified in this session), Privacy Act APPs treat biometric information used for identification as sensitive information needing consent. The small-business exemption (≤A$3M turnover) may apply to some agencies or clients. A lawyer should confirm how face or voice training data is treated.

### Gaps
- No ACCC guidance document specific to AI-generated advertising imagery was found; the ACCC's own "AI industry snapshot" was cited only via SmartCompany.
- Outcome or timing of the AANA Code of Ethics review (new code text) not found.
- Status of the My Face, My Rights Bill in 2026 (committee inquiry, lapsed?) not confirmed.
- Electrodry case outcome not confirmed (allegation only).
- OAIC-specific guidance on using personal information with generative AI (e.g. 2024 guidance) was not retrieved in this session.

## 4. Practical risks: trademarks, celebrity likeness, AI actors/avatars, voice/face cloning, stock-like outputs

### Takeaway
Trademark and likeness risks fall almost entirely on the agency and client: **every vendor indemnity found excludes trademark-in-commerce claims**, and Adobe's partner-model supplement also excludes publicity and privacy claims. Vendors prohibit uploading other people's images without permission (Higgsfield) or generating real people without verified consent (Sora). Recognisable brands, characters, celebrities and "in the style of" living artists are the main exposure, along with outputs that closely resemble specific copyrighted photos.

### Cited Findings
- Google's indemnity excludes "a trademark-related right arising from Customer's use of the output in trade or commerce". It also excludes knew-or-should-have-known cases and continued use after a rightsholder's notice — [Google Cloud Service Terms §20(i)](https://cloud.google.com/terms/service-terms)
- Across vendors, "none covers trademark claims in campaign use". Adobe's 8 May 2026 partner-model supplement excludes trademark, publicity and privacy claims — [Beri, 18 Oct 2026](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- Higgsfield: users are responsible for copyright, trademark and likeness rights, and "may not upload or use another person's image without their permission" (help centre, modified 12 Sep 2026) — [Higgsfield](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Sora generates real people only via a verified cameo, and owners can revoke it. Generating identifiable people without written consent violates OpenAI terms [SECONDARY] — [licenseorg](https://licenseorg.com/blog/sora-licensing-guide-2026)
- The Runway usage policy prohibits IP infringement and imitation of living-artist style — [ConductAtlas](https://conductatlas.com/platform/runway/runway-usage-policy/provision/CA-P-016461/intellectual-property-and-living-artist-style-prohibition/)
- Satirical AI "Albo" memes are flagged by Australian lawyers as a moderation and misleading-endorsement risk for SMEs — [Lawyers Weekly](https://www.lawyersweekly.com.au/sme-law/44359-moderation-cannot-be-an-afterthought-what-to-know-before-you-post-an-albo-meme); [Internet Retailing](https://internetretailing.com.au/ai-in-ads-parody-is-safe-but-there-are-dangerous-minefields-says-lawyer/)
- Indemnity is void if the customer "knew or should have known" output was infringing. So prompting for a named brand, character or celebrity likely forfeits cover — [Google Cloud Service Terms](https://cloud.google.com/terms/service-terms); [Beri](https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock)
- Training-licence exposure: Higgsfield (non-Enterprise), Runway (non-Enterprise) and Kling may use uploaded inputs, such as a client's face or voice reference, to train models. On Higgsfield, removal from already-trained models is not possible — [Higgsfield](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially); [ConductAtlas Runway](https://conductatlas.com/platform/runway/runway-terms-of-service/ai-training-license-over-inputs-and-outputs/); [WaveSpeed Kling](https://wavespeed.ai/blog/commercial-compliance/is-kling-seedance-output-safe-for-commercial-use/)
- UK ASA (comparative): deepfakes and AI portrayals of real people need permission, and AI can't be used to exaggerate product efficacy — [ASA](https://www.asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html)

### Inferences
- **Trademarks.** Never prompt for, or leave visible, third-party marks: competitor logos, tool brands on drills or meters, switchboard manufacturers, Clipsal/Schneider-style marks on products, and recognisable characters. AI models often hallucinate near-miss logos, so check every frame. For an electrician, showing branded equipment the business doesn't actually use or isn't authorised for could also imply affiliation or misrepresent the product (ACL s29).
- **Celebrities and public figures.** Avoid them entirely in client ads. In Australia this exposes the client to passing off and ACL false-endorsement claims, plus platform policy breaches (Meta, Google and TikTok all police impersonation and scams). Vendor indemnity doesn't cover publicity claims.
- **Stock AI "actors"/avatars** (e.g. Higgsfield AI Influencer, platform avatar libraries):
  - Check the vendor's avatar licence permits ads.
  - Don't present an avatar as a real employee, customer or reviewer.
  - Expect Meta to label photorealistic AI people prominently.
- **Cloning the client's own face or voice.** This needs written, express, informed, revocable consent. Use Enterprise or no-training tiers where possible, because consumer tiers may train on the reference uploads.
- **Stock-like outputs.** Outputs resembling specific copyrighted photos (a famous image, a competitor's ad) are the main copyright output risk. Use reverse-image search on hero assets, and avoid "in the style of [living photographer/artist]" prompts.

### Gaps
- Australian case law on AI-generated likeness in advertising: none found.
- Specific vendor avatar/"AI actor" licence terms (Higgsfield AI Influencer, HeyGen, Synthesia etc.) were not researched in this session.
- Pending US litigation (e.g. studios v Midjourney over characters) was not verified in this session.

## 5. Do/don't checklist for a small Australian agency (consent, record-keeping, contracts)

### Takeaway
A small agency can use AI imagery and video safely by:
- using paid, commercially licensed tiers (indemnified ones for higher-risk work);
- never using AI to depict facts about the client's business that aren't true;
- getting written consent before any real person's likeness or voice is used;
- turning on platform disclosure toggles and keeping provenance metadata;
- keeping a per-asset log of tool, plan, model, prompt, inputs, date and human edits;
- capping IP warranties in client contracts and passing through vendor terms.

### Cited Findings
- Recommended: route billable renders through commercially licensed tiers, never FLUX [dev] weights; disclose C2PA/SynthID marking in the SOW; set `end_user_id` per client; compare indemnity cost for high-IP-risk work — [Digital Applied, 9 Aug 2026](https://www.digitalapplied.com/blog/ai-creative-licensing-landmines-agency-client-work)
- Indemnities cover only unmodified output and are void on knew-or-should-have-known infringement or continued use after notice. Keep originals and act on takedown notices — [Google Cloud Service Terms](https://cloud.google.com/terms/service-terms)
- Recording the human creative input behind each asset may help if ownership is disputed (Hall & Wilcox commentary, Oct 2026) — [Hall & Wilcox](https://hallandwilcox.com.au/news/copyright-ai-and-the-shifting-onus-on-australian-creators)
- Enhance, don't fundamentally change, and be able to prove the marketing reflects reality — [Cyber Daily / Astor Legal, 6 Jul 2026](https://www.cyberdaily.au/digital-transformation/13855-legal-trouble-misleading-ai-images-could-lead-to-millions-in-fines)
- The consent standard proposed in the My Face, My Rights Bill is "express, voluntary and informed" — [Digital Policy Alert](https://digitalpolicyalert.org/event/35681-online-safety-and-other-legislation-amendment-my-face-my-rights-bill-2025-including-content-moderation-regulation-was-introduced-to-senate)
- The TikTok toggle resets on campaign duplication, and Google's AI label "doesn't guarantee compliance" — [TikTok Ads Help](https://ads.tiktok.com/help/article/about-ad-disclaimers-in-tiktok-ads-manager); [Google Ads Policy](https://support.google.com/adspolicy/answer/17257106?hl=en)
- The government's Guidance for AI Adoption (21 Oct 2025) is the reference voluntary governance framework for businesses — [MinterEllison](https://www.minterellison.com/articles/australia-introduces-a-national-ai-plan-four-things-leaders-need-to-know)

### Inferences
These are proposed agency practices synthesised from the findings above, not legal advice.

**DO**
1. **Tool register.** Keep a list of approved tools with plan tier, ToS version/date, commercial-use status, indemnity (Y/N, cap, exclusions) and training-on-inputs status. Re-check quarterly, since terms changed repeatedly in 2025–26.
2. **Paid, commercially licensed tiers only** for client deliverables: Midjourney Pro/Mega if the account holder is above US$1M revenue; Kling Standard+; FLUX via BFL API or a commercial licence, never [dev] weights. For high-IP-risk work (hero brand assets, packaging, characters), prefer an indemnified route: Adobe Firefly enterprise, Vertex AI GA models, Getty.
3. **Per-asset provenance log**, kept at least for the campaign's life plus a buffer (lawyer to set the retention period). Record:
   - tool, model and version, plan, account owner and date;
   - full prompt(s), seed, reference/input files and their source and licence;
   - unmodified output file;
   - human edits made, approver, and where it ran.
4. **Likeness/voice consent form** for any real person (client, staff, customer, actor), signed before capture. It should cover:
   - the specific uses (ads, platforms, territories, duration);
   - AI generation, alteration and voice cloning explicitly;
   - which vendors will process the data, and whether they train on it;
   - the right to revoke, and the deletion process;
   - payment or consideration;
   - no use for unrelated purposes;
   - guardian consent for minors.
   Have a lawyer draft it to the "express, voluntary and informed" standard.
5. **Truth check before publishing** (ACL s18/s29). Does any image imply real staff, real completed jobs, real vehicles or premises, licences, accreditations, prices or results? If yes, use real photos or make the illustration obviously illustrative.
6. **Platform disclosure.**
   - TikTok: tick "This ad contains AI-generated content" for realistic AI ads, and re-tick after duplicating.
   - Google Ads: consider the AI label setting.
   - Meta: expect auto-labels.
   - Political or issue ads on Meta/Google: always self-disclose (TikTok bans them).
   - Keep C2PA metadata; don't strip it.
7. **IP screen on hero assets**: no third-party logos or marks, celebrity look-alikes or named-artist styles. Reverse-image search the final frames.
8. **Client contract / SOW** (lawyer review):
   - disclose AI use and provenance watermarks;
   - state that raw AI output may not be protected by copyright in Australia;
   - limit agency IP warranties to what vendor terms support, with a liability cap;
   - require the client to warrant the rights in materials it supplies (photos, logos, likeness of its staff);
   - allocate who holds tool accounts.
9. **Takedown procedure**: if a rightsholder complains, pull the asset immediately (continued use after notice voids Google-style indemnity).
10. **Data hygiene**: use Enterprise or no-training settings when uploading client faces, voices or confidential material, or avoid tools whose terms grant broad training and reuse licences (Kling, consumer Higgsfield, Runway).

**DON'T**
1. Don't create AI "customers", testimonials, star ratings or reviews, or AI "team members" presented as real.
2. Don't depict work, results, switchboards, solar installs, certifications or before/afters that didn't happen as if they did.
3. Don't generate or imitate celebrities, politicians (including satirical "Albo" ads), or competitors' staff or brands.
4. Don't use free plans, trial outputs or non-commercial weights (FLUX [dev], Midjourney trial CC BY-NC, Kling free) for client work, even if outputs are "owned".
5. Don't remove vendor watermarks to dodge licence terms, and don't strip C2PA to avoid platform labels.
6. Don't upload a real person's face or voice without signed consent, and don't reuse consent beyond its stated scope.
7. Don't promise clients "fully indemnified" or "you own the copyright" unless the vendor contract actually supports that for that specific asset.
8. Don't assume an "AI-generated" label fixes a misleading impression; under the ACL, disclaimers rarely cure overall impression.

**When to call a lawyer**: before cloning any person's voice or face; before using AI for regulated claims (electrical safety, licensing, energy savings, rebates); before relying on any vendor indemnity; when drafting the client MSA/SOW and consent forms; and on receipt of any IP or likeness complaint.

### Gaps
- No Australian regulator-issued template consent form or record-keeping standard for AI advertising assets was found. The checklist is synthesised from vendor terms, overseas guidance and law-firm commentary.
- Retention period for prompt/provenance logs: no Australian guidance found (ACL limitation periods and contract terms should drive it, per a lawyer).
- Electrical-trade-specific advertising rules (e.g. Energy Safe Victoria licence-number display requirements in ads) were out of scope and not researched; worth checking separately for a Melbourne electrician.
