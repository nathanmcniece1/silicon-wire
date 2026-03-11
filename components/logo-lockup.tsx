import LogoMark from './logo-mark'

export default function LogoLockup({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark size={size} />
      <span className="font-serif text-[22px] tracking-tight" style={{ letterSpacing: '-0.01em' }}>
        The Silicon Wire
      </span>
    </div>
  )
}
