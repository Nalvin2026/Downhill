import React from 'react'
import Stamp from './Stamp'

const meta = {
  title: 'Display/Stamp',
  component: Stamp,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Brutalist position-number block. Solid (ink-on-acid) leans on the',
          'HeroBlock leader card; Outlined sits next to chase-pack rows.',
          '',
          'Corner accents are the signature detail — toggle off with',
          '`hasAccents={false}` for quieter contexts.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    style:      { control: 'inline-radio', options: Stamp.STYLES, table: { defaultValue: { summary: 'Solid' } } },
    size:       { control: 'inline-radio', options: Stamp.SIZES,  table: { defaultValue: { summary: 'md' } } },
    position:   { control: 'text' },
    hasAccents: { control: 'boolean' },
    className:  { control: false, table: { disable: true } },
  },
  args: { style: 'Solid', size: 'md', position: '01', hasAccents: true },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const StylesAndSizes = {
  name: 'All styles × sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6">
      {Stamp.STYLES.map((s) => (
        <div key={s} className="flex items-end gap-4">
          {Stamp.SIZES.map((sz) => (
            <Stamp key={sz} style={s} size={sz} position="01" />
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Usage = {
  name: 'Usage / podium + pack',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 font-mono text-[10px] text-bone/60">
      {[
        { ctx: 'current leader · HeroBlock',  style: 'Solid',    size: 'lg', pos: '01', accents: true  },
        { ctx: 'P02 podium · RiderRow',       style: 'Outlined', size: 'md', pos: '02', accents: false },
        { ctx: 'P03 podium · RiderRow',       style: 'Outlined', size: 'md', pos: '03', accents: true  },
        { ctx: 'chase pack · RiderRow',       style: 'Outlined', size: 'sm', pos: '04', accents: false },
      ].map((row) => (
        <div key={row.pos} className="flex items-center gap-4">
          <Stamp style={row.style} size={row.size} position={row.pos} hasAccents={row.accents} />
          <span>{row.ctx}  ·  {row.style}/{row.size}, accents={String(row.accents)}</span>
        </div>
      ))}
    </div>
  ),
}
