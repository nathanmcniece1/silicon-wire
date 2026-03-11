import Link from 'next/link'
import LogoMark from '@/components/logo-mark'

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-12 max-[900px]:px-5 text-center py-32">
      <LogoMark size={48} />
      <h1 className="font-serif text-[42px] font-normal mt-6 mb-3" style={{ letterSpacing: '-0.02em' }}>
        Signal Lost
      </h1>
      <p className="text-[17px] font-light mb-8" style={{ color: 'var(--text-secondary)' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block font-sans text-[13px] font-semibold no-underline rounded-md px-6 py-3"
        style={{ background: 'var(--accent)', color: '#fff' }}
      >
        Back to the Wire
      </Link>
    </div>
  )
}
