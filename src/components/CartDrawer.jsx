import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/menu'
import Checkout from './Checkout'
import OrderSuccess from './OrderSuccess'

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, changeQty, removeLine } = useCart()
  const [step, setStep] = useState('cart')
  const [order, setOrder] = useState(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  const close = () => {
    closeCart()
    if (step === 'success') {
      setStep('cart')
      setOrder(null)
    }
  }

  const titles = { cart: 'Your Order 🛒', checkout: 'Checkout 🛵', success: 'Order Placed! 🎉' }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-brand-dark/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={close} />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l-4 border-brand-dark bg-brand-cream transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between border-b-4 border-brand-dark bg-brand-yellow px-5 py-4">
          <div className="flex items-center gap-3">
            {step === 'checkout' && (
              <button onClick={() => setStep('cart')} className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand-dark bg-white font-bold" aria-label="Back">
                ←
              </button>
            )}
            <h2 className="font-display text-3xl tracking-wide">{titles[step]}</h2>
          </div>
          <button onClick={close} className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand-dark bg-white font-bold" aria-label="Close cart">
            ✕
          </button>
        </header>

        {step === 'cart' && (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="text-7xl">🍽️</div>
                  <p className="mt-4 font-display text-2xl">YOUR PLATE IS EMPTY</p>
                  <p className="mt-1 text-brand-dark/70">Let's fix that – the menu is calling!</p>
                  <a href="#menu" onClick={close} className="mt-6 rounded-xl border-3 border-brand-dark bg-brand-red px-6 py-3 font-bold text-white shadow-brutal-sm">
                    Browse Menu
                  </a>
                </div>
              ) : (
                lines.map((l) => (
                  <div key={l.key} className="flex items-center gap-3 rounded-2xl border-3 border-brand-dark bg-white p-3">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-yellow text-3xl">{l.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold">{l.name}</p>
                      <p className="text-xs text-brand-dark/60">
                        {[l.size, l.extraTopping && 'Extra topping'].filter(Boolean).join(' · ') || formatPrice(l.unitPrice)}
                      </p>
                      <p className="text-sm font-bold text-brand-red">{formatPrice(l.unitPrice * l.qty)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center rounded-xl border-2 border-brand-dark">
                        <button onClick={() => changeQty(l.key, -1)} className="px-2.5 py-1 font-bold" aria-label="Decrease">−</button>
                        <span className="w-6 text-center font-bold">{l.qty}</span>
                        <button onClick={() => changeQty(l.key, 1)} className="px-2.5 py-1 font-bold" aria-label="Increase">+</button>
                      </div>
                      <button onClick={() => removeLine(l.key)} className="text-xs font-semibold text-brand-dark/50 hover:text-brand-red">
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {lines.length > 0 && (
              <footer className="space-y-3 border-t-4 border-brand-dark bg-white p-5">
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-brand-dark/60">Delivery charges (if any) are confirmed by the branch.</p>
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full rounded-2xl border-3 border-brand-dark bg-brand-red py-4 font-display text-2xl tracking-wide text-white shadow-brutal-sm transition hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  CHECKOUT →
                </button>
              </footer>
            )}
          </>
        )}

        {step === 'checkout' && (
          <Checkout
            onPlaced={(o) => {
              setOrder(o)
              setStep('success')
            }}
          />
        )}

        {step === 'success' && order && <OrderSuccess order={order} onDone={close} />}
      </aside>
    </div>
  )
}
