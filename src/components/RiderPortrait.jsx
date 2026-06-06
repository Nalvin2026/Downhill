import React, { useState } from 'react'

// Brutalist stylized portrait — helmet + goggles + jersey silhouette with the
// rider's initials. Stands in for a real photo and stays on-brand.
// If `photoUrl` is provided, that image is rendered instead, with the SVG as
// a fallback if the photo fails to load.
//
// Accent palette options: 'acid' (default), 'wire', 'punch'
const ACCENT_HEX = {
  acid: '#DBFF00',
  wire: '#1DC4FD',
  punch: '#E00D68',
}

export default function RiderPortrait({ rider, country, accent = 'acid', photoUrl }) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const showPhoto = photoUrl && !photoFailed

  const initials = rider
    .split(/\s+/)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const a = ACCENT_HEX[accent] || ACCENT_HEX.acid

  return (
    <div className="relative aspect-square overflow-hidden border-[3px] border-bone bg-ink">
      {showPhoto && (
        <img
          src={photoUrl}
          alt={rider}
          loading="lazy"
          onError={() => setPhotoFailed(true)}
          className="absolute inset-0 block h-full w-full object-cover"
        />
      )}
      {!showPhoto && (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
      >
        {/* Background — scanlines and grit */}
        <rect width="100" height="100" fill="#0A0A0A" />
        <g fill="#1A1A19">
          {[6, 16, 26, 36, 46, 56, 66, 76, 86, 96].map((y) => (
            <rect key={y} x="0" y={y} width="100" height="2" />
          ))}
        </g>

        {/* Accent stripe across the back */}
        <rect x="0" y="40" width="100" height="14" fill={a} fillOpacity="0.18" />

        {/* Jersey / shoulders */}
        <path
          d="M 10 100 L 10 84 Q 10 66 30 60 L 70 60 Q 90 66 90 84 L 90 100 Z"
          fill="#EDE9D8"
          stroke="#0A0A0A"
          strokeWidth="1.4"
        />
        {/* Jersey number plate */}
        <rect x="38" y="74" width="24" height="18" fill="#0A0A0A" stroke={a} strokeWidth="1.2" />
        <text
          x="50"
          y="89"
          fontFamily="Archivo Black, sans-serif"
          fontSize="13"
          fill={a}
          textAnchor="middle"
        >
          {initials}
        </text>

        {/* Helmet base + chin guard */}
        <path
          d="M 22 56 Q 22 18 50 18 Q 78 18 78 56 L 78 60 L 22 60 Z"
          fill={a}
          stroke="#0A0A0A"
          strokeWidth="1.5"
        />
        {/* Helmet shadow stripe */}
        <path
          d="M 22 56 Q 22 28 50 28 Q 78 28 78 56 L 78 60 L 22 60 Z"
          fill="#0A0A0A"
          fillOpacity="0.12"
        />

        {/* Goggles strip */}
        <rect x="20" y="32" width="60" height="12" fill="#0A0A0A" />
        {/* Goggles lenses */}
        <rect x="26" y="34" width="20" height="8" fill={a} fillOpacity="0.85" />
        <rect x="54" y="34" width="20" height="8" fill={a} fillOpacity="0.85" />
        {/* Lens highlights */}
        <rect x="28" y="35" width="8" height="2" fill="#EDE9D8" fillOpacity="0.6" />
        <rect x="56" y="35" width="8" height="2" fill="#EDE9D8" fillOpacity="0.6" />

        {/* Chin guard line */}
        <rect x="34" y="60" width="32" height="3" fill="#0A0A0A" />
      </svg>
      )}

      {/* Country code corner badge */}
      <div className="absolute left-2 top-2 border-[2px] border-bone bg-ink px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none text-bone">
        {country}
      </div>

      {/* Scanline overlay (subtle) */}
      <div className="pointer-events-none absolute inset-0 scanline opacity-25" />

      {/* Grain hash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  )
}
