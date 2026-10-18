import Link from 'next/link'

import { getArticles } from '@/lib/articles'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Thoughts',
  ogTitle: 'Thoughts - Tim de Vries',
  description:
    'Articles by Tim de Vries on AI, product, design and building ventures.',
  path: '/thoughts',
})

export default async function Page() {
  const items = await getArticles()

  if (items.length === 0) {
    return <p>The first articles are on their way.</p>
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.slug} className='font-medium'>
            <Link
              href={`/thoughts/${item.slug}`}
              className='group flex gap-1 justify-between items-center'
              draggable={false}
            >
              <span className='block text-rurikon-500 group-hover:text-rurikon-700'>
                {item.title}
              </span>
              <span className='text-sm dot-leaders flex-1 text-rurikon-100 font-normal group-hover:text-rurikon-500 transition-colors group-hover:transition-none leading-none' />
              <time className='block text-rurikon-200 tabular-nums font-normal tracking-tighter group-hover:text-rurikon-500 transition-colors group-hover:transition-none self-start'>
                {item.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
