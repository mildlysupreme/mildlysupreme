import { getArticle, getArticleSlugs } from '@/lib/articles'
import { ogSize, renderOgImage } from '@/lib/og'

export const size = ogSize
export const contentType = 'image/png'
export const alt = 'Article by Tim de Vries'

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()

  return slugs.map((slug) => ({ slug }))
}

export default async function Image(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const article = await getArticle(slug)

  return renderOgImage({
    eyebrow: 'thoughts',
    title: article.title,
    footerLeft: 'Tim de Vries',
    footerRight: article.date === '-' ? undefined : article.date,
  })
}
