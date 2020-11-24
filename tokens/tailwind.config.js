/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const plugin = require('tailwindcss/plugin')

const spacing = {
  initial: 'initial',
  auto: 'auto',
  inherit: 'inherit',
  0: '0px',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  44: '44px',
  48: '48px',
  52: '52px',
  56: '56px',
  60: '60px',
  64: '64px',
  68: '68px',
  72: '72px',
  76: '76px',
  80: '80px',
  84: '84px',
  88: '88px',
  92: '92px',
  96: '96px',
  100: '100px',
  104: '104px',
  108: '108px',
  112: '112px',
  116: '116px',
  120: '120px',
  124: '124px',
  128: '128px',
  132: '132px',
  136: '136px',
  140: '140px',
  144: '144px',
  148: '148px',
  152: '152px',
  156: '156px',
  160: '160px',
  164: '164px',
  168: '168px',
  172: '172px',
  176: '176px',
  180: '180px',
  184: '184px',
  188: '188px',
  192: '192px',
  196: '196px',
  200: '200px',
  220: '220px',
  260: '260px',
  280: '280px',
  320: '320px',
  340: '340px',
  360: '360px',
  400: '400px',
  520: '520px',
  600: '600px',
  700: '700px',
  760: '760px',
  800: '800px',
  840: '840px',
  880: '880px',
  940: '940px',
  1000: '1000px',
  1200: '1200px',
}

const negativeSpacing = Object.keys(spacing).reduce((a, b) => {
  a['-' + b] = '-' + b + 'px'

  return a
}, {})

const vh = {
  '100vh': '100vh',
  '50vh': '50vh',
}

const vw = {
  '100vw': '100vw',
  '50vw': '50vw',
}

module.exports = {
  prefix: 'app-',
  theme: {
    container: {
      center: true
    },
    screens: {
      xs: '360px',
      sm: '414px',
      md: '880px',
      dark: { raw: '(prefers-color-scheme: dark)' },
    },
    colors: {},
    inset: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      ...spacing,
      ...negativeSpacing
    },
    spacing: {
      ...spacing,
      ...negativeSpacing
    },
    fontFamily: {
      body: ['Catamaran', 'sans-serif'],
    },
    fontWeight: {
      extrabold: '800',
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400'
    },
    fontSize: {
      48: '48px',
      36: '36px',
      32: '32px',
      28: '28px',
      24: '24px',
      20: '20px',
      18: '18px',
      16: '16px',
      14: '14px',
      12: '12px'
    },
    lineHeight: {
      60: '60px',
      56: '56px',
      52: '52px',
      48: '48px',
      44: '44px',
      40: '40px',
      36: '36px',
      32: '32px',
      28: '28px',
      24: '24px',
      20: '20px',
      16: '16px',
      14: '14px',
    },
    minWidth: {
      ...spacing,
      ...vh,
      ...vw
    },
    maxWidth: {
      ...spacing,
      ...vh,
      ...vw
    },
    minHeight: {
      ...spacing,
      ...vh,
      ...vw
    },
    maxHeight: {
      ...spacing,
      ...vh,
      ...vw
    },
    skew: {
      '1/2': '50%'
    },
    borderRadius: {
      2: '2px',
      3: '3px',
      4: '4px',
      8: '8px',
      16: '16px',
      32: '32px',
      full: '100%'
    },
    extend: {
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
        '100': '1',
      },
      scale: {
        '25': '.25',
        '75': '.75'
      },
      height: {
        ...vh,
        ...vw
      },
      boxShadow: {
        input: '0px 0px 16px 0px rgba(0, 120, 255, 0.1)'
      }
    }
  },
  corePlugins: [
    'preflight',
    'cursor',
    'display',
    'inset',
    'margin',
    'objectFit',
    'objectPosition',
    'opacity',
    'overflow',
    'order',
    'outline',
    'pointerEvents',
    'padding',
    'position',
    'verticalAlign',
    'wordBreak',
    'zIndex',
    'visibility',
    'userSelect',
    'whitespace',
    'appearance',
    'boxShadow',

    // text
    'letterSpacing',
    'textAlign',
    'fontFamily',
    'fontWeight',
    'fontSize',
    'lineHeight',
    'textTransform',

    // border
    'borderRadius',
    'borderWidth',
    'borderStyle',
    'divideWidth',
    'divideColor',

    // sizing
    'width',
    'height',
    'maxWidth',
    'maxHeight',
    'minWidth',
    'minHeight',

    // flex
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'justifyContent',
    'alignContent',
    'alignItems',
    'alignSelf',

    // Grid
    'gridAutoFlow',
    
    // transition classes
    'transitionProperty',
    'transitionTimingFunction',
    'transitionDuration',
    'animation',

    // transform classes
    'transform',
    'translate',
    'transformOrigin',
    'rotate',
    'skew',
    'scale'
  ],
  variants: {
    margin: ['responsive', 'last', 'first', 'odd', 'even'],
    padding: ['responsive', 'last', 'first', 'odd', 'even'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'last', 'first', 'odd', 'even'],
    border: ['responsive', 'last', 'first']
  },
  plugins: []
}
