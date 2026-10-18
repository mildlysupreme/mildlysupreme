# Mildlysupreme

Source of [mildlysupreme.com](https://www.mildlysupreme.com), the personal site of Tim de Vries. A static [Astro](https://astro.build) site: plain Markdown and one stylesheet, no JavaScript sent to visitors. Pushing to `main` deploys to production on Vercel.

## Writing a post

Add a Markdown file to `src/content/thoughts/`. The file name becomes the URL, so `my-post.md` is published at `/thoughts/my-post`.

```md
---
title: My post
date: 2026-10-18
description: One or two sentences for search results and link previews.
---

Text goes here. The title is shown above it automatically.
```

- **Images:** put them in `src/content/thoughts/images/` and link them as `![Alt text](./images/my-image.png)`. They're resized and compressed at build time.
- **Drafts:** add `draft: true` to keep a post off the live site. It still shows when running locally.

New posts appear on `/thoughts` (newest first), in `/sitemap.xml` and in the RSS feed at `/rss.xml` automatically.

## Editing pages

About is `src/pages/index.md` and Projects is `src/pages/projects.md`, both plain Markdown. Styles live in `src/styles/global.css`, and the page frame with the nav and the link-preview tags is `src/layouts/Base.astro`.

## Running locally

```bash
npx pnpm@9 install
npx pnpm@9 dev
```
