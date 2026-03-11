import Link from 'next/link'

export default function SectionHeader({ title, moreLink, moreLabel = 'View all →' }: {
  title: string
  moreLink?: string
  moreLabel?: string
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <span
        className="font-mono text-[11px] uppercase"
        style={{ letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}
      >
        {title}
      </span>
      {moreLink && (
        <Link
          href={moreLink}
          className="text-[13px] font-medium hover:underline"
          style={{ color: 'var(--accent)' }}
        >
          {moreLabel}
        </Link>
      )}
    </div>
  )
}
