// ─────────────────────────────────────────────────────────────────────────────
// Shared DS helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Tiny className composer. Falsy entries are dropped.
 * Keeps us off classnames/clsx as a dep.
 */
export const cx = (...parts) => parts.filter(Boolean).join(' ')

/**
 * Tokens reference table — used for JSDoc and Storybook docs only,
 * the runtime classnames come from tailwind.config.js.
 *
 * This mirrors the semantic layer in Figma's `Color` collection so
 * designers and engineers point at the same names.
 */
export const TOKEN_REF = {
  bg: {
    primary: 'palette/ink (#0A0A0A)',
    surface: 'palette/ink (#0A0A0A)',
    surfaceRaised: 'palette/ash (#1A1A19)',
    section: 'palette/char (#2E2E2A)',
    accent: 'palette/acid (#DBFF00)',
    inverse: 'palette/bone (#EDE9D8)',
  },
  fg: {
    primary: 'palette/bone (#EDE9D8)',
    secondary: 'palette/bone @ 60%',
    tertiary: 'palette/bone @ 30%',
    accent: 'palette/acid (#DBFF00)',
    onAccent: 'palette/ink (#0A0A0A)',
    inverse: 'palette/ink (#0A0A0A)',
  },
  border: {
    structural: 'palette/bone',
    subtle: 'palette/bone @ 30%',
    hairline: 'palette/bone @ 15%',
    accent: 'palette/acid',
  },
  feedback: {
    win: 'palette/acid',
    loss: 'palette/siren (#FF3336)',
    live: 'palette/siren',
    info: 'palette/wire (#1DC4FD)',
    highlight: 'palette/punch (#E00D68)',
  },
}
