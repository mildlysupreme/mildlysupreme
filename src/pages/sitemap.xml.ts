import type { APIContext } from 'astro'
import { getPosts } from '../site'

export async function GET({ site }: APIContext) {
  const posts = await getPosts()
  const urls = [
    { path: '/' },
    { path: '/thoughts' },
    { path: '/projects' },
    ...posts.map((post) => ({
      path: `/thoughts/${post.id}`,
      lastmod: post.data.date.toISOString().slice(0, 10),
    })),
  ]

  const body = urls
    .map(({ path, lastmod }: { path: string; lastmod?: string }) => {
      const loc = `<loc>${new URL(path, site).href.replace(/\/$/, '')}</loc>`
      return `<url>${loc}${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
    })
    .join('\n')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  )
}
