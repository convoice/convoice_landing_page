import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        blinking: 'blink 0.7s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%':  { transform: 'translate(0, 7px)' },
          '100%':   { transform: 'translate(0, -0px)' },
        },
        blink: {
          '0%': { opcaity : '1' },
          '50%': { opcaity : '0' },
          '100%': { opcaity : '1' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-general-sans)',
      },
      colors: {
        'bg': "#fff7f7",
        'border': "#e4e4e4",
        'default': "#2f2f30",
        'panel': "#726e6e",
        'main': "#FD7060",
        'main-50': "#FFF1EF",
        'main-100': "#FFE2DE",
        'main-200': "#FFD5D0",
        'main-300': "#FFB9B0",
        'main-400': "#FF988C",
        'main-500': "#FD7060",
        'main-600': "#F25F4E",
        'main-700': "#E54E3D",
        'main-800': "#CB3828",
        'main-900': "#AE2414",
        'main-950': "#741308",
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
