import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Schedule from './views/Schedule'
import Rankings from './views/Rankings'
import EventDetails from './components/EventDetails'
import RiderDetails from './components/RiderDetails'
import SplashScreen from './components/SplashScreen'
import { TODAY } from './data'

// Each view stays mounted in its own scroll container so switching
// preserves its scroll position. Hidden views use display:none so they
// drop out of the a11y tree and tab order.
function ViewSlot({ active, children }) {
  return (
    <div
      aria-hidden={!active}
      style={{ display: active ? 'block' : 'none' }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden"
    >
      {children}
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('schedule')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedRider, setSelectedRider] = useState(null)

  // Splash screen lifecycle: showing → exiting (fade) → gone (unmount).
  const [splash, setSplash] = useState('showing')
  useEffect(() => {
    const exit = setTimeout(() => setSplash('exiting'), 1900)
    const gone = setTimeout(() => setSplash('gone'), 2300)
    return () => {
      clearTimeout(exit)
      clearTimeout(gone)
    }
  }, [])

  const selectedIsPast = useMemo(() => {
    if (!selectedEvent) return false
    return new Date(selectedEvent.end) < TODAY
  }, [selectedEvent])

  return (
    <div
      className="grain relative mx-auto flex w-full max-w-[480px] flex-col overflow-hidden bg-ink"
      style={{
        height: '100dvh',
        minHeight: '100dvh',
      }}
    >
      <DesktopFrame />

      <Header showMarquee={false} />

      <main className="relative min-h-0 flex-1 overflow-hidden">
        <ViewSlot active={view === 'schedule'}>
          <div className="pb-10">
            <Schedule onOpenEvent={setSelectedEvent} />
          </div>
        </ViewSlot>
        <ViewSlot active={view === 'rankings'}>
          <div className="pb-10">
            <Rankings onOpenRider={setSelectedRider} />
          </div>
        </ViewSlot>
      </main>

      <Nav view={view} setView={setView} />

      {/* Event details sheet covers header + main + nav — only X closes it. */}
      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          past={selectedIsPast}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* Rider profile sheet — same full-frame treatment. */}
      {selectedRider && (
        <RiderDetails
          rider={selectedRider.entry}
          rank={selectedRider.rank}
          series={selectedRider.series}
          gender={selectedRider.gender}
          onClose={() => setSelectedRider(null)}
        />
      )}

      {/* Splash screen — covers the whole frame on first launch, auto-dismisses */}
      {splash !== 'gone' && <SplashScreen exiting={splash === 'exiting'} />}
    </div>
  )
}

function DesktopFrame() {
  return (
    <>
      <aside className="pointer-events-none fixed left-0 top-0 hidden h-screen w-[calc((100vw-480px)/2)] flex-col items-end justify-between bg-ink px-6 py-8 text-bone md:flex">
        <div className="font-display text-[16px] leading-none">DH//</div>
        <div className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-bone/50">
          <div>◼ MOBILE / OPTIMIZED</div>
          <div>◼ 2026 SEASON FEED</div>
          <div>◼ UCI · DHI · iXS</div>
        </div>
        <div className="font-pixel text-[14px] text-acid">SCAN ↓</div>
      </aside>
      <aside className="pointer-events-none fixed right-0 top-0 hidden h-screen w-[calc((100vw-480px)/2)] flex-col items-start justify-between bg-ink px-6 py-8 text-bone md:flex">
        <div className="font-display text-[16px] leading-none text-acid">//TRACKER</div>
        <div className="space-y-1 font-mono text-[10px] uppercase tracking-widest text-bone/50">
          <div>STATUS / OK</div>
          <div>LATENCY / 12ms</div>
          <div>FEED / LIVE</div>
        </div>
        <div className="font-pixel text-[14px] text-bone">v0.1·BETA</div>
      </aside>
      <div className="pointer-events-none fixed inset-0 hidden md:block">
        <div className="mx-auto h-full max-w-[480px] border-x-[3px] border-bone/40" />
      </div>
    </>
  )
}
