import React from 'react'
import { cx } from './_utils'

/**
 * Interactive / Toggle — 2-cell segmented control.
 *
 * Used for the gender switch (ELITE MEN / ELITE WOMEN) and the schedule
 * UPCOMING / PAST split. Sharp 3px bone frame, single bone divider between
 * cells, acid bg on the selected side with a small ◆ marker in the corner.
 *
 * Controlled — pass `selected` + `onChange` to wire it up. Without
 * `onChange`, renders as display-only (buttons still focusable / clickable
 * but no state updates).
 *
 * @param {'Left'|'Right'} [selected='Left']
 * @param {'sm'|'md'|'lg'} [size='md']
 * @param {string} labelLeft
 * @param {string} labelRight
 * @param {(value:'Left'|'Right') => void} [onChange]
 */
export default function Toggle({
  selected = 'Left',
  size = 'md',
  labelLeft = 'ELITE MEN',
  labelRight = 'ELITE WOMEN',
  onChange,
  className,
  ...rest
}) {
  const sz = SIZES[size]
  const handle = (val) => () => onChange?.(val)

  return (
    <div
      className={cx('inline-grid bg-ink border-bone', sz.border, className)}
      style={{ gridTemplateColumns: '1fr auto 1fr' }}
      role="tablist"
      {...rest}
    >
      <Cell
        active={selected === 'Left'}
        label={labelLeft}
        onClick={handle('Left')}
        sz={sz}
      />
      <div className={cx('bg-bone', sz.divider)} aria-hidden />
      <Cell
        active={selected === 'Right'}
        label={labelRight}
        onClick={handle('Right')}
        sz={sz}
      />
    </div>
  )
}

function Cell({ active, label, onClick, sz }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      role="tab"
      className={cx(
        'relative font-display leading-none tracking-tight transition-colors',
        sz.pad, sz.font,
        active ? 'bg-acid text-ink' : 'text-bone hover:bg-ash',
      )}
    >
      {label}
      {active && (
        <span
          aria-hidden
          className={cx(
            'absolute right-2 top-1 font-pixel leading-none text-ink/70',
            sz.diamond
          )}
        >
          ◆
        </span>
      )}
    </button>
  )
}

const SIZES = {
  sm: { pad: 'px-3 py-2',   font: 'text-[12px]', border: 'border-2',     divider: 'w-[2px]', diamond: 'text-[10px]' },
  md: { pad: 'px-3.5 py-3', font: 'text-[16px]', border: 'border-[3px]', divider: 'w-[3px]', diamond: 'text-[14px]' },
  lg: { pad: 'px-4 py-4',   font: 'text-[20px]', border: 'border-[3px]', divider: 'w-[3px]', diamond: 'text-[16px]' },
}

Toggle.SELECTED = ['Left', 'Right']
Toggle.SIZES    = Object.keys(SIZES)
