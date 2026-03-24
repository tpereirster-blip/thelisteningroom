import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir:       '#0D0A08',
        bordeaux:   '#6B1E2A',
        gold:       '#C4922A',
        amber:      '#D4A847',
        cream:      '#F2EBD9',
        parchment:  '#E8DCC8',
        sage:       '#4A6741',
        tobacco:    '#8B5E3C',
        'deep-teal':'#1E3A4A',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-crimson)',  'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.35em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
