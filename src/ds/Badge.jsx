import React from 'react'
import { cx } from './_utils'

/**
 * Display / Badge — sharp, mono-typed label chip.
 *
 * Used for country codes (RiderRow), series tags (EventCard), live indicators,
 * achievement markers (P01), and short status pills (FINISHED, DNS).
 *
 * Token bindings (mirrors Figma `Display / Badge` set):
 * - Outline → bg/primary + border/structural + fg/primary
 * - Acid    → bg/accent  + fg/on-accent
 * - Bone    → bg/inverse + fg/inverse
 * - Siren   → feedback/live + fg/primary
 *
 * @param {'Outline'|'Acid'|'Bone'|'Siren'} [style='Outline']
 * @param {'sm'|'md'|'lg'} [size='md']
 * @param {string} label   Short uppercase string. Component does NOT auto-uppercase.
 * @param {string} [className]  Optional extension classes.
 */
export default function Badge({
  style = 'Outline',
  size = 'md',
  label,
  className,
  ...rest
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center justify-center font-mono font-bold leading-none tracking-widest',
        STYLES[style],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {label}
    </span>
  )
}

const STYLES = {
  Outline: 'bg-ink border-2 border-bone text-bone',
  Acid:    'bg-acid text-ink',
  Bone:    'bg-bone text-ink',
  Siren:   'bg-siren text-bone',
}

const SIZES = {
  sm: 'text-[9px]  px-1.5 py-[2px]',
  md: 'text-[10px] px-2   py-1',
  lg: 'text-[12px] px-2.5 py-1.5',
}

Badge.STYLES = Object.keys(STYLES)
Badge.SIZES  = Object.keys(SIZES)
