import React from 'react'

/**
 * Broadcast (REC) icon used in the bottom-nav LIVE tab.
 * Concentric squares + center dot. `accent` defaults to siren red.
 */
export default function LiveIcon({
  size = 24,
  stroke = '#EDE9D8',
  accent = '#FF3336',
  ...rest
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...rest}>
      <rect x="2.5" y="2.5" width="21" height="21" stroke={stroke} strokeWidth="2" />
      <rect x="7" y="7" width="12" height="12" stroke={stroke} strokeWidth="1.6" />
      <circle cx="13" cy="13" r="3" fill={accent} />
    </svg>
  )
}
