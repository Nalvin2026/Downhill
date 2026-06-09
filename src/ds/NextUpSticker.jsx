import React from 'react'
import { cx } from './_utils'

/**
 * Display / NextUpSticker — graffiti sticker called out on the next
 * upcoming EventCard.
 *
 * Siren bg, ink border, hard 3/3/0 shadow, slight counter-clockwise tilt.
 * Pixel ▸ glyph + display label.
 *
 * Typically absolute-positioned at a card's top-left corner. The component
 * doesn't include positioning by itself — pass a `className` (e.g.
 * `'absolute -left-2 -top-3 z-10'`) at the call-site.
 *
 * @param {string} [label='NEXT UP']
 */
export default function NextUpSticker({ label = 'NEXT UP', className, ...rest }) {
  return (
    <div
      aria-hidden
      className={cx(
        '-rotate-[6deg] border-[3px] border-ink bg-siren px-2 py-1',
        'shadow-[3px_3px_0_0_#0A0A0A]',
        className
      )}
      {...rest}
    >
      <span className="flex items-center gap-1 font-display text-[12px] leading-none tracking-tight text-ink">
        <span className="font-pixel text-[13px] leading-none">▸</span>
        {label}
      </span>
    </div>
  )
}
