import React, { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Live race telemetry HUD — fully fictitious until a real data feed exists.
// Layout mirrors a broadcast-style dashboard: timer, sectors, splits, then
// stacked telemetry panels. All values fluctuate via JS so the screen feels
// genuinely live.
// ─────────────────────────────────────────────────────────────────────────────

// Tiny helper for shaping values without locale separators sneaking in.
const f1 = (n) => n.toFixed(1)
const f2 = (n) => n.toFixed(2)

function useTicker(initial, fn, ms = 1000) {
  const [v, setV] = useState(initial)
  // Keep the latest fn in a ref so the effect deps only include `ms`.
  // Without this, rAF-driven 60fps re-renders elsewhere (useTimer /
  // useSmoothValue) would re-create the inline fn every render →
  // useEffect would tear down + re-init the interval before it ever
  // fires its 400-1000ms callback, leaving the value frozen.
  const fnRef = useRef(fn)
  useEffect(() => { fnRef.current = fn })
  useEffect(() => {
    const id = setInterval(() => setV((prev) => fnRef.current(prev)), ms)
    return () => clearInterval(id)
  }, [ms])
  return v
}

/**
 * Easing interpolation toward a moving target — runs at 60fps via rAF.
 * Gives the rest of the UI a "needle sweep" feel instead of value snaps.
 * `easing` 0..1 — higher = faster catch-up.
 */
function useSmoothValue(target, easing = 0.08) {
  const [display, setDisplay] = useState(target)
  const targetRef = useRef(target)
  const displayRef = useRef(target)
  useEffect(() => { targetRef.current = target }, [target])
  useEffect(() => {
    let raf
    const tick = () => {
      const next = displayRef.current + (targetRef.current - displayRef.current) * easing
      displayRef.current = next
      setDisplay(next)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [easing])
  return display
}

function useTimer() {
  // mm:ss.cc since component mount
  const startRef = useRef(performance.now())
  const [now, setNow] = useState(0)
  useEffect(() => {
    let raf
    const tick = (t) => {
      setNow(t - startRef.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  const totalMs = Math.floor(now)
  const m = Math.floor(totalMs / 60000)
  const s = Math.floor((totalMs % 60000) / 1000)
  const cs = Math.floor((totalMs % 1000) / 10)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}

// Block — generic terminal-style framed panel
function Panel({ title, right, children, className = '' }) {
  return (
    <section
      className={[
        'border-[2px] border-bone/40 bg-ink p-3',
        className,
      ].join(' ')}
    >
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-bone/60">
        <span>{title}</span>
        {right && <span className="text-bone/80">{right}</span>}
      </div>
      {children}
    </section>
  )
}

function Bar({ pct, color = 'acid' }) {
  const fill =
    color === 'siren' ? 'bg-siren' :
    color === 'wire' ? 'bg-wire' :
    color === 'punch' ? 'bg-punch' :
    'bg-acid'
  return (
    <div className="h-2 w-full border-[1.5px] border-bone/30 bg-ink">
      <div className={['h-full', fill].join(' ')} style={{ width: `${pct}%` }} />
    </div>
  )
}

export default function Live() {
  // Timer (faux race clock since component mounted; ticks at 60fps)
  const timer = useTimer()

  // Target (raw) values — small random walks at ~2-3 Hz so the dashboard
  // feels alive. Each underlying value is the "discrete" target.
  const speedT = useTicker(64.2, (prev) => clamp(prev + rand(-4, 4), 38, 78), 500)
  const gForceT = useTicker(2.8, (prev) => clamp(prev + rand(-0.7, 0.7), 0.4, 4.6), 500)
  const heartRate = useTicker(176, (prev) => clamp(Math.round(prev + rand(-4, 4)), 162, 198), 1100)
  const leanT = useTicker(28, (prev) => clamp(prev + rand(-14, 14), -52, 52), 400)
  const gear = useTicker(7, (prev) => clamp(prev + (Math.random() > 0.7 ? rand(-1, 1, true) : 0), 4, 9), 1500)
  const cadence = useTicker(92, (prev) => clamp(Math.round(prev + rand(-6, 6)), 60, 115), 900)
  const brakeFront = useTicker(64, (prev) => clamp(Math.round(prev + rand(-8, 8)), 0, 95), 600)
  const brakeRear = useTicker(36, (prev) => clamp(Math.round(prev + rand(-6, 6)), 0, 80), 600)
  const wind = useTicker(14, (prev) => clamp(Math.round(prev + rand(-2, 2)), 6, 22), 4000)

  // Smoothed display values — these are what the gauges + numbers render,
  // so transitions sweep instead of snap.
  const speed = useSmoothValue(speedT, 0.10)
  const gForce = useSmoothValue(gForceT, 0.10)
  const lean = useSmoothValue(leanT, 0.06)  // gentler easing for a heavier "gyro" feel

  // Track max lean per direction across the whole run (resets on mount).
  // Left = negative, Right = positive. Stored as the absolute value seen.
  const [lMax, setLMax] = useState(48)
  const [rMax, setRMax] = useState(42)
  useEffect(() => {
    if (leanT < 0 && Math.abs(leanT) > lMax) setLMax(Math.round(Math.abs(leanT)))
    if (leanT > 0 && leanT > rMax) setRMax(Math.round(leanT))
  }, [leanT, lMax, rMax])

  // 8-bucket HR history for the mini bar chart
  const [hrHistory, setHrHistory] = useState(() =>
    Array.from({ length: 12 }, () => 160 + Math.floor(Math.random() * 30))
  )
  useEffect(() => {
    const id = setInterval(() => {
      setHrHistory((prev) => [...prev.slice(1), heartRate])
    }, 800)
    return () => clearInterval(id)
  }, [heartRate])
  const hrMax = Math.max(...hrHistory, 200)
  const hrMin = Math.min(...hrHistory, 150)

  // Sector status — S1/S2 done, S3 active, S4 pending
  const sectors = [
    { id: 1, status: 'done', delta: '-0.842' },
    { id: 2, status: 'done', delta: '-1.205' },
    { id: 3, status: 'active', delta: '...' },
    { id: 4, status: 'pending', delta: '—' },
  ]

  return (
    <section className="space-y-3 px-3 pt-3 font-mono text-bone">
      {/* ── TOP STATUS STRIP ── */}
      <div className="flex items-center justify-between border-[2px] border-bone/40 bg-ink px-3 py-1.5 text-[10px] uppercase tracking-widest text-bone/60">
        <span>LIVE_FEED: WEATHER_STATION_0</span>
        <span>// WIND_SPEED: {wind} KM/H</span>
      </div>

      {/* ── LIVE BROADCAST HERO ── */}
      <div className="relative overflow-hidden border-[3px] border-acid bg-acid p-3 text-ink">
        <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
        <div className="relative">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="block h-2 w-2 animate-pulseDot rounded-full bg-siren" />
              LIVE_BROADCAST
            </span>
            <span className="opacity-70">LCG_ID :: ROUND-3</span>
          </div>
          <div className="mt-1 font-display text-[18px] leading-tight tracking-tight">
            UCI WORLD CUP : SAALFELDEN—LEOGANG
          </div>
          <div className="mt-0.5 text-[10px] uppercase tracking-widest opacity-70">
            VAL_2_ROLL_DH_RUN
          </div>
          <div className="mt-2 font-display text-[44px] leading-none tabular-nums tracking-[-0.02em]">
            {timer}
          </div>
        </div>
      </div>

      {/* ── SECTORS + CAM FEED + CURRENT RIDER ── */}
      <div className="grid grid-cols-[68px_1fr] gap-3">
        {/* Sectors column — vertical chain with ▽▽ connectors */}
        <div className="flex flex-col items-center border-[2px] border-bone/40 bg-ink py-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-bone/60">
            SECTORS
          </div>
          {sectors.map((s, i) => {
            const next = sectors[i + 1]
            const connectorAcid =
              s.status === 'done' && next && next.status !== 'pending'
            return (
              <React.Fragment key={s.id}>
                <div
                  className={[
                    'flex h-11 w-11 items-center justify-center border-[2px]',
                    s.status === 'done'
                      ? 'border-acid bg-acid text-ink'
                      : s.status === 'active'
                      ? 'animate-pulseDot border-acid bg-acid/10 text-acid'
                      : 'border-bone/40 bg-ink text-bone/40',
                  ].join(' ')}
                >
                  <span className="font-display text-[15px] leading-none">
                    S{s.id}
                  </span>
                </div>
                {next && (
                  <span
                    className={[
                      'my-1.5 font-pixel text-[14px] leading-none',
                      connectorAcid ? 'text-acid' : 'text-bone/30',
                    ].join(' ')}
                  >
                    ▽▽
                  </span>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Right column — cam feed + current rider */}
        <div className="flex flex-col gap-3">
          {/* Cam feed — real photo, dark broadcast treatment */}
          <div>
            {/* Thin acid progress sliver above the frame */}
            <div className="mb-1 h-[3px] w-full border-[1px] border-bone/20 bg-ink">
              <div className="h-full bg-acid" style={{ width: '64%' }} />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border-[2px] border-bone/40 bg-ink">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Amaury_Pierron_2022_MSA.jpg/500px-Amaury_Pierron_2022_MSA.jpg"
                alt="Live cam feed"
                className="absolute inset-0 h-full w-full object-cover grayscale brightness-75 contrast-125"
              />
              {/* CRT scanline + vignette overlays */}
              <div className="pointer-events-none absolute inset-0 scanline opacity-40" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
                }}
              />
              {/* REC pill */}
              <div className="absolute right-2 top-2 flex items-center gap-1 border-[1.5px] border-bone/60 bg-ink/80 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-bone/80">
                <span className="block h-1.5 w-1.5 animate-pulseDot rounded-full bg-siren" />
                REC
              </div>
            </div>
            <div className="mt-1 border-[1.5px] border-bone/40 bg-ink px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-bone/60">
              CAM_FEED_AUTO_FOCUS:{' '}
              <span className="text-acid">ACTIVE</span>
            </div>
          </div>

          {/* Current rider — compact card under the cam */}
          <div className="border-[2px] border-bone/40 bg-ink p-3">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
              <span className="text-acid">CURRENT_RIDER</span>
              <span className="text-bone/60">
                RANK: <span className="text-acid">01</span>
              </span>
            </div>
            <div className="mt-0.5 font-display text-[22px] leading-tight tracking-tight text-bone">
              LOÏC BRUNI
            </div>
            <div className="mt-2 space-y-1.5 border-t-[1.5px] border-bone/15 pt-2">
              {[
                { id: 'SPLIT_01', value: '-0.842', good: true },
                { id: 'SPLIT_02', value: '-1.205', good: true },
                { id: 'SPLIT_03', value: '+0.114', good: false },
              ].map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between text-[11px] uppercase tracking-widest"
                >
                  <span className="font-mono text-bone/70">{s.id}</span>
                  <span
                    className={[
                      'font-display text-[14px] leading-none tabular-nums',
                      s.good ? 'text-acid' : 'text-siren',
                    ].join(' ')}
                  >
                    {s.value}s
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SPEED · G-FORCE ── */}
      <div className="grid grid-cols-2 gap-3">
        <Panel title="CURRENT_SPEED">
          <div className="font-display text-[28px] leading-none tabular-nums text-acid">
            {f1(speed)}
            <span className="ml-1 font-mono text-[12px] text-bone/60">KM/H</span>
          </div>
        </Panel>
        <Panel title="MAX_G_FORCE">
          <div className="font-display text-[28px] leading-none tabular-nums text-acid">
            {f1(gForce)}
            <span className="ml-1 font-mono text-[12px] text-bone/60">G</span>
          </div>
        </Panel>
      </div>

      {/* ── HEART RATE ── */}
      <Panel title="HEART_RATE" right={<>{heartRate} BPM</>}>
        <div className="mt-1 flex items-end gap-1.5">
          {hrHistory.map((v, i) => {
            const pct = ((v - hrMin + 4) / (hrMax - hrMin + 8)) * 100
            return (
              <div
                key={i}
                className={[
                  'w-full bg-acid',
                  i === hrHistory.length - 1 ? '' : 'bg-acid/70',
                ].join(' ')}
                style={{ height: `${Math.max(8, pct)}px` }}
              />
            )
          })}
        </div>
      </Panel>

      {/* ── BRAKING FORCE ── */}
      <Panel
        title="BRAKING_FORCE"
        right={
          <span className="border-[1.5px] border-acid bg-acid px-1 py-0.5 text-[9px] text-ink">
            OPTIMAL
          </span>
        }
      >
        <div className="space-y-2">
          <div>
            <div className="mb-0.5 flex items-baseline justify-between text-[10px] uppercase tracking-widest text-bone/60">
              <span>FRONT_DISC</span>
              <span className="tabular-nums text-bone">{brakeFront}%</span>
            </div>
            <Bar pct={brakeFront} color="acid" />
          </div>
          <div>
            <div className="mb-0.5 flex items-baseline justify-between text-[10px] uppercase tracking-widest text-bone/60">
              <span>REAR_DISC</span>
              <span className="tabular-nums text-bone">{brakeRear}%</span>
            </div>
            <Bar pct={brakeRear} color="acid" />
          </div>
          <div className="mt-2 flex items-baseline justify-between text-[10px] uppercase tracking-widest text-bone/60">
            <span>TEMP_STATUS</span>
            <span className="text-acid">NOMINAL</span>
          </div>
        </div>
      </Panel>

      {/* ── TIRE PRESSURE ── */}
      <Panel title="TIRE_PRESSURE">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'FRONT', value: '22.4' },
            { label: 'REAR', value: '25.1' },
          ].map((t) => (
            <div key={t.label} className="border-[1.5px] border-bone/30 bg-ink px-2 py-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                {t.label}
              </div>
              <div className="mt-0.5 font-display text-[22px] leading-none tabular-nums text-bone">
                {t.value}
                <span className="ml-1 font-mono text-[10px] text-bone/60">PSI</span>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      {/* ── LEAN ANGLE — full-circle gyro gauge ── */}
      <Panel
        title="LEAN_ANGLE"
        right={<span className="animate-pulseDot text-acid">● LIVE</span>}
      >
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <svg viewBox="0 0 100 100" className="block w-full">
            <defs>
              {/* Soft acid glow around the needle */}
              <filter id="needleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer ring */}
            <circle cx="50" cy="50" r="44" fill="none"
                    stroke="#EDE9D8" strokeOpacity="0.35" strokeWidth="0.8" />
            {/* Inner dotted ring */}
            <circle cx="50" cy="50" r="28" fill="none"
                    stroke="#EDE9D8" strokeOpacity="0.18" strokeWidth="0.6"
                    strokeDasharray="1 2" />

            {/* 12 tick marks (every 30°), thicker at cardinals */}
            {Array.from({ length: 12 }).map((_, i) => {
              const deg = i * 30
              const rad = (deg * Math.PI) / 180
              const isCard = i % 3 === 0
              const inner = isCard ? 38 : 41
              const outer = 44
              const x1 = 50 + Math.sin(rad) * inner
              const y1 = 50 - Math.cos(rad) * inner
              const x2 = 50 + Math.sin(rad) * outer
              const y2 = 50 - Math.cos(rad) * outer
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="#EDE9D8"
                      strokeOpacity={isCard ? 0.7 : 0.3}
                      strokeWidth={isCard ? 1.2 : 0.6} />
              )
            })}

            {/* Cardinal labels — 0 at top, 90 right, 180 bottom, 270 left */}
            <text x="50" y="11" fontSize="4.5" fill="#EDE9D8" fillOpacity="0.7"
                  textAnchor="middle" fontFamily="JetBrains Mono">0</text>
            <text x="91" y="52" fontSize="4.5" fill="#EDE9D8" fillOpacity="0.55"
                  textAnchor="middle" fontFamily="JetBrains Mono">R</text>
            <text x="9" y="52" fontSize="4.5" fill="#EDE9D8" fillOpacity="0.55"
                  textAnchor="middle" fontFamily="JetBrains Mono">L</text>

            {/* Rotating group — the whole needle assembly */}
            <g transform={`rotate(${lean} 50 50)`} style={{ transition: 'none' }}>
              {/* Glow halo behind the needle */}
              <line x1="50" y1="50" x2="50" y2="9"
                    stroke="#DBFF00" strokeOpacity="0.35"
                    strokeWidth="6" strokeLinecap="round"
                    filter="url(#needleGlow)" />
              {/* Solid needle on top */}
              <line x1="50" y1="50" x2="50" y2="9"
                    stroke="#DBFF00" strokeWidth="3.2" strokeLinecap="round" />
              {/* Counter-weight tail */}
              <line x1="50" y1="50" x2="50" y2="62"
                    stroke="#DBFF00" strokeWidth="2" strokeOpacity="0.55"
                    strokeLinecap="round" />
              {/* Tip dot */}
              <circle cx="50" cy="9" r="2.4" fill="#DBFF00" />
            </g>

            {/* Pivot */}
            <circle cx="50" cy="50" r="2.4" fill="#0A0A0A" stroke="#DBFF00" strokeWidth="1.2" />
          </svg>

          <div className="text-right">
            <div className="font-display text-[34px] leading-none tabular-nums text-acid">
              {Math.round(Math.abs(lean))}°
            </div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-bone/60">
              {lean < -1 ? 'L_BANK' : lean > 1 ? 'R_BANK' : 'NEUTRAL'}
            </div>
            <div className="mt-3 space-y-1 font-mono text-[9px] uppercase tracking-widest text-bone/40">
              <div className="flex items-baseline justify-between gap-3">
                <span>L_MAX</span>
                <span className="tabular-nums text-bone">{lMax}°</span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span>R_MAX</span>
                <span className="tabular-nums text-bone">{rMax}°</span>
              </div>
            </div>
          </div>
        </div>
      </Panel>

      {/* ── DRIVETRAIN ── */}
      <Panel title="DRIVETRAIN">
        <div className="grid grid-cols-2 gap-2">
          <div className="border-[1.5px] border-bone/30 bg-ink px-2 py-2">
            <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
              GEAR_POS
            </div>
            <div className="mt-0.5 font-display text-[22px] leading-none tabular-nums text-bone">
              {String(gear).padStart(2, '0')}
            </div>
          </div>
          <div className="border-[1.5px] border-bone/30 bg-ink px-2 py-2">
            <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
              CADENCE
            </div>
            <div className="mt-0.5 font-display text-[22px] leading-none tabular-nums text-bone">
              {cadence}
              <span className="ml-1 font-mono text-[10px] text-bone/60">RPM</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-baseline justify-between text-[10px] uppercase tracking-widest text-bone/60">
          <span>DERAILLEUR_STATUS</span>
          <span className="text-acid">NOMINAL</span>
        </div>
      </Panel>

      {/* ── END ── */}
      <div className="flex items-center gap-3 pt-2">
        <span className="block h-[2px] flex-1 bg-bone/30" />
        <span className="font-pixel text-[14px] text-acid">/// END_FEED</span>
        <span className="block h-[2px] flex-1 bg-bone/30" />
      </div>
    </section>
  )
}

// ─── small utils ─────────────────────────────────────────────────────────────
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}
function rand(min, max, integer = false) {
  const v = Math.random() * (max - min) + min
  return integer ? Math.round(v) : v
}
