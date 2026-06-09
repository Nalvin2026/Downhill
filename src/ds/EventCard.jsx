import React from 'react'
import { cx } from './_utils'
import Badge from './Badge'

/**
 * Display / EventCard — race event ticket card.
 *
 * Composed from three strips: header (ash) with series chip + round meta,
 * body (ink) with venue + date range, bottom (ash) with status pill + details link.
 *
 * Series controls the series-chip style:
 * - UCI → acid-filled Badge
 * - iXS → outlined Badge
 *
 * State controls card emphasis:
 * - Upcoming → bone border, full opacity, `UPCOMING` outlined status
 * - Past     → bone-30 border, reduced opacity, `FINISHED` bone-filled status
 *
 * @param {'UCI'|'iXS'} [series='UCI']
 * @param {'Upcoming'|'Past'} [state='Upcoming']
 * @param {string} round
 * @param {string} venue
 * @param {string} [subVenue]
 * @param {string} dates
 * @param {string} month
 * @param {() => void} [onClick]
 */
export default function EventCard({
  series = 'UCI',
  state = 'Upcoming',
  round = 'R03 · UCI DHI · 2026',
  venue = 'SAALFELDEN',
  subVenue = 'LEOGANG · AUT',
  dates = '12–14',
  month = 'JUN',
  onClick,
  className,
  ...rest
}) {
  const Comp = onClick ? 'button' : 'div'
  const isPast = state === 'Past'

  return (
    <Comp
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cx(
        'group block w-full text-left',
        'border-[3px]',
        isPast ? 'border-bone/30 opacity-75' : 'border-bone',
        'bg-ink',
        onClick && 'transition-colors',
        className
      )}
      {...rest}
    >
      {/* Header strip */}
      <div className="flex items-center gap-2.5 bg-ash px-3 py-2">
        <Badge style={series === 'UCI' ? 'Acid' : 'Outline'} size="sm" label={series} />
        <span className="flex-1 truncate font-mono text-[10px] uppercase tracking-widest text-bone/60">
          {round}
        </span>
      </div>

      {/* Body */}
      <div className="flex items-start gap-4 p-4">
        <div className="flex-1 min-w-0">
          <div className="font-display text-[22px] leading-[0.95] tracking-[-0.02em] text-bone">
            {venue}
          </div>
          {subVenue && (
            <div className="mt-1.5 truncate font-mono text-[10px] uppercase tracking-widest text-bone/60">
              {subVenue}
            </div>
          )}
        </div>
        <div className="shrink-0 text-right">
          <div className="font-display text-[28px] leading-[0.95] tracking-[-0.02em] text-acid">
            {dates}
          </div>
          <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-widest text-bone/60">
            {month}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="flex items-center gap-2 bg-ash px-3 py-2.5">
        {isPast ? (
          <Badge style="Bone" size="sm" label="FINISHED" />
        ) : (
          <Badge style="Outline" size="sm" label="UPCOMING" />
        )}
        <span className="flex-1 text-right font-mono text-[11px] font-bold uppercase tracking-widest text-acid">
          DETAILS →
        </span>
      </div>
    </Comp>
  )
}

EventCard.SERIES = ['UCI', 'iXS']
EventCard.STATES = ['Upcoming', 'Past']
