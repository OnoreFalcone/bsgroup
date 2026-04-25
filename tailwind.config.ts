import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primitives — anchored at brand blue extracted from bsgroup.ch
        gray: {
          50:  '#F7F8FA', 100: '#EEF0F4', 200: '#DEE1E8', 300: '#C5CAD6',
          400: '#9CA3B5', 500: '#757A8C', 600: '#525662', 700: '#3F424E',
          800: '#2C2E37', 900: '#1A1B22', 950: '#0D0E12',
        },
        blue: {
          50:  '#E6E8F4', 100: '#C2C7E5', 200: '#8A93CC', 300: '#525FB3',
          400: '#2A38A0', 500: '#001A99', 600: '#001789', 700: '#001370',
          800: '#000F58', 900: '#000A3F', 950: '#000526',
        },

        // Semantic — these are what components should reference.
        // Mapped to CSS vars so dark mode (v2) only flips var values.
        bg: {
          page:             'var(--color-bg-page)',
          surface:          'var(--color-bg-surface)',
          'surface-subtle': 'var(--color-bg-surface-subtle)',
          inverse:          'var(--color-bg-inverse)',
          brand:            'var(--color-bg-brand)',
          'brand-hover':    'var(--color-bg-brand-hover)',
          'brand-subtle':   'var(--color-bg-brand-subtle)',
          muted:            'var(--color-bg-muted)',
        },
        fg: {
          primary:    'var(--color-text-primary)',
          secondary:  'var(--color-text-secondary)',
          muted:      'var(--color-text-muted)',
          inverse:    'var(--color-text-inverse)',
          brand:      'var(--color-text-brand)',
          'on-brand': 'var(--color-text-on-brand)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
          subtle:  'var(--color-border-subtle)',
          strong:  'var(--color-border-strong)',
          brand:   'var(--color-border-brand)',
          focus:   'var(--color-border-focus)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Maps to the Figma type ramp
        'display-xl': ['96px', { lineHeight: '105%', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-l':  ['72px', { lineHeight: '110%', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1':         ['48px', { lineHeight: '115%', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2':         ['32px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3':         ['24px', { lineHeight: '130%', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h4':         ['20px', { lineHeight: '140%', fontWeight: '600' }],
        'body-l':     ['18px', { lineHeight: '165%' }],
        'body-m':     ['16px', { lineHeight: '165%' }],
        'body-s':     ['14px', { lineHeight: '160%' }],
        'eyebrow':    ['12px', { lineHeight: '120%', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      spacing: {
        '3xs':  '4px',  '2xs': '8px',  'xs':  '12px',
        'sm':   '16px', 'md':  '24px', 'lg':  '32px',
        'xl':   '48px', '2xl': '64px', '3xl': '96px',
        '4xl':  '128px','5xl': '160px',
      },
      borderRadius: {
        sm:   '4px',
        DEFAULT: '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl': '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgb(10 13 26 / 0.05), 0 1px 3px rgb(10 13 26 / 0.04)',
        md: '0 4px 8px rgb(10 13 26 / 0.06), 0 2px 4px rgb(10 13 26 / 0.04)',
        lg: '0 12px 24px -4px rgb(10 13 26 / 0.10), 0 4px 8px -2px rgb(10 13 26 / 0.06)',
        focus: '0 0 0 4px rgb(0 23 137 / 0.30)',
      },
      maxWidth: {
        prose: '720px',
        layout: '1280px',
      },
    },
  },
} satisfies Config;
