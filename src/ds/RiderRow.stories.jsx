import React from 'react'
import RiderRow from './RiderRow'

const meta = {
  title: 'Display/RiderRow',
  component: RiderRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'Leaderboard row composed from `Stamp` (position) + `Badge` (country).',
          'Plus a progress bar at the bottom showing points relative to leader.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    position: { control: 'inline-radio', options: RiderRow.POSITIONS, table: { defaultValue: { summary: 'P1' } } },
    rank:     { control: 'text' },
    name:     { control: 'text' },
    team:     { control: 'text' },
    country:  { control: 'text' },
    points:   { control: 'text' },
    pointsPct: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    onClick:  { action: 'clicked' },
    className: { control: false, table: { disable: true } },
  },
  args: {
    position: 'P1',
    rank: '01',
    name: 'VALENTINA HÖLL',
    team: 'COMMENCAL SCHWALBE',
    country: 'AUT',
    points: '466',
  },
  tags: ['autodocs'],
}
export default meta

export const Playground = {
  render: (args) => (
    <div style={{ maxWidth: 480 }}>
      <RiderRow {...args} />
    </div>
  ),
}

export const Positions = {
  name: 'All positions',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3" style={{ maxWidth: 480 }}>
      {RiderRow.POSITIONS.map((p, i) => (
        <RiderRow key={p} position={p} rank={String(i + 1).padStart(2, '0')} />
      ))}
    </div>
  ),
}

export const Usage = {
  name: 'Usage / top-5 leaderboard',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3" style={{ maxWidth: 480 }}>
      <RiderRow position="P1" rank="01" name="VALENTINA HÖLL"  team="COMMENCAL SCHWALBE"     country="AUT" points="466" />
      <RiderRow position="P2" rank="02" name="MYRIAM NICOLE"   team="COMMENCAL / MUC-OFF"    country="FRA" points="330" />
      <RiderRow position="P3" rank="03" name="V. ROA SANCHEZ"  team="MS-RACING"              country="COL" points="285" />
      <RiderRow position="Pack" rank="04" name="TAHNÉE SEAGRAVE" team="CANYON CLLCTV / FMD"  country="GBR" points="242" />
      <RiderRow position="Pack" rank="05" name="NINA HOFFMANN"  team="SANTA CRUZ SYNDICATE"  country="GER" points="211" />
    </div>
  ),
}
