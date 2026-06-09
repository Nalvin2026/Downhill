import React from 'react'
import Header from './Header'

const meta = {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'Page header chrome. Single layout, text-driven. The title is split',
          'into two words so the second can paint acid — matches the app pattern',
          'of `FULL CALENDAR`, `THE LEADERBOARD`, `RACE FEED`.',
          '',
          'Pass `safeArea` to add iOS notch padding via `env(safe-area-inset-top)`.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    preTitle:    { control: 'text' },
    titleWord1:  { control: 'text' },
    titleWord2:  { control: 'text' },
    metaL1:      { control: 'text' },
    metaL2:      { control: 'text' },
    hasMetaL2:   { control: 'boolean' },
    safeArea:    { control: 'boolean' },
    className:   { control: false, table: { disable: true } },
  },
  args: {
    preTitle: 'SEASON 2026',
    titleWord1: 'FULL',
    titleWord2: 'CALENDAR',
    metaL1: '18 UPCOMING',
    metaL2: '6 ARCHIVED',
    hasMetaL2: true,
    safeArea: false,
  },
  tags: ['autodocs'],
}
export default meta

export const Playground = {
  render: (args) => (
    <div style={{ maxWidth: 480 }} className="mx-auto">
      <Header {...args} />
    </div>
  ),
}

export const Usage = {
  name: 'Per-view headers',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="mx-auto flex flex-col gap-4" style={{ maxWidth: 480 }}>
      <div>
        <Header
          preTitle="SEASON 2026"
          titleWord1="FULL"
          titleWord2="CALENDAR"
          metaL1="18 UPCOMING"
          metaL2="6 ARCHIVED"
        />
        <p className="mt-2 px-4 font-mono text-[10px] text-bone/60">Schedule view</p>
      </div>
      <div>
        <Header
          preTitle="SEASON STANDINGS"
          titleWord1="THE"
          titleWord2="LEADERBOARD"
          metaL1="UCI DHI · 2026"
          metaL2="POST RND 02"
        />
        <p className="mt-2 px-4 font-mono text-[10px] text-bone/60">Rankings view</p>
      </div>
      <div>
        <Header
          preTitle="LIVE / 2026"
          titleWord1="RACE"
          titleWord2="FEED"
          metaL1="ROUND 03"
          metaL2="LEOGANG · AUT"
        />
        <p className="mt-2 px-4 font-mono text-[10px] text-bone/60">Live view</p>
      </div>
    </div>
  ),
}
