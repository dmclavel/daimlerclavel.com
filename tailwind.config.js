const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const zeroWidth = {
  '0%': {
    width: 0,
  },
};

module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
    boxShadow: {
      DEFAULT: '0 1px 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px 1px rgba(0, 0, 0, 0.06)',
      mint: '0 1px 3px 0 rgba(255, 255, 255, 0.3), 0 1px 2px 0 rgba(49, 255, 206, 0.03)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        ...colors.black,
        DEFAULT: 'rgba(0,0,0,0.87)',
        disabled: 'rgba(0,0,0,0.38)',
        semi: 'rgba(0,0,0,0.65)',
      },
      white: {
        disabled: 'rgba(255, 255, 255, 0.38)',
        DEFAULT: 'rgba(255, 255, 255, 0.6)',
        semi: 'rgba(255, 255, 255, 0.72)',
        emphasis: 'rgba(255, 255, 255, 0.87)',
      },
      gray: colors.gray,
      pink: colors.pink,
      purple: colors.purple,
      blue: {
        light: '#7DCCFF',
        DEFAULT: '#1190CB',
        dark: '#112240',
      },
      green: {
        light: '#2d9d78',
        DEFAULT: '#12805c',
        dark: '#107154',
      },
      orange: {
        light: '#e68619',
        DEFAULT: '#cb6f10',
        dark: '#bd640d',
      },
      fuchsia: {
        light: '#FDA7DF',
        DEFAULT: '#FC427B',
        dark: '#B33771',
      },
      mint: {
        light: '#31FFCE',
        DEFAULT: '#cefff3',
        dark: '#baffef',
      },
      royal: {
        light: '#303E68',
        DEFAULT: '#202945',
      },
    },
    rotate: {
      '-270': '-270deg',
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      270: '270deg',
    },
    extend: {
      fontFamily: {
        serif: ['BioRhyme', ...defaultTheme.fontFamily.serif],
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        bounce: 'bounce 1s 1.5',
        'rotate-back': 'rotate-back 1s forwards',
        'block-width-interpolate':
          'block-width-interpolate 500ms cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards',
        'block-height-interpolate':
          'block-height-interpolate 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards',
        'block-height-interpolate-delay':
          'block-height-interpolate 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) 1s forwards',
        'slider-left': 'slider-left 300ms cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards',
        'slider-right': 'slider-right 300ms cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards',
        up: 'animate-up 300ms cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards',
        'up-delay-1':
          'animate-up 300ms cubic-bezier(0.74, 0.06, 0.4, 0.92) 300ms forwards',
        'custom-spin': 'custom-spin 300ms cubic-bezier(0.74, 0.06, 0.4, 0.92) infinite',
      },
      keyframes: {
        'rotate-back': {
          '0%': {
            transform: 'rotate(45deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        'custom-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'block-width-interpolate': {
          ...zeroWidth,
          '100%': {
            width: '100%',
          },
        },
        'block-height-interpolate': {
          ...zeroWidth,
          '100%': {
            width: '100vh',
          },
        },
        'slider-left': {
          '0%': {
            right: 0,
          },
          '100%': {
            right: '2.125rem',
          },
        },
        'slider-right': {
          '0%': {
            left: 0,
          },
          '100%': {
            left: '2rem',
          },
        },
        'animate-up': {
          '0%': {
            transform: 'translate(0, 50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: 1,
          },
        },
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      boxShadow: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before'],
      );
    }),
  ],
};
