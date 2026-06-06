import React from 'react'

// Brutalist geometric stamps for the top 3 — NOT trophies.
function PodiumStamp({ rank }) {
  if (rank === 1) {
    // Solid ink stamp with acid corner cut
    return (
      <div className="relative h-16 w-16 shrink-0 border-[3px] border-ink bg-ink">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[34px] leading-none text-acid">01</span>
        </div>
        <span className="absolute -right-[3px] -top-[3px] h-3 w-3 bg-acid" />
        <span className="absolute -left-[3px] -bottom-[3px] h-3 w-3 bg-acid" />
      </div>
    )
  }
  if (rank === 2) {
    // Outlined ink on acid with diagonal slash
    return (
      <div className="relative h-16 w-16 shrink-0 overflow-hidden border-[3px] border-ink bg-bone">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(135deg, transparent 0 38%, #0A0A0A 38% 44%, transparent 44%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[34px] leading-none text-ink">02</span>
        </div>
      </div>
    )
  }
  // 3rd — stripes
  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden border-[3px] border-ink stripes-bone">
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-[34px] leading-none text-ink"
          style={{ textShadow: '2px 2px 0 #EDE9D8' }}
        >
          03
        </span>
      </div>
    </div>
  )
}

export default function RiderRow({ entry, rank, leaderPoints, index, onClick }) {
  const isPodium = rank <= 3
  const pct = Math.max(8, Math.round((entry.points / leaderPoints) * 100))
  const delay = `${Math.min(index * 35, 600)}ms`

  if (isPodium) {
    const Inner = (
      <div className="border-[3px] border-bone bg-bone text-ink shadow-[6px_6px_0_0_#000]">
        <div className="flex items-stretch gap-3 p-3">
          <PodiumStamp rank={rank} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70">
                P0{rank} · PODIUM
              </span>
              <span className="border-[2px] border-ink px-1.5 py-0.5 font-mono text-[10px]">
                {entry.country}
              </span>
            </div>
            <div className="mt-1 font-display text-[22px] leading-[0.95] tracking-[-0.02em]">
              {entry.rider.toUpperCase()}
            </div>
            <div className="mt-0.5 truncate font-mono text-[10px] uppercase text-ink/70">
              {entry.team}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-end gap-3 border-t-[3px] border-ink bg-ink px-3 py-2">
          <div className="h-3 w-full border-[2px] border-acid">
            <div className="h-full bg-acid" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-[28px] leading-none text-acid">
              {entry.points}
            </span>
            <span className="font-mono text-[10px] text-bone/70">PTS</span>
          </div>
        </div>
      </div>
    )
    return (
      <article className="animate-in" style={{ animationDelay: delay }}>
        {onClick ? (
          <button
            type="button"
            onClick={onClick}
            className="block w-full text-left"
          >
            {Inner}
          </button>
        ) : (
          Inner
        )}
      </article>
    )
  }

  return (
    <article
      className="animate-in grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-[2px] border-bone/15 px-3 py-3 hover:bg-ash"
      style={{ animationDelay: delay }}
    >
      <div className="flex h-10 w-10 items-center justify-center border-[2px] border-bone/60">
        <span className="font-display text-[18px] leading-none text-bone">
          {String(rank).padStart(2, '0')}
        </span>
      </div>
      <div className="min-w-0">
        <div className="truncate font-display text-[16px] leading-tight text-bone">
          {entry.rider.toUpperCase()}
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-bone/60">
          <span className="border-[1.5px] border-bone/40 px-1">{entry.country}</span>
          <span className="truncate">{entry.team}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-display text-[20px] leading-none text-acid">
          {entry.points}
        </div>
        <div className="mt-1 h-[3px] w-20 bg-bone/15">
          <div className="h-full bg-acid" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </article>
  )
}
