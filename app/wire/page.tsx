import type { Metadata } from 'next'
import PulseDot from '@/components/pulse-dot'
import WireFeed from '@/components/wire-feed'
import NewsletterCTA from '@/components/newsletter-cta'
import { getWireDispatches } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Wire Dispatches',
  description: 'Real-time dispatches from across the AI supply chain.',
}

export default async function WirePage() {
  const dispatches = await getWireDispatches()

  return (
    <>
      <section
        className="max-w-content mx-auto px-12 pt-16 pb-10 max-[900px]:px-5 max-[900px]:pt-10"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase mb-5"
          style={{ letterSpacing: '0.08em', color: 'var(--accent)' }}
        >
          <PulseDot />
          Live Feed
        </div>
        <h1
          className="font-serif font-normal mb-3"
          style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Wire Dispatches
        </h1>
        <p className="text-[17px] font-light max-w-[600px]" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          Real-time coverage from across the AI supply chain. Updated continuously.
        </p>
      </section>

      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5 max-[900px]:py-7">
        <WireFeed items={dispatches} />
        <div className="mt-10">
          <NewsletterCTA />
        </div>
      </section>
    </>
  )
}
