import React from 'react'
import EventCard from './EventCard'

const meta = {
  title: 'Display/EventCard',
  component: EventCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'Race event ticket card. Composes `Badge` for both the series chip',
          '(UCI acid / iXS outline) and the bottom status pill.',
          '',
          'Two variant axes — `series` and `state` — combine into 4 visual',
          'cards. All other content is text-prop driven.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    series:   { control: 'inline-radio', options: EventCard.SERIES, table: { defaultValue: { summary: 'UCI' } } },
    state:    { control: 'inline-radio', options: EventCard.STATES, table: { defaultValue: { summary: 'Upcoming' } } },
    round:    { control: 'text' },
    venue:    { control: 'text' },
    subVenue: { control: 'text' },
    dates:    { control: 'text' },
    month:    { control: 'text' },
    onClick:  { action: 'clicked' },
    className: { control: false, table: { disable: true } },
  },
  args: {
    series: 'UCI',
    state: 'Upcoming',
    round: 'R03 · UCI DHI · 2026',
    venue: 'SAALFELDEN',
    subVenue: 'LEOGANG · AUT',
    dates: '12–14',
    month: 'JUN',
  },
  tags: ['autodocs'],
}
export default meta

export const Playground = {
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <EventCard {...args} />
    </div>
  ),
}

export const SeriesAndStates = {
  name: 'Series × State matrix',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{ maxWidth: 880 }}>
      {EventCard.SERIES.flatMap((s) =>
        EventCard.STATES.map((st) => (
          <EventCard
            key={`${s}-${st}`}
            series={s}
            state={st}
            round={`R0${st === 'Past' ? '1' : '3'} · ${s} ${s === 'UCI' ? 'DHI' : 'DHC'} · 2026`}
          />
        ))
      )}
    </div>
  ),
}

export const Usage = {
  name: 'Usage / 2026 calendar samples',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4" style={{ maxWidth: 420 }}>
      <EventCard
        series="UCI"
        state="Upcoming"
        round="R03 · UCI DHI · 2026"
        venue="SAALFELDEN"
        subVenue="LEOGANG · AUT"
        dates="12–14"
        month="JUN"
      />
      <EventCard
        series="iXS"
        state="Upcoming"
        round="R02 · iXS DHC · 2026"
        venue="SEMMERING"
        subVenue="SEMMERING · AUT"
        dates="19–21"
        month="JUN"
      />
      <EventCard
        series="UCI"
        state="Past"
        round="R01 · UCI DHI · 2026"
        venue="POAL DI FASSA"
        subVenue="TRENTINO · ITA"
        dates="23–25"
        month="MAY"
      />
    </div>
  ),
}
