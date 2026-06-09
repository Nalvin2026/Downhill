import React from 'react'
import Badge from './Badge'

const meta = {
  title: 'Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Sharp, mono-typed label chip. Used for country codes (RiderRow),',
          'series tags (EventCard), live indicators (Live HUD), achievement',
          'markers (P01) and short status pills (FINISHED, DNS).',
          '',
          '**Token bindings** (mirrors the Figma `Display / Badge` set):',
          '- `Outline` → bg/primary + border/structural + fg/primary',
          '- `Acid`    → bg/accent  + fg/on-accent',
          '- `Bone`    → bg/inverse + fg/inverse',
          '- `Siren`   → feedback/live + fg/primary',
          '',
          '**Sizes** map to the DS type scale: sm = 9px, md = 10px, lg = 12px',
          '(all `font-mono Bold` with widest tracking).',
          '',
          '**Layout** — `inline-flex`, hugs content. Never set width — let the',
          'label drive it. Sharp corners always (no `radius/full` here).',
          '',
          '**a11y** — label is rendered as plain text. If the badge conveys',
          'state-only meaning (e.g. just a colored dot), add an `aria-label`',
          'via spread props.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    style: {
      control: 'inline-radio',
      options: Badge.STYLES,
      description: 'Visual style. Mirrors Figma variant prop `Style`.',
      table: { defaultValue: { summary: 'Outline' } },
    },
    size: {
      control: 'inline-radio',
      options: Badge.SIZES,
      description: 'Size scale. Mirrors Figma variant prop `Size`.',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Short uppercase string. Component does NOT auto-uppercase.',
    },
    className: { control: false, table: { disable: true } },
  },
  args: {
    style: 'Outline',
    size: 'md',
    label: 'AUT',
  },
  tags: ['autodocs'],
}
export default meta

// ── Primary playground ─────────────────────────────────────────────────────
export const Playground = {}

// ── All style variants at md ───────────────────────────────────────────────
export const AllStyles = {
  name: 'All styles · md',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge style="Outline" size="md" label="AUT" />
      <Badge style="Acid"    size="md" label="UCI" />
      <Badge style="Bone"    size="md" label="FINISHED" />
      <Badge style="Siren"   size="md" label="LIVE" />
    </div>
  ),
}

// ── All sizes at Outline ──────────────────────────────────────────────────
export const AllSizes = {
  name: 'All sizes · Outline',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge style="Outline" size="sm" label="AUT" />
      <Badge style="Outline" size="md" label="AUT" />
      <Badge style="Outline" size="lg" label="AUT" />
    </div>
  ),
}

// ── In-product usage matrix — reads as the canonical usage table ──────────
export const Usage = {
  name: 'Usage / in-product examples',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3 font-mono text-[10px] text-bone/60">
      {[
        { ctx: 'country code · RiderRow',     style: 'Outline', size: 'md', label: 'AUT' },
        { ctx: 'series tag · UCI event',      style: 'Acid',    size: 'md', label: 'UCI' },
        { ctx: 'series tag · iXS event',      style: 'Outline', size: 'md', label: 'iXS' },
        { ctx: 'live indicator · Live HUD',   style: 'Siren',   size: 'sm', label: 'LIVE' },
        { ctx: 'achievement · leader badge',  style: 'Acid',    size: 'lg', label: 'P01' },
        { ctx: 'status · race finished',      style: 'Bone',    size: 'sm', label: 'FINISHED' },
      ].map((row) => (
        <div key={row.label + row.ctx} className="flex items-center gap-3">
          <Badge style={row.style} size={row.size} label={row.label} />
          <span>{row.ctx}  ·  Style={row.style}, Size={row.size}</span>
        </div>
      ))}
    </div>
  ),
}
