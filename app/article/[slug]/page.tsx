import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BeatTag from '@/components/beat-tag'
import AIBadge from '@/components/ai-badge'
import ArticleCard from '@/components/article-card'
import SectionHeader from '@/components/section-header'
import { getArticleBySlug, getRelatedArticles, getAllArticles } from '@/lib/sanity'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: 'Article Not Found' }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siliconwire.xyz'
  const ogParams = new URLSearchParams({
    title: article.title,
    beat: article.beat,
    date: article.publishedAt,
    readTime: String(article.readTime),
  })
  const ogImage = `${baseUrl}/api/og?${ogParams.toString()}`

  // Truncate excerpt for social sharing (max ~155 chars)
  const shortExcerpt = article.excerpt.length > 155
    ? article.excerpt.slice(0, 152).replace(/\s+\S*$/, '') + '...'
    : article.excerpt

  return {
    title: article.title,
    description: shortExcerpt,
    openGraph: {
      title: article.title,
      description: shortExcerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: shortExcerpt,
      images: [ogImage],
    },
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = await getRelatedArticles(article.slug, article.beat, 3)

  // Parse inline formatting: **bold**, [N] footnotes, [text](url) links
  const parseInline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    // Match **bold**, [N] footnote markers, and [text](url) links
    const regex = /(\*\*(.+?)\*\*)|(\[(\d{1,3})\](?!\())|(\[([^\]]+)\]\(([^)]+)\))/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }

      if (match[1]) {
        // **bold**
        parts.push(<strong key={`b-${match.index}`}>{match[2]}</strong>)
      } else if (match[3]) {
        // [N] footnote marker
        const num = match[4]
        parts.push(
          <sup key={`fn-${match.index}`}>
            <a
              href={`#ref-${num}`}
              id={`fnref-${num}`}
              style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.75em' }}
            >
              [{num}]
            </a>
          </sup>
        )
      } else if (match[5]) {
        // [text](url) link
        parts.push(
          <a
            key={`link-${match.index}`}
            href={match[7]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', textDecoration: 'underline' }}
          >
            {match[6]}
          </a>
        )
      }

      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : [text]
  }

  // Render body text: split by double newlines for paragraphs, handle headings, refs, etc.
  const renderBody = (text: string) => {
    // Split out the references section if present
    const refSeparatorIndex = text.indexOf('\n\n---\n\n## References')
    const mainBody = refSeparatorIndex !== -1 ? text.slice(0, refSeparatorIndex) : text
    const refsSection = refSeparatorIndex !== -1 ? text.slice(refSeparatorIndex) : null

    const blocks = mainBody.split('\n\n')
    const elements = blocks.map((block, i) => {
      const trimmed = block.trim()
      if (!trimmed) return null
      if (trimmed === '---') {
        return <hr key={i} style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2em 0' }} />
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={i}>{parseInline(trimmed.replace('## ', ''))}</h2>
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={i}>{parseInline(trimmed.replace('### ', ''))}</h3>
      }
      return <p key={i}>{parseInline(trimmed)}</p>
    }).filter(Boolean)

    // Render references section
    if (refsSection) {
      const refLines = refsSection.split('\n\n').filter((l) => l.trim() && l.trim() !== '---' && l.trim() !== '## References')
      elements.push(
        <div key="references" className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 className="font-mono text-[13px] uppercase mb-6" style={{ letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
            References
          </h2>
          <ol className="list-none flex flex-col gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {refLines.map((ref, ri) => {
              const refMatch = ref.trim().match(/^\[(\d+)\]\s*(.+)$/)
              if (!refMatch) return null
              const num = refMatch[1]
              const content = refMatch[2]
              return (
                <li key={`ref-${ri}`} id={`ref-${num}`} className="flex gap-3" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  <span className="font-mono shrink-0" style={{ color: 'var(--accent)', minWidth: '28px' }}>
                    [{num}]
                  </span>
                  <span>{parseInline(content)}</span>
                </li>
              )
            })}
          </ol>
        </div>
      )
    }

    return elements
  }

  return (
    <article className="max-w-content mx-auto px-12 max-[900px]:px-5">
      {/* Article Header */}
      <header className="max-w-[680px] mx-auto pt-16 pb-10 max-[900px]:pt-10">
        <div className="flex items-center gap-3 mb-6">
          <BeatTag beat={article.beat} size="md" />
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
            {formatDate(article.publishedAt)}
          </span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
            · {article.readTime} min read
          </span>
        </div>

        <h1
          className="font-serif font-normal mb-4"
          style={{
            fontSize: 'clamp(34px, 4vw, 42px)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
          }}
        >
          {article.title}
        </h1>

        <p
          className="text-[17px] font-light"
          style={{ lineHeight: '1.65', color: 'var(--text-secondary)' }}
        >
          {article.excerpt}
        </p>
      </header>

      {/* Article Body */}
      <div className="prose-sw pb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        {renderBody(article.body)}
      </div>

      {/* Sources */}
      {article.sources.length > 0 && (
        <div className="max-w-[680px] mx-auto py-8" style={{ borderBottom: '1px solid var(--border)' }}>
          <h4 className="font-mono text-[11px] uppercase mb-4" style={{ letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>
            Sources
          </h4>
          <ul className="list-none flex flex-col gap-2">
            {article.sources.map((source, i) => (
              <li key={i}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* AI Transparency Badge */}
      <div
        className="max-w-[680px] mx-auto my-10 p-6 rounded-lg"
        style={{
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-border)',
        }}
      >
        <p className="font-mono text-[11px] uppercase mb-2" style={{ letterSpacing: '0.06em', color: 'var(--accent)' }}>
          AI Transparency
        </p>
        <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
          This article was autonomously researched, written, and edited by AI agents. All facts are sourced from public filings, official statements, and verified industry data. See our methodology for details.
        </p>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-[680px] mx-auto pb-16">
          <SectionHeader title="Related Coverage" />
          <div className="flex flex-col gap-[1px] rounded-[10px] overflow-hidden" style={{ background: 'var(--border)', border: '1px solid var(--border)' }}>
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="standard" />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
