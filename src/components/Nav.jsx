import React from 'react'

function ScheduleGlyph({ active }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="3" y="6" width="20" height="17" stroke={active ? '#0A0A0A' : '#EDE9D8'} strokeWidth="2.4" />
      <path d="M3 11h20" stroke={active ? '#0A0A0A' : '#EDE9D8'} strokeWidth="2.4" />
      <path d="M8 3v6M18 3v6" stroke={active ? '#0A0A0A' : '#EDE9D8'} strokeWidth="2.4" strokeLinecap="square" />
      <rect x="7" y="14" width="3" height="3" fill={active ? '#0A0A0A' : '#DBFF00'} />
      <rect x="11.5" y="14" width="3" height="3" fill={active ? '#0A0A0A' : '#EDE9D8'} />
    </svg>
  )
}

function RankingsGlyph({ active }) {
  // Ranked-list metaphor: 3 stacked rows, each with a position marker on
  // the left and a bar on the right. #1's marker is filled in the highlight
  // color; #2 and #3 are outlined.
  const line = active ? '#0A0A0A' : '#EDE9D8'
  const accent = active ? '#0A0A0A' : '#DBFF00'
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {/* row 1 — leader */}
      <rect x="2" y="4" width="5" height="5" fill={accent} />
      <rect x="9.5" y="5" width="14" height="3" fill={line} />
      {/* row 2 */}
      <rect
        x="2.85"
        y="11.35"
        width="3.3"
        height="3.3"
        stroke={line}
        strokeWidth="1.4"
      />
      <rect x="9.5" y="11.5" width="11" height="3" fill={line} />
      {/* row 3 */}
      <rect
        x="2.85"
        y="18.35"
        width="3.3"
        height="3.3"
        stroke={line}
        strokeWidth="1.4"
      />
      <rect x="9.5" y="18" width="8" height="3" fill={line} />
    </svg>
  )
}

export default function Nav({ view, setView }) {
  const tabs = [
    { id: 'schedule',  label: 'SCHEDULE',  sub: 'EVENTS',   Glyph: ScheduleGlyph },
    { id: 'rankings',  label: 'RANKINGS',  sub: 'STANDINGS', Glyph: RankingsGlyph },
  ]

  return (
    <nav
      className="relative z-40 border-t-[3px] border-bone/90 bg-ink"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-2">
        {tabs.map((t) => {
          const active = view === t.id
          return (
            <button
              key={t.id}
              onClick={() => setView(t.id)}
              className={[
                'group relative flex items-center gap-3 px-4 py-3 transition-colors',
                'border-r-[3px] last:border-r-0 border-bone/90',
                active ? 'bg-acid text-ink' : 'bg-ink text-bone hover:bg-ash',
              ].join(' ')}
              aria-pressed={active}
              aria-label={t.label}
            >
              <t.Glyph active={active} />
              <div className="text-left leading-none">
                <div className="font-display text-[16px] tracking-tight">{t.label}</div>
                <div className={`mt-1 font-mono text-[9px] ${active ? 'text-ink/80' : 'text-bone/55'}`}>
                  {t.sub}
                </div>
              </div>
              {active && (
                <span className="absolute right-2 top-2 font-pixel text-[14px] leading-none text-ink/80">
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
