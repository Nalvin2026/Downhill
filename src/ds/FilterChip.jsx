import React from 'react'
import { cx } from './_utils'

/**
 * Interactive / FilterChip — small toggle-able filter pill.
 *
 * Used in Rankings' SeriesFilter (UCI / iXS). Lower emphasis than Toggle —
 * for places where multiple chips sit in a horizontal row with a leading
 * `FILTER /` label.
 *
 * Renders as a `<button>` when `onClick` is provided, else as a `<span>`.
 *
 * @param {'Default'|'Selected'} [state='Default']
 * @param {'sm'|'md'} [size='md']
 * @param {string} label
 * @param {() => void} [onClick]
 */
export default function FilterChip({
  state = 'Default',
  size = 'md',
  label,
  onClick,
  className,
  ...rest
}) {
  const sz = SIZES[size]
  const st = STATES[state]
  const interactive = !!onClick
  const Comp = interactive ? 'button' : 'span'

  return (
    <Comp
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      aria-pressed={interactive ? state === 'Selected' : undefined}
      className={cx(
        'inline-flex shrink-0 items-center justify-center',
        'font-display tracking-tight border-2',
        sz.pad, sz.font, st,
        interactive && 'transition-colors',
        className
      )}
      {...rest}
    >
      {label}
    </Comp>
  )
}

const STATES = {
  Default:  'bg-transparent border-bone/60 text-bone hover:border-bone',
  Selected: 'bg-acid border-acid text-ink',
}
const SIZES = {
  sm: { pad: 'px-2 py-1',    font: 'text-[11px]' },
  md: { pad: 'px-2.5 py-1.5', font: 'text-[13px]' },
}

FilterChip.STATES = Object.keys(STATES)
FilterChip.SIZES  = Object.keys(SIZES)
