import WireItem from './wire-item'
import type { WireDispatch } from '@/lib/types'

export default function WireFeed({ items }: { items: WireDispatch[] }) {
  return (
    <div
      className="flex flex-col rounded-[10px] overflow-hidden"
      style={{ border: '1px solid var(--border)' }}
    >
      {items.map((item, i) => (
        <WireItem key={i} item={item} />
      ))}
    </div>
  )
}
