import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070a',
          900: '#0c0c11',
          800: '#13131a',
          700: '#1c1c25',
        },
        vue: '#42d392',
        aqua: '#38bdf8',
        iris: '#8b7cff',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -8%) scale(1.12)' },
          '66%': { transform: 'translate(-6%, 6%) scale(0.94)' },
        },
        shine: {
          from: { backgroundPosition: '200% center' },
          to: { backgroundPosition: '-200% center' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
}
