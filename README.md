# HN.tv

A YouTube front end without YouTube's recommendations: only the **6,454 videos Hacker News commenters
keep recommending** (2007–2026), with the HN comments that recommended them.

- **No login.** Likes, watch later, history and settings live in your browser's `localStorage`
  (export and import them from Settings).
- **Personal feed.** The ranking is HN's own signal (how many separate months people recommended the
  video), nudged toward topics and neighbours of what you like, away from what you've watched,
  with seeded randomness. **Shuffle** gives a new order.
- **Deep dives** (talks, lectures, documentaries, podcasts), **150 topics** in 16 areas,
  instant client-side **search**, and **Up next** made from content similarity plus "recommended by the
  same HN people".
- Thumbnails are an automatic frame from the middle of the video, not the uploader's thumbnail.
- Fully static: plain HTML, CSS and JS with no build step, so it can be hosted on GitHub Pages.

## Run locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publish on GitHub Pages

Repo **Settings → Pages → Build and deployment → Deploy from a branch**, pick the branch and `/ (root)`.

## Rebuild the data

```sh
curl -LO https://hackertube.org/download/hackertube-data.zip && unzip hackertube-data.zip
pip install numpy
python3 scripts/build_data.py hackertube-data
```

This writes `data/videos.json` (the catalogue and up-next neighbours), `data/taxonomy.json`, and
`data/m/*.json` (up to 8 HN comments per video, sharded by the first character of the video id).

## Credits

Data from [HackerTube](https://hackertube.org) by Andrej Karpathy, derived from the
[open-index/hacker-news](https://huggingface.co/datasets/open-index/hacker-news) archive, under
[ODC-By 1.0](https://opendatacommons.org/licenses/by/1-0/). Hacker News data is provided by Y Combinator,
and comments belong to their authors. Videos, titles and channel names belong to their creators. Not
affiliated with YouTube, Google, Hacker News or Y Combinator.
