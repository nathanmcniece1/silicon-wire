export default function PulseDot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full"
      style={{
        width: size,
        height: size,
        background: 'var(--accent)',
        animation: 'pulse-glow 2s ease-in-out infinite',
      }}
    />
  )
}
