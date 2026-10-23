import { useState } from 'react'

const CARDS = [
  { src: '/menu-card/cover.jpg', alt: 'Fine Pizza cover with branch details' },
  { src: '/menu-card/pizza.jpg', alt: 'Pizza menu' },
  { src: '/menu-card/burgers.jpg', alt: 'Burgers, sandwiches and wings menu' },
  { src: '/menu-card/shawarma.jpg', alt: 'Shawarma, rolls and platters menu' },
]

export default function MenuGallery() {
  const [open, setOpen] = useState(null)

  return (
    <section id="menu-card" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-5xl tracking-wide sm:text-6xl">
          PRINTED <span className="text-brand-red">MENU CARD</span>
        </h2>
        <p className="mt-2 font-medium text-brand-dark/70">Prefer the classic? Tap a page to zoom in.</p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {CARDS.map((c, i) => (
          <button
            key={c.src}
            onClick={() => setOpen(c)}
            className={`overflow-hidden rounded-2xl border-4 border-brand-dark bg-white shadow-brutal transition hover:rotate-0 hover:-translate-y-1 ${
              i % 2 ? 'rotate-2' : '-rotate-2'
            }`}
          >
            <img src={c.src} alt={c.alt} loading="lazy" className="aspect-[1/2] w-full object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-brand-dark/80 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <img src={open.src} alt={open.alt} className="max-h-[90vh] rounded-2xl border-4 border-brand-dark shadow-brutal" />
          <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border-3 border-brand-dark bg-white text-xl font-bold" aria-label="Close">
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
