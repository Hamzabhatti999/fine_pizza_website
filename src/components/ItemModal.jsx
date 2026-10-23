import { useEffect, useState } from 'react'
import { EXTRA_TOPPING, formatPrice } from '../data/menu'
import { useCart } from '../context/CartContext'
import PizzaSvg from './PizzaSvg'

const SIZE_SCALE = { Small: 'w-20', Medium: 'w-24', Large: 'w-28', 'X-Large': 'w-32' }

export default function ItemModal({ item, color, onClose }) {
  const { addLine } = useCart()
  const [size, setSize] = useState(item.sizes[Math.min(1, item.sizes.length - 1)])
  const [extra, setExtra] = useState(false)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const unitPrice = size.price + (extra ? EXTRA_TOPPING[size.label] : 0)

  const submit = () => {
    addLine({ item, size, extraTopping: extra, qty, unitPrice })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-brand-dark/60 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg animate-slide-up overflow-hidden rounded-t-3xl border-4 border-brand-dark bg-white shadow-brutal sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
      >
        <div className={`relative flex items-center gap-4 border-b-4 border-brand-dark bg-gradient-to-br p-5 text-white ${color}`}>
          <div className="grid h-36 w-36 shrink-0 place-items-center">
            <PizzaSvg className={`${SIZE_SCALE[size.label]} transition-all duration-300 drop-shadow-[4px_4px_0_rgba(26,15,10,1)]`} />
          </div>
          <div>
            <h3 className="font-display text-3xl tracking-wide text-stroke">{item.name}</h3>
            {item.desc && <p className="mt-1 text-sm font-medium">{item.desc}</p>}
          </div>
          <button onClick={onClose} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border-2 border-brand-dark bg-white text-lg font-bold text-brand-dark" aria-label="Close">
            ✕
          </button>
        </div>

        <div className="space-y-6 p-5">
          <div>
            <h4 className="mb-3 font-bold">Choose size</h4>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {item.sizes.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setSize(s)}
                  className={`rounded-2xl border-3 border-brand-dark p-3 text-center transition ${
                    size.label === s.label ? 'bg-brand-yellow shadow-brutal-sm -translate-y-0.5' : 'bg-brand-cream hover:bg-white'
                  }`}
                >
                  <div className="font-bold">{s.label}</div>
                  <div className="text-xs text-brand-dark/60">{s.inches}"</div>
                  <div className="mt-1 text-sm font-bold text-brand-red">{formatPrice(s.price)}</div>
                </button>
              ))}
            </div>
          </div>

          <label className="flex cursor-pointer items-center justify-between rounded-2xl border-3 border-brand-dark bg-brand-cream p-4">
            <span className="flex items-center gap-3">
              <input type="checkbox" checked={extra} onChange={(e) => setExtra(e.target.checked)} className="h-5 w-5 accent-brand-red" />
              <span className="font-bold">Extra Topping 🧀</span>
            </span>
            <span className="font-bold text-brand-red">+ {formatPrice(EXTRA_TOPPING[size.label])}</span>
          </label>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-2xl border-3 border-brand-dark">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3 text-xl font-bold" aria-label="Decrease">−</button>
              <span className="w-8 text-center text-lg font-bold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-3 text-xl font-bold" aria-label="Increase">+</button>
            </div>
            <button
              onClick={submit}
              className="flex flex-1 items-center justify-between rounded-2xl border-3 border-brand-dark bg-brand-red px-5 py-3 font-bold text-white shadow-brutal-sm transition hover:-translate-y-0.5 active:translate-y-0.5"
            >
              <span>Add to order</span>
              <span>{formatPrice(unitPrice * qty)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
