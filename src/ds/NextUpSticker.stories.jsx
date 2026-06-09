import React from 'react'
import NextUpSticker from './NextUpSticker'

const meta = {
  title: 'Display/NextUpSticker',
  component: NextUpSticker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Graffiti sticker called out on the next upcoming EventCard.',
          '',
          'Identity is in the **rotation + hard shadow** — it must look slapped',
          'on. Component renders without positioning; consumers absolute-position',
          'it at a card corner with a `className`.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    className: { control: false, table: { disable: true } },
  },
  args: { label: 'NEXT UP' },
  tags: ['autodocs'],
}
export default meta

export const Playground = {}

export const OnCardCorner = {
  name: 'In context · slapped on a card corner',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="relative border-[3px] border-bone bg-acid p-8" style={{ width: 320, height: 160 }}>
      <NextUpSticker className="absolute -left-2 -top-3 z-10" />
      <div className="mt-6 font-mono text-[10px] text-ink/60">EventCard surface</div>
    </div>
  ),
}
