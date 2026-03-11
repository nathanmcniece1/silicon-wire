'use client'

import { useState } from 'react'
import type { Beat } from '@/lib/types'

const tabs: { label: string; value: Beat | 'all' }[] = [
  { label: 'All Coverage', value: 'all' },
  { label: 'Materials & Fab', value: 'materials-fab' },
  { label: 'Chips & Architecture', value: 'chips' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Software & Models', value: 'software' },
  { label: 'Policy & Capital', value: 'policy-capital' },
]

export default function BeatTabs({
  active = 'all',
  onChange,
}: {
  active?: Beat | 'all'
  onChange?: (beat: Beat | 'all') => void
}) {
  const [current, setCurrent] = useState(active)

  const handleClick = (value: Beat | 'all') => {
    setCurrent(value)
    onChange?.(value)
  }

  return (
    <div
      className="max-w-content mx-auto px-12 max-[900px]:px-5"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div
        className="flex overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleClick(tab.value)}
            className="font-sans text-xs font-semibold uppercase whitespace-nowrap px-6 py-4"
            style={{
              letterSpacing: '0.06em',
              color: current === tab.value ? 'var(--accent)' : 'var(--text-tertiary)',
              borderBottom: current === tab.value ? '2px solid var(--accent)' : '2px solid transparent',
              background: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
