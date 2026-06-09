import React from 'react'
import { cx } from './_utils'
import Stamp from './Stamp'
import Badge from './Badge'

/**
 * Display / RiderRow — leaderboard row.
 *
 * Composes `Stamp` for the position block (P1 = Solid, P2/P3 = Outlined,
 * Pack = no stamp / plain rank text) and `Badge` for the country code.
 *
 * Progress bar at the bottom fills based on `pointsPct` (0–1, defaults
 * proportional defaults per position so playgrounds look sensible).
 *
 * @param {'P1'|'P2'|'P3'|'Pack'} [position='P1']
 * @param {string} rank
 * @param {string} name
 * @param {string} team
 * @param {string} country
 * @param {string} points
 * @param {number} [pointsPct]  0–1. When omitted, defaults per position.
 * @param {() => void} [onClick]
 */
export default function RiderRow({
  position = 'P1',
  rank = '01',
  name = 'VALENTINA HÖLL',
  team = 'COMMENCAL SCHWALBE',
  country = 'AUT',
  points = '466',
  pointsPct,
  onClick,
  className,
  ...rest
}) {
  const pct = pointsPct ?? DEFAULT_PCT[position] ?? 1
  const Comp = onClick ? 'button' : 'div'
  const stamp = STAMP_FOR[position]

  return (
    <Comp
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cx(
        'block w-full text-left',
        'border-[2px] border-bone/30 bg-ink p-3.5',
        className
      )}
      {...rest}
    >
      <div className="flex items-center gap-3.5">
        {stamp ? (
          <Stamp
            style={stamp.style}
            size={stamp.size}
            position={rank}
            hasAccents={stamp.hasAccents}
          />
        ) : (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center">
            <span className="font-display text-[18px] leading-none text-bone">{rank}</span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="truncate font-display text-[17px] leading-none tracking-[-0.02em] text-bone">
            {name}
          </div>
          <div className="mt-1 truncate font-mono text-[10px] uppercase tracking-widest text-bone/60">
            {team}
          </div>
        </div>

        <Badge style="Outline" size="md" label={country} />

        <div className="text-right">
          <div className="font-display text-[24px] leading-none tracking-[-0.02em] text-acid">
            {points}
          </div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">PTS</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-2.5 h-1.5 w-full bg-ash">
        <div
          className="h-full bg-acid"
          style={{ width: `${Math.max(0, Math.min(1, pct)) * 100}%` }}
        />
      </div>
    </Comp>
  )
}

const STAMP_FOR = {
  P1:   { style: 'Solid',    size: 'md', hasAccents: true  },
  P2:   { style: 'Outlined', size: 'md', hasAccents: false },
  P3:   { style: 'Outlined', size: 'md', hasAccents: true  },
  Pack: null,
}

const DEFAULT_PCT = {
  P1: 1, P2: 0.71, P3: 0.61, Pack: 0.42,
}

RiderRow.POSITIONS = Object.keys(STAMP_FOR)
