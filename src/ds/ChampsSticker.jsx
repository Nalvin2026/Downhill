import React from 'react'
import { cx } from './_utils'

/**
 * Display / ChampsSticker — graffiti sticker used once a season on the
 * World Championships EventCard.
 *
 * UCI rainbow-stripe ground (blue / red / black / yellow / green), ink
 * border, hard 3/3/0 shadow, slight clockwise tilt. Inner chip is ink
 * with pixel ★ + display label in bone.
 *
 * Typically absolute-positioned at a card's top-left corner. The component
 * doesn't include positioning by itself — pass a `className` at the call-site.
 *
 * @param {string} [label='CHAMPS']
 */
export default function ChampsSticker({ label = 'CHAMPS', className, ...rest }) {
  return (
    <div
      aria-hidden
      className={cx(
        'rotate-[6deg] border-[3px] border-ink p-[3px]',
        'shadow-[3px_3px_0_0_#0A0A0A]',
        className
      )}
      style={{ background: RAINBOW_STRIPES }}
      {...rest}
    >
      <span className="flex items-center gap-1 bg-ink px-2 py-0.5 font-display text-[12px] leading-none tracking-tight text-bone">
        <span className="font-pixel text-[13px] leading-none">★</span>
        {label}
      </span>
    </div>
  )
}

// Canonical UCI rainbow stripe ground.
// Order: blue → red → black → yellow → green (top-to-bottom).
export const RAINBOW_STRIPES =
  'linear-gradient(to bottom,' +
  ' #0066B3 0%, #0066B3 20%,' +
  ' #E11226 20%, #E11226 40%,' +
  ' #0A0A0A 40%, #0A0A0A 60%,' +
  ' #FBED21 60%, #FBED21 80%,' +
  ' #00A551 80%, #00A551 100%)'
