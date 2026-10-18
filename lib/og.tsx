import { ImageResponse } from 'next/og'

// Shared layout for link-preview images, echoing the site: light background,
// a thin rule on the left and the rurikon greys from globals.css.
export const ogSize = { width: 1200, height: 630 }

export function renderOgImage({
  eyebrow,
  title,
  subtitle,
  footerLeft,
  footerRight,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  footerLeft: string
  footerRight?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: 80,
          background: '#fcfcfc',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            paddingLeft: 56,
            borderLeft: '2px solid #d8dbdf',
          }}
        >
          <div style={{ display: 'flex', fontSize: 28, color: '#8c95a1' }}>
            {eyebrow}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                fontSize: title.length > 60 ? 56 : 72,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#1e2125',
              }}
            >
              {title}
            </div>
            {subtitle ? (
              <div
                style={{
                  display: 'flex',
                  marginTop: 28,
                  fontSize: 30,
                  lineHeight: 1.4,
                  color: '#697381',
                }}
              >
                {subtitle}
              </div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 26,
              color: '#8c95a1',
            }}
          >
            <div style={{ display: 'flex' }}>{footerLeft}</div>
            <div style={{ display: 'flex' }}>{footerRight}</div>
          </div>
        </div>
      </div>
    ),
    ogSize
  )
}
