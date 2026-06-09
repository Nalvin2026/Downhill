import React from 'react'
import Panel from './Panel'

const meta = {
  title: 'Surface/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Bordered container with title + optional right meta + content slot.',
          'Used throughout the Live HUD for telemetry blocks (CURRENT_SPEED,',
          'BRAKING_FORCE, TIRE_PRESSURE, etc.).',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    title:    { control: 'text' },
    meta:     { control: 'text' },
    hasMeta:  { control: 'boolean' },
    children: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
  args: {
    title: 'CURRENT_SPEED',
    meta: 'ACTIVE',
    hasMeta: true,
  },
  tags: ['autodocs'],
}
export default meta

export const Playground = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <Panel {...args}>
        <div className="font-display text-[28px] leading-none tabular-nums text-acid">
          64.2 <span className="font-mono text-[12px] text-bone/60">KM/H</span>
        </div>
      </Panel>
    </div>
  ),
}

export const Usage = {
  name: 'Usage / Live HUD blocks',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3" style={{ width: 360 }}>
      <Panel title="CURRENT_SPEED" hasMeta={false}>
        <div className="font-display text-[28px] leading-none tabular-nums text-acid">
          64.2 <span className="font-mono text-[12px] text-bone/60">KM/H</span>
        </div>
      </Panel>
      <Panel
        title="BRAKING_FORCE"
        meta={
          <span className="border-[1.5px] border-acid bg-acid px-1 py-0.5 text-[9px] text-ink">
            OPTIMAL
          </span>
        }
      >
        <div className="space-y-1.5 font-mono text-[10px] uppercase tracking-widest text-bone/60">
          <div className="flex justify-between"><span>FRONT_DISC</span><span className="text-bone">64%</span></div>
          <div className="flex justify-between"><span>REAR_DISC</span><span className="text-bone">36%</span></div>
        </div>
      </Panel>
      <Panel title="TIRE_PRESSURE" hasMeta={false}>
        <div className="grid grid-cols-2 gap-2">
          {[{ l: 'FRONT', v: '22.4' }, { l: 'REAR', v: '25.1' }].map((t) => (
            <div key={t.l} className="border-[1.5px] border-bone/30 bg-ink px-2 py-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-bone/60">{t.l}</div>
              <div className="mt-0.5 font-display text-[22px] leading-none tabular-nums text-bone">
                {t.v}<span className="ml-1 font-mono text-[10px] text-bone/60">PSI</span>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  ),
}
