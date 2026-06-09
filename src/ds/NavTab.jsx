import React from 'react'
import { cx } from './_utils'
import ScheduleIcon from './icons/ScheduleIcon'
import RankingsIcon from './icons/RankingsIcon'
import LiveIcon from './icons/LiveIcon'

/**
 * Navigation / NavTab — bottom-nav cell.
 *
 * Two variant axes:
 * - `tab` controls which icon renders (Schedule, Rankings, Live)
 * - `state` controls bg + text + icon coloring (Default, Active, Disabled)
 *
 * Combined matrix gives consumers the exact visual with no manual color
 * juggling — pick the two props and you're done.
 *
 * Tokens:
 * - bg: ink (Default/Disabled) or acid (Active)
 * - fg: bone (Default/Disabled) or ink (Active)
 * - Schedule/Rankings accent = acid · Live accent = siren
 *
 * @param {'Schedule'|'Rankings'|'Live'} [tab='Schedule']
 * @param {'Default'|'Active'|'Disabled'} [state='Default']
 * @param {string} [label]   Defaults to the tab id uppercased.
 * @param {boolean} [hasSoonBadge=false]
 * @param {() => void} [onClick]
 */
export default function NavTab({
  tab = 'Schedule',
  state = 'Default',
  label,
  hasSoonBadge = false,
  onClick,
  className,
  ...rest
}) {
  const Icon = ICONS[tab]
  const isActive = state === 'Active'
  const isDisabled = state === 'Disabled'

  const stroke = isActive ? '#0A0A0A' : '#EDE9D8'
  const accent = isActive ? '#0A0A0A' : (tab === 'Live' ? '#FF3336' : '#DBFF00')
  const resolvedLabel = label ?? tab.toUpperCase()

  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onClick}
      aria-pressed={isActive}
      aria-label={resolvedLabel}
      disabled={isDisabled}
      className={cx(
        'relative flex flex-col items-center justify-center gap-1 py-2.5 px-4',
        'transition-colors',
        isActive ? 'bg-acid text-ink' : 'bg-ink text-bone hover:bg-ash',
        isDisabled && 'cursor-not-allowed opacity-55',
        className
      )}
      {...rest}
    >
      <Icon stroke={stroke} accent={accent} />
      <span className="font-display text-[11px] leading-none tracking-tight">
        {resolvedLabel}
      </span>

      {hasSoonBadge && (
        <span
          className={cx(
            'absolute right-1.5 top-1.5 border-[1.5px] px-1 py-[1px]',
            'font-mono text-[8px] uppercase tracking-widest',
            isActive ? 'border-ink/60 text-ink' : 'border-bone/60 text-bone/70'
          )}
        >
          SOON
        </span>
      )}

      {isActive && !hasSoonBadge && (
        <span aria-hidden className="absolute right-1.5 top-1.5 font-pixel text-[12px] leading-none text-ink/80">
          ◼
        </span>
      )}
    </button>
  )
}

const ICONS = {
  Schedule: ScheduleIcon,
  Rankings: RankingsIcon,
  Live:     LiveIcon,
}

NavTab.TABS   = Object.keys(ICONS)
NavTab.STATES = ['Default', 'Active', 'Disabled']
