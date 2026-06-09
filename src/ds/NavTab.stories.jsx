import React, { useState } from 'react'
import NavTab from './NavTab'

const meta = {
  title: 'Navigation/NavTab',
  component: NavTab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Bottom-nav cell. Two variant axes (`tab` × `state`) cover every',
          'visual combination — pick them and the component handles icon',
          'choice, stroke/accent flip, and active-state marker for you.',
          '',
          'Active state shows a ◼ corner marker; when `hasSoonBadge` is true,',
          'the SOON pill takes that slot instead and `Default` state is shown.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    tab:           { control: 'inline-radio', options: NavTab.TABS,   table: { defaultValue: { summary: 'Schedule' } } },
    state:         { control: 'inline-radio', options: NavTab.STATES, table: { defaultValue: { summary: 'Default' } } },
    label:         { control: 'text' },
    hasSoonBadge:  { control: 'boolean' },
    onClick:       { action: 'clicked' },
    className:     { control: false, table: { disable: true } },
  },
  args: { tab: 'Schedule', state: 'Default', hasSoonBadge: false },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const Matrix = {
  name: 'Tab × State matrix',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {NavTab.TABS.map((t) => (
        <div key={t} className="flex items-center gap-3">
          <span className="w-24 font-mono text-[10px] text-bone/40">tab={t}</span>
          {NavTab.STATES.map((s) => (
            <NavTab key={s} tab={t} state={s} />
          ))}
        </div>
      ))}
    </div>
  ),
}

export const FullNav = {
  name: 'Stateful 3-tab nav bar',
  parameters: { controls: { disable: true } },
  render: () => {
    const [view, setView] = useState('Rankings')
    return (
      <div className="border-[3px] border-bone bg-ink" style={{ width: 480 }}>
        <div className="grid grid-cols-3">
          <NavTab
            tab="Schedule"
            state={view === 'Schedule' ? 'Active' : 'Default'}
            onClick={() => setView('Schedule')}
          />
          <NavTab
            tab="Rankings"
            state={view === 'Rankings' ? 'Active' : 'Default'}
            onClick={() => setView('Rankings')}
          />
          <NavTab
            tab="Live"
            state="Default"
            hasSoonBadge
          />
        </div>
      </div>
    )
  },
}
