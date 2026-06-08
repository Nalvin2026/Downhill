import React from 'react'
import { TODAY } from '../data'

const HEADLINES = [
  'DH//TRACKER',
  'UCI · WORLD SERIES',
  'iXS · DOWNHILL CUP',
  'NO BRAKES. NO MERCY.',
  '2026 SEASON',
  'FULL SEND',
]

export default function Header({ showMarquee = true }) {
  const dateStr = TODAY.toISOString().slice(0, 10).replace(/-/g, '·')
  return (
    <header
      className="relative z-40 border-b-[3px] border-bone/90 bg-ink"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* Status bar — pixel font, ultra compact */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1 font-pixel text-[13px] leading-none text-bone/80">
        <span className="flex items-center gap-1.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-acid animate-pulseDot" />
          LIVE · {dateStr}
        </span>
        <span className="tracking-wider">SEASON 26</span>
      </div>

      {/* Wordmark — single line, drops the V0.1 BETA chip */}
      <div className="flex items-center justify-between gap-3 px-4 pb-2 pt-0.5">
        <div className="font-display text-[28px] leading-none tracking-[-0.02em]">
          <span className="text-bone">DH</span>
          <span className="text-acid">//</span>
          <span className="text-acid">TRACKER</span>
          <span className="text-bone">.</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
          v0.1 / BETA
        </span>
      </div>

      {/* Marquee — only on schedule */}
      {showMarquee && (
        <div className="overflow-hidden border-t-[3px] border-bone/90 bg-acid text-ink">
          <div className="marquee-track animate-marquee py-1.5">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-6 pr-6 font-display text-[16px] tracking-tight">
                {HEADLINES.map((h, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-6">
                    <span>{h}</span>
                    <span className="inline-block h-2 w-2 rotate-45 bg-ink" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
