import { getCollection } from 'astro:content'

export const siteName = 'Mildlysupreme'
export const author = 'Tim de Vries'
export const siteDescription =
  'Tim de Vries is a product-minded entrepreneur building a collective of AI experts, designers and engineers who help companies ship next-generation products.'

// Published posts, newest first. Drafts only show up in `pnpm dev`.
export async function getPosts() {
  const posts = await getCollection(
    'thoughts',
    ({ data }) => import.meta.env.DEV || !data.draft
  )

  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

// 2026-10-18 -> 2026.10.18
export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '.')
}
