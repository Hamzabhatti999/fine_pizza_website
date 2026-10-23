import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { BRANCHES, formatPrice } from '../data/menu'

const PHONE_RE = /^(\+92|0092|0)?3\d{2}[-\s]?\d{7}$/

const inputCls =
  'w-full rounded-xl border-3 border-brand-dark bg-white px-4 py-3 font-medium outline-none transition focus:-translate-y-0.5 focus:shadow-brutal-sm'

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-brand-red">{error}</span>}
    </label>
  )
}

export default function Checkout({ onPlaced }) {
  const { lines, subtotal, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', type: 'delivery', branch: BRANCHES[0].id, address: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name'
    if (!PHONE_RE.test(form.phone.trim())) e.phone = 'Enter a valid mobile number, e.g. 03XX-XXXXXXX'
    if (form.type === 'delivery' && form.address.trim().length < 8) e.address = 'Please enter your full delivery address'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    const order = {
      id: `FP-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      customer: { name: form.name.trim(), phone: form.phone.trim(), address: form.address.trim() },
      type: form.type,
      branch: BRANCHES.find((b) => b.id === form.branch),
      notes: form.notes.trim(),
      lines,
      total: subtotal,
      payment: 'Cash on Delivery',
    }

    const history = JSON.parse(localStorage.getItem('finepizza_orders') ?? '[]')
    localStorage.setItem('finepizza_orders', JSON.stringify([order, ...history].slice(0, 20)))

    setTimeout(() => {
      clearCart()
      onPlaced(order)
    }, 700)
  }

  return (
    <form onSubmit={submit} className="flex flex-1 flex-col overflow-hidden" noValidate>
      <div className="flex-1 space-y-5 overflow-y-auto p-5">
        <div className="grid grid-cols-2 gap-3">
          {[
            ['delivery', '🛵', 'Delivery'],
            ['pickup', '🏃', 'Pickup'],
          ].map(([v, icon, label]) => (
            <button
              type="button"
              key={v}
              onClick={() => setForm((f) => ({ ...f, type: v }))}
              className={`rounded-2xl border-3 border-brand-dark p-3 font-bold transition ${
                form.type === v ? 'bg-brand-yellow shadow-brutal-sm -translate-y-0.5' : 'bg-white'
              }`}
            >
              <div className="text-3xl">{icon}</div>
              {label}
            </button>
          ))}
        </div>

        <Field label="Your name" error={errors.name}>
          <input className={inputCls} value={form.name} onChange={set('name')} placeholder="e.g. Ali Khan" autoComplete="name" />
        </Field>

        <Field label="Mobile number" error={errors.phone}>
          <input className={inputCls} value={form.phone} onChange={set('phone')} placeholder="03XX-XXXXXXX" inputMode="tel" autoComplete="tel" />
        </Field>

        <Field label={form.type === 'delivery' ? 'Nearest branch' : 'Pickup from'}>
          <select className={inputCls} value={form.branch} onChange={set('branch')}>
            {BRANCHES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </Field>

        {form.type === 'delivery' && (
          <Field label="Delivery address" error={errors.address}>
            <textarea className={inputCls} rows={3} value={form.address} onChange={set('address')} placeholder="House #, street, area, landmark" autoComplete="street-address" />
          </Field>
        )}

        <Field label="Special instructions (optional)">
          <input className={inputCls} value={form.notes} onChange={set('notes')} placeholder="Extra spicy, no onions…" />
        </Field>

        <div className="rounded-2xl border-3 border-dashed border-brand-dark bg-white p-4">
          <p className="mb-2 font-bold">Order summary</p>
          <ul className="space-y-1 text-sm">
            {lines.map((l) => (
              <li key={l.key} className="flex justify-between gap-2">
                <span className="truncate">
                  {l.qty} × {l.name}
                  {l.size && ` (${l.size}${l.extraTopping ? ', extra topping' : ''})`}
                </span>
                <span className="shrink-0 font-semibold">{formatPrice(l.unitPrice * l.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t-2 border-brand-dark/20 pt-3">
            <span className="text-sm font-semibold">💵 Cash on {form.type === 'delivery' ? 'Delivery' : 'Pickup'}</span>
          </div>
        </div>
      </div>

      <footer className="border-t-4 border-brand-dark bg-white p-5">
        <div className="mb-3 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-2xl border-3 border-brand-dark bg-brand-red py-4 font-display text-2xl tracking-wide text-white shadow-brutal-sm transition hover:-translate-y-0.5 active:translate-y-0.5 disabled:opacity-70"
        >
          {submitting ? 'PLACING ORDER… 🍕' : 'PLACE ORDER'}
        </button>
        <p className="mt-2 text-center text-xs text-brand-dark/60">No account needed. We'll call you to confirm.</p>
      </footer>
    </form>
  )
}
