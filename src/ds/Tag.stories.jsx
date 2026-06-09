import React from 'react'
import Tag from './Tag'

const meta = {
  title: 'Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Rotated graffiti sticker. Square, hard offset shadow, ink border.',
          '',
          'Rotation is contextual (consumer wraps with `transform: rotate(-6deg)`),',
          'so the component itself is upright. This keeps the bounding box predictable',
          'inside auto-layout parents.',
          '',
          'Five colors map to the secondary palette: Wire (men marker), Punch (women),',
          'Acid (achievements), Siren (DNF), Bone (inverse).',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    color: { control: 'inline-radio', options: Tag.COLORS, table: { defaultValue: { summary: 'Wire' } } },
    size:  { control: 'inline-radio', options: Tag.SIZES,  table: { defaultValue: { summary: 'md' } } },
    label: { control: 'text' },
    className: { control: false, table: { disable: true } },
  },
  args: { color: 'Wire', size: 'md', label: 'M' },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const AllColors = {
  name: 'All colours · md',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {Tag.COLORS.map((c) => (
        <Tag key={c} color={c} size="md" label={c[0]} />
      ))}
    </div>
  ),
}

export const AllSizes = {
  name: 'All sizes · Acid',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-end gap-4">
      {Tag.SIZES.map((s) => (
        <Tag key={s} color="Acid" size={s} label="★" />
      ))}
    </div>
  ),
}

export const Usage = {
  name: 'Usage / in-product examples',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 font-mono text-[10px] text-bone/60">
      {[
        { ctx: 'elite men marker · HeroBlock',   color: 'Wire',  size: 'md', label: 'M' },
        { ctx: 'elite women marker · HeroBlock', color: 'Punch', size: 'md', label: 'W' },
        { ctx: 'achievement accent · podium',     color: 'Acid',  size: 'lg', label: '★' },
        { ctx: 'DNF marker · race result',        color: 'Siren', size: 'sm', label: 'X' },
      ].map((row) => (
        <div key={row.label + row.ctx} className="flex items-center gap-4">
          <span style={{ transform: 'rotate(-6deg)', display: 'inline-flex' }}>
            <Tag color={row.color} size={row.size} label={row.label} />
          </span>
          <span>{row.ctx}  ·  Color={row.color}, Size={row.size}, rotated -6°</span>
        </div>
      ))}
    </div>
  ),
}
