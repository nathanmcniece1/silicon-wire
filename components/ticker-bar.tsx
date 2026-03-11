'use client'

import { tickerItems } from '@/lib/mock-data'

export default function TickerBar() {
  const items = tickerItems

  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center gap-2">
        <span className="font-mono text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>
          {item.label}
        </span>
        <span className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
          {item.value}
        </span>
        <span
          className="font-mono text-[11px]"
          style={{ color: item.direction === 'up' ? 'var(--signal-up)' : 'var(--signal-down)' }}
        >
          {item.change}
        </span>
        {i < items.length - 1 && (
          <span className="mx-4" style={{ color: 'var(--border-strong)' }}>·</span>
        )}
      </span>
    ))

  return (
    <div
      className="overflow-hidden relative font-mono text-[11px]"
      style={{
        background: 'var(--ticker-bg)',
        borderBottom: '1px solid var(--border)',
        padding: '6px 0',
        letterSpacing: '0.02em',
        color: 'var(--text-tertiary)',
      }}
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          width: 'max-content',
          animation: 'ticker-scroll 40s linear infinite',
        }}
      >
        <div className="flex items-center gap-2">{renderItems()}</div>
        <div className="flex items-center gap-2">{renderItems()}</div>
      </div>
    </div>
  )
}
