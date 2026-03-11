import ArticleCard from './article-card'
import type { Article } from '@/lib/types'

export default function FeaturedGrid({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null

  const [primary, ...rest] = articles
  const secondary = rest.slice(0, 2)

  return (
    <div
      className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[1px] rounded-[10px] overflow-hidden"
      style={{
        background: 'var(--border)',
        border: '1px solid var(--border)',
      }}
    >
      <ArticleCard article={primary} variant="primary" />
      {secondary.map((article) => (
        <ArticleCard key={article.slug} article={article} variant="standard" />
      ))}
    </div>
  )
}
