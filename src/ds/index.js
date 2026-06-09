// ─────────────────────────────────────────────────────────────────────────────
// DH//Tracker Design System — barrel re-exports
//
// Import via:  import { Badge, EventCard, NavTab } from '@/ds'
//
// Names + variant prop values mirror the Figma component library 1:1.
// ─────────────────────────────────────────────────────────────────────────────

// Foundations
export { default as Badge }      from './Badge'
export { default as Tag }        from './Tag'
export { default as Stamp }      from './Stamp'
export { default as Divider }    from './Divider'

// Stickers (special-purpose, rotated, "slapped on" graffiti tags)
export { default as NextUpSticker } from './NextUpSticker'
export { default as ChampsSticker, RAINBOW_STRIPES } from './ChampsSticker'

// Interactive
export { default as Toggle }     from './Toggle'
export { default as FilterChip } from './FilterChip'

// Navigation
export { default as NavTab }     from './NavTab'
export { default as Header }     from './Header'

// Display composites
export { default as EventCard }  from './EventCard'
export { default as RiderRow }   from './RiderRow'
export { default as HeroBlock }  from './HeroBlock'

// Surfaces
export { default as Panel }      from './Panel'

// Icon primitives (used inside NavTab; exported in case anyone wants
// to render them inline elsewhere)
export { default as ScheduleIcon } from './icons/ScheduleIcon'
export { default as RankingsIcon } from './icons/RankingsIcon'
export { default as LiveIcon }     from './icons/LiveIcon'
