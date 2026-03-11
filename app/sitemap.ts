import { MetadataRoute } from 'next'
import { allArticles } from '@/lib/mock-data'
import { companies } from '@/lib/mock-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://siliconwire.com'

  const staticRoutes = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'hourly' as const, priority: 1 },
    { url: `${siteUrl}/wire`, lastModified: new Date(), changeFrequency: 'hourly' as const, priority: 0.9 },
    { url: `${siteUrl}/metrics`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${siteUrl}/dossier`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${siteUrl}/briefing`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${siteUrl}/subscribe`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  const beatRoutes = ['materials-fab', 'chips', 'infrastructure', 'software', 'policy-capital'].map(beat => ({
    url: `${siteUrl}/beat/${beat}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const articleRoutes = allArticles.map(article => ({
    url: `${siteUrl}/article/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const companyRoutes = companies.map(company => ({
    url: `${siteUrl}/dossier/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...beatRoutes, ...articleRoutes, ...companyRoutes]
}
