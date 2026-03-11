'use client'

import { useState } from 'react'
import Link from 'next/link'
import LogoLockup from './logo-lockup'
import ThemeToggle from './theme-toggle'

const beats = [
  { label: 'Materials & Fab', href: '/beat/materials-fab' },
  { label: 'Chips', href: '/beat/chips' },
  { label: 'Infrastructure', href: '/beat/infrastructure' },
  { label: 'Software', href: '/beat/software' },
  { label: 'Policy & Capital', href: '/beat/policy-capital' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.4s ease',
      }}
    >
      <div className="max-w-content mx-auto px-12 max-[900px]:px-5">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="no-underline" style={{ color: 'var(--text-primary)' }}>
            <LogoLockup />
          </Link>

          {/* Desktop beat links */}
          <ul className="hidden min-[901px]:flex items-center gap-8 list-none">
            {beats.map((beat) => (
              <li key={beat.href}>
                <Link
                  href={beat.href}
                  className="text-[13px] font-medium uppercase no-underline hover:text-[var(--accent)]"
                  style={{
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s',
                  }}
                >
                  {beat.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              className="min-[901px]:hidden flex flex-col gap-1 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none' }}
            >
              <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text-primary)', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
              <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text-primary)', transition: 'all 0.2s', opacity: mobileOpen ? 0 : 1 }} />
              <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text-primary)', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
            </button>
            <Link
              href="/subscribe"
              className="text-[13px] font-semibold no-underline rounded-md px-5 py-2 max-[600px]:hidden"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                letterSpacing: '0.03em',
                transition: 'background 0.2s',
              }}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="min-[901px]:hidden px-5 pb-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <ul className="list-none flex flex-col gap-3 pt-4">
            {beats.map((beat) => (
              <li key={beat.href}>
                <Link
                  href={beat.href}
                  className="text-[14px] font-medium uppercase no-underline block py-1"
                  style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {beat.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/subscribe"
                className="text-[13px] font-semibold no-underline rounded-md px-5 py-2 inline-block mt-2"
                style={{ background: 'var(--accent)', color: '#fff' }}
                onClick={() => setMobileOpen(false)}
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
