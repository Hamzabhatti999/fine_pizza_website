import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'finepizza_cart'

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existing = state.find((l) => l.key === action.line.key)
      if (existing) {
        return state.map((l) => (l.key === action.line.key ? { ...l, qty: l.qty + action.line.qty } : l))
      }
      return [...state, action.line]
    }
    case 'qty':
      return state
        .map((l) => (l.key === action.key ? { ...l, qty: l.qty + action.delta } : l))
        .filter((l) => l.qty > 0)
    case 'remove':
      return state.filter((l) => l.key !== action.key)
    case 'clear':
      return []
    default:
      return state
  }
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, [], loadCart)
  const [isOpen, setOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const value = useMemo(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0)
    const subtotal = lines.reduce((s, l) => s + l.qty * l.unitPrice, 0)
    return {
      lines,
      count,
      subtotal,
      isOpen,
      toast,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      addLine: ({ item, size, extraTopping = false, qty = 1, unitPrice }) => {
        const key = [item.id, size?.label, extraTopping ? 'xt' : ''].filter(Boolean).join('|')
        dispatch({
          type: 'add',
          line: { key, itemId: item.id, name: item.name, emoji: item.emoji, size: size?.label ?? null, extraTopping, unitPrice, qty },
        })
        setToast({ id: Date.now(), text: `${qty} × ${item.name}${size ? ` (${size.label})` : ''} added!` })
      },
      changeQty: (key, delta) => dispatch({ type: 'qty', key, delta }),
      removeLine: (key) => dispatch({ type: 'remove', key }),
      clearCart: () => dispatch({ type: 'clear' }),
    }
  }, [lines, isOpen, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
