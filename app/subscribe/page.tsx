import type { Metadata } from 'next'
import NewsletterCTA from '@/components/newsletter-cta'
import LogoMark from '@/components/logo-mark'

export const metadata: Metadata = {
  title: 'Subscribe',
  description: 'Subscribe to The Weekly Briefing — the most important AI supply chain developments, every Sunday.',
}

export default function SubscribePage() {
  return (
    <div className="max-w-content mx-auto px-12 max-[900px]:px-5">
      <section className="max-w-[680px] mx-auto pt-20 pb-16 text-center max-[900px]:pt-12">
        <div className="flex justify-center mb-8">
          <LogoMark size={56} />
        </div>
        <h1
          className="font-serif font-normal mb-4"
          style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          The Weekly Briefing
        </h1>
        <p
          className="text-[17px] font-light max-w-[500px] mx-auto mb-10"
          style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}
        >
          Every Sunday morning. The most important developments across the AI supply chain, from materials to models, with analysis on what they mean.
        </p>

        <NewsletterCTA />

        <div className="mt-16 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 className="font-serif text-[24px] font-normal mb-6">What you get</h2>
          <div
            className="grid grid-cols-3 max-[600px]:grid-cols-1 gap-[1px] rounded-[10px] overflow-hidden text-left"
            style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
          >
            {[
              { title: 'Weekly Analysis', desc: 'Deep coverage of the most significant supply chain developments, with context and implications.' },
              { title: 'Metric Updates', desc: 'Key numbers: chip pricing, foundry utilization, AI capex, and training costs — tracked over time.' },
              { title: 'Wire Highlights', desc: 'Curated selection of the most important wire dispatches you may have missed during the week.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8"
                style={{ background: 'var(--bg-card)' }}
              >
                <h3 className="font-serif text-[18px] font-normal mb-2">{item.title}</h3>
                <p className="text-sm font-light" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
