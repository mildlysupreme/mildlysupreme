import cn from 'clsx'

import { getArticleSlugs } from '@/lib/articles'

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
  const metadata = (await import('../_articles/' + `${params.slug}.mdx`))
    .metadata
  return {
    title: metadata.title,
    description: metadata.description,
  }
}
