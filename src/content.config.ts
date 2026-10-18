import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Blog posts: one Markdown file per post in src/content/thoughts.
// The file name is the URL: my-post.md is published at /thoughts/my-post.
const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
})

// Nice things: one Markdown file per category in src/content/nice-things,
// with its items listed in the frontmatter. watches.md is /nice-things/watches.
const niceThings = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/nice-things' }),
  schema: z.object({
    title: z.string(),
    items: z
      .array(
        z.object({
          name: z.string(),
          link: z.url().optional(),
          note: z.string().optional(),
        })
      )
      .default([]),
  }),
})

export const collections = { thoughts, niceThings }
