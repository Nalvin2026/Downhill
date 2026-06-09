import React, { useState } from 'react'
import FilterChip from './FilterChip'

const meta = {
  title: 'Interactive/FilterChip',
  component: FilterChip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Small toggle-able filter pill. Renders as a `<button>` when `onClick`',
          'is supplied, else as a static `<span>`.',
          '',
          'In Rankings, multiple chips sit in a horizontal row prefixed with a',
          '`FILTER /` mono label.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    state:   { control: 'inline-radio', options: FilterChip.STATES, table: { defaultValue: { summary: 'Default' } } },
    size:    { control: 'inline-radio', options: FilterChip.SIZES,  table: { defaultValue: { summary: 'md' } } },
    label:   { control: 'text' },
    onClick: { action: 'clicked' },
    className: { control: false, table: { disable: true } },
  },
  args: { state: 'Default', size: 'md', label: 'UCI' },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const StatesAndSizes = {
  name: 'All states × sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4">
      {FilterChip.SIZES.map((s) => (
        <div key={s} className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-bone/40">size={s}</span>
          {FilterChip.STATES.map((st) => (
            <FilterChip key={st} state={st} size={s} label="UCI" />
          ))}
        </div>
      ))}
    </div>
  ),
}

export const StatefulFilter = {
  name: 'Series filter (stateful)',
  parameters: { controls: { disable: true } },
  render: () => {
    const [series, setSeries] = useState('UCI')
    const opts = ['UCI', 'iXS']
    return (
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] text-bone/60">FILTER /</span>
        {opts.map((id) => (
          <FilterChip
            key={id}
            state={series === id ? 'Selected' : 'Default'}
            label={id}
            onClick={() => setSeries(id)}
          />
        ))}
      </div>
    )
  },
}
