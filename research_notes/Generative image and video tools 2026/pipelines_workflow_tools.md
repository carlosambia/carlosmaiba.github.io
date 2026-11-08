# Production Pipelines and Workflow Tooling for Generative Image/Video (Small Agencies, Nov 2026)

Scope note: this covers the workflow layer (canvases, integrations, automation, audio licensing in one line, pipeline design), not model quality or platform credit pricing. Research date: 2026-11-08. Where a source is third-party, a competitor, or undated, it is flagged. Items marked **[Observed]** come from the MCP tool schemas actually connected in this Claude Code session on 2026-11-08 (Higgsfield, Magnific, Figma, Google Drive). They are first-hand evidence of what the connectors expose, not vendor documentation.

---

## 1. Node-based / canvas tools in 2026: what each is good at, sharing/templating, team features, price, API access, agency adoption

### Takeaway
The node canvas is now standard across vendors: Figma Weave, Flora, Freepik Spaces, Krea Nodes, Runway Workflows, ComfyUI/Comfy Cloud. They are converging on three things: (a) packaging a graph as a simple "app/tool" teammates or clients fill in, (b) an AI agent that builds or edits the graph from plain language, and (c) since mid-2026, exposure to external coding agents through MCP. Figma Weave (through the Figma MCP) and Freepik/Magnific Spaces (through the Magnific MCP) are the two that a Claude Code agency can drive end to end today. ComfyUI is still the most controllable and self-hostable, but its team features are the least finished.

### Cited Findings

**Figma Weave (formerly Weavy)**
- Weavy was founded in Tel Aviv in 2024. Figma acquired it in October 2025 and renamed it Figma Weave. — [TechBuzz](https://www.techbuzz.ai/articles/figma-acquires-weavy-launches-ai-canvas-platform-figma-weave); [UIChemy](https://uichemy.com/blog/figma-weave/)
- Figma's official page describes a node-based canvas for image, video, audio and 3D generation, combined with editing tools: masking, color grading, compositing, inpainting and relighting. Workflows can be saved, reused and shared with a team as "reusable systems". Teammates can run a shared workflow through a simplified interface: they add inputs and get results. — [Figma Weave page](https://www.figma.com/solutions/figma-ai-tool-weave/)
- Dated items on the Figma Weave page: Runway Aleph 2.0 in Weave (2026-06-18); "Connecting Figma and Weave", where Weave workflows live alongside Figma frames (Config, 2026-06-24); community publishing for Weave tools (2026-09-16); a workflow lab on going from design system to campaign (2026-10-01); a post on making creative processes repeatable (2026-10-31). — [Figma Weave page](https://www.figma.com/solutions/figma-ai-tool-weave/)
- Models listed include Google, OpenAI, Kling, Bytedance, Black Forest Labs, Runway, Luma, LTX, Wan, Grok, Recraft and Bria. — [UIChemy](https://uichemy.com/blog/figma-weave/); [Figma Weave page](https://www.figma.com/solutions/figma-ai-tool-weave/)
- Inside Figma Design, Figma exposes a curated subset of Weave workflows as tools that run on an image already on the canvas. The full node editor is not available inside the Figma canvas. — [UIChemy](https://uichemy.com/blog/figma-weave/); [Banani review](https://www.banani.co/blog/figma-weave-review)
- Pricing: the official page only says "get started for free; advanced features and higher usage on paid plans". A third-party review lists Free (150 credits/month) and paid plans at $19–$48 per user per month, billed separately from Figma seats. This figure is **unverified**. — [Figma Weave page](https://www.figma.com/solutions/figma-ai-tool-weave/); [UXMagic review (third-party)](https://uxmagic.ai/blog/figma-weave-review)
- Reviewers cite a learning curve and guesswork in choosing models. — [Banani](https://www.banani.co/blog/figma-weave-review); [House of GAI](https://www.houseofgai.com/blog/node-based-ai-tools-weavy-figma-weave)

**Flora (flora.ai)**
- On 2026-05-06 Flora launched "Actions": more than 21 on-canvas tools for video (stitch, split, frame extraction, color grade, reverse, speed, watermark, background removal), image (color grade, aspect ratio, rotate, blur, filters, Ken Burns) and text (split, find/replace, concatenate). Actions can be placed on the canvas or called through FAUNA, Flora's AI creative agent, which is free and unmetered on all tiers. — [IT Brief, 2026-05-06](https://itbrief.news/story/flora-launches-on-canvas-tools-dollar-usage-pools)
- Flora replaced credits with dollar-denominated usage pools. Team plans pool the budget across seats. The change went live for self-serve accounts on 2026-05-05 and for Enterprise from 2026-05-11. Unused budget does not roll over. — [IT Brief](https://itbrief.news/story/flora-launches-on-canvas-tools-dollar-usage-pools); [Flora docs: pricing](https://docs.flora.ai/plans-and-billing/pricing.md); [Flora docs: FAQ](https://docs.flora.ai/plans-and-billing/faq)
- Seat prices per a third-party guide: Free $0, Starter $18/seat, Pro $50, Max $200, and Enterprise custom for 9+ seats. Not verified on flora.ai/pricing. — [AIonX pricing guide](https://aionx.co/ai-comparisons/flora-pricing-guide/); [Wireflow (competitor, discloses this)](https://www.wireflow.ai/blog/flora-ai-pricing)
- Named customers are Nike, Netflix and Pentagram. Flora has raised $52M from Redpoint, Menlo and a16z Games Speedrun, and is based in Brooklyn. — [IT Brief](https://itbrief.news/story/flora-launches-on-canvas-tools-dollar-usage-pools)
- No API or MCP access is mentioned in the May 2026 launch coverage. — [IT Brief](https://itbrief.news/story/flora-launches-on-canvas-tools-dollar-usage-pools)

**Freepik Spaces (exposed as "Magnific" in the connected MCP)**
- Freepik launched Spaces on 2025-11-04 as a node-based, real-time collaborative workspace for AI visual creation. — [BusinessWire](https://www.businesswire.com/news/home/20251104023735/en/Freepik-Launches-Freepik-Spaces-to-Power-AI-Visual-Creation-and-Collaboration-in-Real-Time)
- Official docs list image, video and audio generator nodes, including three audio nodes for text-to-sound. A List node with multiple items can feed a single-value input, and Spaces then processes each item one by one. This is native batching for variants. — [Freepik docs: nodes & connections](https://www.freepik.es/ai/docs/nodes-and-connections); [Freepik docs: intro to Spaces](https://tr.freepik.com/ai/docs/introduction-to-spaces)
- Public API status is contested. Competitor blogs say the Freepik API covers stock and some generation endpoints but not Spaces canvas features. — [Wireflow (competitor)](https://www.wireflow.ai/blog/best-freepik-spaces-api-tools-in-2026); [Wireflow (competitor) vs ComfyUI](https://www.wireflow.ai/blog/best-freepik-spaces-vs-comfyui-for-developers-tools-in-2026)
- **[Observed]** The connected Magnific MCP does expose Spaces and workflow control to an agent:
  - Spaces graph tools: `spaces_create`, `spaces_create_node`, `spaces_add_connection`, `spaces_patch_node`, `spaces_run`, `spaces_run_status`, `spaces_templates_search`, `spaces_duplicate`, `spaces_share_*`
  - Saved flows: `flows_save`, `flows_run`, `flows_share`, `flows_wait`
  - Brand kits: `brand_kit_create`, `brand_kit_add_rule`, `brand_kit_add_asset`, `brand_kit_scrape_url`, `brand_kit_create_template`
  - Asset management: `creations_lineage`, `creations_search`, `tags_*`, `folders_*`, `naming_conventions`, `projects_naming`, `projects_metadata_export`, `projects_download_zip`, `creations_deliver`
  - Cost preview: `simulate_cost`, `simulate_flows`, `simulate_spaces`
  - Image ops: `images_relight`, `images_remove_background`, `images_replace_background`, `images_expand`, `images_upscale`, `images_retouch`
  - Layout and video: `design_auto_resize`, `video_generate`, `video_upscale`, `video_color_grade`, `video_concatenate`
  - Audio: `audio_tts`, `audio_music_generate`, `audio_sfx_generate`
  
  — [Observed: Magnific MCP tool list, 2026-11-08]

**Krea Nodes**
- Krea's docs describe a visual builder that chains image, video and audio models on an infinite canvas, and workflows can be turned into shareable "Apps" (docs updated 2026-04-13). — [Krea docs: Nodes](https://www.krea.ai/docs/user-guide/features/nodes)
- Prompt-to-Workflow generates a full node graph from a text description. A Krea Node Agent was announced on 2026-03-18, and the Krea 2 image model shipped on 2026-05-12. — [Krea blog: prompt to workflow](https://www.krea.ai/index/prompt-to-workflow); [Krea release notes](https://www.krea.ai/release-notes)
- The docs say available models rotate quarterly. — [Krea docs: Nodes](https://www.krea.ai/docs/user-guide/features/nodes)
- Krea's site navigation lists "API" and "MCP" entries. I did not verify their scope. — [Krea app page](https://www.krea.ai/apps/camera-motion)

**ComfyUI / Comfy Cloud**
- Official pricing: Standard $20/month ($16/month billed yearly), Pro $100/month, Team $700/month (147,700 monthly credits; $7,560/year billed yearly). — [Comfy Cloud pricing](https://comfy.org/cloud/pricing); [Comfy pricing](https://www.comfy.org/pricing)
- The Team plan has a shared credit pool and role-based permissions. Shared workflows, assets and projects are listed as "coming soon". Spending caps, per-project budgets and self-serve teams over 50 seats are listed as in development. — [Comfy Cloud pricing (zh-CN)](https://comfy.org/zh-CN/cloud/pricing/)
- Comfy supports partner/API nodes for closed models such as Runway. — [Comfy: Runway supported models](https://comfy.org/p/supported-models/runway.md)
- Comfy itself published a 2026 comparison of "8 best AI creative workflow platforms". It is vendor-authored. — [Comfy blog](https://blog.comfy.org/p/the-8-best-ai-creative-workflow-platforms)
- Third-party hosts (ComfyDeploy, Floyo, RunFlow) sell team-hosted ComfyUI as an alternative. — [ComfyDeploy pricing](https://comfydeploy.com/pricing); [Floyo vs Comfy Cloud](https://floyo.ai/pages/floyo-vs-comfy-cloud-which-comfyui-platform-should-your-team-use--Jp2dwexUqQbR)

**Runway Workflows**
- Launched in October 2025 with Input nodes (text and media), Media model nodes (image and video) and LLM nodes (prompt refinement and automation). — [AlternativeTo, Oct 2025](https://alternativeto.net/news/2025/10/runway-launches-node-based-workflows-for-building-custom-ai-creative-pipelines); [Runway Workflows](https://runwayml.com/workflows)
- Recipients need a Runway account to view a shared Workflow, and only input assets can be shared by link. — [Runway help center](https://help.runwayml.com/hc/en-us/articles/45763528999699)
- Runway Agent can create, modify and run node-based workflows from natural language, and the graph stays visual and editable. — [Digg/AI summary](https://digg.com/ai/epc6m2rq); [Remio commentary](https://www.remio.ai/post/runway-agent-turns-natural-language-into-editable-workflows-but-control-is-the-r)
- **Unverified (third-party):** App Studio launched in late October 2026; building and running apps consumes credits, and free users can only run built-in or shared apps. — [Wireflow (competitor)](https://www.wireflow.ai/blog/runway-app-studio-alternative)
- **Secondary changelog (Aug 2026):** compositing nodes, Ruby color grading, Seedance 2.5 at 1080p, partner models, project comments, ProRes/PNG-sequence export. — [Yespress Runway page](https://yespress.io/products/runway.md)

**Invoke**
- Adobe announced a deal involving Invoke in October 2025, alongside Adobe AI Foundry. Accounts conflict: one says Adobe acquired Invoke, another says only select team members joined and Adobe did not acquire the open-source project. — [The Letter Two, 2025-10-20](https://thelettertwo.com/2025/10/20/adobe-ai-foundry-custom-generative-models/); [Softuts via HN reader](https://hn.jakechampion.name/reader/https://softuts.com/invokeai-commercial-platform-shuts-down-open-source-project-continues)
- Invoke's hosted commercial platform shut down. The open-source Community Edition continues under volunteers (a May 2026 community post on the 6.13 release). — [Softuts via HN reader](https://hn.jakechampion.name/reader/https://softuts.com/invokeai-commercial-platform-shuts-down-open-source-project-continues); [Reddit snapshot, 2026-05-29](https://reddit.sentinel-team.org/posts/1tp7e6w/snapshots/2026-05-29T00%3A32%3A10.962559Z)

**Adjacent consolidation**
- Adobe acquired Topaz Labs, the image and video enhancement maker, on 2026-06-25. — [TechCrunch](https://techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/)

**Agency adoption / consistency practice (mostly vendor-reported)**
- Agency AI initiatives most often break on brand coherence across a roughly 50-asset campaign. The recommended fix is modular pipelines with generation, refinement and governance as separate stages. — [Laffaz](https://laffaz.com/operationalizing-visual-consistency-multi-model-agency-workflows/)
- One described studio pattern: per-client brand kits feed batch variants, and a human QA gate sits before anything reaches client accounts. The requirement is one actor and one brand identity per client across hundreds of variants. — [Playcut playbook (vendor)](https://playcut.ai/blog/ai-ad-creative-for-agencies/)
- One vendor case study reports a social agency testing 50% more variants per month with AI agents and a 15% CTR lift. Ads below an exposure minimum are marked "not yet judgeable". Creative direction and sign-off stay human. — [Mindra (vendor)](https://mindra.co/case-studies/creative-testing-agency-ad-variations-ai-agents)
- Admiral Media says gains come mostly from the larger testing surface that AI production makes possible. This is agency marketing. — [Admiral Media](https://admiral.media/ai-generated-ad-creative-results/)

### Inferences
- **Role split:** Canvases are best for designing and showing a pipeline (exploration, client review, onboarding a junior). Coding agents are best for running it at volume. The 2026 bridge is "publish the graph as a tool or flow, then call it through MCP": Weave published tools via `weave_run_tool`, Magnific `flows_run`/`spaces_run`. A small agency does not have to choose one or the other.
- **Fit for the stated stack** (Claude Code + Higgsfield + Magnific + Figma + Drive + Remotion): Magnific Spaces/Flows and Figma Weave are the canvases worth adopting, because both are already reachable from Claude Code. Flora is strong for team ideation and has big-brand logos, but I found no evidence of agent/MCP access, so it would be an island. ComfyUI only makes sense if the agency needs open-weight control (LoRA, ControlNet, local) and has someone technical. Comfy Cloud Team at $700/month is expensive for 1–5 people, and its sharing is unfinished.
- **Model churn:** Models rotate often (Krea says quarterly). Pipelines should reference model IDs and versions explicitly and log them, rather than relying on a canvas's default model.
- **Invoke:** Avoid it as a production dependency for a commercial agency in 2026. It has no commercial backer.

### Gaps
- Official Figma Weave plan prices and credit allowances were not visible on the fetched page. The $19–$48 figure is third-party.
- I found no official confirmation of whether Freepik Spaces is now branded "Magnific", or of the public REST API scope for Spaces. Only the MCP tool surface was observed.
- Krea's API/MCP scope, team plan features and price were not verified.
- Runway App Studio's launch date and terms were not confirmed from Runway itself.
- I found no independent (non-vendor) data on agency adoption rates by tool.

---

## 2. Integration with design tools: Figma, Adobe, Canva/Affinity, CapCut

### Takeaway
Figma has become the most agent-friendly design tool. Its MCP server reads and writes design files, generates images into frames, exports video, and since August–October 2026 runs Weave tools and models. Adobe's strength is partner models inside Boards and Photoshop (governed as "for ideation"). It has little agent or automation surface for a small team, and partner models are not in Premiere. Canva and Affinity are moving toward agentic features, but I found no public ad-automation API. CapCut carries ByteDance regulatory risk.

### Cited Findings

**Figma MCP**
- The Figma MCP server has a native `generate_image` tool. It creates an image and places it in a file: omit `nodeId` for a new image-filled frame, or pass one to replace an existing fill without resizing. It bills Figma AI credits, and the cost depends on the model. — [Figma developer docs: tools and prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/); [Figma MCP FAQ](https://help.figma.com/hc/en-us/articles/39252411778583-Figma-MCP-server-FAQs)
- Weave tools are exposed through `weave_list_tools`, `weave_get_tool_inputs`, `weave_run_tool` and `weave_run_model`. They need a paid standalone Weave account and bill Weave credits, not Figma AI credits. Agents can only see Weave tools that are published and shared with the user; private tools are invisible. — [CreatorsToolbox](https://creatorstoolbox.com/blog/figma-access-video-and-image-models-from-figma-weave-via-the-figma-mcp); [Mazette](https://www.mazette.co/en/blog/figma-weave-mcp-generate-images-and-videos-from-your-ai-agent)
- Since 2026-08-11 Weave tools can be run from external clients (ChatGPT, Claude, Cursor). On 2026-10-26 Figma opened every Weave image and video model (including Seedance, Kling and Nano Banana) through the MCP. — [Mazette](https://www.mazette.co/en/blog/figma-mcp-connects-to-weave-your-custom-ai-tools-land-in-chatgpt-and-claude); [Art Direction Daily, 2026-08-11](https://artdirectiondaily.com/issues/2026-08-11-figma-weave-runs-from-chat.html); [CreatorsToolbox](https://creatorstoolbox.com/blog/figma-access-video-and-image-models-from-figma-weave-via-the-figma-mcp)
- **[Observed]** Beyond Weave, the connected Figma MCP exposes `use_figma` (Plugin API JS execution), `get_variable_defs`, `search_design_system`, `get_libraries`, `upload_assets`, `download_assets`, `export_video`, `get_motion_context`, `create_shader`, `create_generative_plugin` and Code Connect tools. — [Observed: Figma MCP tool list, 2026-11-08]

**Adobe**
- Partner models in Firefly Boards (Adobe help, updated 2026-09-10) include Gemini 3/3.1, Imagen 3/4, Ideogram 3.0 and Runway Gen-4 Image, and Adobe's product page names GPT Image. A third-party list as of 2026-10-12 also cites FLUX, Kling, Luma Ray 3 and Topaz in Boards. — [Adobe help: Boards partner models](https://helpx.adobe.com/firefly/web/create-mood-boards/firefly-boards/use-non-adobe-models-to-generate-images.html); [Adobe Firefly partner models](https://www.adobe.com/products/firefly/partner-models.html); [Xainflow (third-party)](https://www.xainflow.com/blog/adobe-firefly-ai-natives-third-party-models-creative-cloud)
- Photoshop Generative Fill offers FLUX.1 Kontext (and Gemini 2.5 "Nano Banana" per Adobe Design). Generative Upscale includes Topaz Gigapixel and Bloom, and Topaz powers AI Sharpen and Denoise. — [Adobe help: partner models in products](https://helpx.adobe.com/creative-cloud/apps/generative-ai/non-adobe-models-in-adobe-products.html); [Adobe Design on Medium](https://medium.com/@Adobe_Design/behind-the-design-partner-models-in-adobe-photoshop-91b54e1aaca9)
- Adobe's partner-model product list covers Boards, the Firefly video editor, Express, Illustrator and Photoshop, but **not Premiere**. Adobe frames Firefly models as for production and partner models as for ideation, and enterprises can toggle partner models off organization-wide. — [Adobe help: partner models in products](https://helpx.adobe.com/creative-cloud/apps/generative-ai/non-adobe-models-in-adobe-products.html)
- Adobe's 2026 messaging and NAB 2026 coverage describe a Firefly-to-Premiere path (location scout to Premiere timeline). A one-click Boards-to-Premiere handoff (January 2026) was reported in search snippets but not verified on the page. — [CineD, NAB 2026](https://www.cined.com/adobe-firefly-at-nab-2026-from-location-scout-to-premiere-timeline-with-ai/); [Creative Bloq](https://www.creativebloq.com/tech/from-firefly-to-graph-how-adobe-thinks-creatives-will-use-ai-in-2026)
- Older (2025-09) context: Adobe expanded Photoshop and Boards with third-party models in September 2025. — [SiliconANGLE, 2025-09-25](https://siliconangle.com/2025/09/25/adobe-expands-photoshop-firefly-boards-new-generative-ai-tools-third-party-models/)

**Canva / Affinity**
- Canva AI 2.0 entered research preview in April 2026 with agentic tools that can schedule and perform recurring design tasks in the background. — [eesel (third-party)](https://www.eesel.ai/blog/canva-ai-pricing); [Wikipedia: Canva](https://en.wikipedia.org/wiki/Canva)
- Affinity's core suite is free. Premium AI needs Canva Pro ($18/month) or Canva Business ($25/person/month). Sources disagree on which on-device AI free users get. — [ThatPainter](https://thatpainter.com/what-has-canva-done-to-the-affinity-apps-the-complete-2026-answer/); [MacMyths](https://macmyths.com/what-has-canva-done-to-the-affinity-apps-the-2026-answer/)
- Gemini added Adobe, Canva and CapCut as native tools. Canva's connector launched on May 19 with limited availability, and commercial terms were not disclosed. — [AI Weekly](https://aiweekly.co/alerts/gemini-adds-adobe-canva-capcut-as-native-tools)

**CapCut**
- CapCut's ByteDance ownership creates US regulatory friction (pending TikTok/ByteDance legislation as of mid-2026). — [AI Weekly](https://aiweekly.co/alerts/gemini-adds-adobe-canva-capcut-as-native-tools)
- A 2026 free-tools guide says CapCut's AI features are paid and does not clarify whether paid-ad use is allowed. — [AdMake (third-party)](https://admakeai.com/blog/best-free-ai-ad-generators-2026)

### Inferences
- **Brand source of truth:** For a Claude Code agency, Figma should be the brand source of truth: variables, type styles, logo components and layout templates for landing-page and static ads. The agent can read tokens with `get_variable_defs` and mirror them into Remotion brand tokens, so static and motion outputs share one definition.
- **Where Adobe fits:** Adobe is useful for one-off hero retouching (Photoshop Generative Fill with partner models), and Topaz is now in-house for upscaling. It is a manual island in an agent-driven pipeline. I found no evidence of an Adobe MCP or batch API suited to small teams in this research window.
- **Canva and CapCut:** These are more useful as client-handoff formats (letting a local business owner edit a template) than as pipeline stages.

### Gaps
- Premiere Generative Extend and After Effects AI features in 2026: not researched in depth. I found no 2026 source on Generative Extend's current status.
- Adobe Firefly Services / API availability and pricing for small teams: not covered.
- Canva's Connect API and Autofill for bulk ad variants in 2026: not verified.
- I found no reliable source on CapCut commercial ad licensing or a CapCut API.

---

## 3. Automation and agent-driven production: MCP servers, batch APIs, versioning, DAM/naming, programmatic video

### Takeaway
By late 2026 most generative vendors had moved from local, community MCP servers to **hosted, OAuth-based official MCP endpoints**: ElevenLabs, Replicate, fal, Figma, and Higgsfield/Magnific as connected here. That makes Claude Code a viable orchestrator. For video, there are now two agent-ready code renderers. Remotion (React) has had official Agent Skills since January 2026. HeyGen's **HyperFrames** (HTML to MP4, Apache 2.0) is built explicitly for agents. Reproducibility still has to be built by the agency: a manifest per asset recording prompt, model and version, seed, references and lineage, with git for recipes and a DAM or Drive for binaries.

### Cited Findings

**MCP servers**
- **ElevenLabs:** The local `elevenlabs-mcp` repo is deprecated and archived (last release 2026-08-04, archived 2026-08-20) in favor of a hosted MCP at `api.elevenlabs.io/v1/mcp` with OAuth sign-in and no local install. One listing (checked 2026-10-28) reports separate EU, India and Singapore data-residency endpoints. — [GitHub: elevenlabs-mcp](https://github.com/elevenlabs/elevenlabs-mcp); [eSEOspace](https://eseospace.com/blog/elevenlabs-mcp-server/)
- **Replicate:** Official MCP docs recommend the hosted remote server (setup at mcp.replicate.com). The local option is the `replicate-mcp` npm package. — [Replicate docs: MCP](https://replicate.com/docs/reference/mcp); [Replicate blog: remote MCP server](https://replicate.com/blog/remote-mcp-server)
- **fal:** fal's docs give an MCP server URL of `https://mcp.fal.ai/mcp-relay`, with one-click setup in Replit. — [fal docs: MCP / Replit](https://fal.ai/docs/documentation/setting-up/mcp/replit.md)
- **Runway:** A Runway MCP server is described as official by third parties, and one source says Runway also archived a first-generation MCP server in August–September 2026. **Not verified** against Runway docs. — [Wireflow (competitor)](https://www.wireflow.ai/blog/best-runway-mcp-tools-in-2026); [ScreenWeaver](https://www.screenweaver.ai/blog/mcp-servers-for-video-production)
- **Figma:** see Section 2 (`generate_image`, `weave_run_tool`, `weave_run_model`, `export_video`).
- **[Observed]** The Higgsfield MCP exposes:
  - Batch generation and job control: `generate_image_batch`, `generate_video_batch`, `generate_audio_batch`, `jobs_wait`
  - Brand and product registers: `ads_studio_create_brand`, `ads_studio_add_product`, `ads_studio_generate`, `ads_studio_quote` (an ads pipeline with brand and product records plus a cost quote)
  - Consistency references: `manage_reference_elements`, `show_characters`
  - Image and video ops: `reframe`, `remove_background`, `upscale_image`, `upscale_video`, `outpaint_image`, `motion_control`
  - Analysis and scoring: `video_analysis_create`, `virality_predictor`
  - Voice: `create_voice`
  - Publishing: TikTok publishing tools
  - Workflow recipes: `get_workflow_instructions` (e.g. "ad-multiplier")
  
  — [Observed: Higgsfield MCP tool list, 2026-11-08]
- **[Observed]** The Magnific MCP exposes, alongside generation, asset-ops tooling usable as a lightweight DAM layer: `creations_lineage` (parent/child provenance), `naming_conventions`/`projects_naming`, `tags_*`, `folders_*`, `projects_metadata_export`, `projects_download_zip`, `creations_deliver`, plus `simulate_cost` for pre-flight budgeting. — [Observed: Magnific MCP tool list, 2026-11-08]
- **[Observed]** The Google Drive MCP exposes `create_file`, `search_files`, `copy_file`, `share_file`, `get_file_metadata` and comment tools, so Drive is usable as delivery storage and a client-review surface from Claude Code. — [Observed: Google Drive MCP tool list, 2026-11-08]

**Programmatic video with coding agents**
- Remotion shipped official Agent Skills in January 2026 (`npx skills add remotion-dev/skills`) and demoed an animation made purely by prompting Claude Code. — [Remotion on X](https://x.com/Remotion/status/2013626968386765291)
- The skill set is about 28 modular rule files that teach agents correct Remotion code. A third-party guide claims 126,000+ installs on skills.sh (unverified). — [AIVidPipeline guide](https://aividpipeline.com/blog/remotion-agent-skills-guide-2026)
- `remotion-ads` is a community Claude Code skill for Instagram Reels (9:16, 1080x1920) and carousel ads (4:5) with ElevenLabs voiceover, animated word-by-word captions, and a URL-to-scenes workflow that builds a scene file from a web page. — [GitHub: Maartenlouis/remotion-ads](https://github.com/Maartenlouis/remotion-ads)
- A skills directory flags some community Remotion skills as "CAUTION". Review third-party skills before installing. — [AgentSkillsHub](https://agentskillshub.top/best/claude-video-skills/)
- Remotion licensing: free for individuals, for-profit organizations with **up to 3 employees**, non-profits and evaluation. Anyone else needs a Company License (prices at remotion.pro/license). — [Remotion LICENSE.md](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md); [Remotion license page](https://www.remotion.dev/license)
- **HyperFrames (HeyGen):** an open-source framework ("Write HTML. Render video. Built for agents.") that renders HTML, CSS, media and animations to MP4 using headless Chrome (Puppeteer) and FFmpeg. Its agent skills cover planning, writing valid HTML, wiring animations, adding media, linting, previewing and rendering, for Claude Code, Cursor, Gemini CLI and Codex. The CLI is non-interactive with fail-fast errors and plain-text output. The README states Apache 2.0 with no per-render fees, while the marketing site says MIT and Apache 2.0, so check LICENSE. Paid hosted cloud rendering exists. — [GitHub: heygen-com/hyperframes](https://github.com/heygen-com/hyperframes); [HyperFrames docs (HeyGen)](https://hyperframes.heygen.com/introduction); [hyperframes.video](https://hyperframes.video/)
- Remotion authors in React components and HyperFrames in plain HTML. — [MindStudio](https://www.mindstudio.ai/blog/what-is-hyperframes-html-video-renderer-ai-agents)
- Remotion composites and templates; it does not generate footage. It suits templated, repeatable ads fed by generated or real b-roll. — [o-mega](https://o-mega.ai/articles/remotion-video-generation-with-ai-agents-claude-code-2026)

**Versioning and constraint systems**
- One case study credits "the constraint system, not the generator" for holding variation and consistency together. The guidance is to encode brand guardrails up front and keep human creative direction at every gate. — [Laffaz](https://laffaz.com/operationalizing-visual-consistency-multi-model-agency-workflows/)
- Spaces List nodes iterate over items, which is native variant fan-out. — [Freepik docs](https://www.freepik.es/ai/docs/nodes-and-connections)

### Inferences
- **Reproducibility contract:** For each generated asset, write a sidecar `asset.json` with the fields below. Recipes (prompt templates, Remotion compositions, brand tokens, variant matrices) live in git, and binaries go to Drive, with Magnific/Higgsfield project storage as working space. Seeds alone are not enough: hosted models get silently updated or rotated. Keep the approved output frame or clip as the canonical reference for downstream steps.
  - `client`, `campaign`, `variant_id`
  - `tool` / MCP server, `model` + version string, `prompt`, `negative_prompt`, `seed`
  - `reference_asset_ids` (brand kit, character/product refs), `parent_asset_id` (lineage), `params` (aspect ratio, duration, motion strength)
  - `cost_estimate` (from `simulate_cost` / `ads_studio_quote`), `created_at`, `approved_by`
- **Naming convention:** `{client}_{campaign}_{format}_{hook}_{offer}_{v##}_{yyyymmdd}`, e.g. `acmeplumb_winter26_9x16_h2-leak_o1-50off_v03_20261108.mp4`. This maps one-to-one to a Google Sheet or CSV variant matrix that drives Remotion props. Magnific's `naming_conventions`/`projects_naming` can enforce it on the generation side.
- **Batch pattern:** Use vendor batch tools for parallel fan-out (Higgsfield `generate_*_batch` + `jobs_wait`; Magnific `flows_run` over a List node). Use Remotion `renderMedia` with a props array, or the CLI with `--props`, for the composite layer. Claude Code owns the loop and the manifest, not the pixels.
- **Remotion or HyperFrames:** For an agency of 1–3 people, Remotion is free and already has mature agent skills. At 4+ employees a Remotion Company License is required, and HyperFrames (Apache 2.0, HTML-native) is a credible zero-license-fee alternative. It is also easier for an agent to author, and it reuses landing-page HTML and CSS directly. That last point is a strong reason to consider it when landing pages and ads share components.
- **Canvas-to-agent handoff:** Prototype a chain in Weave or Spaces with the client or art director, publish or share it as a tool or flow, then call it from Claude Code. This keeps the visual record clients can inspect and still gives programmatic batch control.

### Gaps
- No primary-source confirmation of an official Runway MCP server in Nov 2026.
- The exact toolsets of the hosted ElevenLabs, fal and Replicate MCP servers were not documented in the sources reached.
- I found no independent practitioner write-ups (newsletters or YouTube) with measured agency throughput for Claude Code + Remotion pipelines. Available sources are vendor or tutorial blogs.
- DAM products (Air, Frame.io, Bynder) and their AI-provenance and C2PA features in 2026 were not researched.
- HyperFrames' release date and maturity (stars, version) were not captured.
- Motion Canvas's 2026 status was not researched.

---

## 4. Audio layer for ads: key prices and commercial terms (one line each)

### Takeaway
For paid social ads for local businesses: ElevenLabs (voice, music and SFX on paid self-serve plans, which exclude film, TV, radio and studio games) and a stock library business tier (Epidemic Sound Business or Artlist's business tier) are the safe defaults. Suno is usable on Pro/Premier, but its licensed-model transition is ongoing. Udio is not suitable for commercial export in 2026.

### Cited Findings
- **ElevenLabs Eleven Music:** self-serve plans allow online and offline commercial use **except film, TV, radio and Studio Games**; Enterprise covers all commercial use; breaching the plan's Music Commercial Rights table is a breach of contract. — [ElevenLabs: Eleven Music model-specific terms](https://elevenlabs.io/eleven-music-model-specific-terms)
- **ElevenLabs plan entry point:** one blog says commercial use starts at the Starter tier ($6/month) and free-tier tracks are not cleared (unverified on the pricing page). — [Coverr blog](https://coverr.co/blog/eleven-music-elevenlabs-ai-music-model-2026)
- **ElevenLabs launch claims conflict:** launch coverage described broader clearance ("films, TV, ads..."). The plan-specific terms above are the authoritative guide. — [Ground News](https://ground.news/article/elevenlabs-launches-an-ai-music-generator-which-it-claims-is-cleared-for-commercial-use); [Implicator](https://www.implicator.ai/elevenlabs-sidesteps-lawsuits-with-rare-licensing-deal-in-ai-music-launch.md)
- **ElevenLabs Music Marketplace (March 2026):** creators sell licenses in three tiers (Social Media, Paid Marketing, Offline), and liability reportedly sits with the creator. — [AIMusicPreneur](https://www.aimusicpreneur.com/ai-tools-news/elevenlabs-music-marketplace-payouts-march-2026/)
- **Suno:** Warner settled with Suno in November 2025. Licensed models are planned for 2026, downloads become paid-only with monthly caps, and songs made on Pro/Premier carry commercial-use rights. The UMG suit appears unresolved and Sony has settled with neither. — [Billboard](https://www.billboard.com/pro/what-suno-udio-licensing-deals-mean-future-ai-music/); [Pract.is](https://pract.is/blog/ai-music-2026-suno-udio-copyright-licensing-guide); [Wikipedia: Suno](https://en.wikipedia.org/wiki/Suno_(platform))
- **Udio:** UMG (October 2025) and Warner (November 2025) settled, and Udio is moving to a licensed "walled garden" where creations cannot leave the platform. Commercial distribution is inadvisable during the transition, and Sony sued Udio again in July 2026. — [Music Business Worldwide](https://www.musicbusinessworldwide.com/warner-music-settles-udio-lawsuit-strikes-licensing-deal-with-ai-platform/); [Dynamoi](https://dynamoi.com/learn/ai-music-distribution/suno-vs-udio-for-commercial-distribution); [AI Vortex](https://www.aivortex.io/legal/ai-case-law/suno-udio-music-ai/)
- **Epidemic Sound:** the Creator plan does **not** cover digital ads. Business covers social campaigns and digital ads with synced sound plus podcasts, but not out-of-home, livestream or radio. Third-party pricing for Business: about $74.99/month month-to-month or about $29.99/month annual (unverified). — [Epidemic Sound: Business plan](https://www.epidemicsound.com/our-plans/business-plan/); [Epidemic Sound: how we compare](https://www.epidemicsound.com/how-it-works/how-we-compare/); [Lesfm (third-party), 2026-03-20](https://lesfm.net/blog/epidemic-sound-pricing)
- **Artlist:** client work and paid ads need Pro/Max-type tiers, and plan names changed to Music & SFX, Max, Max Business and Custom Business. Price points vary by source (for example $199/year). — [CreatorStackClub](https://www.creatorstackclub.com/software/artlist); [Artyfile comparison 2026](https://www.artyfile.com/blog/artlist-vs-epidemic-sound-vs-artyfile-comparison-2026)
- **[Observed]** The Magnific and Higgsfield MCPs also expose TTS, voice cloning and changing, music and SFX generation (`audio_tts`, `audio_music_generate`, `audio_sfx_generate`, `create_voice`, `generate_audio`). — [Observed: MCP tool lists, 2026-11-08]

### Inferences
- **Default audio stack for local-service ads:**
  - ElevenLabs hosted MCP for voiceover, using a consistent brand voice per client: either a library voice saved by voice ID, or a cloned voice with documented consent.
  - Music and SFX from either ElevenLabs on a paid plan or a stock business library.
  - If a client will also run the spot on **local radio or TV**, ElevenLabs self-serve music is excluded, so use a stock library tier that covers broadcast or an Enterprise plan.
- **What to log:** voice ID, music track ID or generation ID, and the license tier in the asset manifest, so rights can be shown per deliverable.

### Gaps
- Current ElevenLabs plan prices and the exact Music Commercial Rights table were not opened on elevenlabs.io/pricing.
- Suno's licensed-model launch status as of November 2026 is unconfirmed; one source says it was still "later in the year" as of March 2026.
- AI-generated voices and political or claims disclosure rules for ads (Meta and Google policies) were not researched.

---

## 5. Recommended pipeline architectures for a 1–5 person agency (ads + landing-page visuals for local service businesses)

### Takeaway
Use a "real-first, generate-around" architecture.
- **Control plane:** Claude Code.
- **Brand source of truth:** Figma (tokens and templates) mirrored into Remotion or HyperFrames.
- **Pixel ops:** Magnific/Higgsfield MCP calls for cleanup, relight, cutout, image-to-video and upscale.
- **Composite layer:** a code renderer for live type, offers, captions and formats.
- **Delivery and review:** Drive.

Every asset carries a manifest. Canvases (Weave or Spaces) are where new chains are designed and shown to clients. Once approved, a chain is frozen as a published tool or flow and run in batch from the agent. This section is mainly synthesis built on the cited capabilities above.

### Cited Findings (building blocks the architectures rely on)
- Modular stages (generation, refinement, governance) and per-client brand kits with a human QA gate are the documented agency practice for consistency. — [Laffaz](https://laffaz.com/operationalizing-visual-consistency-multi-model-agency-workflows/); [Playcut (vendor)](https://playcut.ai/blog/ai-ad-creative-for-agencies/)
- Weave workflows and tools can be published and shared and then run through the Figma MCP. Only published or shared tools are agent-visible. — [Mazette](https://www.mazette.co/en/blog/figma-weave-mcp-generate-images-and-videos-from-your-ai-agent); [Figma Weave page](https://www.figma.com/solutions/figma-ai-tool-weave/)
- Spaces List nodes fan out over items. — [Freepik docs](https://www.freepik.es/ai/docs/nodes-and-connections)
- **[Observed]** The Magnific MCP has `images_relight`, `images_retouch`, `images_remove_background`, `images_replace_background`, `images_expand`, `images_upscale`, `design_auto_resize`, `video_generate`, `video_upscale`, `video_color_grade`, `brand_kit_*`, `flows_run` and `creations_lineage`. The Higgsfield MCP has `generate_video_batch`, `reframe`, `upscale_video`, `manage_reference_elements`, `ads_studio_*` and `virality_predictor`. — [Observed: MCP tool lists, 2026-11-08]
- Remotion Agent Skills and a community ads skill exist for 9:16 Reels and 4:5 carousels with VO and word captions. — [Remotion on X](https://x.com/Remotion/status/2013626968386765291); [GitHub: remotion-ads](https://github.com/Maartenlouis/remotion-ads)
- HyperFrames renders HTML/CSS to MP4 with an agent-first CLI. — [GitHub: hyperframes](https://github.com/heygen-com/hyperframes)
- Flora Actions show the expected built-in ops (stitch, frame extraction, grade, Ken Burns, aspect change) if an agency prefers to do assembly in a canvas instead. — [IT Brief](https://itbrief.news/story/flora-launches-on-canvas-tools-dollar-usage-pools)

### Inferences: concrete step chains

**A. Hero photo to landing-page and static-ad set (per client, reusable)**
1. *Intake:* the client's real photos (team, van, job sites) are uploaded to Drive at `/{client}/00_raw/`. Claude Code indexes them via the Drive MCP and writes `intake.json`.
2. *Select and brief:* Claude picks candidates (sharpness, faces, brand colors visible) and the human approves 3–5 picks. This gate stays human.
3. *Clean:* Magnific `images_retouch` (remove clutter, fix skin and uniform), then `images_relight` to a consistent brand "light recipe", stored as a preset name in the manifest.
4. *Cutout or extend:* `images_remove_background` for subject cutouts, or `images_expand` / `images_replace_background` for wide hero crops.
5. *Upscale:* `images_upscale` to 2x–4x for retina hero use.
6. *Layout:* the Figma MCP applies the brand template, with type, CTA and offer as live text bound to Figma variables. `design_auto_resize` (Magnific) or Figma frames produce 1:1, 4:5, 9:16, 1.91:1 and the landing hero (16:9 or 21:9).
7. *Export and QA:* check text-safe zones, contrast (WCAG AA for landing text), logo clear-space, and claims (license number, prices). Save to `/{client}/{campaign}/03_final/` using the naming convention.

**B. Video ad (15–30s) with generated b-roll and live type**
1. *Plate:* the cleaned hero still from chain A, Steps 3–5.
2. *Image-to-video b-roll:* Higgsfield `generate_video_batch` or Magnific `video_generate`, 3–4 seeds per shot, 5s clips, low motion (push-in, parallax, steam or water), on a consistent model and version. Log seeds and model versions.
3. *Select:* human picks one take per shot. Run `video_upscale`, then optional `video_color_grade` to a client LUT.
4. *Audio:* ElevenLabs VO from a script (brand voice ID), music from a stock business library or ElevenLabs Music, and SFX.
5. *Composite in code:* Remotion (or HyperFrames) composition with brand tokens synced from Figma variables. The hook, offer, phone number, service area and CTA are **live text props**, never baked into generated pixels. Add word-by-word captions and an end card with logo and QR code.
6. *Variant matrix:* a Google Sheet or CSV with rows = hook × offer × format (9:16, 4:5, 1:1, 16:9). Claude Code renders all rows via props.
7. *QA:*
   - automated frame grabs at key timestamps, checked by an agent for safe zones, legibility, typos and wrong phone numbers
   - loudness check (about -14 LUFS for social)
   - caption sync
   - human sign-off
   - optional `virality_predictor` as a weak signal only
8. *Deliver:* to Drive with manifests. Upload to ad platforms happens outside the pipeline (or via TikTok publishing tools when the client is on TikTok).

**C. "Same face, many ads" consistency (owner or technician as spokesperson)**
- Store approved reference images as reference elements (Higgsfield `manage_reference_elements`) and in a Magnific brand kit (`brand_kit_add_asset`, `brand_kit_add_rule`). Every generation call must pass those reference IDs, and the manifest records them.
- Prefer real footage of the person for talking segments. Use generated b-roll only for environment and action shots, which lowers both likeness and consistency risk.

**D. Canvas-designed chain, agent-executed**
- Prototype the chain (e.g. relight, cutout, image-to-video, upscale) in Figma Weave or Magnific Spaces with the art director. Publish it as a Weave tool or save it as a Magnific Flow.
- Claude Code then calls `weave_run_tool` or `flows_run` per input row and collects outputs into Remotion. The canvas remains the visual documentation clients can open. Run `simulate_cost` / `ads_studio_quote` before each batch to cap spend.

**E. Repo layout that makes it repeatable (git + Drive)**
- `/brands/{client}/tokens.json`: colors, type, logo paths, voice ID, light recipe, LUT
- `/recipes/*.yaml`: named step chains with pinned model IDs and params
- `/campaigns/{client}/{campaign}/matrix.csv`: the variant matrix
- `/studio/`: Remotion compositions
- `/manifests/`: one JSON per asset
- Drive holds the binaries
- Claude Code skills and subagents: one for intake, one for generation, one for compositing and rendering, and a QA reviewer subagent

**Cost and effort heuristics (inference, not sourced)**
- Generate **less** (b-roll and backgrounds only) and composite **more** (type, offers, logos, prices in code). This gives on-brand accuracy, cheap variant counts, and no garbled text.
- Freeze model versions per campaign. Re-approve when a vendor rotates models.
- Keep at least two human gates: pick selection and final sign-off.

### Gaps
- No independent, quantified case study was found of a 1–5 person agency running this exact Claude Code + MCP + Remotion stack. The chains above are synthesized from documented tool capabilities and are not reported practice.
- Ad-platform-specific specs (Meta, TikTok, Google safe zones and lengths) and AI-disclosure labeling requirements are outside this scope and were not researched here.
- Real per-asset cost benchmarks were not gathered; credit pricing is covered by another researcher.
