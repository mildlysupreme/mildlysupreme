import type { Metadata } from 'next'

export const siteUrl = 'https://www.mildlysupreme.com'
export const siteName = 'Mildlysupreme'
export const siteDescription =
  'Tim de Vries is a product-minded entrepreneur building a collective of AI experts, designers and engineers who help companies ship next-generation products.'

// A page's own openGraph replaces the layout's entirely, so every page that
// sets one goes through here to keep siteName and locale.
export function pageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  type = 'website',
  publishedTime,
}: {
  title: string
  description?: string
  path: string
  ogTitle?: string
  type?: 'website' | 'article'
  publishedTime?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      siteName,
      locale: 'en_US',
      url: path,
      title: ogTitle,
      description,
      // Articles get their image from thoughts/[slug]/opengraph-image.tsx.
      // Other pages would lose the root image by replacing openGraph, so
      // point at it explicitly.
      ...(type === 'article'
        ? { type, publishedTime, authors: ['Tim de Vries'] }
        : { type, images: '/opengraph-image' }),
    },
  }
}
