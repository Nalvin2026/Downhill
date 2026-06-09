import React from 'react'
import ChampsSticker from './ChampsSticker'

const meta = {
  title: 'Display/ChampsSticker',
  component: ChampsSticker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Graffiti sticker used **once a season** on the World Championships',
          'EventCard. The UCI rainbow stripe ground is the iconic visual cue.',
          '',
          'Stripe order top→bottom: blue → red → black → yellow → green.',
          'These are the official UCI World Champion colors and should not be',
          'edited or recombined.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    className: { control: false, table: { disable: true } },
  },
  args: { label: 'CHAMPS' },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const OnCardCorner = {
  name: 'In context · slapped on a card corner',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="relative border-[3px] border-bone bg-ink p-8" style={{ width: 320, height: 160 }}>
      <ChampsSticker className="absolute -left-2 -top-3 z-10" />
      <div className="mt-6 font-mono text-[10px] text-bone/60">EventCard surface · World Champs event</div>
    </div>
  ),
}
