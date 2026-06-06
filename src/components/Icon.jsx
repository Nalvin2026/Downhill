import React from 'react'

// Raw, sharp, brutalist iconography. All hand-drawn, 2px strokes.
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 22 22',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
}

export const FlagIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 2v18" />
    <path d="M4 3h14l-3 4 3 4H4" />
  </svg>
)

export const TrophyIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 3h12v4a6 6 0 0 1-12 0V3z" />
    <path d="M2 5h3M17 5h3" />
    <path d="M8 13l1 4h4l1-4" />
    <path d="M6 20h10" />
  </svg>
)

export const BoltIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2L4 13h6l-1 7 9-11h-6l0-7z" />
  </svg>
)

export const ArrowIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11h14" />
    <path d="M13 5l6 6-6 6" />
  </svg>
)

export const CrossIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 4l14 14M18 4L4 18" />
  </svg>
)

export const SignalIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="14" width="3" height="5" />
    <rect x="9" y="10" width="3" height="9" />
    <rect x="15" y="5" width="3" height="14" />
  </svg>
)

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M11 2a6 6 0 0 0-6 6c0 5 6 12 6 12s6-7 6-12a6 6 0 0 0-6-6z" />
    <circle cx="11" cy="8" r="2" />
  </svg>
)
