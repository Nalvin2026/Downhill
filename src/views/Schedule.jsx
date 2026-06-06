import React, { useMemo, useState } from 'react'
import EventCard from '../components/EventCard'
import { events, TODAY } from '../data'

function Toggle({ tab, setTab }) {
  return (
    <div className="grid grid-cols-2 border-[3px] border-bone bg-ink">
      {[
        { id: 'upcoming', label: 'UPCOMING' },
        { id: 'past', label: 'PAST' },
      ].map((t, i) => {
        const active = tab === t.id
        return (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={[
              'relative px-4 py-3 font-display text-[18px] tracking-tight',
              i === 0 ? 'border-r-[3px] border-bone' : '',
              active ? 'bg-acid text-ink' : 'text-bone hover:bg-ash',
            ].join(' ')}
          >
            {t.label}
            {active && (
              <span className="absolute right-2 top-1 font-pixel text-[14px] leading-none text-ink/70">
                ▣
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

function SeriesFilter({ value, onChange }) {
  const opts = [
    { id: 'ALL', label: 'ALL' },
    { id: 'UCI', label: 'UCI' },
    { id: 'IXS', label: 'iXS' },
  ]
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">FILTER /</span>
      {opts.map((o) => {
        const active = value === o.id
        return (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
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

export default function Schedule({ onOpenEvent }) {
  const [tab, setTab] = useState('upcoming')
  const [series, setSeries] = useState('ALL')

  const { upcoming, past } = useMemo(() => {
    const today = TODAY
    const upcoming = []
    const past = []
    for (const e of events) {
      const end = new Date(e.end)
      ;(end >= today ? upcoming : past).push(e)
    }
    upcoming.sort((a, b) => new Date(a.start) - new Date(b.start))
    past.sort((a, b) => new Date(b.start) - new Date(a.start))
    return { upcoming, past }
  }, [])

  const list = (tab === 'upcoming' ? upcoming : past).filter(
    (e) => series === 'ALL' || e.series === series
  )

  const nextUp = upcoming[0]

  return (
    <section className="px-4 pt-4">
      {/* SEASON META */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="font-pixel text-[16px] leading-none text-acid">SEASON 2026</div>
          <div className="text-right font-mono text-[10px] uppercase leading-tight text-bone/60">
            <div>{upcoming.length} UPCOMING</div>
            <div>{past.length} ARCHIVED</div>
          </div>
        </div>
        <h2 className="mt-1 font-display text-[34px] leading-[0.85] tracking-[-0.03em] text-bone">
          FULL <span className="text-acid">CALENDAR</span>
        </h2>
      </div>

      <div className="mb-3">
        <Toggle tab={tab} setTab={setTab} />
      </div>

      <div className="mb-4">
        <SeriesFilter value={series} onChange={setSeries} />
      </div>

      <div className="space-y-5">
        {list.length === 0 ? (
          <div className="border-[3px] border-bone/60 bg-ink p-6 text-center">
            <div className="font-display text-[22px] text-bone">NO RACES.</div>
            <div className="mt-1 font-mono text-[11px] text-bone/60">
              Adjust the series filter, kid.
            </div>
          </div>
        ) : (
          list.map((e, i) => (
            <EventCard
              key={e.id}
              event={e}
              index={i}
              past={tab === 'past'}
              isNext={tab === 'upcoming' && nextUp && e.id === nextUp.id}
              onOpen={onOpenEvent}
            />
          ))
        )}
      </div>

      {/* End mark */}
      <div className="my-6 flex items-center gap-3">
        <span className="block h-[3px] flex-1 bg-bone/40" />
        <span className="font-pixel text-[16px] text-acid">/// END OF FEED</span>
        <span className="block h-[3px] flex-1 bg-bone/40" />
      </div>
    </section>
  )
}
