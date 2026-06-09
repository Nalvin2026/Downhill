import React from 'react'

/**
 * Calendar icon used in the bottom-nav SCHEDULE tab.
 * Stroke + accent colors are consumer-controlled so it can flip
 * between Default (bone + acid) and Active (ink) states.
 */
export default function ScheduleIcon({
  size = 24,
  stroke = '#EDE9D8',
  accent = '#DBFF00',
  ...rest
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...rest}>
      <rect x="3" y="6" width="20" height="17" stroke={stroke} strokeWidth="2.4" />
      <path d="M3 11h20" stroke={stroke} strokeWidth="2.4" />
      <path d="M8 3v6M18 3v6" stroke={stroke} strokeWidth="2.4" strokeLinecap="square" />
      <rect x="7" y="14" width="3" height="3" fill={accent} />
      <rect x="11.5" y="14" width="3" height="3" fill={stroke} />
    </svg>
  )
}
