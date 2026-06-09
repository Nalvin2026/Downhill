import React from 'react'
import { cx } from './_utils'

/**
 * Navigation / Header — page header chrome.
 *
 * Layout: top row (pre-title acid pixel | meta L1 + optional L2 mono right) +
 * big title row (Archivo Black 34px) split into two words — `titleWord1` in
 * bone, `titleWord2` in acid. Bottom edge has a 3px bone divider.
 *
 * Handles iOS safe-area inset top via `style.paddingTop` so it works as the
 * app's top chrome when notched.
 *
 * @param {string} [preTitle]
 * @param {string} titleWord1
 * @param {string} [titleWord2]   When set, painted acid.
 * @param {string} [metaL1]
 * @param {string} [metaL2]
 * @param {boolean} [hasMetaL2=true]
 * @param {boolean} [safeArea=false]  When true, adds `env(safe-area-inset-top)` padding.
 */
export default function Header({
  preTitle,
  titleWord1,
  titleWord2,
  metaL1,
  metaL2,
  hasMetaL2 = true,
  safeArea = false,
  className,
  ...rest
}) {
  return (
    <header
      className={cx(
        'relative z-40 border-b-[3px] border-bone/90 bg-ink',
        className
      )}
      style={safeArea ? { paddingTop: 'env(safe-area-inset-top)' } : undefined}
      {...rest}
    >
      <div className="px-4 pt-3 pb-3">
        {(preTitle || metaL1) && (
          <div className="flex items-start justify-between gap-3">
            {preTitle && (
              <div className="font-pixel text-[14px] leading-none text-acid">
                {preTitle}
              </div>
            )}
            {metaL1 && (
              <div className="shrink-0 whitespace-nowrap text-right font-mono text-[10px] uppercase leading-tight text-bone/60">
                <div>{metaL1}</div>
                {hasMetaL2 && metaL2 && <div>{metaL2}</div>}
              </div>
            )}
          </div>
        )}

        <h1 className="mt-1.5 flex flex-wrap items-baseline gap-x-3 font-display text-[34px] leading-[0.95] tracking-[-0.02em] text-bone">
          {titleWord1 && <span>{titleWord1}</span>}
          {titleWord2 && <span className="text-acid">{titleWord2}</span>}
        </h1>
      </div>
    </header>
  )
}
