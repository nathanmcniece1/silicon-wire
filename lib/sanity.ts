import { featuredArticles, additionalArticles, allArticles, wireDispatches, metrics, companies } from './mock-data'
import type { Article, WireDispatch, Metric, Company, Beat } from './types'

// Stubbed Sanity client - replace with real @sanity/client when ready
// import { createClient } from '@sanity/client'
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   useCdn: true,
//   apiVersion: '2026-03-01',
// })

export async function getFeaturedArticles(): Promise<Article[]> {
  return featuredArticles
}

export async function getAllArticles(): Promise<Article[]> {
  return allArticles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return allArticles.find(a => a.slug === slug) || null
}

export async function getArticlesByBeat(beat: Beat): Promise<Article[]> {
  return allArticles.filter(a => a.beat === beat)
}

export async function getWireDispatches(limit?: number): Promise<WireDispatch[]> {
  return limit ? wireDispatches.slice(0, limit) : wireDispatches
}

export async function getMetrics(): Promise<Metric[]> {
  return metrics
}

export async function getMetricsByCategory(category: string): Promise<Metric[]> {
  return metrics.filter(m => m.category === category)
}

export async function getCompanies(): Promise<Company[]> {
  return companies
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  return companies.find(c => c.slug === slug) || null
}

export async function getRelatedArticles(slug: string, beat: Beat, limit = 3): Promise<Article[]> {
  return allArticles.filter(a => a.beat === beat && a.slug !== slug).slice(0, limit)
}
