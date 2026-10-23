const PEPPERONI = [
  [100, 55], [145, 85], [62, 95], [130, 140], [75, 145], [105, 100], [150, 120], [52, 125], [95, 165],
]
const PEPPERS = [
  [80, 70, 20], [125, 60, -30], [160, 100, 60], [90, 125, 10], [120, 165, -50], [60, 160, 40], [140, 155, 80],
]
const OLIVES = [[115, 75], [70, 115], [135, 110], [100, 140], [155, 140], [85, 85]]

export default function PizzaSvg({ className = '' }) {
  return (
    <svg viewBox="0 0 210 210" className={className} aria-hidden="true">
      <circle cx="105" cy="105" r="100" fill="#d98a3a" stroke="#1a0f0a" strokeWidth="5" />
      <circle cx="105" cy="105" r="84" fill="#c0392b" />
      <path
        d="M105 26c18 2 30 10 44 8 14 8 24 22 28 36 4 16 0 26 6 40-2 16-12 30-24 40-14 10-26 12-40 18-16-2-30-6-44-16-12-10-22-24-24-40 0-14 4-26 2-40 6-14 18-26 32-34 6-4 12-10 20-12z"
        fill="#ffd84d"
      />
      {PEPPERONI.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" fill="#b3261e" stroke="#7a1712" strokeWidth="2" />
          <circle cx={x - 3} cy={y - 3} r="2" fill="#e05a4f" />
        </g>
      ))}
      {PEPPERS.map(([x, y, r], i) => (
        <rect key={i} x={x - 9} y={y - 3} width="18" height="6" rx="3" fill="#2e9e44" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {OLIVES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="none" stroke="#1a0f0a" strokeWidth="3" />
      ))}
      {[0, 60, 120].map((deg) => (
        <line key={deg} x1="105" y1="5" x2="105" y2="205" stroke="#1a0f0a" strokeOpacity="0.25" strokeWidth="2" transform={`rotate(${deg} 105 105)`} />
      ))}
    </svg>
  )
}
