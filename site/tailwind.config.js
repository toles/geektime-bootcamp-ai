import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // MotherDuck 核心调色板（像素采样值）
        canvas:       '#F4EFEA',
        surface:      '#FFFFFF',
        ink:          '#383838',
        slate:        '#A1A1A1',
        lavender:     '#6670D6',
        coral:        '#FF7169',
        yellow: {
          DEFAULT:    '#FFDE00',
          dark:       '#E3C300',
        },
        sky: {
          DEFAULT:    '#6FC2FF',
          strong:     '#2BA5FF',
        },
        teal:         '#16AA98',
        navy:         '#0A3064',
        borderSubtle: '#DADADA',
        error:        '#D7544D',
        // Legacy aliases
        cream:        '#F4EFEA',
        sunbeam: {
          DEFAULT:    '#FFDE00',
          dark:       '#E3C300',
        },
        garden:       '#16AA98',
        softBlue:     '#EBF9FF',
        cloud:        '#FFFFFF',
        fog:          '#F8F8F7',
        graphite:     '#383838',
        grid:         '#DADADA',
      },

      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
        ],
        md: [
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
        fono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },

      fontSize: {
        hero:    ['var(--font-hero)',    { lineHeight: 'var(--line-height-hero)',    letterSpacing: '-0.02em' }],
        h2:      ['var(--font-h2)',      { lineHeight: '1.25',                       letterSpacing: '-0.02em' }],
        h3:      ['var(--font-h3)',      { lineHeight: '1.3',                        letterSpacing: '-0.01em' }],
        body:    ['var(--font-body)',    { lineHeight: 'var(--line-height-body)' }],
        ui:      ['var(--font-ui)',      { letterSpacing: '0' }],
        eyebrow: ['var(--font-eyebrow)', { letterSpacing: '0.08em' }],
      },

      spacing: {
        'space-1':  'var(--space-1)',
        'space-2':  'var(--space-2)',
        'space-3':  'var(--space-3)',
        'space-4':  'var(--space-4)',
        'space-5':  'var(--space-5)',
        'space-6':  'var(--space-6)',
        'space-7':  'var(--space-7)',
        'space-8':  'var(--space-8)',
        'space-9':  'var(--space-9)',
        'space-10': 'var(--space-10)',
        'space-11': 'var(--space-11)',
        'space-12': 'var(--space-12)',
        section:    'var(--space-section)',
      },

      borderRadius: {
        none:    '0',
        micro:   '4px',
        xs:      '4px',
        sm:      '6px',
        DEFAULT: '8px',
        md:      '8px',
        lg:      '12px',
        pill:    '999px',
      },

      boxShadow: {
        card:   '0 2px  8px rgba(56,56,56,.12)',
        dialog: '0 4px 16px rgba(56,56,56,.10)',
        // legacy
        press:  '0 7px 0 rgba(0, 0, 0, 1)',
      },

      maxWidth: {
        container: '1280px',
      },

      transitionDuration: {
        quick:   '120ms',
        default: '160ms',
        slow:    '200ms',
      },

      backgroundImage: {
        'md-hero': 'linear-gradient(160deg, var(--md-canvas) 0%, rgba(111,194,255,.08) 100%)',
      },
    },
  },
  plugins: [
    typography,
    plugin(function ({ addComponents }) {
      addComponents({
        '.md-cta-stack': {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          alignItems: 'center',
        },
        '.md-highlight-row': {
          display: 'grid',
          gap: 'var(--space-6)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        },
      });
    }),
  ],
};
