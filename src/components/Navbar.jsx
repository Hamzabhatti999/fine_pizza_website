import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#deals', label: 'Deals' },
  { href: '#menu-card', label: 'Menu Card' },
  { href: '#branches', label: 'Branches' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [bump, setBump] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!count) return
    setBump(true)
    const t = setTimeout(() => setBump(false), 350)
    return () => clearTimeout(t)
  }, [count])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b-4 border-brand-dark transition-colors ${
        scrolled ? 'bg-brand-yellow/95 backdrop-blur' : 'bg-brand-yellow'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-11 w-11 place-items-center rounded-full border-3 border-brand-dark bg-white text-2xl shadow-brutal-sm transition-transform group-hover:rotate-12">
            👨‍🍳
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-wide text-brand-red sm:text-3xl">FINE PIZZA</span>
            <span className="block text-[10px] font-bold tracking-[0.25em] text-brand-dark">BURGER & SHAWARMA</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 font-semibold transition hover:bg-brand-dark hover:text-brand-yellow">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={openCart}
          className="relative flex items-center gap-2 rounded-full border-3 border-brand-dark bg-brand-red px-4 py-2 font-bold text-white shadow-brutal-sm transition hover:-translate-y-0.5 active:translate-y-0.5"
          aria-label="Open cart"
        >
          <span className="text-xl">🛒</span>
          <span className="hidden sm:inline">Cart</span>
          <span
            className={`grid h-6 min-w-6 place-items-center rounded-full bg-brand-yellow px-1.5 text-sm text-brand-dark ${bump ? 'animate-pop' : ''}`}
          >
            {count}
          </span>
        </button>
      </nav>
    </header>
  )
}
