import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/section-header'
import ArticleCard from '@/components/article-card'
import { getCompanyBySlug, getCompanies, getAllArticles } from '@/lib/sanity'

export async function generateStaticParams() {
  const companies = await getCompanies()
  return companies.map((c) => ({ company: c.slug }))
}

export async function generateMetadata({ params }: { params: { company: string } }): Promise<Metadata> {
  const company = await getCompanyBySlug(params.company)
  if (!company) return { title: 'Company Not Found' }
  return {
    title: `${company.name} Dossier`,
    description: company.description,
  }
}

export default async function CompanyDossierPage({ params }: { params: { company: string } }) {
  const company = await getCompanyBySlug(params.company)
  if (!company) notFound()

  const allArticles = await getAllArticles()
  const relatedArticles = allArticles.filter(a =>
    a.companies?.includes(company.slug) || a.tags.some(t => t.toLowerCase().includes(company.name.toLowerCase().split(' ')[0]))
  ).slice(0, 4)

  const allCompanies = await getCompanies()
  const relatedCompanyObjects = allCompanies.filter(c => company.relatedCompanies.includes(c.slug))

  return (
    <>
      {/* Header */}
      <section
        className="max-w-content mx-auto px-12 pt-16 pb-10 max-[900px]:px-5 max-[900px]:pt-10"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-4 mb-4">
          <h1
            className="font-serif font-normal"
            style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
          >
            {company.name}
          </h1>
          <span className="font-mono text-[14px] font-medium" style={{ color: 'var(--accent)' }}>
            {company.ticker}
          </span>
        </div>
        <p className="text-[17px] font-light max-w-[680px]" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          {company.description}
        </p>
      </section>

      {/* Key Metrics */}
      <section className="max-w-content mx-auto px-12 py-10 max-[900px]:px-5">
        <SectionHeader title="Key Metrics" />
        <div
          className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[1px] rounded-[10px] overflow-hidden"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {company.metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-1.5" style={{ background: 'var(--bg-card)', padding: '24px' }}>
              <span className="font-mono text-[10px] uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
                {m.label}
              </span>
              <span className="font-serif text-[28px] font-normal" style={{ letterSpacing: '-0.02em' }}>
                {m.value}
              </span>
              <span
                className="font-mono text-[11px]"
                style={{
                  color: m.direction === 'up' ? 'var(--signal-up)' : m.direction === 'down' ? 'var(--signal-down)' : 'var(--text-tertiary)',
                }}
              >
                {m.direction === 'up' ? '↑' : m.direction === 'down' ? '↓' : '—'} {m.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Chain Position */}
      <section className="max-w-content mx-auto px-12 pb-10 max-[900px]:px-5">
        <SectionHeader title="Supply Chain Position" />
        <div
          className="p-8 rounded-[10px]"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <p className="text-[15px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {company.supplyChainPosition}
          </p>
          {relatedCompanyObjects.length > 0 && (
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <span className="font-mono text-[10px] uppercase block mb-3" style={{ letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
                Related Companies
              </span>
              <div className="flex gap-3 flex-wrap">
                {relatedCompanyObjects.map((rc) => (
                  <Link
                    key={rc.slug}
                    href={`/dossier/${rc.slug}`}
                    className="font-mono text-[11px] px-3 py-1.5 rounded no-underline"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}
                  >
                    {rc.name} ({rc.ticker})
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Coverage */}
      {relatedArticles.length > 0 && (
        <section className="max-w-content mx-auto px-12 pb-10 max-[900px]:px-5">
          <SectionHeader title="Coverage" />
          <div
            className="flex flex-col gap-[1px] rounded-[10px] overflow-hidden"
            style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
          >
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="standard" />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
