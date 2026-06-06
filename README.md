# DH // TRACKER

Mobile-first React app for tracking Downhill MTB events (UCI DHI World Series + iXS Downhill Cup) and season standings. Brutalist / graffiti aesthetic — acid neon green on ink black, with ticket-cutout event cards, barcode strips, and geometric podium stamps.

## Running it (you don't need to be a developer)

1. Install Node.js (LTS) from https://nodejs.org if you don't already have it.
2. Open Terminal and `cd` into this folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. The terminal will print a URL (usually `http://localhost:5173`). Open it in Chrome.
5. For the proper mobile experience: open Chrome DevTools (`Cmd+Option+I`), click the device-toolbar icon (`Cmd+Shift+M`), and pick `iPhone 14 Pro` or similar.

## What's in here

```
src/
  App.jsx              — top-level shell, view switching (preserves scroll per view)
  data.js              — events + standings dummy data (edit this freely)
  index.css            — globals: grain, scanlines, ticket-perforation utility
  components/
    Header.jsx         — wordmark, marquee strip, live status
    Nav.jsx            — bottom navigation with brutalist glyphs
    EventCard.jsx      — ticket-style event card with barcode + countdown
    RiderRow.jsx       — leaderboard row + top-3 podium stamps
    Icon.jsx           — bespoke 2px stroke icons
  views/
    Schedule.jsx       — upcoming/past toggle + series filter + cards
    Rankings.jsx       — elite men/women tabs + leaderboard
```

## Editing data

Open `src/data.js`:

- `events` — list of races. `series` is `'UCI'` or `'IXS'`. The `TODAY` constant at the top decides what counts as upcoming vs past.
- `standings.men` and `standings.women` — leaderboards. Points control the bar widths automatically.

## Style notes

- Acid color = `#DBFF00`. Black = `#0A0A0A`. Bone = `#EDE9D8`. Rust = `#FF3B1F`. Change in `tailwind.config.js` under `theme.extend.colors`.
- Fonts: `Archivo Black` (display), `Archivo` (body), `JetBrains Mono` (mono details), `VT323` (pixel accents). Pulled from Google Fonts in `index.html`.
- Borders are deliberately heavy — `border-[3px]` is the house style.
