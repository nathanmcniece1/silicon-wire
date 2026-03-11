'use client'

import { useState } from 'react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="rounded-[10px] p-12 flex items-center justify-between gap-10 max-[900px]:flex-col max-[900px]:p-8 max-[900px]:text-center"
      style={{
        border: '1px solid var(--accent-border)',
        background: 'var(--accent-dim)',
      }}
    >
      <div>
        <h3 className="font-serif text-[28px] font-normal mb-2">The Weekly Briefing</h3>
        <p
          className="text-sm font-light max-w-[460px]"
          style={{ color: 'var(--text-secondary)' }}
        >
          Every Sunday. The most important supply chain developments of the week, with analysis on what they mean for the AI ecosystem. Free.
        </p>
      </div>

      {status === 'success' ? (
        <div className="font-mono text-sm" style={{ color: 'var(--signal-up)' }}>
          You&apos;re subscribed. Welcome aboard.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 flex-shrink-0 max-[900px]:w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="font-sans text-sm rounded-md px-4 py-2.5 w-[260px] outline-none max-[900px]:flex-1"
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border-strong)')}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="text-[13px] font-semibold rounded-md px-5 py-2.5 cursor-pointer font-sans"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              letterSpacing: '0.03em',
              transition: 'background 0.2s',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <div className="font-mono text-xs" style={{ color: 'var(--signal-down)' }}>
          Something went wrong. Please try again.
        </div>
      )}
    </div>
  )
}
