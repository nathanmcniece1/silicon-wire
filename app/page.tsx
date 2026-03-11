import PulseDot from '@/components/pulse-dot'
import BeatTabs from '@/components/beat-tabs'
import FeaturedGrid from '@/components/featured-grid'
import SectionHeader from '@/components/section-header'
import WireFeed from '@/components/wire-feed'
import MetricsStrip from '@/components/metrics-strip'
import NewsletterCTA from '@/components/newsletter-cta'
import { getFeaturedArticles, getWireDispatches, getMetrics } from '@/lib/sanity'

export default async function HomePage() {
  const [articles, dispatches, metrics] = await Promise.all([
    getFeaturedArticles(),
    getWireDispatches(6),
    getMetrics(),
  ])

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      {/* Hero */}
      <section
        className="max-w-content mx-auto px-12 pt-16 pb-12 max-[900px]:px-5 max-[900px]:pt-10 max-[900px]:pb-8"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase mb-5"
          style={{ letterSpacing: '0.08em', color: 'var(--accent)' }}
        >
          <PulseDot />
          Live Wire — {today}
        </div>
        <h1
          className="font-serif font-normal max-w-[800px] mb-4 max-[900px]:text-[34px]"
          style={{
            fontSize: 'clamp(42px, 5vw, 52px)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          }}
        >
          Intelligence across the full{' '}
          <em className="italic" style={{ color: 'var(--accent)' }}>
            AI supply chain
          </em>
        </h1>
        <p
          className="text-[17px] font-light max-w-[600px]"
          style={{ lineHeight: '1.65', color: 'var(--text-secondary)' }}
        >
          From rare earth extraction to frontier model deployment. The Silicon Wire covers every link in the chain that powers artificial intelligence.
        </p>
      </section>

      {/* Beat Tabs */}
      <BeatTabs />

      {/* Featured Analysis */}
      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5 max-[900px]:py-7">
        <SectionHeader title="Featured Analysis" moreLink="/wire" moreLabel="View all →" />
        <FeaturedGrid articles={articles} />
      </section>

      {/* Wire Dispatches */}
      <section className="max-w-content mx-auto px-12 pb-10 max-[900px]:px-5 max-[900px]:pb-7" style={{ paddingTop: 0 }}>
        <SectionHeader title="Wire Dispatches" moreLink="/wire" moreLabel="Full feed →" />
        <WireFeed items={dispatches} />

        {/* Metrics */}
        <div className="mt-10">
          <MetricsStrip metrics={metrics.slice(0, 4)} />
        </div>

        {/* Newsletter */}
        <div className="mt-10">
          <NewsletterCTA />
        </div>
      </section>
    </>
  )
}
