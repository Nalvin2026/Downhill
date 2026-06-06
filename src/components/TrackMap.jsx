import React, { useMemo } from 'react'

// Brutalist top-down trail rendering.
// `track` shape: { path, stats, checkpoints, elevation, terrain? }
// terrain (optional): { steepZones: [{cx,cy,r}], forestZones: [{cx,cy,r}] }

// Deterministic PRNG so the procedural scenery stays consistent for the same trail.
function seeded(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function hashStr(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

// Sample points along the trail using getTotalLength + getPointAtLength would be
// ideal but requires a rendered <path>. Instead we generate scenery uniformly
// and let the visible trail pass over it — DH courses cut through forest so
// trees on either side of the path reads fine.

export default function TrackMap({ track, series = 'UCI', seedKey = '' }) {
  const trailColor = '#DBFF00'

  // Procedural scenery generation — forest patches + steep-zone shading
  const { trees, steepZones, ridges } = useMemo(() => {
    const rng = seeded(hashStr(seedKey || track.path))
    // 18 trees scattered around the canvas; trail edges will read like they
    // run through forest.
    const trees = Array.from({ length: 18 }, () => ({
      x: 5 + rng() * 90,
      y: 5 + rng() * 90,
      h: 2.6 + rng() * 1.6,
      shade: 0.4 + rng() * 0.5,
    }))
    // 2-3 steep-zone polygons (darker valley/face fills)
    const steepZones = Array.from({ length: 3 }, () => {
      const cx = 15 + rng() * 70
      const cy = 15 + rng() * 70
      const w = 18 + rng() * 22
      const h = 18 + rng() * 22
      return { cx, cy, w, h, op: 0.35 + rng() * 0.25 }
    })
    // A couple of ridge lines (long horizontal-ish lines) for terrain depth
    const ridges = Array.from({ length: 4 }, () => ({
      x1: rng() * 100,
      y1: rng() * 100,
      x2: rng() * 100,
      y2: rng() * 100,
      op: 0.06 + rng() * 0.06,
    }))
    return { trees, steepZones, ridges }
  }, [track.path, seedKey])

  // Chevrons placed at midpoints between consecutive checkpoints — direction
  // arrow on the trail showing rider flow / steepest fall line.
  const chevrons = []
  for (let i = 0; i < track.checkpoints.length - 1; i++) {
    const a = track.checkpoints[i]
    const b = track.checkpoints[i + 1]
    const mx = (a.x + b.x) / 2
    const my = (a.y + b.y) / 2
    const dx = b.x - a.x
    const dy = b.y - a.y
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI
    chevrons.push({ x: mx, y: my, angle })
  }

  return (
    <div className="relative overflow-hidden border-[3px] border-bone bg-ink">
      {/* MAP HEADER */}
      <div className="flex items-center justify-between border-b-[3px] border-bone/80 bg-ash px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone/70">
          ◼ COURSE MAP
        </span>
        <span className="font-pixel text-[14px] leading-none text-acid">
          {series === 'UCI' ? 'UCI / DHI' : 'iXS / DHC'}
        </span>
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="block h-[300px] w-full"
        >
          {/* Steep / valley shading — darker fills for depth */}
          <g>
            {steepZones.map((z, i) => (
              <ellipse
                key={i}
                cx={z.cx}
                cy={z.cy}
                rx={z.w / 2}
                ry={z.h / 2}
                fill="#000"
                fillOpacity={z.op}
              />
            ))}
          </g>

          {/* Elevation bands — gentle horizontal wavy lines suggest contours
              running across the slope (high at top of map, low at bottom). */}
          <g stroke="#EDE9D8" strokeOpacity="0.10" strokeWidth="0.25" fill="none">
            {[15, 30, 45, 60, 75, 90].map((y, i) => {
              const amp = 1.5 + (i % 3)
              return (
                <path
                  key={y}
                  d={`M -2 ${y} Q 20 ${y - amp} 40 ${y} T 80 ${y} T 102 ${y + amp}`}
                />
              )
            })}
          </g>

          {/* Ridge lines — long faint strokes suggesting terrain features */}
          <g stroke="#EDE9D8" fill="none" strokeLinecap="square">
            {ridges.map((r, i) => (
              <line
                key={i}
                x1={r.x1}
                y1={r.y1}
                x2={r.x2}
                y2={r.y2}
                strokeOpacity={r.op}
                strokeWidth="0.25"
              />
            ))}
          </g>

          {/* Faint grid for "scaffolding" feel */}
          <g stroke="#EDE9D8" strokeOpacity="0.05" strokeWidth="0.2">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />
            ))}
          </g>

          {/* Forest — clustered tree triangles */}
          <g>
            {trees.map((t, i) => {
              const x = t.x
              const y = t.y
              const h = t.h
              const w = h * 0.85
              return (
                <g key={i} opacity={t.shade}>
                  {/* Trunk */}
                  <rect
                    x={x - 0.35}
                    y={y - 0.2}
                    width="0.7"
                    height="1.2"
                    fill="#3A3A2E"
                  />
                  {/* Canopy triangle */}
                  <polygon
                    points={`${x},${y - h} ${x - w / 2},${y} ${x + w / 2},${y}`}
                    fill="#1F2D1A"
                    stroke="#2C3F23"
                    strokeWidth="0.18"
                  />
                </g>
              )
            })}
          </g>

          {/* Trail shadow — darker offset line under the main trail */}
          <path
            d={track.path}
            stroke="#0A0A0A"
            strokeWidth="3.4"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            transform="translate(0.6, 0.6)"
          />

          {/* Trail dashed center stripe */}
          <path
            d={track.path}
            stroke={trailColor}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <path
            d={track.path}
            stroke="#0A0A0A"
            strokeWidth="0.4"
            fill="none"
            strokeDasharray="0.8 1.6"
          />

          {/* Direction chevrons — small triangles between checkpoints showing flow */}
          <g>
            {chevrons.map((c, i) => (
              <g
                key={i}
                transform={`translate(${c.x}, ${c.y}) rotate(${c.angle + 90})`}
                opacity="0.85"
              >
                <polygon
                  points="0,-1.6 -1.6,1.2 0,0.4 1.6,1.2"
                  fill="#0A0A0A"
                  stroke={trailColor}
                  strokeWidth="0.35"
                />
              </g>
            ))}
          </g>

          {/* Checkpoints — secondary palette differentiates splits at a glance */}
          {track.checkpoints.map((c, i) => {
            const isStart = i === 0
            const isFinish = i === track.checkpoints.length - 1
            const splitColors = ['#1DC4FD', '#E00D68']
            const fill = isStart
              ? trailColor
              : isFinish
              ? '#FF3336'
              : splitColors[(i - 1) % splitColors.length]
            return (
              <g key={i}>
                <rect
                  x={c.x - 2.2}
                  y={c.y - 2.2}
                  width="4.4"
                  height="4.4"
                  fill={fill}
                  stroke="#0A0A0A"
                  strokeWidth="0.8"
                />
                <g>
                  <rect
                    x={c.x + 3.5}
                    y={c.y - 2.6}
                    width={c.label.length * 2.4 + 3}
                    height="5"
                    fill="#0A0A0A"
                    stroke={fill}
                    strokeWidth="0.4"
                  />
                  <text
                    x={c.x + 5}
                    y={c.y + 1.1}
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="3.2"
                    fontWeight="700"
                    fill={fill}
                  >
                    {c.label}
                  </text>
                </g>
              </g>
            )
          })}
        </svg>

        {/* North arrow + scale overlays — DOM elements over the SVG */}
        <div className="pointer-events-none absolute left-2 top-2 flex items-center gap-1 border-[2px] border-bone/70 bg-ink/80 px-1.5 py-1 font-mono text-[9px] uppercase tracking-widest text-bone/80">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 1 L9 9 L5 7 L1 9 Z" fill="#DBFF00" stroke="#0A0A0A" strokeWidth="0.5" />
          </svg>
          N
        </div>
        {/* Legend — small panel explaining glyphs */}
        <div className="pointer-events-none absolute right-2 top-2 flex flex-col gap-0.5 border-[2px] border-bone/70 bg-ink/80 px-1.5 py-1 font-mono text-[8px] uppercase tracking-widest text-bone/70">
          <div className="flex items-center gap-1.5">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <polygon points="4,0 0,6 4,8 8,6" fill="#1F2D1A" stroke="#2C3F23" strokeWidth="0.4" />
            </svg>
            FOREST
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="10" height="6" viewBox="0 0 10 6">
              <ellipse cx="5" cy="3" rx="4.2" ry="2.4" fill="#000" stroke="#EDE9D8" strokeOpacity="0.5" strokeWidth="0.5" />
            </svg>
            STEEP
          </div>
        </div>
      </div>

      {/* STATS BAR — surface lives in the row below so we don't repeat it here */}
      <div className="grid grid-cols-4 border-t-[3px] border-bone/80 bg-ink">
        {[
          ['LENGTH', track.stats.length],
          ['DROP', track.stats.drop],
          ['MAX %', track.stats.maxGradient],
          ['TOP SPD', track.stats.topSpeed],
        ].map(([label, val], i, arr) => (
          <div
            key={label}
            className={[
              'px-2 py-2',
              i < arr.length - 1 ? 'border-r-[2px] border-bone/30' : '',
            ].join(' ')}
          >
            <div className="font-mono text-[8px] uppercase tracking-widest text-bone/60">
              {label}
            </div>
            <div className="mt-0.5 truncate font-display text-[14px] leading-none tracking-tight text-bone">
              {val}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[2px] border-bone/30 bg-ash px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-bone/70">
        SURFACE / <span className="text-acid">{track.stats.surface}</span>
      </div>
    </div>
  )
}
