import React from 'react'

// App-wide header chrome.
// `preTitle` — small pixel-font label on the top-left (e.g. "SEASON 2026")
// `title`    — JSX content shown big below
// `meta`     — JSX content shown small on the top-right (counts / series meta)
export default function Header({ preTitle, title, meta }) {
  return (
    <header
      className="relative z-40 border-b-[3px] border-bone/90 bg-ink"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="px-4 pt-3 pb-3">
        {/* Top row: pre-title left, meta right */}
        <div className="flex items-start justify-between gap-3">
          {preTitle && (
            <div className="font-pixel text-[14px] leading-none text-acid">
              {preTitle}
            </div>
          )}
          {meta && (
            <div className="shrink-0 whitespace-nowrap text-right font-mono text-[10px] uppercase leading-tight text-bone/60">
              {meta}
            </div>
          )}
        </div>

        {/* Page title */}
        <h1 className="mt-1.5 font-display text-[34px] leading-[0.95] tracking-[-0.02em] text-bone">
          {title}
        </h1>
      </div>
    </header>
  )
}
