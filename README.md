# Mildlysupreme

Source of [mildlysupreme.com](https://www.mildlysupreme.com), the personal site of Tim de Vries. A static [Astro](https://astro.build) site: plain Markdown and one stylesheet. The only JavaScript sent to visitors is the small clock on the homepage. Pushing to `main` deploys to production on Vercel.

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

## Adding nice things

Each category is a file in `src/content/nice-things/`, such as `watches.md`. Add items to its list:

```md
---
title: Watches
items:
  - name: Grand Seiko SBGA211
    description: The Snowflake dial.
    images:
      - src: ./images/sbga211.jpg
        alt: Grand Seiko SBGA211 on a wrist
    credit: Photographer name
    source:
      name: Grand Seiko
      url: https://www.grand-seiko.com
  - name: Another watch
---
```

Only `name` is required. Images go in `src/content/nice-things/images/` and are resized at build time; only use images you have the rights to. The source link and photo credit appear in small italics under the item. Categories are sorted alphabetically on `/nice-things` and show their item count. To add a category, add a file; to remove one, delete it.

## Editing pages

- **Homepage:** `src/pages/index.astro`. The cases, products, clients and contact email it shows live in `src/data/work.ts`, with case images in `src/assets/cases/`.
- **Manifesto:** `src/pages/manifesto.astro`.
- **Look and feel:** `src/styles/global.css`. The top bar and link-preview tags are in `src/layouts/Base.astro`, and `src/components/Row.astro` is the label-left, content-right section used on every page.

## Running locally

```bash
npx pnpm@9 install
npx pnpm@9 dev
```
