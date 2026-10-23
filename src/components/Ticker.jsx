const ITEMS = ['🍕 Fresh Hot Pizza', '🛵 Home Delivery', '🍔 Super Zinger + Fries', '🌯 Jumbo Shawarma', '🔥 Hot Wings', '👑 Crown Crust', '🧀 Extra Cheesy']

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-b-4 border-brand-dark bg-brand-red py-3 text-white">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl tracking-wide">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-brand-yellow">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
