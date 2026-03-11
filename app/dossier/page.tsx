import type { Metadata } from 'next'
import Link from 'next/link'
import { getCompanies } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Company Dossiers',
  description: 'Deep profiles of the companies that power the AI supply chain.',
}

export default async function DossierIndex() {
  const companies = await getCompanies()

  return (
    <>
      <section
        className="max-w-content mx-auto px-12 pt-16 pb-10 max-[900px]:px-5 max-[900px]:pt-10"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <h1
          className="font-serif font-normal mb-3"
          style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Company Dossiers
        </h1>
        <p className="text-[17px] font-light max-w-[600px]" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          Deep profiles of the companies that define the AI supply chain. Metrics, coverage, and supply chain positioning.
        </p>
      </section>

      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5">
        <div
          className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[1px] rounded-[10px] overflow-hidden"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {companies.map((company) => (
            <Link
              key={company.slug}
              href={`/dossier/${company.slug}`}
              className="flex flex-col gap-3 p-9 no-underline card-hover"
              style={{
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
              }}
            >
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-[24px] font-normal">{company.name}</h2>
                <span className="font-mono text-[11px]" style={{ color: 'var(--accent)' }}>
                  {company.ticker}
                </span>
              </div>
              <p className="text-sm font-light" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {company.description}
              </p>
              <div className="flex gap-2 mt-auto">
                {company.beats.map((beat) => (
                  <span
                    key={beat}
                    className="font-mono text-[10px] uppercase px-2 py-[3px] rounded-sm"
                    style={{ color: 'var(--tag-text)', background: 'var(--tag-bg)', letterSpacing: '0.06em' }}
                  >
                    {beat}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
