import React from 'react'
import { cx } from './_utils'

/**
 * Display / Divider — text-between-rules section break.
 *
 * Two styles:
 * - `AcidPixel` (VT323, acid) — loud, used in `/// CHASE PACK`, `/// END OF FEED`
 * - `BoneMono`  (mono bold, bone @ 60%) — quiet, for utility separations
 *
 * Lines auto-fill the available horizontal space. Drop it in any auto-layout
 * parent and it stretches edge-to-edge.
 *
 * @param {'AcidPixel'|'BoneMono'} [style='AcidPixel']
 * @param {'sm'|'md'|'lg'} [size='md']
 * @param {string} label
 */
export default function Divider({
  style = 'AcidPixel',
  size = 'md',
  label = '/// END OF FEED',
  className,
  ...rest
}) {
  const sz = SIZES[size]
  const isPixel = style === 'AcidPixel'
  const textCls = isPixel
    ? cx('font-pixel text-acid', sz.pixel)
    : cx('font-mono font-bold uppercase tracking-widest text-bone/60', sz.mono)

  return (
    <div className={cx('flex items-center', sz.gap, className)} {...rest}>
      <span className={cx('block flex-1 bg-bone/30', sz.line)} />
      <span className={cx('leading-none', textCls)}>{label}</span>
      <span className={cx('block flex-1 bg-bone/30', sz.line)} />
    </div>
  )
}

const SIZES = {
  sm: { line: 'h-[1.5px]', pixel: 'text-[14px]', mono: 'text-[10px]', gap: 'gap-3' },
  md: { line: 'h-[2px]',   pixel: 'text-[16px]', mono: 'text-[11px]', gap: 'gap-3' },
  lg: { line: 'h-[3px]',   pixel: 'text-[20px]', mono: 'text-[13px]', gap: 'gap-4' },
}

Divider.STYLES = ['AcidPixel', 'BoneMono']
Divider.SIZES  = Object.keys(SIZES)
