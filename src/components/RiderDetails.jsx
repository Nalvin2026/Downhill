import React, { useEffect } from 'react'
import RiderPortrait from './RiderPortrait'
import { riderProfiles, COUNTRY_NAMES } from '../data'

function PodiumStamp({ rank }) {
  if (rank === 1) {
    return (
      <div className="relative h-14 w-14 shrink-0 border-[3px] border-ink bg-ink">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[28px] leading-none text-acid">01</span>
        </div>
        <span className="absolute -right-[3px] -top-[3px] h-2.5 w-2.5 bg-acid" />
        <span className="absolute -left-[3px] -bottom-[3px] h-2.5 w-2.5 bg-acid" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden border-[3px] border-ink bg-bone">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(135deg, transparent 0 38%, #0A0A0A 38% 44%, transparent 44%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[28px] leading-none text-ink">02</span>
        </div>
      </div>
    )
  }
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden border-[3px] border-ink stripes-bone">
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-[28px] leading-none text-ink"
          style={{ textShadow: '1.5px 1.5px 0 #EDE9D8' }}
        >
          03
        </span>
      </div>
    </div>
  )
}

function StatBlock({ label, value }) {
  return (
    <div className="border-[2px] border-bone/40 bg-ink px-2 py-2">
      <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
        {label}
      </div>
      <div className="mt-0.5 truncate font-display text-[16px] leading-none tracking-tight text-bone">
        {value}
      </div>
    </div>
  )
}

export default function RiderDetails({ rider, rank, series, gender, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!rider) return null
  const profile = riderProfiles[rider.rider]

  const seriesCode = series === 'UCI' ? 'UCI · DHI' : 'iXS · DH CUP'
  const genderCode = gender === 'men' ? 'ELITE M' : 'ELITE W'

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-ink">
      {/* TOP BAR */}
      <div
        className="flex items-center justify-between gap-3 border-b-[3px] border-bone bg-ink px-3 py-2"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 0.5rem)' }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            aria-label="Close rider details"
            className="flex h-9 w-9 items-center justify-center border-[3px] border-bone bg-ink text-bone hover:bg-acid hover:text-ink hover:border-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2L12 12M12 2L2 12"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="square"
              />
            </svg>
          </button>
          <div className="font-pixel text-[16px] leading-none text-acid">
            RIDER PROFILE
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PodiumStamp rank={rank} />
        </div>
      </div>

      {/* SCROLL AREA */}
      <div className="grain min-h-0 flex-1 overflow-y-auto pb-10">
        {/* HERO */}
        <section className="px-4 pt-4">
          <div className="flex items-start justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-bone/60">
            <span>{seriesCode} · {genderCode}</span>
            <span>P0{rank} · {rank === 1 ? 'CURRENT LEADER' : 'PODIUM'}</span>
          </div>

          <h1 className="mt-2 break-words font-display text-[44px] leading-[0.86] tracking-[-0.03em] text-bone [text-wrap:balance]">
            {rider.rider.toUpperCase()}
          </h1>

          {profile?.nickname && (
            <div className="mt-1 font-pixel text-[18px] leading-none text-acid">
              ★ {profile.nickname}
            </div>
          )}

          {/* Portrait + key facts */}
          <div className="mt-4 grid grid-cols-[1fr_1fr] gap-3">
            <RiderPortrait
              rider={rider.rider}
              country={rider.country}
              accent={profile?.accent || 'acid'}
              photoUrl={profile?.photoUrl}
            />
            <div className="flex flex-col justify-between gap-2">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                  CURRENT PTS
                </div>
                <div className="font-display text-[34px] leading-none text-acid">
                  {rider.points}
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                  COUNTRY
                </div>
                <div className="break-words font-display text-[14px] leading-tight text-bone">
                  {COUNTRY_NAMES[rider.country] || rider.country}
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                  TEAM
                </div>
                <div className="break-words font-display text-[14px] leading-tight text-bone">
                  {rider.team}
                </div>
              </div>
            </div>
          </div>
        </section>

        {profile ? (
          <>
            {/* BIO */}
            <section className="px-4 pt-6">
              <div className="mb-2 flex items-end justify-between">
                <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                  THE <span className="text-acid">FILE</span>
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                  DOSSIER
                </span>
              </div>
              <div className="border-[3px] border-bone bg-ink p-4 text-[13px] leading-snug text-bone/90">
                {profile.bio}
              </div>
            </section>

            {/* VITAL STATS */}
            <section className="px-4 pt-5">
              <div className="mb-2 flex items-end justify-between">
                <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                  VITAL <span className="text-acid">STATS</span>
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                  PERSON
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <StatBlock label="AGE" value={`${profile.age} YRS`} />
                <StatBlock label="HEIGHT" value={profile.height} />
                <StatBlock label="WEIGHT" value={profile.weight} />
              </div>
            </section>

            {/* CAREER */}
            <section className="px-4 pt-5">
              <div className="mb-2 flex items-end justify-between">
                <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                  CAREER <span className="text-acid">METRICS</span>
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                  SINCE {profile.joined}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <StatBlock label="WINS" value={profile.careerWins} />
                <StatBlock label="PODIUMS" value={profile.wcPodiums} />
                <StatBlock label="YRS PRO" value={2026 - parseInt(profile.joined, 10)} />
              </div>
              <div className="mt-2 border-[3px] border-bone bg-acid px-3 py-3 text-ink">
                <div className="font-pixel text-[14px] leading-none">
                  ★ BEST RESULT
                </div>
                <div className="mt-1 font-display text-[18px] leading-tight tracking-tight">
                  {profile.bestResult}
                </div>
              </div>
            </section>

            {/* RIG + STYLE */}
            <section className="px-4 pt-5">
              <div className="mb-2 flex items-end justify-between">
                <h2 className="font-display text-[22px] leading-none tracking-tight text-bone">
                  RIG · <span className="text-acid">STYLE</span>
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                  WEAPON
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="border-[3px] border-bone bg-ink px-3 py-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                    BIKE
                  </div>
                  <div className="font-display text-[18px] leading-tight text-bone">
                    {profile.bike}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border-[3px] border-bone bg-ink px-3 py-2.5">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                      TERRAIN
                    </div>
                    <div className="font-display text-[14px] leading-tight text-acid">
                      {profile.terrain}
                    </div>
                  </div>
                  <div className="border-[3px] border-bone bg-ink px-3 py-2.5">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">
                      STYLE
                    </div>
                    <div className="font-display text-[14px] leading-tight text-acid">
                      {profile.style}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="px-4 pt-6">
            <div className="border-[3px] border-bone/60 bg-ink p-6 text-center">
              <div className="font-display text-[22px] text-bone">NO DOSSIER.</div>
              <div className="mt-1 font-mono text-[11px] text-bone/60">
                Profile data hasn't been wired in for this rider yet.
              </div>
            </div>
          </section>
        )}

        {/* END */}
        <div className="mt-8 px-3">
          <div className="flex items-center gap-3">
            <span className="block h-[3px] flex-1 bg-bone/40" />
            <span className="font-pixel text-[16px] text-acid">/// END FILE</span>
            <span className="block h-[3px] flex-1 bg-bone/40" />
          </div>
        </div>
      </div>
    </div>
  )
}
