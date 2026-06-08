import React from 'react'

function ScheduleGlyph({ active }) {
  const stroke = active ? '#0A0A0A' : '#EDE9D8'
  const accent = active ? '#0A0A0A' : '#DBFF00'
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <rect x="3" y="6" width="20" height="17" stroke={stroke} strokeWidth="2.4" />
      <path d="M3 11h20" stroke={stroke} strokeWidth="2.4" />
      <path d="M8 3v6M18 3v6" stroke={stroke} strokeWidth="2.4" strokeLinecap="square" />
      <rect x="7" y="14" width="3" height="3" fill={accent} />
      <rect x="11.5" y="14" width="3" height="3" fill={stroke} />
    </svg>
  )
}

function RankingsGlyph({ active }) {
  // Ranked-list metaphor: 3 stacked rows with #1 highlighted.
  const line = active ? '#0A0A0A' : '#EDE9D8'
  const accent = active ? '#0A0A0A' : '#DBFF00'
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      {/* row 1 — leader */}
      <rect x="2" y="4" width="5" height="5" fill={accent} />
      <rect x="9.5" y="5" width="14" height="3" fill={line} />
      {/* row 2 */}
      <rect x="2.85" y="11.35" width="3.3" height="3.3" stroke={line} strokeWidth="1.4" />
      <rect x="9.5" y="11.5" width="11" height="3" fill={line} />
      {/* row 3 */}
      <rect x="2.85" y="18.35" width="3.3" height="3.3" stroke={line} strokeWidth="1.4" />
      <rect x="9.5" y="18" width="8" height="3" fill={line} />
    </svg>
  )
}

function LiveGlyph({ active }) {
  // Broadcast metaphor: center dot ("rec") with concentric square frames.
  const stroke = active ? '#0A0A0A' : '#EDE9D8'
  const accent = active ? '#0A0A0A' : '#FF3336'
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <rect x="2.5" y="2.5" width="21" height="21" stroke={stroke} strokeWidth="2" />
      <rect x="7" y="7" width="12" height="12" stroke={stroke} strokeWidth="1.6" />
      <circle cx="13" cy="13" r="3" fill={accent} />
    </svg>
  )
}

export default function Nav({ view, setView }) {
  const tabs = [
    { id: 'schedule', label: 'SCHEDULE', Glyph: ScheduleGlyph },
    { id: 'rankings', label: 'RANKINGS', Glyph: RankingsGlyph },
    { id: 'live',     label: 'LIVE',     Glyph: LiveGlyph,     comingSoon: true },
  ]

  return (
    <nav
      className="relative z-40 border-t-[3px] border-bone/90 bg-ink"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3">
        {tabs.map((t, i) => {
          const active = view === t.id
          const disabled = !!t.comingSoon
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => !disabled && setView(t.id)}
              aria-pressed={active}
              aria-label={t.label}
              disabled={disabled}
              className={[
                'relative flex flex-col items-center justify-center gap-1 py-2.5 transition-colors',
                i < tabs.length - 1 ? 'border-r-[3px] border-bone/90' : '',
                active
                  ? 'bg-acid text-ink'
                  : 'bg-ink text-bone hover:bg-ash',
                disabled ? 'cursor-not-allowed opacity-55' : '',
              ].join(' ')}
            >
              <t.Glyph active={active} />
              <span className="font-display text-[11px] leading-none tracking-tight">
                {t.label}
              </span>

              {/* SOON badge for unbuilt tabs */}
              {disabled && (
                <span className="absolute right-1.5 top-1.5 border-[1.5px] border-bone/60 bg-ink px-1 py-[1px] font-mono text-[8px] uppercase tracking-widest text-bone/70">
                  SOON
                </span>
              )}

              {/* Active state marker */}
              {active && !disabled && (
                <span className="absolute right-1.5 top-1.5 font-pixel text-[12px] leading-none text-ink/80">
                  ◼
                </span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
