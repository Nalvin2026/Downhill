import React from 'react'
import HeroBlock from './HeroBlock'

const meta = {
  title: 'Display/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'Current-leader hero card. Composes `Tag`, `Stamp`, and inline `Badge`-like',
          'country pill, all on an acid ground with the trademark 6/6/0 ink shadow.',
          '',
          '`gender` flips the gender marker `Tag` color (Wire for Men, Punch for Women).',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    gender:    { control: 'inline-radio', options: HeroBlock.GENDERS, table: { defaultValue: { summary: 'Women' } } },
    name:      { control: 'text' },
    team:      { control: 'text' },
    country:   { control: 'text' },
    points:    { control: 'text' },
    pointsPct: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    onClick:   { action: 'clicked' },
    className: { control: false, table: { disable: true } },
  },
  args: {
    gender: 'Women',
    name: 'VALENTINA HÖLL',
    team: 'COMMENCAL SCHWALBE',
    country: 'AUT',
    points: '466',
    pointsPct: 1,
  },
  tags: ['autodocs'],
}
export default meta

export const Playground = {
  render: (args) => (
    <div style={{ maxWidth: 480 }}>
      <HeroBlock {...args} />
    </div>
  ),
}

export const Genders = {
  name: 'Both genders',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-8" style={{ maxWidth: 480 }}>
      <HeroBlock
        gender="Women"
        name="VALENTINA HÖLL"
        team="COMMENCAL SCHWALBE BY LES ORRES"
        country="AUT"
        points="466"
        pointsPct={1}
      />
      <HeroBlock
        gender="Men"
        name="LOÏC BRUNI"
        team="SPECIALIZED GRAVITY"
        country="FRA"
        points="512"
        pointsPct={1}
      />
    </div>
  ),
}
