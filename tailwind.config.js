/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        acid: '#DBFF00',
        ink: '#0A0A0A',
        bone: '#EDE9D8',
        ash: '#1A1A19',
        rust: '#FF3B1F',
        // Secondary accents — use sparingly for small UI details
        // (map splits, sparkline endpoints, status pills, etc.)
        siren: '#FF3336',
        wire: '#1DC4FD',
        punch: '#E00D68',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        pixel: ['VT323', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        3: '3px',
      },
      keyframes: {
        in: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%,49%': { opacity: 1 },
          '50%,100%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.4)', opacity: 0.7 },
        },
      },
      animation: {
        in: 'in 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        blink: 'blink 1.2s steps(2,end) infinite',
        marquee: 'marquee 28s linear infinite',
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
