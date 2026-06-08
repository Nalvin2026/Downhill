import React, { useEffect, useState } from 'react'

const RAINBOW_STRIPES =
  'linear-gradient(to right,' +
  ' #0066B3 0%, #0066B3 20%,' +
  ' #E11226 20%, #E11226 40%,' +
  ' #0A0A0A 40%, #0A0A0A 60%,' +
  ' #FBED21 60%, #FBED21 80%,' +
  ' #00A551 80%, #00A551 100%)'

// Brutalist splash — fills the whole frame, auto-dismissed by App after a
// short delay. Pass `exiting={true}` to play the fade-out transition.
export default function SplashScreen({ exiting = false }) {
  // Live-counting percent next to the loading bar
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const duration = 1900
    let raf
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setPct(Math.floor(t * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className={[
        'absolute inset-0 z-[100] flex flex-col bg-ink',
        'transition-opacity duration-300 ease-out',
        exiting ? 'opacity-0' : 'opacity-100',
      ].join(' ')}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* Grain texture — same noise overlay as the main app */}
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Top status strip — pixel font */}
      <div className="relative flex items-center justify-between px-4 pt-3 font-pixel text-[14px] leading-none text-bone/80">
        <span className="flex items-center gap-1.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-acid animate-pulseDot" />
          BOOTING
        </span>
        <span className="tracking-widest">v0.1 / BETA</span>
      </div>

      {/* Centered hero block */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6">
        {/* Pre-title */}
        <div className="splash-fade-in mb-3 font-pixel text-[16px] uppercase tracking-[0.5em] text-bone/60">
          ◼ SEASON 2026 ◼
        </div>

        {/* Massive wordmark */}
        <div
          className="splash-fade-in font-display leading-[0.82] tracking-[-0.03em]"
          style={{ animationDelay: '120ms' }}
        >
          <div className="text-center text-[64px]">
            <span className="text-bone">DH</span>
            <span className="text-acid">//</span>
          </div>
          <div className="text-center text-[64px]">
            <span className="text-acid">TRACKER</span>
            <span className="text-bone">.</span>
          </div>
        </div>

        {/* Rainbow stripe band — World Champs nod */}
        <div
          className="splash-fade-in relative mt-6 h-4 w-56 border-[3px] border-bone"
          style={{ background: RAINBOW_STRIPES, animationDelay: '240ms' }}
        />

        {/* Tagline */}
        <div
          className="splash-fade-in mt-5 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-bone/70"
          style={{ animationDelay: '360ms' }}
        >
          DOWNHILL MTB · LIVE FEED
        </div>
      </div>

      {/* Bottom loading bar */}
      <div className="relative px-8 pb-10">
        <div className="mb-2 flex items-center justify-between font-pixel text-[14px] text-bone/60">
          <span>▸ LOADING FEED</span>
          <span className="tabular-nums">{String(pct).padStart(3, '0')}%</span>
        </div>
        <div className="h-2.5 border-[2px] border-bone bg-ink">
          <div className="splash-fill h-full bg-acid" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[9px] uppercase tracking-widest text-bone/40">
          <span>◼ UCI · DHI</span>
          <span className="text-center">◼ iXS · DHC</span>
          <span className="text-right">◼ 24 EVENTS</span>
        </div>
      </div>
    </div>
  )
}
