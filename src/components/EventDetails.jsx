import React, { useEffect } from 'react'
import {
  SERIES,
  eventDetails,
  timeUntil,
  fmtDateRange,
} from '../data'
import TrackMap from './TrackMap'
import ElevationProfile from './ElevationProfile'

// UCI Rainbow jersey stripes — shared with EventCard for the World Champs.
const RAINBOW_STRIPES =
  'linear-gradient(to bottom,' +
  ' #0066B3 0%, #0066B3 20%,' +
  ' #E11226 20%, #E11226 40%,' +
  ' #0A0A0A 40%, #0A0A0A 60%,' +
  ' #FBED21 60%, #FBED21 80%,' +
  ' #00A551 80%, #00A551 100%)'

function CountdownStamp({ event, past, isWorldChamps = false }) {
  if (past) {
    return (
      <div className="border-[3px] border-bone/70 bg-ink px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-bone/80">
        ◼ ARCHIVED
      </div>
    )
  }
  const { days, hours } = timeUntil(event.start)
  if (days <= 0 && hours <= 0) {
    return (
      <div className="border-[3px] border-rust bg-rust px-3 py-2 font-display text-[13px] tracking-tight text-ink">
        RACING NOW
      </div>
    )
  }
  const inner = (
    <div
      className={[
        'bg-ink px-3 py-2',
        isWorldChamps ? 'text-bone' : 'text-acid',
      ].join(' ')}
    >
      <div className="font-pixel text-[12px] leading-none">STARTS IN</div>
      <div className="mt-0.5 flex items-baseline gap-1.5">
        <span className="font-display text-[22px] leading-none">
          {days}
          <span className="text-[12px]">d</span>
        </span>
        <span className="font-display text-[22px] leading-none">
          {hours}
          <span className="text-[12px]">h</span>
        </span>
      </div>
    </div>
  )
  // World Champs gets a rainbow frame around the ink chip — mirrors the
  // UCI badge treatment on the event card.
  if (isWorldChamps) {
    return (
      <div
        className="border-[3px] border-ink p-1"
        style={{ background: RAINBOW_STRIPES }}
      >
        {inner}
      </div>
    )
  }
  return <div className="border-[3px] border-ink">{inner}</div>
}

function WeekendRow({ row }) {
  const isDone = row.status === 'done'
  return (
    <div
      className={[
        'grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-[2px] border-bone/15 px-3 py-2.5',
        isDone ? 'opacity-50' : '',
      ].join(' ')}
    >
      <div className="flex h-10 w-10 items-center justify-center border-[2px] border-bone/60">
        <span className="font-display text-[14px] leading-none text-bone">
          {row.day}
        </span>
      </div>
      <div className="min-w-0">
        <div className="truncate font-display text-[14px] leading-tight text-bone">
          {row.label}
        </div>
      </div>
      <div className="font-mono text-[12px] leading-none text-acid">
        {row.time}
      </div>
    </div>
  )
}

function PodiumStamp({ rank }) {
  if (rank === 1) {
    return (
      <div className="relative h-12 w-12 shrink-0 border-[3px] border-ink bg-ink">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[22px] leading-none text-acid">01</span>
        </div>
        <span className="absolute -right-[3px] -top-[3px] h-2.5 w-2.5 bg-acid" />
        <span className="absolute -left-[3px] -bottom-[3px] h-2.5 w-2.5 bg-acid" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="relative h-12 w-12 shrink-0 overflow-hidden border-[3px] border-ink bg-bone">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(135deg, transparent 0 38%, #0A0A0A 38% 44%, transparent 44%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[22px] leading-none text-ink">02</span>
        </div>
      </div>
    )
  }
  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden border-[3px] border-ink stripes-bone">
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-[22px] leading-none text-ink"
          style={{ textShadow: '1.5px 1.5px 0 #EDE9D8' }}
        >
          03
        </span>
      </div>
    </div>
  )
}

function PodiumRow({ entry, rank }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-[2px] border-bone/15 bg-ink px-3 py-2.5">
      <PodiumStamp rank={rank} />
      <div className="min-w-0">
        <div className="truncate font-display text-[15px] leading-tight text-bone">
          {entry.rider.toUpperCase()}
        </div>
        <div className="font-mono text-[10px] uppercase text-bone/60">
          {entry.country}
        </div>
      </div>
      <div className="font-mono text-[13px] font-bold leading-none text-acid">
        {entry.time}
      </div>
    </div>
  )
}

export default function EventDetails({ event, past = false, onClose }) {
  // Lock body scroll while open and close on Esc.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!event) return null

  const details = eventDetails[event.id]
  const isUCI = event.series === 'UCI'
  const isWorldChamps = event.tier === 'WORLD CHAMPS'
  const meta = SERIES[event.series]
  const dr = fmtDateRange(event.start, event.end)
  const [genderTab, setGenderTab] = React.useState('men')

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-ink">
      {/* TOP BAR — sticky-ish header inside the sheet */}
      <div
        className="flex items-center justify-between gap-3 border-b-[3px] border-bone bg-ink px-3 py-2"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 0.5rem)' }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            aria-label="Close details"
            className="flex h-9 w-9 items-center justify-center border-[3px] border-bone bg-ink text-bone hover:bg-acid hover:text-ink hover:border-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2L12 12M12 2L2 12"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="square"
              />
            </svg>
          </button>
          <div className="font-pixel text-[16px] leading-none text-acid">
            EVENT DETAILS
          </div>
        </div>
        <div
          className={[
            'flex items-center justify-center border-[3px] border-ink px-2.5 py-1',
            isUCI ? 'bg-acid' : 'bg-bone',
          ].join(' ')}
        >
          <span className="font-display text-[14px] leading-none tracking-tight text-ink">
            {meta.code}
          </span>
        </div>
      </div>

      {/* SCROLL AREA */}
      <div className="grain min-h-0 flex-1 overflow-y-auto pb-10">
        {/* HERO */}
        <section
          className={[
            'border-b-[3px] border-bone p-4',
            isUCI ? 'bg-acid text-ink' : 'bg-bone text-ink',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest">
            <span>{event.tier} · RND {String(event.round).padStart(2, '0')}</span>
            <span>{event.country} · {event.region}</span>
          </div>

          <h1 className="mt-2 break-words font-display text-[44px] leading-[0.86] tracking-[-0.03em] [text-wrap:balance]">
            {event.venue}
          </h1>

          <div className="mt-4 grid grid-cols-[auto_1fr] items-center gap-3">
            <CountdownStamp event={event} past={past} isWorldChamps={isWorldChamps} />
            <div className="text-right">
              <div className="font-display text-[28px] leading-none tracking-tight">
                {dr.day}
              </div>
              <div className="mt-1 font-mono text-[11px]">
                <span className="font-bold">{dr.month}</span>
                <span className="opacity-70"> /{dr.year}</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRACK MAP */}
        {details && (
          <section className="px-3 pt-4">
            <div className="mb-2 flex items-end justify-between">
              <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                THE <span className="text-acid">TRACK</span>
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                TOP-DOWN
              </span>
            </div>
            <TrackMap track={details.track} series={event.series} />
          </section>
        )}

        {/* ELEVATION */}
        {details && (
          <section className="px-3 pt-4">
            <ElevationProfile elevation={details.track.elevation} stats={details.track.stats} />
          </section>
        )}

        {/* WEEKEND SCHEDULE */}
        {details && (
          <section className="px-3 pt-5">
            <div className="mb-2 flex items-end justify-between">
              <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                THE <span className="text-acid">WEEKEND</span>
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                LOCAL TIME
              </span>
            </div>
            <div className="border-[3px] border-bone bg-ink">
              {details.weekend.map((row) => (
                <WeekendRow key={row.day + row.label} row={row} />
              ))}
            </div>
          </section>
        )}

        {/* PREVIOUS PODIUM (or DEBUT marker for first-time venues) */}
        {details && details.debut && (
          <section className="px-3 pt-5">
            <div className="mb-2 flex items-end justify-between gap-3">
              <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                PREV. <span className="text-acid">PODIUM</span>
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                NO HISTORY
              </span>
            </div>
            <div className="border-[3px] border-acid bg-ink p-6 text-center">
              <div className="font-pixel text-[18px] leading-none text-acid">★ DEBUT EVENT</div>
              <div className="mt-2 font-display text-[18px] leading-tight tracking-tight text-bone">
                FIRST UCI WORLD CUP HERE
              </div>
              <div className="mt-1 font-mono text-[11px] text-bone/70">
                History writes itself this weekend.
              </div>
            </div>
          </section>
        )}

        {details && details.previousPodium && (
          <section className="px-3 pt-5">
            <div className="mb-2 flex items-end justify-between gap-3">
              <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                PREV. <span className="text-acid">PODIUM</span>
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                {details.previousPodium.year} · RESULTS
              </span>
            </div>

            <div className="mb-2 grid grid-cols-2 border-[3px] border-bone bg-ink">
              {[
                { id: 'men', label: 'ELITE MEN' },
                { id: 'women', label: 'ELITE WOMEN' },
              ].map((t, i) => {
                const active = genderTab === t.id
                return (
                  <button
                    key={t.id}
                    onClick={() => setGenderTab(t.id)}
                    className={[
                      'px-3 py-2 font-display text-[13px] tracking-tight',
                      i === 0 ? 'border-r-[3px] border-bone' : '',
                      active ? 'bg-acid text-ink' : 'text-bone hover:bg-ash',
                    ].join(' ')}
                  >
                    {t.label}
                  </button>
                )
              })}
            </div>

            <div className="border-[3px] border-bone bg-ink">
              {details.previousPodium[genderTab].map((entry, i) => (
                <PodiumRow key={entry.rider} entry={entry} rank={i + 1} />
              ))}
            </div>
          </section>
        )}

        {!details && (
          <section className="px-3 pt-6">
            <div className="border-[3px] border-bone/60 bg-ink p-6 text-center">
              <div className="font-display text-[22px] text-bone">NO TRACK INTEL.</div>
              <div className="mt-1 font-mono text-[11px] text-bone/60">
                Details for this round haven't been wired in yet.
              </div>
            </div>
          </section>
        )}

        {/* END */}
        <div className="mt-8 px-3">
          <div className="flex items-center gap-3">
            <span className="block h-[3px] flex-1 bg-bone/40" />
            <span className="font-pixel text-[16px] text-acid">/// END BRIEFING</span>
            <span className="block h-[3px] flex-1 bg-bone/40" />
          </div>
        </div>
      </div>
    </div>
  )
}
