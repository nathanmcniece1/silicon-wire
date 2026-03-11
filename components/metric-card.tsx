import type { Metric } from '@/lib/types'

export default function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div
      className="flex flex-col gap-1.5"
      style={{ background: 'var(--bg-card)', padding: '24px' }}
    >
      <span
        className="font-mono text-[10px] uppercase"
        style={{ letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}
      >
        {metric.label}
      </span>
      <span
        className="font-serif text-[32px] font-normal"
        style={{ letterSpacing: '-0.02em' }}
      >
        {metric.currentValue}
      </span>
      <span
        className="font-mono text-[11px] flex items-center gap-1"
        style={{
          color: metric.direction === 'up' ? 'var(--signal-up)' : metric.direction === 'down' ? 'var(--signal-down)' : 'var(--text-tertiary)',
        }}
      >
        {metric.direction === 'up' ? '↑' : metric.direction === 'down' ? '↓' : '—'} {metric.change} {metric.period}
      </span>
    </div>
  )
}
