import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BeatTag from '@/components/beat-tag'
import SectionHeader from '@/components/section-header'
import FeaturedGrid from '@/components/featured-grid'
import WireFeed from '@/components/wire-feed'
import NewsletterCTA from '@/components/newsletter-cta'
import { getArticlesByBeat, getWireDispatches } from '@/lib/sanity'
import { BEAT_LABELS } from '@/lib/utils'
import type { Beat } from '@/lib/types'

const VALID_BEATS: Beat[] = ['materials-fab', 'chips', 'infrastructure', 'software', 'policy-capital']

export function generateStaticParams() {
  return VALID_BEATS.map((beat) => ({ beat }))
}

export async function generateMetadata({ params }: { params: { beat: string } }): Promise<Metadata> {
  const beat = params.beat as Beat
  const label = BEAT_LABELS[beat]
  if (!label) return { title: 'Beat Not Found' }

  return {
    title: `${label} Coverage`,
    description: `The Silicon Wire's coverage of ${label.toLowerCase()} in the AI supply chain.`,
  }
}

export default async function BeatPage({ params }: { params: { beat: string } }) {
  const beat = params.beat as Beat
  if (!VALID_BEATS.includes(beat)) notFound()

  const label = BEAT_LABELS[beat]
  const articles = await getArticlesByBeat(beat)
  const allDispatches = await getWireDispatches()
  const dispatches = allDispatches.filter(d => d.beat === beat)

  return (
    <>
      {/* Beat Header */}
      <section
        className="max-w-content mx-auto px-12 pt-16 pb-10 max-[900px]:px-5 max-[900px]:pt-10"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <BeatTag beat={beat} size="md" />
        <h1
          className="font-serif font-normal mt-4 mb-3"
          style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          {label}
        </h1>
        <p className="text-[15px] font-light" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          {articles.length} article{articles.length !== 1 ? 's' : ''} covering this beat
        </p>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5 max-[900px]:py-7">
          <SectionHeader title="Latest Analysis" />
          <FeaturedGrid articles={articles} />
        </section>
      )}

      {/* Wire Dispatches */}
      {dispatches.length > 0 && (
        <section className="max-w-content mx-auto px-12 pb-10 max-[900px]:px-5 max-[900px]:pb-7">
          <SectionHeader title="Wire Dispatches" />
          <WireFeed items={dispatches} />
        </section>
      )}

      {/* Newsletter */}
      <section className="max-w-content mx-auto px-12 pb-10 max-[900px]:px-5">
        <NewsletterCTA />
      </section>
    </>
  )
}
