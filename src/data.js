// Today's reference moment inside the app. Anything before this is "past".
// The time-of-day matters because countdowns are day + hour.
export const TODAY = new Date('2026-06-09T17:00:00')

// IOC 3-letter country codes → full names used throughout the app.
export const COUNTRY_NAMES = {
  AND: 'Andorra',
  AUS: 'Australia',
  AUT: 'Austria',
  BEL: 'Belgium',
  BUL: 'Bulgaria',
  CAN: 'Canada',
  COL: 'Colombia',
  CZE: 'Czechia',
  ESP: 'Spain',
  FRA: 'France',
  GBR: 'Great Britain',
  GER: 'Germany',
  IRL: 'Ireland',
  ITA: 'Italy',
  KOR: 'South Korea',
  NED: 'Netherlands',
  NOR: 'Norway',
  NZL: 'New Zealand',
  POL: 'Poland',
  POR: 'Portugal',
  RSA: 'South Africa',
  SLO: 'Slovenia',
  SUI: 'Switzerland',
  UKR: 'Ukraine',
  USA: 'United States',
}

export const SERIES = {
  UCI: {
    code: 'UCI',
    name: 'UCI DOWNHILL WORLD SERIES',
    short: 'WORLD SERIES',
  },
  IXS: {
    code: 'iXS',
    name: 'iXS DOWNHILL CUP',
    short: 'DH CUP',
  },
}

// 2026 calendar — real-world UCI DHI World Cup and iXS DH Cup / European Cup / IRC.
// UCI matches uci.org Mountain Bike World Series 2026.
// iXS matches downhill-cup.com 2026 schedule.
export const events = [
  // ── iXS EDC #1 — SANTIAGO DE BESTEIROS (PT) ──
  {
    id: 'ixs-edc-r1-santiago',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 1,
    venue: 'SANTIAGO DE BESTEIROS',
    country: 'POR',
    region: 'CENTRO',
    start: '2026-04-10',
    end: '2026-04-12',
  },

  // ── UCI ROUND 1 — MONA YONGPYONG ──
  {
    id: 'uci-r1-yongpyong',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 1,
    venue: 'MONA YONGPYONG',
    country: 'KOR',
    region: 'GANGWON',
    start: '2026-05-01',
    end: '2026-05-03',
  },

  // ── iXS DHC #1 — KOUTY NAD DESNOU (CZ) ──
  {
    id: 'ixs-dhc-r1-kouty',
    series: 'IXS',
    tier: 'DH CUP',
    round: 1,
    venue: 'KOUTY NAD DESNOU',
    country: 'CZE',
    region: 'JESENÍKY',
    start: '2026-05-01',
    end: '2026-05-03',
  },

  // ── iXS EDC #2 — FORT WILLIAM (GB) ──
  {
    id: 'ixs-edc-r2-fortwilliam',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 2,
    venue: 'FORT WILLIAM',
    country: 'GBR',
    region: 'NEVIS RANGE',
    start: '2026-05-15',
    end: '2026-05-17',
  },

  // ── UCI ROUND 2 — LOUDENVIELLE—PEYRAGUDES ──
  {
    id: 'uci-r2-loudenvielle',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 2,
    venue: 'LOUDENVIELLE—PEYRAGUDES',
    country: 'FRA',
    region: 'PYRENEES',
    start: '2026-05-28',
    end: '2026-05-31',
  },

  // ── iXS DHC #2 — WILLINGEN (DE) ──
  {
    id: 'ixs-dhc-r2-willingen',
    series: 'IXS',
    tier: 'DH CUP',
    round: 2,
    venue: 'WILLINGEN',
    country: 'GER',
    region: 'SAUERLAND',
    start: '2026-05-29',
    end: '2026-05-31',
  },

  // ── iXS EDC #3 — LA MOLINA (ES) ──
  {
    id: 'ixs-edc-r3-lamolina',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 3,
    venue: 'LA MOLINA',
    country: 'ESP',
    region: 'PYRENEES',
    start: '2026-06-05',
    end: '2026-06-07',
  },

  // ── UCI ROUND 3 — SAALFELDEN—LEOGANG ──
  {
    id: 'uci-r3-leogang',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 3,
    venue: 'SAALFELDEN—LEOGANG',
    country: 'AUT',
    region: 'SALZBURG',
    start: '2026-06-11',
    end: '2026-06-14',
  },

  // ── iXS DHC #3 — SEMMERING ──
  {
    id: 'ixs-dhc-r3-semmering',
    series: 'IXS',
    tier: 'DH CUP',
    round: 3,
    venue: 'SEMMERING',
    country: 'AUT',
    region: 'ALPS',
    start: '2026-06-19',
    end: '2026-06-21',
  },

  // ── UCI ROUND 4 — LENZERHEIDE ──
  {
    id: 'uci-r4-lenzerheide',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 4,
    venue: 'LENZERHEIDE',
    country: 'SUI',
    region: 'GRAUBÜNDEN',
    start: '2026-06-19',
    end: '2026-06-21',
  },

  // ── iXS DHC #4 — ŠPIČÁK ──
  {
    id: 'ixs-dhc-r4-spicak',
    series: 'IXS',
    tier: 'DH CUP',
    round: 4,
    venue: 'ŠPIČÁK',
    country: 'CZE',
    region: 'BOHEMIAN F.',
    start: '2026-07-03',
    end: '2026-07-05',
  },

  // ── UCI ROUND 5 — LA THUILE ──
  {
    id: 'uci-r5-lathuile',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 5,
    venue: 'LA THUILE',
    country: 'ITA',
    region: 'AOSTA VALLEY',
    start: '2026-07-03',
    end: '2026-07-05',
  },

  // ── iXS EDC #4 — LES ORRES ──
  {
    id: 'ixs-edc-r4-lesorres',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 4,
    venue: 'LES ORRES',
    country: 'FRA',
    region: 'HAUTES-ALPES',
    start: '2026-07-10',
    end: '2026-07-12',
  },

  // ── UCI ROUND 6 — PAL ARINSAL ──
  {
    id: 'uci-r6-andorra',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 6,
    venue: 'PAL ARINSAL',
    country: 'AND',
    region: 'ANDORRA',
    start: '2026-07-10',
    end: '2026-07-12',
  },

  // ── iXS EDC #5 — SZCZYRK ──
  {
    id: 'ixs-edc-r5-szczyrk',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 5,
    venue: 'SZCZYRK',
    country: 'POL',
    region: 'BESKIDY',
    start: '2026-07-31',
    end: '2026-08-02',
  },

  // ── UCI ROUND 7 — LES GETS ──
  {
    id: 'uci-r7-lesgets',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 7,
    venue: 'LES GETS',
    country: 'FRA',
    region: 'HAUTE-SAVOIE',
    start: '2026-08-20',
    end: '2026-08-23',
  },

  // ── UCI WORLD CHAMPIONSHIPS — VAL DI SOLE ──
  {
    id: 'uci-worlds-valdisole',
    series: 'UCI',
    tier: 'WORLD CHAMPS',
    round: 'WC',
    venue: 'VAL DI SOLE',
    country: 'ITA',
    region: 'DOLOMITES',
    start: '2026-08-26',
    end: '2026-08-30',
  },

  // ── iXS DHC #5 — ILMENAU ──
  {
    id: 'ixs-dhc-r5-ilmenau',
    series: 'IXS',
    tier: 'DH CUP',
    round: 5,
    venue: 'ILMENAU',
    country: 'GER',
    region: 'THURINGIA',
    start: '2026-08-28',
    end: '2026-08-30',
  },

  // ── iXS EDC #6 — VERBIER ──
  {
    id: 'ixs-edc-r6-verbier',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 6,
    venue: 'VERBIER',
    country: 'SUI',
    region: 'VALAIS',
    start: '2026-09-11',
    end: '2026-09-13',
  },

  // ── iXS IRC — SCHLADMING—DACHSTEIN (Rookies Championship) ──
  {
    id: 'ixs-irc-schladming',
    series: 'IXS',
    tier: 'ROOKIES CUP',
    round: 'IRC',
    venue: 'SCHLADMING—DACHSTEIN',
    country: 'AUT',
    region: 'ENNSTAL',
    start: '2026-09-18',
    end: '2026-09-20',
  },

  // ── UCI ROUND 8 — WHISTLER ──
  {
    id: 'uci-r8-whistler',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 8,
    venue: 'WHISTLER',
    country: 'CAN',
    region: 'BRITISH COL.',
    start: '2026-09-25',
    end: '2026-09-27',
  },

  // ── iXS EDC #7 — MARIBOR ──
  {
    id: 'ixs-edc-r7-maribor',
    series: 'IXS',
    tier: 'EUROPEAN CUP',
    round: 7,
    venue: 'MARIBOR',
    country: 'SLO',
    region: 'POHORJE',
    start: '2026-09-25',
    end: '2026-09-27',
  },

  // ── UCI ROUND 9 — LAKE PLACID ──
  {
    id: 'uci-r9-lakeplacid',
    series: 'UCI',
    tier: 'WORLD CUP',
    round: 9,
    venue: 'LAKE PLACID',
    country: 'USA',
    region: 'ADIRONDACKS',
    start: '2026-10-02',
    end: '2026-10-04',
  },

  // ── iXS DHC #6 — BELLWALD ──
  {
    id: 'ixs-dhc-r6-bellwald',
    series: 'IXS',
    tier: 'DH CUP',
    round: 6,
    venue: 'BELLWALD',
    country: 'SUI',
    region: 'OBERWALLIS',
    start: '2026-10-02',
    end: '2026-10-04',
  },
]

export const standings = {
  UCI: {
    label: 'UCI DHI · 2026',
    progress: 'POST RND 02',
    // Real 2026 UCI DHI World Cup overall standings after Round 2 (Loudenvielle).
    men: [
      { rider: 'Luca Shaw',           team: 'Canyon DH Racing',                country: 'USA', points: 285 },
      { rider: 'Benoit Coulanges',    team: 'Scott Downhill Factory',          country: 'FRA', points: 263 },
      { rider: 'Amaury Pierron',      team: 'Commencal / Muc-Off',             country: 'FRA', points: 261 },
      { rider: 'Asa Vermette',        team: 'Frameworks Racing / TRP',         country: 'USA', points: 250 },
      { rider: 'Jordan Williams',     team: 'Specialized Gravity',             country: 'GBR', points: 238 },
      { rider: 'Loris Vergier',       team: 'Commencal / Muc-Off',             country: 'FRA', points: 196 },
      { rider: 'Finn Iles',           team: 'Specialized Gravity',             country: 'CAN', points: 192 },
      { rider: 'Andreas Kolb',        team: 'Santa Cruz Syndicate',            country: 'AUT', points: 190 },
      { rider: 'Martin Maes',         team: 'Orbea FMD Racing',                country: 'BEL', points: 188 },
      { rider: 'Ryan Pinkerton',      team: 'Mondraker Factory Racing DH',     country: 'USA', points: 185 },
      { rider: 'Loïc Bruni',          team: 'Specialized Gravity',             country: 'FRA', points: 180 },
      { rider: 'Max Alran',           team: 'Commencal / Muc-Off',             country: 'FRA', points: 177 },
      { rider: 'Nathan Pontvianne',   team: 'Santa Cruz Burgtec by Goodman',   country: 'FRA', points: 175 },
      { rider: 'Troy Brosnan',        team: 'Canyon DH Racing',                country: 'AUS', points: 160 },
      { rider: 'Tyler Waite',         team: 'Yeti / Fox Factory Race Team',    country: 'NZL', points: 160 },
    ],
    women: [
      { rider: 'Valentina Höll',      team: 'Commencal Schwalbe by Les Orres', country: 'AUT', points: 466 },
      { rider: 'Myriam Nicole',       team: 'Commencal / Muc-Off',             country: 'FRA', points: 330 },
      { rider: 'Valentina Roa Sanchez', team: 'MS-Racing',                     country: 'COL', points: 285 },
      { rider: 'Harriet Harnden',     team: 'AON Racing',                      country: 'GBR', points: 270 },
      { rider: 'Gracey Hemstreet',    team: 'Norco x adidas Race Division',    country: 'CAN', points: 270 },
      { rider: 'Lisa Baumann',        team: 'Commencal Schwalbe by Les Orres', country: 'SUI', points: 225 },
      { rider: 'Gloria Scarsi',       team: 'MS-Racing',                       country: 'ITA', points: 190 },
      { rider: 'Sacha Earnest',       team: 'Trek — Unbroken DH',              country: 'NZL', points: 165 },
      { rider: 'Lisa Bouladou',       team: 'Santa Cruz Burgtec by Goodman',   country: 'FRA', points: 135 },
      { rider: 'Marine Cabirou',      team: 'Canyon DH Racing',                country: 'FRA', points: 133 },
      { rider: 'Phoebe Gale',         team: 'Orbea FMD Racing',                country: 'GBR', points: 115 },
      { rider: 'Anna Newkirk',        team: 'Frameworks Racing / TRP',         country: 'USA', points: 112 },
      { rider: 'Nina Hoffmann',       team: 'Santa Cruz Syndicate',            country: 'GER', points: 71  },
      { rider: 'Tahnée Seagrave',     team: 'Orbea FMD Racing',                country: 'GBR', points: 60  },
      { rider: 'Eliana Hulsebosch',   team: 'Santa Cruz Syndicate',            country: 'NZL', points: 52  },
    ],
  },
  IXS: {
    label: 'iXS DH CUP · 2026',
    progress: 'POST RND 02',
    // Real 2026 iXS DH Cup overall standings, top 10 (positions 8 are tied).
    men: [
      { rider: 'Danny Hart',             team: 'Norco x adidas Race Division', country: 'GBR', points: 248 },
      { rider: 'Noa Walker',             team: 'Planet MTB',                   country: 'GBR', points: 227 },
      { rider: 'Charlie Hatton',         team: 'Continental Atherton',         country: 'GBR', points: 213 },
      { rider: 'Loris Revelli',          team: 'Ridewill Bike Center Cimone',  country: 'ITA', points: 201 },
      { rider: 'Finnley Iles',           team: 'Specialized Gravity',          country: 'CAN', points: 200 },
      { rider: 'Max Hartenstern',        team: 'CUBE Factory Racing',          country: 'GER', points: 187 },
      { rider: 'Jack Piercy',            team: "Wyn's Privateer Project",      country: 'FRA', points: 162 },
      { rider: 'Ethan Craik',            team: 'Scott DH Factory',             country: 'GBR', points: 160 },
      { rider: 'Jordan Williams',        team: 'Specialized Gravity',          country: 'GBR', points: 160 },
      { rider: 'Jack Reading',           team: 'Gravity School Racing',        country: 'GBR', points: 155 },
    ],
    women: [
      { rider: 'Siel Van Der Velden',    team: 'Scott x1 Racing',              country: 'BEL', points: 220 },
      { rider: 'Nellie Aabech',          team: 'Norway National',              country: 'NOR', points: 212 },
      { rider: 'Harriet Harnden',        team: 'AON Racing',                   country: 'GBR', points: 210 },
      { rider: 'Jenna Hastings',         team: 'Pivot Factory Racing',         country: 'NZL', points: 200 },
      { rider: 'Mille Johnset',          team: 'Nukeproof Axess Racing',       country: 'NOR', points: 170 },
      { rider: 'Maria Pomés',            team: '—',                            country: 'ESP', points: 164 },
      { rider: 'Emily Carrick-Anderson', team: '—',                            country: 'GBR', points: 136 },
      { rider: 'Eleonora Farina',        team: 'MS-Racing',                    country: 'ITA', points: 126 },
      { rider: 'Eleonora Guglielmi',     team: 'Team Bike Center Cimone',      country: 'ITA', points: 116 },
      { rider: 'Elise Porta',            team: 'Athena Gravity',               country: 'FRA', points: 76  },
    ],
  },
}

// Per-event details: hand-authored track maps, weekend schedule, prior podium.
// Keyed by event.id. SVG paths use a 0..100 viewBox; (0,0) = top of mountain.
//
// Weekend "status" controls how the row reads:
//   'done' (faded), 'next' (highlighted), 'upcoming' (normal).
//
// Track paths are intentionally angular / stylized — not topographically real.
export const eventDetails = {
  'uci-r1-yongpyong': {
    track: {
      path: 'M 48 8 L 30 22 L 60 32 Q 30 48, 55 56 T 35 72 L 55 86 L 45 96',
      // Mona Yongpyong — first DH WC in Korea, hosted at the ski resort venue
      stats: { length: '2.0 KM', drop: '520 M', maxGradient: '38%', topSpeed: '68 KM/H', surface: 'KOREAN ALPINE · MIXED · TECH' },
      checkpoints: [
        { x: 48, y: 8, label: 'START' },
        { x: 30, y: 48, label: 'S1' },
        { x: 35, y: 72, label: 'S2' },
        { x: 45, y: 96, label: 'FINISH' },
      ],
      // Steep alpine top, flatter mid, drop into finish
      elevation: [100, 88, 76, 66, 60, 54, 48, 40, 34, 28, 20, 14, 8, 3, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'done' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'done' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'done' },
    ],
    previousPodium: {
      year: 2026,
      men: [
        { rider: 'Asa Vermette',      country: 'USA', time: '2:43.301' },
        { rider: 'Loïc Bruni',        country: 'FRA', time: '+1.568'   },
        { rider: 'Amaury Pierron',    country: 'FRA', time: '+2.063'   },
      ],
      women: [
        { rider: 'Valentina Höll',    country: 'AUT', time: '3:14.778' },
        { rider: 'Gloria Scarsi',     country: 'ITA', time: '+0.573'   },
        { rider: 'Myriam Nicole',     country: 'FRA', time: '+1.751'   },
      ],
    },
  },
  'ixs-edc-r7-maribor': {
    track: {
      path: 'M 45 8 L 25 20 Q 55 32, 30 46 T 60 70 L 50 92',
      // Pohorje — long, steep, loamy. Notoriously one of the toughest WC tracks
      stats: { length: '2.4 KM', drop: '580 M', maxGradient: '48%', topSpeed: '58 KM/H', surface: 'POHORJE LOAM · STEEP CHUTES' },
      checkpoints: [
        { x: 45, y: 8, label: 'START' },
        { x: 32, y: 38, label: 'S1' },
        { x: 60, y: 70, label: 'S2' },
        { x: 50, y: 92, label: 'FINISH' },
      ],
      // Brutal top, brief traverse, then dives into the woods
      elevation: [100, 86, 70, 60, 56, 52, 44, 36, 30, 22, 16, 14, 10, 5, 0],
    },
    weekend: [
      { day: 'SAT', label: 'PRACTICE · QUALI', time: '09:00 / 15:00', status: 'done' },
      { day: 'SUN', label: 'FINALS', time: '12:00', status: 'done' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'David Trummer',     country: 'AUT', time: '3:48.22' },
        { rider: 'Patrick Butler',    country: 'AUT', time: '+0.51'   },
        { rider: 'Lukas Knopf',       country: 'GER', time: '+1.42'   },
      ],
      women: [
        { rider: 'Phoebe Gale',       country: 'GBR', time: '4:21.08' },
        { rider: 'Lisa Bouladou',     country: 'FRA', time: '+1.20'   },
        { rider: 'Anna Pirner',       country: 'AUT', time: '+2.34'   },
      ],
    },
  },
  'uci-r2-loudenvielle': {
    track: {
      path: 'M 40 8 C 70 16, 25 30, 55 44 S 30 64, 60 78 L 48 94',
      // Peyragudes / Loudenvielle — biggest drop on the WC calendar
      stats: { length: '2.0 KM', drop: '700 M', maxGradient: '42%', topSpeed: '82 KM/H', surface: 'PYRENEAN ALPINE · ROCK · ROOTS' },
      checkpoints: [
        { x: 40, y: 8, label: 'START' },
        { x: 55, y: 44, label: 'S1' },
        { x: 60, y: 78, label: 'S2' },
        { x: 48, y: 94, label: 'FINISH' },
      ],
      // Open alpine top, fast meadow, dives into wood
      elevation: [100, 88, 78, 68, 58, 52, 46, 38, 32, 26, 18, 12, 7, 3, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'done' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'done' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'done' },
    ],
    previousPodium: {
      year: 2026,
      men: [
        { rider: 'Luca Shaw',         country: 'USA', time: '3:27.637' },
        { rider: 'Benoit Coulanges',  country: 'FRA', time: '+0.127'   },
        { rider: 'Jordan Williams',   country: 'GBR', time: '+0.611'   },
      ],
      women: [
        { rider: 'Valentina Höll',    country: 'AUT', time: '3:51.920' },
        { rider: 'Gracey Hemstreet',  country: 'CAN', time: '+3.257'   },
        { rider: 'Lisa Baumann',      country: 'SUI', time: '+4.302'   },
      ],
    },
  },
  'ixs-edc-r3-lamolina': {
    track: {
      path: 'M 50 8 L 28 20 L 62 30 L 30 46 L 65 60 L 32 74 L 68 86 L 50 96',
      // La Molina bike park — switchback laden, mixed surface
      stats: { length: '1.7 KM', drop: '420 M', maxGradient: '34%', topSpeed: '52 KM/H', surface: 'PYRENEAN SWITCHBACK · LOOSE ROCK' },
      checkpoints: [
        { x: 50, y: 8, label: 'START' },
        { x: 30, y: 46, label: 'S1' },
        { x: 32, y: 74, label: 'S2' },
        { x: 50, y: 96, label: 'FINISH' },
      ],
      // Switchbacks → stair-step profile with brief flat traverses
      elevation: [100, 94, 90, 80, 76, 64, 60, 50, 46, 36, 32, 22, 14, 6, 0],
    },
    weekend: [
      { day: 'SAT', label: 'PRACTICE · QUALI', time: '09:00 / 15:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '12:00', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Patrick Butler',    country: 'AUT', time: '3:24.18' },
        { rider: 'Joe Breeden',       country: 'GBR', time: '+0.62'   },
        { rider: 'Hugo Frixtalon',    country: 'FRA', time: '+1.10'   },
      ],
      women: [
        { rider: 'Lisa Bouladou',     country: 'FRA', time: '3:51.40' },
        { rider: 'Mille Johnset',     country: 'NOR', time: '+1.04'   },
        { rider: 'Sian A’Hern',       country: 'AUS', time: '+2.18'   },
      ],
    },
  },
  'uci-r3-leogang': {
    track: {
      path: 'M 42 8 Q 35 24, 60 30 T 35 56 Q 70 72, 50 92',
      // Saalfelden-Leogang — bike park style with jumps + tech rock garden
      stats: { length: '2.5 KM', drop: '440 M', maxGradient: '32%', topSpeed: '64 KM/H', surface: 'BIKE PARK · ROCK GARDEN · JUMPS' },
      checkpoints: [
        { x: 42, y: 8, label: 'START' },
        { x: 60, y: 30, label: 'S1' },
        { x: 35, y: 56, label: 'S2' },
        { x: 50, y: 92, label: 'FINISH' },
      ],
      // Two steep faces broken by flow / jump sections — staircase profile
      elevation: [100, 92, 88, 82, 70, 64, 60, 52, 48, 42, 34, 24, 14, 8, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Jackson Goldstone', country: 'CAN', time: '2:57.229' },
        { rider: 'Loïc Bruni',        country: 'FRA', time: '+0.059'   },
        { rider: 'Henri Kiefer',      country: 'GER', time: '+0.535'   },
      ],
      women: [
        { rider: 'Gracey Hemstreet',  country: 'CAN', time: '3:21.962' },
        { rider: 'Anna Newkirk',      country: 'USA', time: '+0.865'   },
        { rider: 'Valentina Höll',    country: 'AUT', time: '+2.427'   },
      ],
    },
  },
  'ixs-dhc-r3-semmering': {
    track: {
      path: 'M 55 8 C 25 20, 55 34, 30 46 S 60 64, 40 80 L 50 92',
      // Semmering — short, sharp, very rooty
      stats: { length: '1.6 KM', drop: '380 M', maxGradient: '42%', topSpeed: '54 KM/H', surface: 'BLACK FOREST · ROOT BEDS · OFF-CAMBER' },
      checkpoints: [
        { x: 55, y: 8, label: 'START' },
        { x: 30, y: 46, label: 'S1' },
        { x: 40, y: 80, label: 'S2' },
        { x: 50, y: 92, label: 'FINISH' },
      ],
      // Steep top, mid traverse, drop into finish
      elevation: [100, 88, 78, 68, 64, 58, 50, 42, 38, 30, 22, 14, 8, 3, 0],
    },
    weekend: [
      { day: 'SAT', label: 'PRACTICE · QUALI', time: '09:00 / 15:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '12:00', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'David Trummer',     country: 'AUT', time: '3:11.62' },
        { rider: 'Lennox Zimmermann', country: 'GER', time: '+0.94'   },
        { rider: 'Riccardo Tomasoni', country: 'ITA', time: '+1.50'   },
      ],
      women: [
        { rider: 'Anna Pirner',       country: 'AUT', time: '3:42.10' },
        { rider: 'Veronika Widmann',  country: 'ITA', time: '+1.12'   },
        { rider: 'Mille Johnset',     country: 'NOR', time: '+1.88'   },
      ],
    },
  },
  'uci-r4-lenzerheide': {
    track: {
      path: 'M 50 8 Q 30 22, 55 32 L 30 44 Q 60 56, 35 66 T 60 82 L 48 94',
      // Lenzerheide WC track — Swiss alpine classic with steep wooded sections
      stats: { length: '2.4 KM', drop: '700 M', maxGradient: '42%', topSpeed: '72 KM/H', surface: 'SWISS ALPS · ROCK · ROOTS' },
      checkpoints: [
        { x: 50, y: 8, label: 'START' },
        { x: 30, y: 44, label: 'S1' },
        { x: 35, y: 66, label: 'S2' },
        { x: 48, y: 94, label: 'FINISH' },
      ],
      // Open alpine top → steep wooded mid → fast finish
      elevation: [100, 92, 82, 72, 64, 58, 50, 42, 36, 30, 22, 14, 8, 3, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Amaury Pierron',    country: 'FRA', time: '2:44.699' },
        { rider: 'Henri Kiefer',      country: 'GER', time: '+0.407'   },
        { rider: 'Lachlan Stevens-McNab', country: 'NZL', time: '+0.814' },
      ],
      women: [
        { rider: 'Tahnée Seagrave',   country: 'GBR', time: '3:11.579' },
        { rider: 'Nina Hoffmann',     country: 'GER', time: '+0.061'   },
        { rider: 'Valentina Höll',    country: 'AUT', time: '+0.815'   },
      ],
    },
  },

  'uci-r5-lathuile': {
    track: {
      path: 'M 50 8 L 35 18 L 62 28 Q 28 42, 55 50 T 35 68 L 58 82 L 48 96',
      // La Thuile — Aosta Valley, big alpine descent, fast and open
      stats: { length: '2.5 KM', drop: '780 M', maxGradient: '44%', topSpeed: '78 KM/H', surface: 'AOSTA ALPINE · TECH · OPEN' },
      checkpoints: [
        { x: 50, y: 8, label: 'START' },
        { x: 28, y: 42, label: 'S1' },
        { x: 35, y: 68, label: 'S2' },
        { x: 48, y: 96, label: 'FINISH' },
      ],
      // Long sustained descent with a steep section in the middle
      elevation: [100, 90, 80, 70, 60, 52, 44, 36, 30, 24, 18, 12, 7, 3, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Jackson Goldstone', country: 'CAN', time: '3:27.134' },
        { rider: 'Loris Vergier',     country: 'FRA', time: '+0.604'   },
        { rider: 'Loïc Bruni',        country: 'FRA', time: '+1.039'   },
      ],
      women: [
        { rider: 'Nina Hoffmann',     country: 'GER', time: '3:57.934' },
        { rider: 'Valentina Höll',    country: 'AUT', time: '+2.994'   },
        { rider: 'Gracey Hemstreet',  country: 'CAN', time: '+3.196'   },
      ],
    },
  },
  'ixs-dhc-r4-spicak': {
    track: {
      path: 'M 42 8 L 66 18 L 35 30 L 70 42 L 30 55 L 65 70 L 38 88',
      // Špičák — short, rocky tech in spruce forest
      stats: { length: '1.4 KM', drop: '270 M', maxGradient: '32%', topSpeed: '50 KM/H', surface: 'SPRUCE FOREST · ROCK · ROOTS' },
      checkpoints: [
        { x: 42, y: 8, label: 'START' },
        { x: 70, y: 42, label: 'S1' },
        { x: 65, y: 70, label: 'S2' },
        { x: 38, y: 88, label: 'FINISH' },
      ],
      // Punchy rocky steps with brief recovery flats
      elevation: [100, 92, 84, 76, 72, 64, 56, 48, 40, 36, 28, 20, 12, 5, 0],
    },
    weekend: [
      { day: 'SAT', label: 'PRACTICE · QUALI', time: '09:00 / 15:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '12:00', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Lukas Knopf',       country: 'GER', time: '3:22.40' },
        { rider: 'Florian Vogel',     country: 'SUI', time: '+0.78'   },
        { rider: 'Hugo Marini',       country: 'ITA', time: '+1.62'   },
      ],
      women: [
        { rider: 'Yuli Kostynyuk',    country: 'UKR', time: '3:55.14' },
        { rider: 'Anna Pirner',       country: 'AUT', time: '+1.04'   },
        { rider: 'Senna Roos',        country: 'NED', time: '+2.21'   },
      ],
    },
  },
  'uci-r7-lesgets': {
    track: {
      path: 'M 45 8 C 62 18, 28 30, 56 40 S 30 60, 56 76 L 48 94',
      // Les Gets — fast woodsy with big flow sections and root webs
      stats: { length: '1.9 KM', drop: '380 M', maxGradient: '30%', topSpeed: '66 KM/H', surface: 'BIKE PARK · LOAM · ROOT WEBS' },
      checkpoints: [
        { x: 45, y: 8, label: 'START' },
        { x: 56, y: 40, label: 'S1' },
        { x: 56, y: 76, label: 'S2' },
        { x: 48, y: 94, label: 'FINISH' },
      ],
      // Flowy with two distinct flat-out sprint sections
      elevation: [100, 95, 90, 80, 72, 70, 62, 52, 48, 42, 32, 22, 12, 6, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Ronan Dunne',       country: 'IRL', time: '3:56.586' },
        { rider: 'Martin Maes',       country: 'BEL', time: '+2.821'   },
        { rider: 'Andreas Kolb',      country: 'AUT', time: '+2.931'   },
      ],
      women: [
        { rider: 'Gracey Hemstreet',  country: 'CAN', time: '4:55.517' },
        { rider: 'Marine Cabirou',    country: 'FRA', time: '+1.072'   },
        { rider: 'Valentina Höll',    country: 'AUT', time: '+2.741'   },
      ],
    },
  },
  'uci-r6-andorra': {
    track: {
      path: 'M 38 8 L 60 18 C 30 30, 60 45, 40 55 T 60 80 L 48 94',
      // Pal Arinsal — long high-alpine, fast meadows up top, dust + rock
      stats: { length: '2.7 KM', drop: '620 M', maxGradient: '38%', topSpeed: '78 KM/H', surface: 'HIGH ALPINE · MEADOW · ROCK' },
      checkpoints: [
        { x: 38, y: 8, label: 'START' },
        { x: 40, y: 55, label: 'S1' },
        { x: 60, y: 80, label: 'S2' },
        { x: 48, y: 94, label: 'FINISH' },
      ],
      // Open top, steeper mid through trees, final straight is dead flat
      elevation: [100, 92, 86, 78, 68, 58, 48, 40, 32, 26, 22, 16, 14, 8, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Loïc Bruni',        country: 'FRA', time: '2:34.367' },
        { rider: 'Jackson Goldstone', country: 'CAN', time: '+1.279'   },
        { rider: 'Loris Vergier',     country: 'FRA', time: '+2.167'   },
      ],
      women: [
        { rider: 'Tahnée Seagrave',   country: 'GBR', time: '2:56.835' },
        { rider: 'Valentina Höll',    country: 'AUT', time: '+1.816'   },
        { rider: 'Mille Johnset',     country: 'NOR', time: '+1.990'   },
      ],
    },
  },
  'uci-worlds-valdisole': {
    track: {
      path: 'M 48 8 C 22 18, 60 32, 35 48 S 65 62, 40 78 L 55 94',
      // Worlds on the Black Snake — same trail as the WC round, just bigger stakes
      stats: { length: '1.7 KM', drop: '470 M', maxGradient: '48%', topSpeed: '58 KM/H', surface: 'BLACK SNAKE · WORLDS · ROOTS' },
      checkpoints: [
        { x: 48, y: 8, label: 'START' },
        { x: 35, y: 48, label: 'S1' },
        { x: 40, y: 78, label: 'S2' },
        { x: 55, y: 94, label: 'FINISH' },
      ],
      elevation: [100, 84, 68, 56, 52, 48, 44, 40, 32, 24, 18, 12, 6, 2, 0],
    },
    weekend: [
      { day: 'WED', label: 'PRACTICE OPEN', time: '10:00 → 17:00', status: 'upcoming' },
      { day: 'THU', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'FRI', label: 'QUALIFYING', time: '15:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '14:00', status: 'upcoming' },
    ],
    previousPodium: {
      // 2025 Val di Sole WC round (same trail). The 2025 Worlds were at Champéry.
      year: 2025,
      men: [
        { rider: 'Jackson Goldstone', country: 'CAN', time: '3:38.860' },
        { rider: 'Troy Brosnan',      country: 'AUS', time: '+2.422'   },
        { rider: 'Thibaut Daprela',   country: 'FRA', time: '+2.881'   },
      ],
      women: [
        { rider: 'Marine Cabirou',    country: 'FRA', time: '3:47.580' },
        { rider: 'Valentina Höll',    country: 'AUT', time: '+1.062'   },
        { rider: 'Gracey Hemstreet',  country: 'CAN', time: '+2.418'   },
      ],
    },
  },
  'ixs-irc-schladming': {
    track: {
      path: 'M 50 8 L 30 22 C 60 35, 28 50, 55 64 S 35 80, 55 94',
      // Schladming Planai — long, mixed surface, slalom course adjacency
      stats: { length: '2.4 KM', drop: '520 M', maxGradient: '40%', topSpeed: '70 KM/H', surface: 'ENNSTAL · GRASS · LOAM · ROCK' },
      checkpoints: [
        { x: 50, y: 8, label: 'START' },
        { x: 55, y: 64, label: 'S1' },
        { x: 55, y: 80, label: 'S2' },
        { x: 55, y: 94, label: 'FINISH' },
      ],
      // Steep ski-piste opener, into trees, finishes through arena
      elevation: [100, 86, 74, 64, 60, 52, 44, 38, 32, 26, 20, 14, 10, 4, 0],
    },
    weekend: [
      { day: 'SAT', label: 'PRACTICE · QUALI', time: '09:00 / 15:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '12:00', status: 'upcoming' },
    ],
    previousPodium: {
      year: 2025,
      men: [
        { rider: 'Patrick Butler',    country: 'AUT', time: '3:19.40' },
        { rider: 'Max Hartenstern',   country: 'GER', time: '+0.81'   },
        { rider: 'David Trummer',     country: 'AUT', time: '+1.22'   },
      ],
      women: [
        { rider: 'Phoebe Gale',       country: 'GBR', time: '3:48.06' },
        { rider: 'Erice van Leuven',  country: 'NZL', time: '+0.91'   },
        { rider: 'Lisa Bouladou',     country: 'FRA', time: '+1.74'   },
      ],
    },
  },

  'uci-r8-whistler': {
    track: {
      path: 'M 50 8 C 30 18, 60 30, 35 40 Q 65 52, 30 62 T 60 80 L 45 96',
      // Whistler Mountain Bike Park — iconic Coast Range, fast loamy
      stats: { length: '2.6 KM', drop: '720 M', maxGradient: '38%', topSpeed: '76 KM/H', surface: 'BIKE PARK · LOAM · COAST RANGE' },
      checkpoints: [
        { x: 50, y: 8, label: 'START' },
        { x: 35, y: 40, label: 'S1' },
        { x: 30, y: 62, label: 'S2' },
        { x: 45, y: 96, label: 'FINISH' },
      ],
      // Steady descent through bike park trails, big rollers + drops
      elevation: [100, 94, 86, 78, 70, 62, 54, 46, 38, 30, 22, 14, 8, 3, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    debut: true,
  },

  'uci-r9-lakeplacid': {
    track: {
      path: 'M 50 8 L 32 22 L 60 32 Q 32 46, 55 54 T 35 72 L 50 92',
      // Lake Placid — Adirondacks venue, Olympic-era ski mountain
      stats: { length: '1.9 KM', drop: '500 M', maxGradient: '36%', topSpeed: '65 KM/H', surface: 'ADIRONDACK · LOAM · ROCK' },
      checkpoints: [
        { x: 50, y: 8, label: 'START' },
        { x: 32, y: 46, label: 'S1' },
        { x: 35, y: 72, label: 'S2' },
        { x: 50, y: 92, label: 'FINISH' },
      ],
      // Mid-length descent with steady gradient, classic ski piste lower
      elevation: [100, 92, 84, 76, 68, 60, 52, 44, 36, 28, 22, 16, 10, 4, 0],
    },
    weekend: [
      { day: 'FRI', label: 'PRACTICE', time: '09:00 → 17:00', status: 'upcoming' },
      { day: 'SAT', label: 'QUALIFYING', time: '14:00', status: 'upcoming' },
      { day: 'SUN', label: 'FINALS', time: '13:30', status: 'upcoming' },
    ],
    debut: true,
  },
}

// Rider profiles — top-3 of each series × gender plus past favourites.
// Career stats are realistic-ish; swap in confirmed figures over time.
// Keyed by rider name exactly as it appears in standings.
export const riderProfiles = {
  // ── UCI ELITE MEN — 2026 TOP 3 ──
  'Luca Shaw': {
    nationality: 'USA',
    age: 30,
    height: '188 CM',
    weight: '83 KG',
    bike: 'Canyon Sender CFR',
    team: 'Canyon DH Racing',
    joined: '2014',
    careerWins: 2,
    wcPodiums: 14,
    bestResult: 'WC WIN · LOUDENVIELLE 2026',
    terrain: 'STEEP TECH',
    style: 'TALL / LATE-BRAKE',
    nickname: 'SHAW',
    bio: 'American veteran from North Carolina who finally broke through in 2026. Long arms, long reach, late commits — finds time in the steep stuff where most riders are surviving.',
    accent: 'wire',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Luca_Shaw_2024_US_Open_of_Downhill_MTB.jpg/500px-Luca_Shaw_2024_US_Open_of_Downhill_MTB.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Benoit Coulanges': {
    nationality: 'FRA',
    age: 32,
    height: '180 CM',
    weight: '78 KG',
    bike: 'Scott Gambler',
    team: 'Scott Downhill Factory',
    joined: '2013',
    careerWins: 1,
    wcPodiums: 9,
    bestResult: 'WC WIN · LOURDES 2022',
    terrain: 'ALL-TERRAIN',
    style: 'METRONOMIC / FLOWY',
    nickname: 'COULANGES',
    bio: 'French veteran who has spent over a decade fighting near the top of the elite field. Smooth and surgical through technical sections, podium-fixture form in 2026.',
    accent: 'punch',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Beno%C3%AEt_Coulanges_2024_MSA.jpg/500px-Beno%C3%AEt_Coulanges_2024_MSA.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Amaury Pierron': {
    nationality: 'FRA',
    age: 30,
    height: '180 CM',
    weight: '79 KG',
    bike: 'Commencal Supreme DH',
    team: 'Commencal / Muc-Off',
    joined: '2014',
    careerWins: 8,
    wcPodiums: 24,
    bestResult: 'WC OVERALL · 2018',
    terrain: 'STEEP / WILD',
    style: 'ALL-OR-NOTHING',
    nickname: 'TONTON',
    bio: '2018 World Cup overall champion. Comes from a downhill family — both brothers race elite too. Throws the bike at everything and finds time nobody else can.',
    accent: 'acid',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Amaury_Pierron_2022_MSA.jpg/500px-Amaury_Pierron_2022_MSA.jpg',
    photoCredit: 'Wikimedia Commons',
  },

  // ── UCI ELITE WOMEN — 2026 TOP 3 ──
  // Vali Höll keeps her existing profile below.
  'Myriam Nicole': {
    nationality: 'FRA',
    age: 36,
    height: '170 CM',
    weight: '63 KG',
    bike: 'Commencal Supreme DH',
    team: 'Commencal / Muc-Off',
    joined: '2010',
    careerWins: 10,
    wcPodiums: 60,
    bestResult: '2× WORLD CHAMPION',
    terrain: 'TECH · ROOTS',
    style: 'SURGICAL / VETERAN',
    nickname: 'PUPUCE',
    bio: 'Two-time UCI World Champion (2019, 2021) from southern France. Sixteen years on the World Cup circuit and still drilling podium runs in 2026 — pure technique and zero panic.',
    accent: 'punch',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/08481283LakePlacidWCSteve100225.jpg/500px-08481283LakePlacidWCSteve100225.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Valentina Roa Sanchez': {
    nationality: 'COL',
    age: 22,
    height: '163 CM',
    weight: '58 KG',
    bike: 'Mondraker Summum',
    team: 'MS-Racing',
    joined: '2024',
    careerWins: 0,
    wcPodiums: 2,
    bestResult: 'WC TOP 5 · YONGPYONG 2026',
    terrain: 'ALL-TERRAIN',
    style: 'BOLD / FAST-LEARNER',
    nickname: 'VALE',
    bio: 'Colombian breakout star making her elite mark in 2026. Came up through Latin American DH and translates raw fearless speed straight to the World Cup. Generational talent on a rocket.',
    accent: 'wire',
  },

  // ── PREVIOUS UCI TOP RIDERS — kept for chase-pack tap-through ──
  'Jackson Goldstone': {
    nationality: 'CAN',
    age: 21,
    height: '178 CM',
    weight: '72 KG',
    bike: 'Santa Cruz V10',
    team: 'Santa Cruz Syndicate',
    joined: '2022',
    careerWins: 4,
    wcPodiums: 11,
    bestResult: 'WORLDS 2024 · ELITE',
    terrain: 'STEEP TECH',
    style: 'AGGRESSIVE / FRONT-FOOT',
    nickname: 'JG',
    bio: 'Canadian phenom from Whistler. Crowned 2024 World Champion in his second elite year. Reads steep loam like a sixth sense and rarely puts a foot down.',
    accent: 'wire',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jackson_goldstone_snowshoe_2022.jpg/500px-Jackson_goldstone_snowshoe_2022.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Loïc Bruni': {
    nationality: 'FRA',
    age: 30,
    height: '183 CM',
    weight: '78 KG',
    bike: 'Specialized Demo',
    team: 'Specialized Gravity',
    joined: '2013',
    careerWins: 19,
    wcPodiums: 58,
    bestResult: '5× WORLD CHAMPION',
    terrain: 'ALL-TERRAIN',
    style: 'METRONOMIC / SMOOTH',
    nickname: 'THE BOSS',
    bio: 'Five-time World Champion from Nice. The benchmark for consistency at the top of the sport. Wins on every surface from Lourdes mud to Val di Sole dust.',
    accent: 'acid',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Loic_Bruni_2015_world_champion.jpg/500px-Loic_Bruni_2015_world_champion.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Andreas Kolb': {
    nationality: 'AUT',
    age: 28,
    height: '182 CM',
    weight: '80 KG',
    bike: 'Atherton AM200',
    team: 'Continental Atherton',
    joined: '2015',
    careerWins: 1,
    wcPodiums: 14,
    bestResult: 'WC WIN · LEOGANG 2025',
    terrain: 'HIGH-SPEED',
    style: 'POWER / LATE-BRAKE',
    nickname: 'KOLBINATOR',
    bio: 'Austrian power rider who finally broke through with the Atherton program. Excels on his home soil and any track with sustained pedaling.',
    accent: 'punch',
  },

  // ── UCI ELITE WOMEN — TOP 3 ──
  'Vali Höll': {
    nationality: 'AUT',
    age: 24,
    height: '170 CM',
    weight: '62 KG',
    bike: 'YT Tues',
    team: 'YT Mob',
    joined: '2019',
    careerWins: 14,
    wcPodiums: 39,
    bestResult: '2× WORLD CHAMPION',
    terrain: 'STEEP TECH',
    style: 'PRECISION / FAST HANDS',
    nickname: 'VALI',
    bio: 'Austrian dominator who came up through junior racing without losing — and translated it straight to elite domination. Two-time World Champion, fastest split times of the women\'s field.',
    accent: 'acid',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Valentina_H%C3%B6ll_%28AUT%29_2025.jpg/500px-Valentina_H%C3%B6ll_%28AUT%29_2025.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Tahnée Seagrave': {
    nationality: 'GBR',
    age: 30,
    height: '173 CM',
    weight: '68 KG',
    bike: 'Canyon Sender',
    team: 'Canyon CLLCTV FMD',
    joined: '2014',
    careerWins: 8,
    wcPodiums: 34,
    bestResult: 'WC OVERALL · 2018',
    terrain: 'TECH · FLAT-OUT',
    style: 'CALCULATED / FLOWY',
    nickname: 'T-DOG',
    bio: 'British veteran from Cornwall. Smooth and surgical through the steep stuff. Returned from a string of injuries to remain a podium fixture every weekend.',
    accent: 'punch',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tahnee_seagrave_2024_msa.jpg/500px-Tahnee_seagrave_2024_msa.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Marine Cabirou': {
    nationality: 'FRA',
    age: 28,
    height: '167 CM',
    weight: '60 KG',
    bike: 'Pivot Phoenix',
    team: 'Pivot Factory Racing',
    joined: '2016',
    careerWins: 6,
    wcPodiums: 28,
    bestResult: 'WC OVERALL · 2019',
    terrain: 'FAST · OPEN',
    style: 'FEARLESS / SPEED-FIRST',
    nickname: 'MARINE',
    bio: 'French speed merchant from Millau. Throws the bike sideways through the loose stuff and finds time where nobody else does. Pyrenean specialist.',
    accent: 'wire',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/10342221LakePlacidWCSteve100425.jpg/500px-10342221LakePlacidWCSteve100425.jpg',
    photoCredit: 'Wikimedia Commons',
  },

  // ── iXS DH CUP — 2026 MEN TOP 3 ──
  'Danny Hart': {
    nationality: 'GBR',
    age: 34,
    height: '178 CM',
    weight: '75 KG',
    bike: 'Norco Aurum HSP',
    team: 'Norco x adidas Race Division',
    joined: '2009',
    careerWins: 9,
    wcPodiums: 31,
    bestResult: '2× WORLD CHAMPION',
    terrain: 'WET · STEEP',
    style: 'AGGRESSIVE / SIDEWAYS',
    nickname: 'REDCAR ROCKET',
    bio: 'Two-time UCI World Champion (2011, 2016) from Redcar, England. The 2011 Champéry run is downhill folklore — five seconds clear of the field in monsoon conditions. Still racing at the front in 2026.',
    accent: 'wire',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Danny_Hart_cyclist.jpg/500px-Danny_Hart_cyclist.jpg',
    photoCredit: 'Wikimedia Commons',
  },
  'Noa Walker': {
    nationality: 'GBR',
    age: 22,
    height: '180 CM',
    weight: '74 KG',
    bike: 'Privateer',
    team: 'Planet MTB',
    joined: '2022',
    careerWins: 3,
    wcPodiums: 2,
    bestResult: 'iXS PODIUM · 2026',
    terrain: 'ROOTED · WOODED',
    style: 'PUNCHY / RAW',
    nickname: 'WALKER',
    bio: 'British privateer making waves on the iXS circuit. Self-funded program, big results — exactly the kind of grit story that makes iXS great racing.',
    accent: 'acid',
  },
  'Charlie Hatton': {
    nationality: 'GBR',
    age: 28,
    height: '180 CM',
    weight: '76 KG',
    bike: 'Atherton AM200',
    team: 'Continental Atherton',
    joined: '2017',
    careerWins: 1,
    wcPodiums: 6,
    bestResult: 'WORLD CHAMP · 2023',
    terrain: 'WET TECH',
    style: 'TRACK-CRAFT / TACTICAL',
    nickname: 'HATTON',
    bio: '2023 World Champion at Fort William — a brutal, perfectly judged run in the rain. British rider on the Atherton family program, mixing UCI and iXS rounds in 2026.',
    accent: 'punch',
  },

  // ── iXS DH CUP — 2026 WOMEN TOP 3 ──
  'Siel Van Der Velden': {
    nationality: 'BEL',
    age: 21,
    height: '168 CM',
    weight: '60 KG',
    bike: 'Scott Gambler',
    team: 'Scott x1 Racing',
    joined: '2023',
    careerWins: 4,
    wcPodiums: 3,
    bestResult: 'iXS LEAD · 2026',
    terrain: 'STEEP · TECH',
    style: 'CONFIDENT / SMOOTH',
    nickname: 'SIEL',
    bio: 'Belgian breakout rider leading the iXS DH Cup in 2026. Came up through national-level junior racing in a country with a small downhill scene — now a flagbearer for Belgian gravity.',
    accent: 'acid',
  },
  'Nellie Aabech': {
    nationality: 'NOR',
    age: 23,
    height: '172 CM',
    weight: '64 KG',
    bike: 'Specialized Demo',
    team: 'Norway National',
    joined: '2021',
    careerWins: 3,
    wcPodiums: 4,
    bestResult: 'iXS WIN · KOUTY 2026',
    terrain: 'NORDIC TECH',
    style: 'COMPOSED / METHODICAL',
    nickname: 'NELLIE',
    bio: 'Norwegian standout racing as part of the federation program. Trains on the demanding tracks of Hafjell and Trysil — translates that Nordic loam reading into iXS podium pace.',
    accent: 'wire',
  },
  'Harriet Harnden': {
    nationality: 'GBR',
    age: 25,
    height: '170 CM',
    weight: '62 KG',
    bike: 'Atherton AM200',
    team: 'AON Racing',
    joined: '2018',
    careerWins: 6,
    wcPodiums: 11,
    bestResult: 'EWS OVERALL · 2024',
    terrain: 'ALL-TERRAIN',
    style: 'VERSATILE / FAST',
    nickname: 'HARRIET',
    bio: 'British all-rounder — Enduro World Series overall champion in 2024, UK National DH champion in 2023, ex-cyclocross national champion. Now bringing that versatility to the iXS DH Cup.',
    accent: 'punch',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2019_Citadelcross_Namur_21.jpg/500px-2019_Citadelcross_Namur_21.jpg',
    photoCredit: 'Wikimedia Commons',
  },

  // ── PREVIOUS iXS TOP RIDERS — kept for legacy / chase-pack tap-through ──
  'Patrick Butler': {
    nationality: 'AUT',
    age: 23,
    height: '180 CM',
    weight: '74 KG',
    bike: 'YT Tues MK4',
    team: 'YT Vienna',
    joined: '2021',
    careerWins: 6,
    wcPodiums: 4,
    bestResult: 'iXS DH CUP · 2025',
    terrain: 'WOODED TECH',
    style: 'PUNCHY / LINE-FINDER',
    nickname: 'PAT',
    bio: 'Vienna-based talent who dominates the iXS Central Europe circuit. Knows every root and rock on the Austrian iXS calendar from years of local racing.',
    accent: 'acid',
  },
  'Lukas Knopf': {
    nationality: 'GER',
    age: 26,
    height: '184 CM',
    weight: '79 KG',
    bike: 'Bulls Sentinel DH',
    team: 'Bulls Factory',
    joined: '2018',
    careerWins: 3,
    wcPodiums: 2,
    bestResult: 'iXS WIN · MARIBOR 2024',
    terrain: 'STEEP LOAM',
    style: 'POWERFUL / DIRECT',
    nickname: 'KNOPFI',
    bio: 'German all-rounder racing both iXS and selected UCI rounds. Best results on steep loamy surfaces — Pohorje and Špičák are his stomping grounds.',
    accent: 'wire',
  },
  'David Trummer': {
    nationality: 'AUT',
    age: 28,
    height: '186 CM',
    weight: '82 KG',
    bike: 'Commencal Supreme DH',
    team: 'Dorval AM Commencal',
    joined: '2014',
    careerWins: 4,
    wcPodiums: 9,
    bestResult: 'WC PODIUM · 2022',
    terrain: 'ALL-TERRAIN',
    style: 'SMOOTH / VETERAN',
    nickname: 'TRUMMI',
    bio: 'Austrian veteran with full UCI World Cup pedigree who now anchors the iXS Cup. Consistent under pressure and a key reference for younger Austrian riders.',
    accent: 'punch',
  },

  // ── iXS ELITE WOMEN — TOP 3 ──
  'Erice van Leuven': {
    nationality: 'NZL',
    age: 22,
    height: '168 CM',
    weight: '59 KG',
    bike: 'YT Tues MK4',
    team: 'YT Mob',
    joined: '2022',
    careerWins: 5,
    wcPodiums: 6,
    bestResult: 'JR WORLD CHAMP · 2023',
    terrain: 'STEEP TECH',
    style: 'AGGRESSIVE / FLOATY',
    nickname: 'ERICE',
    bio: 'Kiwi rocketship transitioning from junior dominance into elite. Equally at home on the iXS circuit and selected UCI rounds. Known for huge style and even bigger commit.',
    accent: 'acid',
  },
  'Phoebe Gale': {
    nationality: 'GBR',
    age: 24,
    height: '170 CM',
    weight: '63 KG',
    bike: 'Norco Aurum HSP',
    team: 'Norco Factory',
    joined: '2020',
    careerWins: 4,
    wcPodiums: 3,
    bestResult: 'iXS OVERALL · 2024',
    terrain: 'ROOT · TECH',
    style: 'PRECISE / METHODICAL',
    nickname: 'PHOEBS',
    bio: 'British rising star with a deep technical background. Reads rooty tracks the way a chess player reads a board. Reigning iXS overall champion.',
    accent: 'wire',
  },
  'Lisa Bouladou': {
    nationality: 'FRA',
    age: 26,
    height: '165 CM',
    weight: '57 KG',
    bike: 'Commencal Supreme DH',
    team: 'Commencal Les Orres',
    joined: '2017',
    careerWins: 3,
    wcPodiums: 1,
    bestResult: 'iXS WIN · LES ORRES 2025',
    terrain: 'PYRENEAN ROCK',
    style: 'FAST / NATURAL',
    nickname: 'LISA',
    bio: 'French Pyrenees local who knows every line in the Hautes-Alpes. Pure speed on natural terrain, growing technical arsenal each season.',
    accent: 'punch',
  },
}

// Stable pseudo-random barcode pattern keyed by event id.
export function barcodePattern(id, length = 42) {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0
  const out = []
  for (let i = 0; i < length; i++) {
    h = (h * 1103515245 + 12345) >>> 0
    const w = (h % 3) + 1 // 1..3
    const filled = (h >> 6) & 1
    out.push({ w, filled: !!filled })
  }
  return out
}

export function fmtDateRange(startISO, endISO) {
  const s = new Date(startISO)
  const e = new Date(endISO)
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  const startDay = String(s.getDate()).padStart(2, '0')
  const endDay = String(e.getDate()).padStart(2, '0')
  // Same visual rhythm whether the range stays in one month or spans two:
  // big DD–DD on top, month(s) and year on the subtitle line.
  return {
    day: `${startDay}–${endDay}`,
    month:
      s.getMonth() === e.getMonth()
        ? months[s.getMonth()]
        : `${months[s.getMonth()]}→${months[e.getMonth()]}`,
    year: s.getFullYear(),
  }
}

export function daysUntil(startISO, ref = TODAY) {
  const s = new Date(startISO)
  const diff = Math.ceil((s - ref) / (1000 * 60 * 60 * 24))
  return diff
}

// Returns the remaining whole days + whole hours until startISO.
// If the start moment has already passed, days/hours are 0.
export function timeUntil(startISO, ref = TODAY) {
  const s = new Date(startISO)
  const ms = s.getTime() - ref.getTime()
  if (ms <= 0) return { days: 0, hours: 0, ms }
  const days = Math.floor(ms / 86400000)
  const hours = Math.floor((ms % 86400000) / 3600000)
  return { days, hours, ms }
}
