import cn from 'clsx'

import { getArticle, getArticleSlugs } from '@/lib/articles'
import { pageMetadata } from '@/lib/site'

// Only the articles in _articles exist; any other slug is a 404.
export const dynamicParams = false

export default async function Page(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const { default: MDXContent, metadata } = await import(
    '../_articles/' + `${params.slug}.mdx`
  )

  return (
    <div
      className={cn(metadata.chinese && 'text-justify font-zh')}
      lang={metadata.chinese ? 'zh-Hans' : 'en'}
    >
      <MDXContent />
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()

  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const article = await getArticle(params.slug)

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/thoughts/${article.slug}`,
    type: 'article',
    publishedTime:
      article.date === '-' ? undefined : article.date.replaceAll('.', '-'),
  })
}
