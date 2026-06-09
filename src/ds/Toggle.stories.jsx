import React, { useState } from 'react'
import Toggle from './Toggle'

const meta = {
  title: 'Interactive/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '2-cell segmented control. Controlled component — pass `selected` and',
          '`onChange` to wire state. The acid cell carries a small ◆ marker so the',
          'state reads even at a glance.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    selected:   { control: 'inline-radio', options: Toggle.SELECTED, table: { defaultValue: { summary: 'Left' } } },
    size:       { control: 'inline-radio', options: Toggle.SIZES,    table: { defaultValue: { summary: 'md' } } },
    labelLeft:  { control: 'text' },
    labelRight: { control: 'text' },
    onChange:   { action: 'changed' },
    className:  { control: false, table: { disable: true } },
  },
  args: {
    selected: 'Left',
    size: 'md',
    labelLeft: 'ELITE MEN',
    labelRight: 'ELITE WOMEN',
  },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const Sizes = {
  name: 'All sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col items-start gap-4">
      {Toggle.SIZES.map((s) => (
        <Toggle key={s} size={s} selected="Left" labelLeft="LEFT" labelRight="RIGHT" />
      ))}
    </div>
  ),
}

export const Interactive = {
  name: 'Stateful playground',
  parameters: { controls: { disable: true } },
  render: () => {
    const [selected, setSelected] = useState('Left')
    return (
      <div className="flex flex-col gap-3">
        <Toggle
          selected={selected}
          onChange={setSelected}
          labelLeft="ELITE MEN"
          labelRight="ELITE WOMEN"
        />
        <p className="font-mono text-[10px] text-bone/60">selected = {selected}</p>
      </div>
    )
  },
}

export const Usage = {
  name: 'Usage / in-product examples',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 font-mono text-[10px] text-bone/60">
      <div>
        <Toggle selected="Left" size="md" labelLeft="ELITE MEN" labelRight="ELITE WOMEN" />
        <p className="mt-2">gender · Rankings</p>
      </div>
      <div>
        <Toggle selected="Left" size="sm" labelLeft="UPCOMING" labelRight="PAST" />
        <p className="mt-2">schedule filter</p>
      </div>
      <div>
        <Toggle selected="Right" size="md" labelLeft="ELITE MEN" labelRight="ELITE WOMEN" />
        <p className="mt-2">women view</p>
      </div>
    </div>
  ),
}
