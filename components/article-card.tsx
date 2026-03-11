import Link from 'next/link'
import BeatTag from './beat-tag'
import type { Article } from '@/lib/types'
import { formatRelativeTime } from '@/lib/utils'

export default function ArticleCard({
  article,
  variant = 'standard',
}: {
  article: Article
  variant?: 'primary' | 'standard'
}) {
  const isPrimary = variant === 'primary'

  return (
    <Link
      href={`/article/${article.slug}`}
      className="flex flex-col gap-4 no-underline card-hover"
      style={{
        background: 'var(--bg-card)',
        padding: isPrimary ? '44px' : '36px',
        gridRow: isPrimary ? 'span 2' : undefined,
        justifyContent: isPrimary ? 'flex-end' : undefined,
        cursor: 'pointer',
        color: 'var(--text-primary)',
      }}
    >
      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-tertiary)' }}>
        <BeatTag beat={article.beat} />
        <span className="font-mono text-[11px]">
          {formatRelativeTime(article.publishedAt)}
        </span>
      </div>

      <h3
        className="font-serif font-normal"
        style={{
          fontSize: isPrimary ? '34px' : '24px',
          lineHeight: isPrimary ? '1.2' : '1.25',
          letterSpacing: '-0.01em',
        }}
      >
        {article.title}
      </h3>

      <p
        className="text-sm font-light leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {article.excerpt}
      </p>

      {article.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-auto">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-[3px] rounded-sm"
              style={{
                letterSpacing: '0.04em',
                color: 'var(--tag-text)',
                background: 'var(--tag-bg)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
