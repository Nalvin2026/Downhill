import React from 'react'
import { cx } from './_utils'

/**
 * Surface / Panel — bordered container with a title row and content slot.
 *
 * Backbone of the Live HUD telemetry blocks: 2px bone-30 border, ink fill,
 * title (mono bold) on the left of the head, optional right-aligned meta.
 *
 * Children render in the content slot below the title.
 *
 * @param {string} title
 * @param {React.ReactNode} [meta]   Right-aligned meta. Hidden if not provided.
 * @param {boolean} [hasMeta=true]
 * @param {React.ReactNode} children
 */
export default function Panel({
  title,
  meta,
  hasMeta = true,
  children,
  className,
  ...rest
}) {
  return (
    <section
      className={cx(
        'border-[2px] border-bone/40 bg-ink p-3',
        className
      )}
      {...rest}
    >
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-bone/60">
        <span>{title}</span>
        {hasMeta && meta != null && <span className="text-bone/80">{meta}</span>}
      </div>
      {children}
    </section>
  )
}
