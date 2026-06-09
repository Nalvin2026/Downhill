import React from 'react'
import { cx } from './_utils'

/**
 * Display / Tag — rotated graffiti sticker. Inked border + hard offset shadow.
 *
 * Used as the gender marker in HeroBlock (M / W), achievement accents, and
 * any place that wants a "stuck on" sticker feel. Consumer is responsible
 * for the rotation — wrap it in a span with `style={{ transform: 'rotate(-6deg)' }}`
 * (or use a utility class) since rotation is contextual, not a variant axis.
 *
 * Token bindings:
 * - Color fills bind to palette/{wire|punch|acid|siren|bone}
 * - Border binds to bg/primary (ink)
 * - Shadow uses ink at 2/2/0 (no blur)
 * - Text color always ink (all bg colors are light enough to contrast)
 *
 * @param {'Wire'|'Punch'|'Acid'|'Siren'|'Bone'} [color='Wire']
 * @param {'sm'|'md'|'lg'} [size='md']
 * @param {string} label  Short label, typically a single character.
 */
export default function Tag({ color = 'Wire', size = 'md', label = 'M', className, ...rest }) {
  return (
    <span
      className={cx(
        'inline-flex items-center justify-center border-2 border-ink',
        'shadow-[2px_2px_0_0_#0A0A0A]',
        'font-display leading-none text-ink',
        COLORS[color],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {label}
    </span>
  )
}

const COLORS = {
  Wire:  'bg-wire',
  Punch: 'bg-punch',
  Acid:  'bg-acid',
  Siren: 'bg-siren',
  Bone:  'bg-bone',
}

const SIZES = {
  sm: 'h-5 w-5 text-[11px]',
  md: 'h-7 w-7 text-[14px]',
  lg: 'h-9 w-9 text-[18px]',
}

Tag.COLORS = Object.keys(COLORS)
Tag.SIZES  = Object.keys(SIZES)
