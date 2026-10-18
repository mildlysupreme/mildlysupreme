import type { MetadataRoute } from 'next'

import { getArticles } from '@/lib/articles'
import { siteUrl } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()

  return [
    { url: siteUrl },
    { url: `${siteUrl}/thoughts` },
    { url: `${siteUrl}/projects` },
    ...articles.map((article) => ({
      url: `${siteUrl}/thoughts/${article.slug}`,
      lastModified:
        article.date === '-'
          ? undefined
          : new Date(article.date.replaceAll('.', '-')),
    })),
  ]
}
