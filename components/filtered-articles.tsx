'use client'

import { useState } from 'react'
import BeatTabs from './beat-tabs'
import FeaturedGrid from './featured-grid'
import ArticleCard from './article-card'
import SectionHeader from './section-header'
import type { Article, Beat } from '@/lib/types'

export default function FilteredArticles({ articles }: { articles: Article[] }) {
  const [activeBeat, setActiveBeat] = useState<Beat | 'all'>('all')

  const filtered = activeBeat === 'all'
    ? articles
    : articles.filter((a) => a.beat === activeBeat)

  const featured = filtered.slice(0, 3)
  const remaining = filtered.slice(3)

  return (
    <>
      <BeatTabs active={activeBeat} onChange={setActiveBeat} />

      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5 max-[900px]:py-7">
        <SectionHeader title="Featured Analysis" moreLink="/wire" moreLabel="View all →" />
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

        {remaining.length > 0 && (
          <div
            className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-[1px] rounded-[10px] overflow-hidden mt-6"
            style={{
              background: 'var(--border)',
              border: '1px solid var(--border)',
            }}
          >
            {remaining.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="standard" />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
