import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getPosts, siteDescription, siteName } from '../site'

export async function GET(context: APIContext) {
  const posts = await getPosts()

  return rss({
    title: siteName,
    description: siteDescription,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/thoughts/${post.id}`,
    })),
  })
}
