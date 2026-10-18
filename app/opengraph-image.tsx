import { ogSize, renderOgImage } from '@/lib/og'

export const size = ogSize
export const contentType = 'image/png'
export const alt = 'Tim de Vries, Mildlysupreme'

export default function Image() {
  return renderOgImage({
    eyebrow: 'mildlysupreme',
    title: 'Tim de Vries',
    subtitle:
      'Product-minded entrepreneur building a collective of AI experts, designers and engineers.',
    footerLeft: 'mildlysupreme.com',
  })
}
