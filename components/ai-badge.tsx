import PulseDot from './pulse-dot'

export default function AIBadge() {
  return (
    <div
      className="font-mono text-[10px] tracking-wider flex items-center gap-2 px-3 py-1.5 rounded"
      style={{
        color: 'var(--text-tertiary)',
        border: '1px solid var(--border)',
        letterSpacing: '0.06em',
      }}
    >
      <PulseDot size={5} />
      Autonomously reported by AI agents
    </div>
  )
}
