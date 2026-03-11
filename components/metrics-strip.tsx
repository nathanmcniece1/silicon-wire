import MetricCard from './metric-card'
import type { Metric } from '@/lib/types'

export default function MetricsStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div
      className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[1px] rounded-[10px] overflow-hidden"
      style={{
        background: 'var(--border)',
        border: '1px solid var(--border)',
      }}
    >
      {metrics.map((metric) => (
        <MetricCard key={metric.slug} metric={metric} />
      ))}
    </div>
  )
}
