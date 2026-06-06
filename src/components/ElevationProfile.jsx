import React from 'react'

// Renders a brutalist descent profile from an array of normalised heights (0..100).
// Heights run from start (left, high) to finish (right, low).
export default function ElevationProfile({ elevation, stats }) {
  const points = elevation.map((h, i) => {
    const x = (i / (elevation.length - 1)) * 100
    const y = 100 - h
    return [x, y]
  })

  // Build "under the curve" path for the fill, plus a top-line path for the stroke.
  const linePath = points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(' ')
  const fillPath = `${linePath} L 100 100 L 0 100 Z`

  // Step labels for the X axis
  const ticks = ['START', '25%', '50%', '75%', 'FIN.']

  return (
    <div className="overflow-hidden border-[3px] border-bone bg-ink">
      <div className="flex items-center justify-between border-b-[3px] border-bone/80 bg-ash px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone/70">
          ◼ DESCENT PROFILE
        </span>
        <span className="font-pixel text-[14px] leading-none text-acid">
          {stats.drop} ↓
        </span>
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="block h-[140px] w-full"
        >
          {/* Background grid */}
          <g stroke="#EDE9D8" strokeOpacity="0.08" strokeWidth="0.3">
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} />
            ))}
            {[25, 50, 75].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" />
            ))}
          </g>

          {/* Filled area */}
          <path d={fillPath} fill="#DBFF00" fillOpacity="0.15" />

          {/* Stroke line */}
          <path
            d={linePath}
            fill="none"
            stroke="#DBFF00"
            strokeWidth="1.4"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />

          {/* Endpoint markers — start in acid, finish in siren (secondary red) */}
          <rect x="-1.5" y={100 - elevation[0] - 1.5} width="3" height="3" fill="#DBFF00" />
          <rect
            x={98.5}
            y={100 - elevation[elevation.length - 1] - 1.5}
            width="3"
            height="3"
            fill="#FF3336"
          />
        </svg>
      </div>

      <div className="grid grid-cols-5 border-t-[2px] border-bone/30 bg-ink">
        {ticks.map((t, i) => (
          <div
            key={t}
            className={[
              'px-2 py-1 text-center font-mono text-[9px] uppercase tracking-widest text-bone/60',
              i < ticks.length - 1 ? 'border-r-[1.5px] border-bone/15' : '',
            ].join(' ')}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}
