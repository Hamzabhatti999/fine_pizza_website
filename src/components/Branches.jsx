import { BRANCHES } from '../data/menu'

export default function Branches() {
  return (
    <section id="branches" className="border-t-4 border-brand-dark bg-brand-red py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-5xl tracking-wide text-brand-yellow text-stroke sm:text-6xl">FIND US 📍</h2>
          <p className="mt-2 font-medium text-white/80">Two branches in Rawalpindi, both delivering hot to your door.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {BRANCHES.map((b, i) => (
            <article key={b.id} className="rounded-3xl border-4 border-brand-dark bg-white p-6 text-brand-dark shadow-brutal">
              <div className="flex items-start gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-3 border-brand-dark bg-brand-yellow font-display text-3xl">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl tracking-wide">{b.name}</h3>
                  <p className="mt-1 font-medium text-brand-dark/70">{b.address}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {b.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/-/g, '')}`}
                    className="rounded-xl border-3 border-brand-dark bg-brand-cream px-4 py-2 font-bold transition hover:bg-brand-yellow"
                  >
                    📞 {p}
                  </a>
                ))}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Fine Pizza ${b.address}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border-3 border-brand-dark bg-brand-dark px-4 py-2 font-bold text-brand-yellow"
                >
                  🗺️ Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
