import React from 'react'

/**
 * Ranked-list icon used in the bottom-nav RANKINGS tab.
 * Row 1's leader block uses `accent`; lines use `stroke`.
 */
export default function RankingsIcon({
  size = 24,
  stroke = '#EDE9D8',
  accent = '#DBFF00',
  ...rest
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...rest}>
      <rect x="2" y="4" width="5" height="5" fill={accent} />
      <rect x="9.5" y="5" width="14" height="3" fill={stroke} />
      <rect x="2.85" y="11.35" width="3.3" height="3.3" stroke={stroke} strokeWidth="1.4" />
      <rect x="9.5" y="11.5" width="11" height="3" fill={stroke} />
      <rect x="2.85" y="18.35" width="3.3" height="3.3" stroke={stroke} strokeWidth="1.4" />
      <rect x="9.5" y="18" width="8" height="3" fill={stroke} />
    </svg>
  )
}
