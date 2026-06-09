import React from 'react'
import { cx } from './_utils'
import Stamp from './Stamp'
import Tag from './Tag'
import Badge from './Badge'

/**
 * Display / HeroBlock — current-leader card. Acid top + ink bottom strip
 * with progress bar and points.
 *
 * Composes:
 * - `Tag` for the gender marker (rotated -6°). Wire for Men, Punch for Women.
 * - `Stamp` for the P01 leader stamp.
 * - `Badge` (Outline on ink, but rendered with custom ink-on-acid styling here
 *   since it sits on the acid hero ground).
 *
 * Trademark hard shadow (6/6/0) sits behind the card, matching the
 * `shadow-[6px_6px_0_0_#000]` recipe.
 *
 * @param {'Men'|'Women'} [gender='Women']
 * @param {string} name
 * @param {string} team
 * @param {string} country
 * @param {string} points
 * @param {number} [pointsPct=1]
 * @param {() => void} [onClick]
 */
export default function HeroBlock({
  gender = 'Women',
  name = 'VALENTINA HÖLL',
  team = 'COMMENCAL SCHWALBE',
  country = 'AUT',
  points = '466',
  pointsPct = 1,
  onClick,
  className,
  ...rest
}) {
  const Comp = onClick ? 'button' : 'div'
  const tagColor = gender === 'Men' ? 'Wire' : 'Punch'
  const tagLetter = gender === 'Men' ? 'M' : 'W'

  return (
    <Comp
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cx(
        'group block w-full text-left',
        'relative overflow-hidden border-[3px] border-bone shadow-[6px_6px_0_0_#000]',
        className
      )}
      {...rest}
    >
      {/* Acid top */}
      <div className="relative bg-acid p-4 text-ink">
        {/* Meta row */}
        <div className="flex items-center gap-2">
          <span style={{ transform: 'rotate(-6deg)', display: 'inline-flex' }}>
            <Tag color={tagColor} size="md" label={tagLetter} />
          </span>
          <span className="font-pixel text-[16px] leading-none">CURRENT LEADER</span>
          <span className="flex-1 font-mono text-[10px] uppercase tracking-widest text-ink/60">
            · P01
          </span>
          <span className="border-[2px] border-ink px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest">
            {country}
          </span>
        </div>

        {/* Main row */}
        <div className="mt-3 flex items-start gap-3">
          <Stamp style="Solid" size="lg" position="01" hasAccents />
          <div className="min-w-0 flex-1">
            <div className="break-words font-display text-[26px] leading-[0.9] tracking-[-0.02em] [text-wrap:balance]">
              {name}
            </div>
            <div className="mt-1 truncate font-mono text-[10px] uppercase tracking-widest text-ink/75">
              {team}
            </div>
          </div>
        </div>
      </div>

      {/* Ink bottom */}
      <div className="grid grid-cols-[1fr_auto] items-end gap-3 border-t-[3px] border-ink bg-ink px-3 py-2">
        <div className="h-3 w-full border-[2px] border-acid">
          <div
            className="h-full bg-acid"
            style={{ width: `${Math.max(0, Math.min(1, pointsPct)) * 100}%` }}
          />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[28px] leading-none text-acid">{points}</span>
          <span className="font-mono text-[10px] text-bone/70">PTS</span>
        </div>
      </div>
    </Comp>
  )
}

HeroBlock.GENDERS = ['Men', 'Women']
