export type Beat = 'materials-fab' | 'chips' | 'infrastructure' | 'software' | 'policy-capital'

export interface Article {
  title: string
  slug: string
  beat: Beat
  format: 'wire-dispatch' | 'deep-dive' | 'supply-chain-map' | 'earnings-breakdown' | 'weekly-briefing'
  excerpt: string
  body: string
  publishedAt: string
  tags: string[]
  companies: string[]
  confidenceScore: number
  sources: { title: string; url: string }[]
  readTime: number
}

export interface WireDispatch {
  time: string
  title: string
  slug: string
  beat: Beat
}

export interface TickerItem {
  label: string
  value: string
  change: string
  direction: 'up' | 'down'
}

export interface Metric {
  label: string
  slug: string
  category: 'chip-pricing' | 'foundry' | 'infrastructure' | 'training'
  currentValue: string
  change: string
  direction: 'up' | 'down' | 'flat'
  period: string
  history: { date: string; value: number }[]
}

export interface Company {
  name: string
  slug: string
  ticker: string
  description: string
  supplyChainPosition: string
  beats: Beat[]
  metrics: { label: string; value: string; change: string; direction: 'up' | 'down' | 'flat' }[]
  relatedCompanies: string[]
}
