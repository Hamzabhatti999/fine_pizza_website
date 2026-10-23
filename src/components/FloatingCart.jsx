import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/menu'

export default function FloatingCart() {
  const { count, subtotal, openCart, isOpen, toast } = useCart()

  return (
    <>
      {toast && (
        <div key={toast.id} className="fixed left-1/2 top-24 z-[60] -translate-x-1/2 animate-slide-up rounded-full border-3 border-brand-dark bg-white px-5 py-2.5 font-bold shadow-brutal-sm">
          ✅ {toast.text}
        </div>
      )}

      {count > 0 && !isOpen && (
        <button
          onClick={openCart}
          className="fixed bottom-4 left-4 right-4 z-40 flex animate-slide-up items-center justify-between rounded-2xl border-3 border-brand-dark bg-brand-dark px-5 py-4 font-bold text-brand-yellow shadow-[5px_5px_0_0_#e3262b] sm:left-auto sm:w-96"
        >
          <span className="flex items-center gap-3">
            <span className="grid h-8 min-w-8 place-items-center rounded-full bg-brand-yellow px-2 text-brand-dark">{count}</span>
            View your order
          </span>
          <span>{formatPrice(subtotal)} →</span>
        </button>
      )}
    </>
  )
}
