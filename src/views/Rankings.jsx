import React, { useMemo, useState } from 'react'
import RiderRow from '../components/RiderRow'
import { standings } from '../data'

// Series filter chips — matches the Schedule view's FILTER row. No "ALL" here
// because the leaderboard always belongs to one series.
function SeriesFilter({ value, onChange }) {
  const opts = [
    { id: 'UCI', label: 'UCI' },
    { id: 'IXS', label: 'iXS' },
  ]
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
        FILTER /
      </span>
      {opts.map((o) => {
        const active = value === o.id
        return (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            aria-pressed={active}
            className={[
              'shrink-0 border-[2px] px-2.5 py-1 font-display text-[12px] tracking-tight',
              active
                ? 'border-acid bg-acid text-ink'
                : 'border-bone/60 text-bone hover:border-bone',
            ].join(' ')}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

function GenderTabs({ value, onChange }) {
  const opts = [
    { id: 'men', label: 'ELITE MEN' },
    { id: 'women', label: 'ELITE WOMEN' },
  ]
  return (
    <div className="grid grid-cols-2 border-[3px] border-bone bg-ink">
      {opts.map((o, i) => {
        const active = value === o.id
        return (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            className={[
              'relative px-3 py-3 font-display text-[16px] tracking-tight',
              i === 0 ? 'border-r-[3px] border-bone' : '',
              active ? 'bg-acid text-ink' : 'text-bone hover:bg-ash',
            ].join(' ')}
          >
            {o.label}
            {active && (
              <span className="absolute right-2 top-1 font-pixel text-[14px] leading-none text-ink/70">
                ◆
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

// Combined "current leader + P01 podium" card — one unified treatment for #1.
function HeroBlock({ leader, gender, leaderPoints, onClick }) {
  const isMen = gender === 'men'
  const genderBg = isMen ? 'bg-wire' : 'bg-punch'
  const genderLetter = isMen ? 'M' : 'W'
  const pct = Math.max(8, Math.round((leader.points / leaderPoints) * 100))

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left"
    >
    <div className="relative overflow-hidden border-[3px] border-bone shadow-[6px_6px_0_0_#000]">
      <div className="absolute inset-0 scanline opacity-50" />

      <div className="relative bg-acid p-4 text-ink">
        {/* TOP META ROW */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* Tilted gender sticker — graffiti tag, inline so it doesn't collide */}
            <span
              aria-hidden
              className={[
                'inline-flex h-6 w-6 -rotate-[6deg] items-center justify-center border-[2px] border-ink shadow-[2px_2px_0_0_#0A0A0A]',
                genderBg,
              ].join(' ')}
            >
              <span className="font-display text-[12px] leading-none text-ink">
                {genderLetter}
              </span>
            </span>
            <span className="font-pixel text-[16px] leading-none">
              CURRENT LEADER
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
              · P01
            </span>
          </div>
          <span className="border-[2px] border-ink px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase">
            {leader.country}
          </span>
        </div>

        {/* MAIN ROW: brutalist 01 stamp + rider name */}
        <div className="mt-3 flex items-start gap-3">
          <div className="relative h-16 w-16 shrink-0 border-[3px] border-ink bg-ink">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[34px] leading-none text-acid">
                01
              </span>
            </div>
            {/* Corner accents — bone on acid background so they read */}
            <span className="absolute -right-[3px] -top-[3px] h-3 w-3 bg-bone" />
            <span className="absolute -left-[3px] -bottom-[3px] h-3 w-3 bg-bone" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="break-words font-display text-[28px] leading-[0.9] tracking-[-0.02em] [text-wrap:balance]">
              {leader.rider.toUpperCase()}
            </div>
            <div className="mt-1 truncate font-mono text-[10px] uppercase text-ink/75">
              {leader.team}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — identical to P02 / P03 progress bar + points */}
      <div className="grid grid-cols-[1fr_auto] items-end gap-3 border-t-[3px] border-ink bg-ink px-3 py-2">
        <div className="h-3 w-full border-[2px] border-acid">
          <div className="h-full bg-acid" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[28px] leading-none text-acid">
            {leader.points}
          </span>
          <span className="font-mono text-[10px] text-bone/70">PTS</span>
        </div>
      </div>
    </div>
    </button>
  )
}

export default function Rankings({ onOpenRider }) {
  const [series, setSeries] = useState('UCI')
  const [gender, setGender] = useState('men')
  const meta = standings[series]
  const list = meta[gender]

  const leaderPoints = useMemo(
    () => Math.max(...list.map((e) => e.points)),
    [list]
  )

  return (
    <section className="px-4 pt-4">
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="font-pixel text-[16px] leading-none text-acid">
            SEASON STANDINGS
          </div>
          <div className="text-right font-mono text-[10px] uppercase leading-tight text-bone/60">
            <div>{meta.label}</div>
            <div>{meta.progress}</div>
          </div>
        </div>
        <h2 className="mt-1 font-display text-[34px] leading-[0.85] tracking-[-0.03em] text-bone">
          THE <span className="text-acid">LEADERBOARD</span>
        </h2>
      </div>

      <div className="mb-3">
        <GenderTabs value={gender} onChange={setGender} />
      </div>

      <div className="mb-4">
        <SeriesFilter value={series} onChange={setSeries} />
      </div>

      <div className="mb-4">
        <HeroBlock
          leader={list[0]}
          gender={gender}
          leaderPoints={leaderPoints}
          onClick={() =>
            onOpenRider?.({ entry: list[0], rank: 1, series, gender })
          }
        />
      </div>

      {/* PODIUM 2 & 3 — #1 lives in the hero card above */}
      <div className="space-y-4">
        {list.slice(1, 3).map((e, i) => (
          <RiderRow
            key={e.rider}
            entry={e}
            rank={i + 2}
            leaderPoints={leaderPoints}
            index={i + 1}
            onClick={() =>
              onOpenRider?.({ entry: e, rank: i + 2, series, gender })
            }
          />
        ))}
      </div>

      {/* DIVIDER */}
      <div className="my-5 flex items-center gap-3">
        <span className="block h-[3px] flex-1 bg-bone/40" />
        <span className="font-pixel text-[16px] leading-none text-acid">
          /// CHASE PACK
        </span>
        <span className="block h-[3px] flex-1 bg-bone/40" />
      </div>

      <div className="border-[3px] border-bone bg-ink">
        {/* COLUMN HEADER */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-[2px] border-bone/30 bg-ash px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-bone/70">
          <span>POS</span>
          <span>RIDER / TEAM</span>
          <span>POINTS</span>
        </div>
        {list.slice(3).map((e, i) => (
          <RiderRow
            key={e.rider}
            entry={e}
            rank={i + 4}
            leaderPoints={leaderPoints}
            index={i + 3}
          />
        ))}
      </div>

      <div className="my-6 flex items-center gap-3">
        <span className="block h-[3px] flex-1 bg-bone/40" />
        <span className="font-pixel text-[16px] text-acid">/// END OF FEED</span>
        <span className="block h-[3px] flex-1 bg-bone/40" />
      </div>
    </section>
  )
}
