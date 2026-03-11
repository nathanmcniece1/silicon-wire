import type { Metadata } from 'next'
import SectionHeader from '@/components/section-header'
import { getMetrics } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Metrics Dashboard',
  description: 'Real-time tracking of key AI supply chain metrics.',
}

const CATEGORY_LABELS: Record<string, string> = {
  'chip-pricing': 'Chip Pricing',
  'foundry': 'Foundry & Manufacturing',
  'infrastructure': 'Infrastructure',
  'training': 'Training & Models',
}

export default async function MetricsPage() {
  const metrics = await getMetrics()

  const grouped = metrics.reduce((acc, m) => {
    if (!acc[m.category]) acc[m.category] = []
    acc[m.category].push(m)
    return acc
  }, {} as Record<string, typeof metrics>)

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
          Metric Tracker
        </h1>
        <p className="text-[17px] font-light max-w-[600px]" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          Key indicators across the AI supply chain. Updated quarterly and monthly.
        </p>
      </section>

      {Object.entries(grouped).map(([category, categoryMetrics]) => (
        <section key={category} className="max-w-content mx-auto px-12 py-8 max-[900px]:px-5">
          <SectionHeader title={CATEGORY_LABELS[category] || category} />
          <div
            className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-[1px] rounded-[10px] overflow-hidden"
            style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
          >
            {categoryMetrics.map((metric) => (
              <div
                key={metric.slug}
                className="flex flex-col gap-3 p-8"
                style={{ background: 'var(--bg-card)' }}
              >
                <span className="font-mono text-[10px] uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
                  {metric.label}
                </span>
                <div className="flex items-end gap-4">
                  <span className="font-serif text-[36px] font-normal" style={{ letterSpacing: '-0.02em' }}>
                    {metric.currentValue}
                  </span>
                  <span
                    className="font-mono text-[12px] pb-2"
                    style={{
                      color: metric.direction === 'up' ? 'var(--signal-up)' : metric.direction === 'down' ? 'var(--signal-down)' : 'var(--text-tertiary)',
                    }}
                  >
                    {metric.direction === 'up' ? '↑' : metric.direction === 'down' ? '↓' : '—'} {metric.change} {metric.period}
                  </span>
                </div>
                {/* Mini sparkline via CSS */}
                <div className="flex items-end gap-1 h-8 mt-2">
                  {metric.history.map((point, i) => {
                    const max = Math.max(...metric.history.map(p => p.value))
                    const min = Math.min(...metric.history.map(p => p.value))
                    const range = max - min || 1
                    const height = ((point.value - min) / range) * 100
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${Math.max(height, 10)}%`,
                          background: i === metric.history.length - 1 ? 'var(--accent)' : 'var(--border-strong)',
                          transition: 'height 0.3s ease',
                        }}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-between">
                  {metric.history.map((point, i) => (
                    <span key={i} className="font-mono text-[9px]" style={{ color: 'var(--text-tertiary)' }}>
                      {point.date}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
