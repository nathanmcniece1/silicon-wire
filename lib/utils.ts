import { Beat } from './types'

export const BEAT_LABELS: Record<Beat, string> = {
  'materials-fab': 'Materials & Fab',
  'chips': 'Chips & Architecture',
  'infrastructure': 'Infrastructure',
  'software': 'Software & Models',
  'policy-capital': 'Policy & Capital',
}

export const BEAT_SHORT_LABELS: Record<Beat, string> = {
  'materials-fab': 'Materials & Fab',
  'chips': 'Chips & Arch',
  'infrastructure': 'Infrastructure',
  'software': 'Software',
  'policy-capital': 'Policy & Capital',
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatRelativeTime(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(dateStr)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
