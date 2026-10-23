import { findItem, formatPrice } from '../data/menu'
import { useCart } from '../context/CartContext'

const DEALS = [
  { id: 'big-deal', title: 'BIG DEAL', subtitle: '2 Small Chicken Tikka Pizzas', bg: 'bg-brand-red text-white', emoji: '🍕🍕', rotate: '-rotate-1' },
  { id: 'zb-super', title: 'SUPER ZINGER', subtitle: 'Crispy zinger burger + fries', bg: 'bg-white', emoji: '🍔🍟', rotate: 'rotate-1' },
  { id: 'pl-special', title: 'FINE PLATTER', subtitle: 'Creamy chicken, 3 breads, sauces & salad', bg: 'bg-brand-dark text-brand-yellow', emoji: '🍽️', rotate: '-rotate-1' },
]

export default function Deals() {
  const { addLine } = useCart()

  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-5xl tracking-wide sm:text-6xl">
          HOT <span className="text-brand-red">DEALS</span> 🔥
        </h2>
        <p className="mt-2 font-medium text-brand-dark/70">Crowd favourites at prices you'll love</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {DEALS.map((d) => {
          const item = findItem(d.id)
          return (
            <article
              key={d.id}
              className={`group relative overflow-hidden rounded-3xl border-4 border-brand-dark p-6 shadow-brutal transition hover:rotate-0 hover:-translate-y-1 ${d.bg} ${d.rotate}`}
            >
              <div className="absolute -right-6 -top-6 text-[8rem] opacity-20 transition group-hover:scale-110">{d.emoji}</div>
              <div className="relative">
                <div className="text-5xl">{d.emoji}</div>
                <h3 className="mt-4 font-display text-4xl tracking-wide">{d.title}</h3>
                <p className="mt-1 font-medium opacity-80">{d.subtitle}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display text-4xl">{formatPrice(item.price)}</span>
                  <button
                    onClick={() => addLine({ item, unitPrice: item.price })}
                    className="rounded-xl border-3 border-brand-dark bg-brand-yellow px-5 py-2.5 font-bold text-brand-dark shadow-brutal-sm transition hover:-translate-y-0.5 active:translate-y-0.5"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
