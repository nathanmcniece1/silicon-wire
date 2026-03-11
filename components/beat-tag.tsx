const BEAT_LABELS: Record<string, string> = {
  'materials-fab': 'Materials & Fab',
  'chips': 'Chips & Arch',
  'infrastructure': 'Infrastructure',
  'software': 'Software',
  'policy-capital': 'Policy & Capital',
}

export default function BeatTag({ beat, size = 'sm' }: { beat: string; size?: 'sm' | 'md' }) {
  const label = BEAT_LABELS[beat] || beat
  return (
    <span
      className={`font-mono uppercase tracking-wider ${
        size === 'sm' ? 'text-[10px] px-2 py-[3px]' : 'text-[11px] px-3 py-1'
      }`}
      style={{
        color: 'var(--accent)',
        background: 'var(--accent-dim)',
        border: '1px solid var(--accent-border)',
        borderRadius: '4px',
        letterSpacing: '0.08em',
      }}
    >
      {label}
    </span>
  )
}
