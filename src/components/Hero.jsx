import PizzaSvg from './PizzaSvg'

const FLOATERS = [
  { e: '🍔', cls: 'left-[4%] top-[18%] text-5xl', delay: '0s' },
  { e: '🌯', cls: 'right-[6%] top-[10%] text-5xl', delay: '1s' },
  { e: '🍟', cls: 'left-[45%] bottom-[6%] text-4xl', delay: '2s' },
  { e: '🍗', cls: 'right-[40%] top-[6%] text-4xl', delay: '0.5s' },
  { e: '🌶️', cls: 'left-[10%] bottom-[12%] text-4xl', delay: '1.5s' },
  { e: '🧀', cls: 'right-[4%] bottom-[18%] text-4xl', delay: '2.5s' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-brand-dark bg-brand-yellow bg-dots">
      {FLOATERS.map((f) => (
        <span
          key={f.e}
          className={`pointer-events-none absolute hidden select-none animate-float sm:block ${f.cls}`}
          style={{ animationDelay: f.delay }}
        >
          {f.e}
        </span>
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border-3 border-brand-dark bg-white px-4 py-1.5 text-sm font-bold shadow-brutal-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Ovens are hot · Home delivery in Rawalpindi
          </span>

          <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl">
            <span className="block text-brand-dark">HOT.</span>
            <span className="block text-brand-red text-stroke">CHEESY.</span>
            <span className="block text-white text-stroke">FINE.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg font-medium">
            Pizzas, zinger burgers, shawarmas & wings made fresh to order. No sign-up, no fuss – just pick, order & eat.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-2xl border-3 border-brand-dark bg-brand-red px-8 py-4 font-display text-2xl tracking-wide text-white shadow-brutal transition hover:-translate-y-1 active:translate-y-0.5"
            >
              ORDER NOW 🛵
            </a>
            <a
              href="#deals"
              className="rounded-2xl border-3 border-brand-dark bg-white px-8 py-4 font-display text-2xl tracking-wide shadow-brutal transition hover:-translate-y-1 active:translate-y-0.5"
            >
              SEE DEALS
            </a>
          </div>

          <dl className="mt-10 flex gap-8">
            {[
              ['50+', 'Menu items'],
              ['2', 'Branches'],
              ['0', 'Sign-ups needed'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-4xl text-brand-red">{n}</dt>
                <dd className="text-sm font-semibold">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-brand-red blur-3xl opacity-40" />
          <PizzaSvg className="relative w-full drop-shadow-[8px_8px_0_rgba(26,15,10,1)] animate-spin-slow" />
          <div className="absolute -left-2 top-6 rotate-[-12deg] rounded-2xl border-3 border-brand-dark bg-white px-4 py-2 text-center shadow-brutal">
            <div className="text-xs font-bold uppercase">Pizzas from</div>
            <div className="font-display text-3xl text-brand-red">Rs. 550</div>
          </div>
          <div className="absolute -right-2 bottom-8 rotate-[10deg] rounded-2xl border-3 border-brand-dark bg-brand-dark px-4 py-2 text-center text-brand-yellow shadow-brutal">
            <div className="text-xs font-bold uppercase">Big Deal</div>
            <div className="font-display text-3xl">2 for 1050</div>
          </div>
        </div>
      </div>
    </section>
  )
}
