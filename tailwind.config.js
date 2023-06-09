/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--font-roboto)',
        alt: 'var(--font-baloo)',
      },
      colors: {
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',

        'purple-dark': '#4B2995',
        purple: '#8047F8',
        'purple-light': '#EBE5F9',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',

        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',
        background: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontSize: {
        'title-xl': [
          '48px',
          {
            lineHeight: '130%',
            fontWeight: 800,
          },
        ],
        'title-l': [
          '32px',
          {
            lineHeight: '130%',
            fontWeight: 800,
          },
        ],
        'title-m': [
          '24px',
          {
            lineHeight: '130%',
            fontWeight: 800,
          },
        ],
        'title-s': [
          '20px',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],
        'title-xs': [
          '18px',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],

        'text-l': [
          '20px',
          {
            lineHeight: '130%',
          },
        ],
        'text-m': [
          '16px',
          {
            lineHeight: '130%',
            fontWeight: 400,
          },
        ],
        'text-s': [
          '14px',
          {
            lineHeight: '130%',
            fontWeight: 500,
          },
        ],
        'text-xs': [
          '12px',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],

        tag: [
          '10px',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],
        'button-g': [
          '14px',
          {
            lineHeight: '160%',
            fontWeight: 700,
          },
        ],
        'button-m': [
          '12px',
          {
            lineHeight: '160%',
            fontWeight: 500,
          },
        ],
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xll: { max: '1370px' },
        // => @media (max-width: 1270px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1050px' },
        // => @media (max-width: 1023px) { ... }

        mdd: { max: '860px' },
        // => @media (max-width: 860px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
