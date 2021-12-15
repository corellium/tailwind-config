import hexToRGBA from 'hex-to-rgba';

const config = {
  theme: {
    screens: {
      sm: '768px',
      md: '1025px',
      lg: '1280px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      unset: 'unset',
      inherit: 'inherit',
      white: '#fff',
      space: '#080c14',
      black: '#000',
      gray: {
        DEFAULT: '#475467',
        25: '#fcfcfd',
        50: '#f9fafb',
        100: '#f2f4f7',
        200: '#e4e7ec',
        300: '#d0d5dd',
        400: '#98a2b3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1d2939',
        900: '#101828',
      },
      primary: {
        DEFAULT: '#6938ef',
        25: '#fafaff',
        50: '#f4f3ff',
        100: '#ebe9fe',
        200: '#d9d6fe',
        300: '#bdb4fe',
        400: '#9b8afb',
        500: '#7a5af8',
        600: '#6938ef',
        700: '#5925dc',
        800: '#4a1fb8',
        900: '#3e1c96',
      },
      error: {
        DEFAULT: '#d92d20',
        25: '#fffbfa',
        50: '#fef3f2',
        100: '#fee4e2',
        200: '#fecdca',
        300: '#fda29b',
        400: '#f97066',
        500: '#f04438',
        600: '#d92d20',
        700: '#b42318',
        800: '#912018',
        900: '#7a271a',
      },
      warning: {
        DEFAULT: '#dc6803',
        25: '#fffcf5',
        50: '#fffaeb',
        100: '#fef0c7',
        200: '#fedf89',
        300: '#fec84b',
        400: '#fdb022',
        500: '#f79009',
        600: '#dc6803',
        700: '#b54708',
        800: '#93370d',
        900: '#7a2e0e',
      },
      success: {
        DEFAULT: '#039855',
        25: '#f6fef9',
        50: '#ecfdf3',
        100: '#d1fadf',
        200: '#a6f4c5',
        300: '#6ce9a6',
        400: '#32d583',
        500: '#12b76a',
        600: '#039855',
        700: '#027a48',
        800: '#05603a',
        900: '#054f31',
      },
      blueGray: {
        DEFAULT: '#3e4784',
        25: '#fcfcfd',
        50: '#f8f9fc',
        100: '#eaecf5',
        200: '#c8cce5',
        300: '#9ea5d1',
        400: '#717bbc',
        500: '#4e5ba6',
        600: '#3e4784',
        700: '#363f72',
        800: '#293056',
        900: '#101323',
      },
      blueLight: {
        DEFAULT: '#0086c9',
        25: '#f5fbff',
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#b9e6fe',
        300: '#7cd4fd',
        400: '#36bffa',
        500: '#0ba5ec',
        600: '#0086c9',
        700: '#026aa2',
        800: '#065986',
        900: '#0b4a6f',
      },
      blue: {
        DEFAULT: '#1570ef',
        25: '#f5faff',
        50: '#eff8ff',
        100: '#d1e9ff',
        200: '#b2ddff',
        300: '#84caff',
        400: '#53b1fd',
        500: '#2e90fa',
        600: '#1570ef',
        700: '#175cd3',
        800: '#1849a9',
        900: '#194185',
      },
      indigo: {
        DEFAULT: '#444ce7',
        25: '#f5f8ff',
        50: '#eef4ff',
        100: '#e0eaff',
        200: '#c7d7fe',
        300: '#a4bcfd',
        400: '#8098f9',
        500: '#6172f3',
        600: '#444ce7',
        700: '#3538cd',
        800: '#2d31a6',
        900: '#2d3282',
      },
      pink: {
        DEFAULT: '#dd2590',
        25: '#fef6fb',
        50: '#fdf2fa',
        100: '#fce7f6',
        200: '#fcceee',
        300: '#faa7e0',
        400: '#f670c7',
        500: '#ee46bc',
        600: '#dd2590',
        700: '#c11574',
        800: '#9e165f',
        900: '#851651',
      },
      rose: {
        DEFAULT: '#e31b54',
        25: '#fff5f6',
        50: '#fff1f3',
        100: '#ffe4e8',
        200: '#fecdd6',
        300: '#fea3b4',
        400: '#fd6f8e',
        500: '#f63d68',
        600: '#e31b54',
        700: '#c01048',
        800: '#a11043',
        900: '#89123e',
      },
      orange: {
        DEFAULT: '#ec4a0a',
        25: '#fffaf5',
        50: '#fff6ed',
        100: '#ffead5',
        200: '#fddcab',
        300: '#feb273',
        400: '#fd853a',
        500: '#fb6514',
        600: '#ec4a0a',
        700: '#c4320a',
        800: '#9c2a10',
        900: '#7e2410',
      },
    },
    fontFamily: {
      display: [
        'Inter',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Liberation Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      text: [
        'Inter',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Liberation Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'IBM Plex Mono',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    spacing: {
      px: '1px',
      0: '0px',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
    },
    fontSize: {
      'display-xs': ['1.25rem', '1.33'],
      'display-sm': ['1.5rem', '1.26'],
      'display-md': ['1.75rem', '1.22'],
      'display-lg': ['2rem', '1.25'],
      'display-xl': ['2.5rem', '1.2'],
      'display-xxl': ['3rem', '1.25'],
      'display-xs-desktop': ['1.5rem', '1.33'],
      'display-sm-desktop': ['1.875rem', '1.26'],
      'display-md-desktop': ['2.25rem', '1.22'],
      'display-lg-desktop': ['3rem', '1.25'],
      'display-xl-desktop': ['3.75rem', '1.2'],
      'display-xxl-desktop': ['4.5rem', '1.25'],
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      md: ['1rem', '1.5'],
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    backdropBlur: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
    },
    boxShadow: (theme: (val: string) => string) => ({
      border: `inset 0 0 0 1px ${theme('colors.gray.300')}`,
      'border-light': `inset 0 0 0 1px ${theme('colors.gray.200')}`,
      'border-focus': `inset 0 0 0 1px ${theme('colors.primary.300')}`,
      'border-error': `inset 0 0 0 1px ${theme('colors.error.300')}`,
      focus: `0 0 0 0.25rem ${theme('colors.primary.100')}`,
      'focus-error': `0 0 0 0.25rem ${theme('colors.error.100')}`,
      xs: `0 1px 0.125rem ${hexToRGBA(theme('colors.gray.900'), 0.05)}`,
      sm: `0 1px 0.1875rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.1
      )}, 0 1px 0.125rem ${hexToRGBA(theme('colors.gray.900'), 0.06)}`,
      md: `0 0.25rem 0.5rem -0.125rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.1
      )}, 0 0.125rem 0.25rem -0.125rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.06
      )}`,
      lg: `0 0.75rem 1rem -0.25rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.1
      )}, 0 0.25rem 0.375rem -0.125rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.05
      )}`,
      xl: `0 1.25rem 1.5rem -0.25rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.1
      )}, 0 0.5rem 0.5rem -0.25rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.04
      )}`,
      '2xl': `0 1.75rem 2rem -0.375rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.1
      )}, 0 1rem 0.625rem -0.25rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.03
      )}`,
      '3xl': `0 2.25rem 2.5rem -0.375rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.1
      )}, 0 2rem 0.75rem -0.375rem ${hexToRGBA(
        theme('colors.gray.900'),
        0.02
      )}`,
    }),
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
        fadeOut: 'fadeOut 0.2s ease-in',
        enter: 'enter 0.2s ease-out',
        enterCenter: 'enterCenter 0.2s ease-out',
        exit: 'exit 0.2s ease-in forwards',
        exitCenter: 'exitCenter 0.2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        enter: {
          '0%': { opacity: 0, transform: 'scale(.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        enterCenter: {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(.9)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        exit: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(.9)' },
        },
        exitCenter: {
          '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
        },
      },
    },
  },
};

export default config;
