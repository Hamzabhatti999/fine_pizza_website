import { formatPrice } from '../data/menu'

function buildWhatsAppMessage(order) {
  const items = order.lines
    .map((l) => `• ${l.qty} x ${l.name}${l.size ? ` (${l.size}${l.extraTopping ? ', extra topping' : ''})` : ''} – ${formatPrice(l.unitPrice * l.qty)}`)
    .join('\n')
  return [
    `🍕 *New Order ${order.id}*`,
    '',
    items,
    '',
    `*Total: ${formatPrice(order.total)}* (${order.payment})`,
    '',
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    order.type === 'delivery' ? `Delivery to: ${order.customer.address}` : `Pickup from: ${order.branch.name}`,
    order.notes && `Notes: ${order.notes}`,
  ]
    .filter((l) => typeof l === 'string')
    .join('\n')
}

export default function OrderSuccess({ order, onDone }) {
  const waLink = `https://wa.me/${order.branch.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage(order))}`

  return (
    <div className="flex flex-1 flex-col overflow-y-auto p-5">
      <div className="text-center">
        <div className="mx-auto grid h-28 w-28 animate-pop place-items-center rounded-full border-4 border-brand-dark bg-green-400 text-6xl shadow-brutal">
          ✓
        </div>
        <h3 className="mt-6 font-display text-4xl tracking-wide">THANK YOU, {order.customer.name.split(' ')[0].toUpperCase()}!</h3>
        <p className="mt-2 text-brand-dark/70">Your order has been received.</p>
        <div className="mx-auto mt-4 inline-block rounded-xl border-3 border-dashed border-brand-dark bg-white px-5 py-2">
          <span className="text-sm font-semibold text-brand-dark/60">Order ID </span>
          <span className="font-display text-2xl text-brand-red">{order.id}</span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border-3 border-brand-dark bg-brand-yellow p-4">
        <p className="font-bold">📲 One last step</p>
        <p className="mt-1 text-sm">Send your order to {order.branch.name} on WhatsApp so the kitchen starts right away.</p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-xl border-3 border-brand-dark bg-green-500 py-3 font-bold text-white shadow-brutal-sm transition hover:-translate-y-0.5"
        >
          Send on WhatsApp
        </a>
        <p className="mt-3 text-center text-sm">
          or call{' '}
          {order.branch.phones.map((p, i) => (
            <span key={p}>
              {i > 0 && ' / '}
              <a href={`tel:${p.replace(/-/g, '')}`} className="font-bold underline">
                {p}
              </a>
            </span>
          ))}
        </p>
      </div>

      <div className="mt-6 rounded-2xl border-3 border-brand-dark bg-white p-4 text-sm">
        <ul className="space-y-1">
          {order.lines.map((l) => (
            <li key={l.key} className="flex justify-between gap-2">
              <span className="truncate">
                {l.qty} × {l.name}
                {l.size && ` (${l.size})`}
              </span>
              <span className="shrink-0 font-semibold">{formatPrice(l.unitPrice * l.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex justify-between border-t-2 border-brand-dark/20 pt-3 text-base font-bold">
          <span>Total ({order.payment})</span>
          <span>{formatPrice(order.total)}</span>
        </div>
        <p className="mt-2 text-brand-dark/60">
          {order.type === 'delivery' ? `🛵 Delivering to: ${order.customer.address}` : `🏃 Pickup from: ${order.branch.address}`}
        </p>
      </div>

      <button onClick={onDone} className="mt-6 rounded-2xl border-3 border-brand-dark bg-white py-3 font-bold shadow-brutal-sm">
        Back to menu
      </button>
    </div>
  )
}
