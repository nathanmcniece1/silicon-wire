import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const BEAT_LABELS: Record<string, string> = {
  'materials-fab': 'MATERIALS & FAB',
  'chips': 'CHIPS & ARCH',
  'infrastructure': 'INFRASTRUCTURE',
  'software': 'SOFTWARE',
  'policy-capital': 'POLICY & CAPITAL',
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'The Silicon Wire'
  const beat = searchParams.get('beat') ?? ''
  const rawDate = searchParams.get('date') ?? ''
  const readTime = searchParams.get('readTime') ?? ''

  const beatLabel = BEAT_LABELS[beat] || beat.toUpperCase()
  const date = rawDate
    ? new Date(rawDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''

  // Load Instrument Serif for the article title
  const instrumentSerifData = await fetch(
    'https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fCjGwVOmCrdq8axFg.ttf'
  ).then((res) => res.arrayBuffer())

  // Load JetBrains Mono for UI elements
  const jetBrainsMonoData = await fetch(
    'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjOVGR.ttf'
  ).then((res) => res.arrayBuffer())

  const fontSize = title.length > 80 ? 40 : title.length > 50 ? 46 : 52

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0C0C0E',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: '32px', left: '32px', width: '40px', height: '40px', borderTop: '2px solid rgba(196,113,59,0.35)', borderLeft: '2px solid rgba(196,113,59,0.35)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: '32px', right: '32px', width: '40px', height: '40px', borderTop: '2px solid rgba(196,113,59,0.35)', borderRight: '2px solid rgba(196,113,59,0.35)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: '32px', left: '32px', width: '40px', height: '40px', borderBottom: '2px solid rgba(196,113,59,0.35)', borderLeft: '2px solid rgba(196,113,59,0.35)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: '32px', right: '32px', width: '40px', height: '40px', borderBottom: '2px solid rgba(196,113,59,0.35)', borderRight: '2px solid rgba(196,113,59,0.35)', display: 'flex' }} />

        {/* Top section: beat tag + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {beatLabel && (
            <div
              style={{
                fontSize: '12px',
                fontFamily: 'JetBrains Mono',
                letterSpacing: '0.1em',
                color: '#C4713B',
                background: 'rgba(196,113,59,0.1)',
                border: '1px solid rgba(196,113,59,0.2)',
                borderRadius: '4px',
                padding: '6px 14px',
                display: 'flex',
              }}
            >
              {beatLabel}
            </div>
          )}
          {date && (
            <div style={{ fontSize: '13px', fontFamily: 'JetBrains Mono', color: 'rgba(232,230,225,0.35)', display: 'flex' }}>
              {date}
            </div>
          )}
          {readTime && (
            <div style={{ fontSize: '13px', fontFamily: 'JetBrains Mono', color: 'rgba(232,230,225,0.35)', display: 'flex' }}>
              · {readTime} min read
            </div>
          )}
        </div>

        {/* Middle: Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          <div
            style={{
              fontSize: `${fontSize}px`,
              fontFamily: 'Instrument Serif',
              fontWeight: 400,
              color: '#E8E6E1',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '1000px',
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: Logo lockup + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Circuit logo icon */}
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
              <rect x="1" y="1" width="26" height="26" rx="4" stroke="#E8E6E1" strokeWidth="1.5"/>
              <path d="M7.5,8.4 L16.8,8.4 L16.8,13.1 L11.2,13.1 L11.2,17.8 L20.5,17.8" stroke="#E8E6E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7.5" cy="8.4" r="1.8" fill="#C4713B"/>
              <circle cx="20.5" cy="17.8" r="1.8" fill="#C4713B"/>
              <circle cx="16.8" cy="8.4" r="1" fill="#C4713B" opacity="0.5"/>
              <circle cx="16.8" cy="13.1" r="1" fill="#C4713B" opacity="0.5"/>
              <circle cx="11.2" cy="13.1" r="1" fill="#C4713B" opacity="0.5"/>
              <circle cx="11.2" cy="17.8" r="1" fill="#C4713B" opacity="0.5"/>
            </svg>
            <div
              style={{
                fontSize: '16px',
                fontFamily: 'JetBrains Mono',
                fontWeight: 600,
                color: '#E8E6E1',
                letterSpacing: '-0.01em',
                display: 'flex',
              }}
            >
              The Silicon Wire
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontFamily: 'JetBrains Mono',
              color: '#C4713B',
              border: '1px solid rgba(196,113,59,0.3)',
              borderRadius: '4px',
              padding: '8px 18px',
            }}
          >
            Read the wire →
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Instrument Serif',
          data: instrumentSerifData,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'JetBrains Mono',
          data: jetBrainsMonoData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
