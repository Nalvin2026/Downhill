import React from 'react'
import { cx } from './_utils'

/**
 * Display / Stamp — brutalist position-number block with optional corner accents.
 *
 * Used in HeroBlock (P01 leader stamp) and on RiderRow podium positions.
 * The corner accents (top-right + bottom-left bone squares) are the
 * signature graffiti detail — toggle off for chase-pack rows or wherever
 * a quieter treatment is needed.
 *
 * Token bindings:
 * - Solid    → bg/primary (ink) + border/ink + fg/accent (acid)
 * - Outlined → transparent + border/structural (bone) + fg/primary (bone)
 * - Accents always bone (visible on both styles)
 *
 * @param {'Solid'|'Outlined'} [style='Solid']
 * @param {'sm'|'md'|'lg'} [size='md']
 * @param {string} position    Number string (defaults "01"). Keep ≤ 2 chars.
 * @param {boolean} [hasAccents=true]
 */
export default function Stamp({
  style = 'Solid',
  size = 'md',
  position = '01',
  hasAccents = true,
  className,
  ...rest
}) {
  const STYLES = {
    Solid:    { box: 'bg-ink border-ink',  text: 'text-acid' },
    Outlined: { box: 'border-bone',        text: 'text-bone' },
  }
  const sz = SIZES[size]
  const st = STYLES[style]

  return (
    <div
      className={cx(
        'relative inline-flex shrink-0 items-center justify-center',
        st.box,
        sz.box,
        sz.bw,
        className
      )}
      {...rest}
    >
      <span className={cx('font-display leading-none', sz.num, st.text)}>{position}</span>
      {hasAccents && (
        <>
          <span className={cx('absolute -right-[3px] -top-[3px] bg-bone', sz.accent)} />
          <span className={cx('absolute -left-[3px] -bottom-[3px] bg-bone', sz.accent)} />
        </>
      )}
    </div>
  )
}

const SIZES = {
  sm: { box: 'h-11 w-11', bw: 'border-2',         num: 'text-[22px]', accent: 'h-[7px] w-[7px]' },
  md: { box: 'h-14 w-14', bw: 'border-[2.5px]',   num: 'text-[28px]', accent: 'h-2   w-2'   },
  lg: { box: 'h-16 w-16', bw: 'border-[3px]',     num: 'text-[34px]', accent: 'h-2.5 w-2.5' },
}

Stamp.STYLES = ['Solid', 'Outlined']
Stamp.SIZES  = Object.keys(SIZES)
