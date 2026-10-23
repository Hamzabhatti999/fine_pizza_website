import { formatPrice } from '../data/menu'
import { useCart } from '../context/CartContext'

export default function MenuItemCard({ item, color, onCustomize }) {
  const { addLine, lines } = useCart()
  const inCart = lines.filter((l) => l.itemId === item.id).reduce((s, l) => s + l.qty, 0)
  const hasSizes = Boolean(item.sizes)
  const startPrice = hasSizes ? item.sizes[0].price : item.price

  const handleAdd = () => (hasSizes ? onCustomize() : addLine({ item, unitPrice: item.price }))

  return (
    <article className="group relative flex gap-4 rounded-3xl border-3 border-brand-dark bg-brand-cream p-4 shadow-brutal-sm transition hover:-translate-y-1 hover:shadow-brutal">
      {item.tag && (
        <span className="absolute -top-3 right-4 rotate-3 rounded-full border-2 border-brand-dark bg-brand-red px-3 py-0.5 text-xs font-bold uppercase text-white">
          {item.tag}
        </span>
      )}

      <button
        onClick={handleAdd}
        className={`relative grid h-24 w-24 shrink-0 place-items-center rounded-2xl border-3 border-brand-dark bg-gradient-to-br text-5xl ${color}`}
        aria-label={`Add ${item.name}`}
      >
        <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">{item.emoji}</span>
        {inCart > 0 && (
          <span className="absolute -left-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-brand-dark bg-brand-yellow text-sm font-bold text-brand-dark">
            {inCart}
          </span>
        )}
      </button>

      <div className="flex min-w-0 flex-1 flex-col">
        <h4 className="text-lg font-bold leading-tight">{item.name}</h4>
        {item.desc && <p className="mt-1 line-clamp-2 text-sm text-brand-dark/70">{item.desc}</p>}
        {hasSizes && (
          <p className="mt-1 text-xs font-semibold text-brand-dark/60">{item.sizes.map((s) => s.label).join(' · ')}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-2xl text-brand-red">
            {hasSizes && <span className="mr-1 font-sans text-xs font-bold text-brand-dark/60">from</span>}
            {formatPrice(startPrice)}
          </span>
          <button
            onClick={handleAdd}
            className="rounded-xl border-2 border-brand-dark bg-brand-yellow px-4 py-1.5 font-bold transition hover:bg-brand-red hover:text-white active:scale-95"
          >
            {hasSizes ? 'Choose' : '+ Add'}
          </button>
        </div>
      </div>
    </article>
  )
}
