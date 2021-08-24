import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { rgbVar, vars } from '../../styles/vars.css';

const colorVar = createVar();
const textColorVar = createVar();

export const root = style({
  padding: '1rem',
  display: 'flex',
  lineHeight: 1.5,
  fontSize: '16px',
  backgroundColor: rgbVar(colorVar, 0.2),
  borderRadius: '0.2em',
  border: `1px solid ${rgbVar(colorVar, 0.5)}`,
  width: '100%',
  color: rgbVar(textColorVar),

  ':focus': {
    outline: 0,
  },
});

export const icon = style({});

export const content = style({
  selectors: {
    [`${icon} + &`]: {
      marginLeft: '.5rem',
    },
  },
});

export const heading = style({
  margin: '0 0 .5rem',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  lineHeight: 1,
});

export const sizes = styleVariants({
  small: {
    fontSize: '.75rem',
  },
  default: {
    fontSize: '1rem',
  },
  large: {
    fontSize: '1.25rem',
  },
});

export type Sizes = keyof typeof sizes;

export const text = style({});

export const intents = styleVariants({
  info: {
    vars: {
      [colorVar]: vars.color['blue-600'],
      [textColorVar]: vars.color['blue-900'],
    },

    selectors: {
      [`.dark &`]: {
        vars: {
          [textColorVar]: vars.color['blue-100'],
        },
      },
    },
  },

  warning: {
    vars: {
      [colorVar]: vars.color['amber-600'],
      [textColorVar]: vars.color['amber-900'],
    },

    selectors: {
      [`.dark &`]: {
        vars: {
          [textColorVar]: vars.color['amber-100'],
        },
      },
    },
  },

  danger: {
    vars: {
      [colorVar]: vars.color['red-600'],
      [textColorVar]: vars.color['red-900'],
    },

    selectors: {
      [`.dark &`]: {
        vars: {
          [textColorVar]: vars.color['red-100'],
        },
      },
    },
  },

  success: {
    vars: {
      [colorVar]: vars.color['emerald-700'],
      [textColorVar]: vars.color['emerald-900'],
    },

    selectors: {
      [`.dark &`]: {
        vars: {
          [textColorVar]: vars.color['emerald-100'],
        },
      },
    },
  },

  none: {
    vars: {
      [colorVar]: vars.color['coolGray-500'],
      [textColorVar]: vars.color['coolGray-900'],
    },

    selectors: {
      [`.dark &`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-100'],
        },
      },
    },
  },
});

export type Intents = keyof typeof intents;
