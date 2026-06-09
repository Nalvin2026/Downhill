import React from 'react'
import Divider from './Divider'

const meta = {
  title: 'Display/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'Text-between-rules section break. Lines auto-fill the parent width via `flex-1`.',
          '',
          '**Style ladder**',
          '- `AcidPixel` — loud, used for `/// CHASE PACK` and `/// END OF FEED`',
          '- `BoneMono`  — quiet, for utility separations',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    style: { control: 'inline-radio', options: Divider.STYLES, table: { defaultValue: { summary: 'AcidPixel' } } },
    size:  { control: 'inline-radio', options: Divider.SIZES,  table: { defaultValue: { summary: 'md' } } },
    label: { control: 'text' },
    className: { control: false, table: { disable: true } },
  },
  args: { style: 'AcidPixel', size: 'md', label: '/// END OF FEED' },
  tags: ['autodocs'],
}
export default meta

export const Playground = {
  render: (args) => (
    <div style={{ maxWidth: 520 }}>
      <Divider {...args} />
    </div>
  ),
}

export const Sizes = {
  name: 'All sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-8" style={{ maxWidth: 520 }}>
      {Divider.SIZES.map((s) => (
        <Divider key={s} style="AcidPixel" size={s} label={`/// SIZE ${s.toUpperCase()}`} />
      ))}
    </div>
  ),
}

export const Usage = {
  name: 'Usage / in-product examples',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-8" style={{ maxWidth: 520 }}>
      <div>
        <Divider style="AcidPixel" size="md" label="/// CHASE PACK" />
        <p className="mt-2 font-mono text-[10px] text-bone/60">chase-pack break · Rankings</p>
      </div>
      <div>
        <Divider style="AcidPixel" size="md" label="/// END OF FEED" />
        <p className="mt-2 font-mono text-[10px] text-bone/60">end of leaderboard · Rankings</p>
      </div>
      <div>
        <Divider style="AcidPixel" size="sm" label="/// END_FEED" />
        <p className="mt-2 font-mono text-[10px] text-bone/60">live HUD section break</p>
      </div>
      <div>
        <Divider style="BoneMono" size="sm" label="SECTION" />
        <p className="mt-2 font-mono text-[10px] text-bone/60">quiet section break</p>
      </div>
    </div>
  ),
}
