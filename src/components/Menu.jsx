import { useEffect, useMemo, useRef, useState } from 'react'
import { CATEGORIES } from '../data/menu'
import MenuItemCard from './MenuItemCard'
import ItemModal from './ItemModal'

export default function Menu() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(CATEGORIES[0].id)
  const [selected, setSelected] = useState(null)
  const tabsRef = useRef(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CATEGORIES
    return CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter((i) => `${i.name} ${i.desc ?? ''} ${c.name}`.toLowerCase().includes(q)),
    })).filter((c) => c.items.length)
  }, [query])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id.replace('cat-', ''))
      },
      { rootMargin: '-150px 0px -60% 0px' },
    )
    document.querySelectorAll('[data-category]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  useEffect(() => {
    tabsRef.current?.querySelector(`[data-tab="${active}"]`)?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [active])

  return (
    <section id="menu" className="border-y-4 border-brand-dark bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-5xl tracking-wide sm:text-6xl">
              OUR <span className="text-brand-red">MENU</span>
            </h2>
            <p className="mt-2 font-medium text-brand-dark/70">Tap anything tasty to add it to your order.</p>
          </div>
          <label className="relative w-full md:w-80">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search zinger, tikka, wings…"
              className="w-full rounded-2xl border-3 border-brand-dark bg-brand-cream py-3 pl-12 pr-4 font-medium shadow-brutal-sm outline-none focus:bg-white"
            />
          </label>
        </div>
      </div>

      <div className="sticky top-[72px] z-30 mt-8 border-y-4 border-brand-dark bg-brand-yellow">
        <div ref={tabsRef} className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3">
          {filtered.map((c) => (
            <a
              key={c.id}
              data-tab={c.id}
              href={`#cat-${c.id}`}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border-3 border-brand-dark px-4 py-1.5 font-bold transition ${
                active === c.id ? 'bg-brand-dark text-brand-yellow' : 'bg-white hover:bg-brand-cream'
              }`}
            >
              <span>{c.emoji}</span>
              {c.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20">
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-6xl">🤷‍♂️</div>
            <p className="mt-4 text-lg font-semibold">Nothing matches “{query}”. Try “zinger” or “pizza”.</p>
          </div>
        )}

        {filtered.map((c) => (
          <div key={c.id} id={`cat-${c.id}`} data-category className="pt-12">
            <div className="mb-6 flex items-center gap-3">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl border-3 border-brand-dark bg-gradient-to-br text-3xl shadow-brutal-sm ${c.color}`}>
                {c.emoji}
              </span>
              <h3 className="font-display text-3xl tracking-wide sm:text-4xl">{c.name}</h3>
              <span className="ml-1 rounded-full bg-brand-dark px-3 py-0.5 text-sm font-bold text-brand-yellow">{c.items.length}</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.items.map((item) => (
                <MenuItemCard key={item.id} item={item} color={c.color} onCustomize={() => setSelected({ item, color: c.color })} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && <ItemModal item={selected.item} color={selected.color} onClose={() => setSelected(null)} />}
    </section>
  )
}
