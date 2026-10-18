import { promises as fs } from 'fs'
import path from 'path'

// Each article is an .mdx file in this folder. The file name is the URL slug.
const articlesDirectory = path.join(
  process.cwd(),
  'app',
  'thoughts',
  '_articles'
)

export type Article = {
  slug: string
  title: string
  date: string
  description?: string
}

export async function getArticleSlugs() {
  const files = await fs.readdir(articlesDirectory)

  return files
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
}

// Newest first, sorted by the `date` in each article's metadata (YYYY.MM.DD).
export async function getArticles(): Promise<Article[]> {
  const slugs = await getArticleSlugs()

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(
        '../app/thoughts/_articles/' + `${slug}.mdx`
      )

      if (!metadata) throw new Error('Missing `metadata` in ' + slug + '.mdx')

      return {
        slug,
        title: metadata.title,
        date: metadata.date || '-',
        description: metadata.description,
        sort: Number(metadata.date?.replaceAll('.', '') || 0),
      }
    })
  )

  return articles
    .sort((a, b) => b.sort - a.sort)
    .map(({ sort, ...article }) => article)
}
