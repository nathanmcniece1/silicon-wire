import Link from 'next/link'
import AIBadge from './ai-badge'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Methodology', href: '/about#methodology' },
  { label: 'Contact', href: 'mailto:hello@siliconwire.com' },
  { label: 'RSS', href: '/feed.xml' },
  { label: 'Twitter/X', href: 'https://twitter.com/siliconwire' },
]

export default function Footer() {
  return (
    <footer
      className="max-w-content mx-auto px-12 py-10 flex items-center justify-between mt-16 max-[900px]:flex-col max-[900px]:gap-5 max-[900px]:text-center max-[900px]:px-5"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex items-center gap-6 max-[900px]:flex-col">
        <span className="font-serif text-lg" style={{ color: 'var(--text-primary)' }}>
          The Silicon Wire
        </span>
        <ul className="flex gap-5 list-none">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs no-underline hover:text-[var(--text-secondary)]"
                style={{ color: 'var(--text-tertiary)', transition: 'color 0.2s' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AIBadge />
    </footer>
  )
}
