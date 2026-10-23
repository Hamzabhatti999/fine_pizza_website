export default function Footer() {
  return (
    <footer className="border-t-4 border-brand-dark bg-brand-dark py-10 text-center text-brand-yellow">
      <p className="font-display text-4xl tracking-wide">FINE PIZZA</p>
      <p className="mt-1 text-xs font-bold tracking-[0.3em] text-white/70">BURGER & SHAWARMA</p>
      <p className="mt-6 text-sm text-white/50">© {new Date().getFullYear()} Fine Pizza, Rawalpindi. Made with 🧀 and 🔥.</p>
    </footer>
  )
}
