'use client'

import { useState } from 'react'
import BeatTabs from './beat-tabs'
import FeaturedGrid from './featured-grid'
import SectionHeader from './section-header'
import type { Article, Beat } from '@/lib/types'

export default function FilteredArticles({ articles }: { articles: Article[] }) {
  const [activeBeat, setActiveBeat] = useState<Beat | 'all'>('all')

  const filtered = activeBeat === 'all'
    ? articles
    : articles.filter((a) => a.beat === activeBeat)

  const featured = filtered.slice(0, 3)

  const moreLink = activeBeat === 'all' ? '/wire' : `/beat/${activeBeat}`

  return (
    <>
      <BeatTabs active={activeBeat} onChange={setActiveBeat} />

      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5 max-[900px]:py-7">
        <SectionHeader title="Featured Analysis" moreLink={moreLink} moreLabel="View all →" />
        {featured.length > 0 ? (
          <FeaturedGrid articles={featured} />
        ) : (
          <p
            className="text-sm font-light py-12 text-center"
            style={{ color: 'var(--text-tertiary)' }}
          >
            No articles in this category yet.
          </p>
        )}
      </section>
    </>
  )
}
