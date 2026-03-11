import type { Metadata } from 'next'
import SectionHeader from '@/components/section-header'
import ArticleCard from '@/components/article-card'
import { getAllArticles } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Weekly Briefings',
  description: 'Archive of The Silicon Wire\'s weekly briefings.',
}

export default async function BriefingPage() {
  const allArticles = await getAllArticles()
  const briefings = allArticles.filter(a => a.format === 'weekly-briefing')

  return (
    <>
      <section
        className="max-w-content mx-auto px-12 pt-16 pb-10 max-[900px]:px-5 max-[900px]:pt-10"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <h1
          className="font-serif font-normal mb-3"
          style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Weekly Briefings
        </h1>
        <p className="text-[17px] font-light max-w-[600px]" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          Every Sunday. A comprehensive review of the week&apos;s most important supply chain developments.
        </p>
      </section>

      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5">
        {briefings.length > 0 ? (
          <div
            className="flex flex-col gap-[1px] rounded-[10px] overflow-hidden"
            style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
          >
            {briefings.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="standard" />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-mono text-[11px] uppercase mb-3" style={{ letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
              Coming Soon
            </p>
            <p className="font-serif text-[24px] font-normal mb-3">
              The first Weekly Briefing is in production
            </p>
            <p className="text-[15px] font-light" style={{ color: 'var(--text-secondary)' }}>
              Subscribe to be notified when it drops.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
