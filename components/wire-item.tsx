import Link from 'next/link'
import type { WireDispatch } from '@/lib/types'
import { BEAT_SHORT_LABELS } from '@/lib/utils'

export default function WireItem({ item }: { item: WireDispatch }) {
  return (
    <Link
      href={`/article/${item.slug}`}
      className="grid items-center gap-5 no-underline card-hover max-[900px]:grid-cols-[100px_1fr]"
      style={{
        gridTemplateColumns: '140px 1fr auto',
        padding: '18px 24px',
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border)',
        cursor: 'pointer',
        color: 'var(--text-primary)',
      }}
    >
      <span className="font-mono text-[11px] flex items-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
        <span
          className="inline-block w-[5px] h-[5px] rounded-full"
          style={{ background: 'var(--accent)' }}
        />
        {item.time}
      </span>
      <span className="font-serif text-[17px] font-normal" style={{ lineHeight: '1.35' }}>
        {item.title}
      </span>
      <span
        className="font-mono text-[10px] uppercase max-[900px]:hidden"
        style={{ letterSpacing: '0.06em', color: 'var(--text-tertiary)' }}
      >
        {BEAT_SHORT_LABELS[item.beat] || item.beat}
      </span>
    </Link>
  )
}
