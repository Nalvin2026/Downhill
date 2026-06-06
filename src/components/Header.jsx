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
    <header className="relative z-40 border-b-[3px] border-bone/90 bg-ink">
      {/* Status bar — pixel font */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1.5 font-pixel text-[15px] leading-none text-bone/80">
        <span className="flex items-center gap-1.5">
          <span className="block h-2 w-2 rounded-full bg-acid animate-pulseDot" />
          LIVE · {dateStr}
        </span>
        <span className="tracking-wider">EU/CET · DH-FEED</span>
      </div>

      {/* Wordmark */}
      <div className="relative px-4 pb-3 pt-1">
        <div className="flex items-end justify-between gap-3">
          <div className="leading-[0.82]">
            <div className="font-display text-[44px] tracking-[-0.02em] text-bone">
              DH<span className="text-acid">//</span>
            </div>
            <div className="font-display text-[44px] tracking-[-0.02em] text-acid">
              TRACKER<span className="text-bone">.</span>
            </div>
          </div>
          <div className="mb-1 text-right font-mono text-[10px] uppercase leading-tight text-bone/70">
            <div>v0.1 · BETA</div>
            <div>SEASON 26</div>
          </div>
        </div>
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
