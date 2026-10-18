# Mildlysupreme

Source of [mildlysupreme.com](https://www.mildlysupreme.com), the personal site of Tim de Vries. Built on the [shud.in](https://github.com/shuding/shud.in) template by Shu Ding.

- Next.js v15
- MDX Rust & Shiki inside React Server Components
- Tailwind CSS v4
- `<ViewTransition/>` from React Experimental

## Writing an article

Add an `.mdx` file to `app/thoughts/_articles/`. The file name becomes the URL, so `my-article.mdx` is published at `/thoughts/my-article`. Start the file with:

```mdx
export const metadata = {
  title: 'My article',
  date: '2026.10.18',
  description: 'One or two sentences for search results and link previews.',
}

# My article

Text goes here.
```

Images go in `assets/images/` and are referenced by file name: `![Alt text](my-image.png)`.

The article shows up on `/thoughts` (newest first) and in `/sitemap.xml` automatically. Pushing to `main` deploys to production on Vercel.

## Running locally

```bash
npx pnpm@9 install
npx pnpm@9 dev
```
