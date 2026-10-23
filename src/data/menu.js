export const BRANCHES = [
  {
    id: 'dhamial',
    name: 'Branch 1 – Dhamial Road',
    address: 'Ashraf Colony, Dhamial Road, Rawalpindi',
    phones: ['0349-0044100', '0311-4410012'],
    whatsapp: '923490044100',
  },
  {
    id: 'chakri',
    name: 'Branch 2 – Chakri Road',
    address: 'Peer Mehar Ali Shah Town, Chakri Road, Rawalpindi',
    phones: ['0332-4410012', '0310-0553306'],
    whatsapp: '923324410012',
  },
]

const size = (label, inches, price) => ({ label, inches, price })
const regularSizes = [size('Small', 7, 550), size('Medium', 10, 950), size('Large', 13, 1550), size('X-Large', 16, 1950)]
const standardSizes = [size('Small', 7, 650), size('Medium', 10, 1200), size('Large', 13, 1950), size('X-Large', 16, 2650)]

export const EXTRA_TOPPING = { Small: 120, Medium: 200, Large: 300, 'X-Large': 400 }

export const CATEGORIES = [
  {
    id: 'deals',
    name: 'Deals',
    emoji: '🎉',
    color: 'from-fuchsia-500 to-pink-500',
    items: [
      { id: 'big-deal', name: 'Big Deal', desc: '2 Small Chicken Tikka Pizzas', price: 1050, emoji: '🍕🍕', tag: 'Best Value' },
    ],
  },
  {
    id: 'regular-pizza',
    name: 'Regular Pizza',
    emoji: '🍕',
    color: 'from-orange-500 to-red-500',
    items: [
      { id: 'pz-tikka', name: 'Chicken Tikka', desc: 'Spicy tikka chunks, onions & capsicum', sizes: regularSizes, emoji: '🍕', tag: 'Bestseller' },
      { id: 'pz-supreme', name: 'Chicken Supreme', desc: 'Loaded chicken with veggies & olives', sizes: regularSizes, emoji: '🍕' },
      { id: 'pz-fajita', name: 'Fajita', desc: 'Fajita chicken, onions & peppers', sizes: regularSizes, emoji: '🍕' },
      { id: 'pz-mexican', name: 'Mexican Chili', desc: 'Fiery chilies with a Mexican kick', sizes: regularSizes, emoji: '🌶️' },
      { id: 'pz-grilled', name: 'Grilled Pizza', desc: 'Smoky grilled chicken goodness', sizes: regularSizes, emoji: '🔥' },
      { id: 'pz-veggie', name: 'Veggie Lover', desc: 'Fresh garden veggies & cheese', sizes: regularSizes, emoji: '🥦' },
      { id: 'pz-hotspicy', name: 'Hot n Spicy', desc: 'For those who like it HOT', sizes: regularSizes, emoji: '🌶️' },
    ],
  },
  {
    id: 'standard-pizza',
    name: 'Standard Pizza',
    emoji: '⭐',
    color: 'from-amber-500 to-orange-600',
    items: [
      { id: 'pz-bbq', name: 'BBQ', desc: 'Smoky BBQ chicken & sauce', sizes: standardSizes, emoji: '🍖' },
      { id: 'pz-finespecial', name: 'Fine Special', desc: 'Our signature house pizza', sizes: standardSizes, emoji: '👨‍🍳', tag: 'Signature' },
      { id: 'pz-creamy', name: 'Creamy Crust', desc: 'Creamy-filled crust bites', sizes: standardSizes, emoji: '🧀' },
    ],
  },
  {
    id: 'extreme-crust',
    name: 'Extreme Crust',
    emoji: '👑',
    color: 'from-yellow-500 to-amber-600',
    items: [
      { id: 'pz-supercheese', name: 'Super Cheese', desc: 'Triple-layer cheese overload', sizes: [size('Small', 7, 800), size('Medium', 10, 1300), size('Large', 13, 2200), size('X-Large', 16, 2900)], emoji: '🧀' },
      { id: 'pz-crown', name: 'Crown Crust', desc: 'Royal crown-shaped stuffed crust', sizes: [size('Medium', 10, 1300), size('Large', 13, 2200), size('X-Large', 16, 2900)], emoji: '👑', tag: 'Must Try' },
      { id: 'pz-stuff', name: 'Stuff Crust', desc: 'Cheese-stuffed crust edges', sizes: [size('Small', 7, 900), size('Medium', 10, 1550), size('Large', 13, 2500), size('X-Large', 16, 3200)], emoji: '🥖' },
    ],
  },
  {
    id: 'patty-burger',
    name: 'Patty Burger',
    emoji: '🍔',
    color: 'from-red-500 to-rose-600',
    items: [
      { id: 'pb-fries', name: 'Chicken Patty Burger + Fries', price: 300, emoji: '🍔' },
      { id: 'pb-cheese', name: 'Chicken Patty Cheese Burger', price: 350, emoji: '🍔' },
      { id: 'pb-special', name: 'Chicken Special Patty Burger', desc: 'Olives + Jalapenos + Egg + Cheese', price: 450, emoji: '🍔' },
      { id: 'pb-double', name: 'Double Decker Burger + Cheese', desc: 'Double patties + Cheese', price: 600, emoji: '🍔', tag: 'Huge' },
    ],
  },
  {
    id: 'zinger-burger',
    name: 'Zinger Burger',
    emoji: '🍗',
    color: 'from-orange-500 to-amber-500',
    items: [
      { id: 'zb-super', name: 'Super Zinger + Fries', price: 400, emoji: '🍔', tag: 'Bestseller' },
      { id: 'zb-regular', name: 'Regular Zinger Burger', price: 330, emoji: '🍔' },
      { id: 'zb-cheese', name: 'Zinger Cheese Burger', price: 380, emoji: '🧀' },
      { id: 'zb-mighty', name: 'Super Zinger Mighty', price: 600, emoji: '💪' },
      { id: 'zb-pizza', name: 'Zinger Pizza Burger', price: 600, emoji: '🍕' },
    ],
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    emoji: '🥚',
    color: 'from-lime-500 to-green-600',
    items: [
      { id: 'cb-regular', name: 'Chicken Burger', desc: 'Mesh Chicken + Salad + Fry Egg', price: 350, emoji: '🍔' },
      { id: 'cb-cheese', name: 'Chicken Cheese Burger', desc: 'Mesh Chicken + Salad + Fry Egg + Cheese', price: 400, emoji: '🧀' },
      { id: 'cb-special', name: 'Special Chicken Burger', desc: 'Mesh Chicken + Salad + Olives + Jalapenos + Fry Egg + Cheese, served with fries', price: 450, emoji: '🍟' },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    emoji: '🥪',
    color: 'from-teal-500 to-emerald-600',
    items: [
      { id: 'sw-chicken', name: 'Chicken Sandwich', price: 350, emoji: '🥪' },
      { id: 'sw-cheese', name: 'Chicken Cheese Sandwich', price: 400, emoji: '🥪' },
      { id: 'sw-club', name: 'Club Cheese Sandwich', price: 400, emoji: '🥪' },
      { id: 'sw-tikka', name: 'Chicken Tikka Sandwich', price: 400, emoji: '🥪' },
      { id: 'sw-special', name: 'Fine Special Sandwich', price: 450, emoji: '👨‍🍳', tag: 'Signature' },
    ],
  },
  {
    id: 'hot-wings',
    name: 'Hot Wings',
    emoji: '🔥',
    color: 'from-red-600 to-orange-500',
    items: [
      { id: 'hw-6', name: '6 Piece Hot Wings', price: 390, emoji: '🍗' },
      { id: 'hw-10', name: '10 Piece Hot Wings', price: 580, emoji: '🍗' },
      { id: 'hw-12', name: '12 Piece Hot Wings', price: 680, emoji: '🍗', tag: 'Share it' },
    ],
  },
  {
    id: 'shawarma',
    name: 'Shawarma',
    emoji: '🌯',
    color: 'from-yellow-500 to-orange-500',
    items: [
      { id: 'sh-small', name: 'Small Shawarma', price: 150, emoji: '🌯' },
      { id: 'sh-large', name: 'Large Shawarma', price: 200, emoji: '🌯' },
      { id: 'sh-lcheese', name: 'Large Cheese Shawarma', price: 250, emoji: '🧀' },
      { id: 'sh-jumbo', name: 'Special Jumbo Shawarma', price: 350, emoji: '🌯', tag: 'Jumbo' },
      { id: 'sh-tortilla', name: 'Tortilla Wrap', price: 400, emoji: '🌮' },
    ],
  },
  {
    id: 'paratha-roll',
    name: 'Paratha Roll',
    emoji: '🫓',
    color: 'from-amber-600 to-yellow-500',
    items: [
      { id: 'pr-shawarma', name: 'Paratha Shawarma', price: 330, emoji: '🫓' },
      { id: 'pr-cheese', name: 'Paratha Shawarma with Cheese', price: 380, emoji: '🧀' },
      { id: 'pr-special', name: 'Fine Special Paratha Roll', price: 480, emoji: '👨‍🍳' },
    ],
  },
  {
    id: 'zinger-roll',
    name: 'Zinger Roll',
    emoji: '🌯',
    color: 'from-orange-600 to-red-500',
    items: [
      { id: 'zr-regular', name: 'Zinger Roll', price: 380, emoji: '🌯' },
      { id: 'zr-cheese', name: 'Zinger Roll with Cheese', price: 430, emoji: '🧀' },
      { id: 'zr-special', name: 'Special Roll', desc: 'Cheese + Olives + Jalapenos', price: 480, emoji: '🌶️' },
    ],
  },
  {
    id: 'zinger-shawarma',
    name: 'Zinger Shawarma',
    emoji: '⚡',
    color: 'from-rose-500 to-red-600',
    items: [
      { id: 'zs-regular', name: 'Zinger Shawarma', price: 330, emoji: '🌯' },
      { id: 'zs-cheese', name: 'Zinger Cheese Shawarma', price: 380, emoji: '🧀' },
      { id: 'zs-special', name: 'Fine Sp. Zinger Shawarma', desc: 'Olives + Cheese + Jalapenos', price: 480, emoji: '👨‍🍳' },
    ],
  },
  {
    id: 'platter',
    name: 'Platter',
    emoji: '🍽️',
    color: 'from-violet-500 to-purple-600',
    items: [
      { id: 'pl-shawarma', name: 'Shawarma Platter', desc: 'Creamy Chicken + 2 Breads + Garlic Mayo + Chili Sauce + Mix Salad', price: 450, emoji: '🍽️' },
      { id: 'pl-special', name: 'Fine Special Platter', desc: 'Creamy Chicken + Olives + Jalapenos & Cheese + 3 Breads + Garlic Mayo + Chilli Sauce + Mix Salad', price: 600, emoji: '🍽️', tag: 'Feast' },
    ],
  },
]

export const findItem = (id) => {
  for (const c of CATEGORIES) {
    const item = c.items.find((i) => i.id === id)
    if (item) return item
  }
  return null
}

export const formatPrice = (n) => `Rs. ${n.toLocaleString('en-PK')}`
