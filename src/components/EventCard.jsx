import React from 'react'
import { SERIES, barcodePattern, fmtDateRange, timeUntil } from '../data'

function SeriesBadge({ series, isWorldChamps = false }) {
  const meta = SERIES[series]
  const isUCI = series === 'UCI'

  // World Champs stamp: rainbow-filled with an ink chip carrying the UCI letters.
  // The card body is inverted (ink), so subtitle text uses bone for legibility.
  if (isWorldChamps) {
    return (
      <div className="flex items-center gap-2">
        <div
          className="relative flex items-center justify-center border-[3px] border-bone p-1"
          style={{ background: RAINBOW_STRIPES }}
        >
          <span className="border-[2px] border-bone bg-bone px-1.5 py-0.5 font-display text-[16px] leading-none tracking-tight text-ink">
            {meta.code}
          </span>
        </div>
        <div className="font-mono text-[10px] leading-tight text-bone/80">
          <div className="flex items-center gap-1">
            <span className="font-pixel text-[13px] leading-none">★</span>
            WORLD CHAMPS
          </div>
          <div className="opacity-60">/ WORLDS</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className={[
          'flex items-center justify-center border-[3px] border-ink bg-ink px-2.5 py-1',
          // UCI cards (acid bg) use bone text inside stamps so the green only lives on the body;
          // iXS cards (bone bg) keep the original acid text for color contrast.
          isUCI ? 'text-bone' : 'text-acid',
        ].join(' ')}
      >
        <span className="font-display text-[18px] leading-none tracking-tight">
          {meta.code}
        </span>
      </div>
      <div className="font-mono text-[10px] leading-tight text-ink/80">
        <div>{meta.short}</div>
        <div className="opacity-60">/ {isUCI ? 'TIER 1' : 'TIER 2'}</div>
      </div>
    </div>
  )
}

// Rainbow palette used on World Champs bars. Bars sit on an ink strip so the
// 5th slot uses bone in place of black — black would otherwise vanish.
const RAINBOW_BAR_COLORS = ['#0066B3', '#E11226', '#FBED21', '#00A551', '#EDE9D8']

function Barcode({ id, color = '#0A0A0A', rainbow = false }) {
  const bars = barcodePattern(id, 56)
  const palette = RAINBOW_BAR_COLORS
  return (
    <div className="flex h-6 items-stretch gap-[2px]">
      {bars.map((b, i) => {
        const fill = rainbow ? palette[i % palette.length] : color
        return (
          <span
            key={i}
            style={{
              width: `${b.w}px`,
              background: b.filled ? fill : 'transparent',
            }}
          />
        )
      })}
    </div>
  )
}

function Countdown({ days, hours, past, isUCI, inverted = false }) {
  if (past) {
    return (
      <span className="inline-flex items-center gap-1 border-[2px] border-bone/80 px-2 py-1 font-mono text-[12px] text-bone/80">
        <span className="block h-1.5 w-1.5 bg-bone/70" /> ARCHIVED
      </span>
    )
  }
  if (days <= 0 && hours <= 0) {
    return (
      <span className="inline-flex items-center gap-1 bg-rust px-2 py-1 font-mono text-[12px] font-bold text-ink">
        <span className="block h-1.5 w-1.5 animate-pulseDot bg-ink" /> RACING NOW
      </span>
    )
  }
  // Inverted (World Champs) → bone chip with ink text on dark body.
  if (inverted) {
    return (
      <span className="inline-flex items-center gap-1 bg-bone px-2 py-1 font-mono text-[12px] font-bold text-ink">
        <span className="block h-1.5 w-1.5 bg-ink" />
        {days}D&nbsp;{hours}H
      </span>
    )
  }
  // UCI cards → bone text inside the ink chip; iXS cards → acid text (original).
  return (
    <span
      className={[
        'inline-flex items-center gap-1 bg-ink px-2 py-1 font-mono text-[12px] font-bold',
        isUCI ? 'text-bone' : 'text-acid',
      ].join(' ')}
    >
      <span className={['block h-1.5 w-1.5', isUCI ? 'bg-bone' : 'bg-acid'].join(' ')} />
      {days}D&nbsp;{hours}H
    </span>
  )
}

// Iconic UCI Rainbow jersey colors — blue, red, black, yellow, green.
const RAINBOW_STRIPES =
  'linear-gradient(to bottom,' +
  ' #0066B3 0%, #0066B3 20%,' +
  ' #E11226 20%, #E11226 40%,' +
  ' #0A0A0A 40%, #0A0A0A 60%,' +
  ' #FBED21 60%, #FBED21 80%,' +
  ' #00A551 80%, #00A551 100%)'

export default function EventCard({ event, index = 0, past = false, isNext = false, onOpen }) {
  const dr = fmtDateRange(event.start, event.end)
  const { days, hours } = timeUntil(event.start)
  const isUCI = event.series === 'UCI'
  const isWorldChamps = event.tier === 'WORLD CHAMPS'

  return (
    <article
      className="animate-in"
      style={{ animationDelay: `${Math.min(index * 60, 480)}ms` }}
    >
      <div
        className={[
          'relative border-[3px] border-bone/90 shadow-[6px_6px_0_0_#000]',
          past
            ? 'bg-ink/95'
            : isWorldChamps
            ? 'bg-ink text-bone'
            : isUCI
            ? 'bg-acid text-ink'
            : 'bg-bone text-ink',
        ].join(' ')}
      >
          {/* NEXT UP graffiti sticker — tilted siren tag slapped on the top-left corner */}
          {isNext && (
            <div
              aria-hidden
              className="absolute -left-2 -top-3 z-10 -rotate-[6deg] border-[3px] border-ink bg-siren px-2 py-1 shadow-[3px_3px_0_0_#0A0A0A]"
            >
              <span className="flex items-center gap-1 font-display text-[12px] leading-none tracking-tight text-ink">
                <span className="font-pixel text-[13px] leading-none">▸</span>
                NEXT UP
              </span>
            </div>
          )}

          {/* CHAMPS rainbow sticker — graffiti tag for the once-a-year World Champs */}
          {isWorldChamps && !isNext && (
            <div
              aria-hidden
              className="absolute -left-2 -top-3 z-10 rotate-[6deg] border-[3px] border-ink p-[3px] shadow-[3px_3px_0_0_#0A0A0A]"
              style={{ background: RAINBOW_STRIPES }}
            >
              <span className="flex items-center gap-1 bg-ink px-2 py-0.5 font-display text-[12px] leading-none tracking-tight text-bone">
                <span className="font-pixel text-[13px] leading-none">★</span>
                CHAMPS
              </span>
            </div>
          )}

          {/* TOP SECTION */}
          <div className="flex items-start justify-between gap-3 p-3.5">
            <SeriesBadge series={event.series} isWorldChamps={isWorldChamps} />
            <Countdown
              days={days}
              hours={hours}
              past={past}
              isUCI={isUCI}
              inverted={isWorldChamps}
            />
          </div>

          {/* TIER STRIP */}
          <div
            className={[
              'flex items-center justify-between border-y-[3px] px-3.5 py-1',
              isWorldChamps ? 'border-bone' : 'border-ink',
              past
                ? 'bg-bone/10 text-bone'
                : isWorldChamps
                ? 'bg-bone text-ink'
                : isUCI
                ? 'bg-ink text-bone'
                : 'bg-ink text-acid',
            ].join(' ')}
          >
            <span className="font-mono text-[11px] tracking-[0.18em]">
              {event.tier}
            </span>
            <span className="font-display text-[14px] tracking-tight">
              RND {String(event.round).padStart(2, '0')}
            </span>
          </div>

        {/* VENUE — the headline */}
        <div className={['px-3.5 pt-3', past || isWorldChamps ? 'text-bone' : 'text-ink'].join(' ')}>
          <h3 className="break-words font-display text-[28px] leading-[0.92] tracking-[-0.02em] [text-wrap:balance]">
            {event.venue}
          </h3>
          <div className="mt-2 flex items-center gap-2 font-mono text-[11px] uppercase">
            <span className={['border-[2px] px-1.5 py-0.5', past || isWorldChamps ? 'border-bone/60' : 'border-ink'].join(' ')}>
              {event.country}
            </span>
            <span className={past || isWorldChamps ? 'text-bone/70' : 'text-ink/70'}>
              · {event.region}
            </span>
          </div>
        </div>

        {/* PERFORATION */}
        <div className="relative my-3.5 mx-3.5">
          <div className={['perf h-0 border-t-[3px] border-dashed', past || isWorldChamps ? 'border-bone/40' : 'border-ink/70'].join(' ')} />
        </div>

        {/* BOTTOM SECTION — dates + barcode */}
        <div className="grid grid-cols-[1fr_auto] items-end gap-3 px-3.5 pb-3.5">
          <div className={past || isWorldChamps ? 'text-bone' : 'text-ink'}>
            <div className="font-display text-[44px] leading-[0.85] tracking-[-0.02em]">
              {dr.day}
            </div>
            <div className="mt-1 flex items-baseline gap-0.5 font-mono text-[12px]">
              <span className="font-bold">{dr.month}</span>
              <span className="opacity-70">/{dr.year}</span>
            </div>
          </div>
          <button
            className={[
              'border-[3px] px-3 py-2 font-display text-[12px] tracking-tight',
              past
                ? 'border-bone/80 text-bone hover:bg-bone hover:text-ink'
                : isWorldChamps
                ? 'border-bone bg-bone text-ink hover:bg-ink hover:text-bone'
                : isUCI
                ? 'border-ink bg-ink text-bone hover:bg-acid hover:text-ink'
                : 'border-ink bg-ink text-acid hover:bg-acid hover:text-ink',
              'transition-colors',
            ].join(' ')}
            onClick={() => onOpen?.(event)}
          >
            DETAILS →
          </button>
        </div>

          {/* Barcode strip */}
          <div className={['flex items-center justify-between gap-3 border-t-[3px] px-3.5 py-2',
            past
              ? 'border-bone/40 bg-ink/60'
              : isWorldChamps
              ? 'border-bone bg-ink'
              : 'border-ink bg-ink',
          ].join(' ')}>
            <Barcode
              id={event.id}
              color={past ? '#EDE9D8' : '#DBFF00'}
              rainbow={isWorldChamps}
            />
            <span className="font-pixel text-[14px] leading-none text-bone">
              #{event.id.slice(0, 8).toUpperCase()}
            </span>
          </div>
      </div>
    </article>
  )
}
