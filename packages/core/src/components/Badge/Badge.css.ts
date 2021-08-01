import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../vars.css';

export const root = style({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  borderRadius: '.25rem',
  lineHeight: 1,
  padding: '.35em .65em',
  fontWeight: 700,
  border: 0,
});

export const sizes = styleVariants({
  small: {
    fontSize: '.5em',
  },
  default: {
    fontSize: '.75em',
  },
  large: {
    fontSize: '1em',
  },
});

export type Sizes = keyof typeof sizes;

const colorVar = createVar();

export const variants = styleVariants({
  solid: {
    backgroundColor: colorVar,
  },
  outlined: {
    boxShadow: `inset 0 0 0 1px ${colorVar}`,
  },
  subtle: {
    backgroundColor: colorVar,
  },
});

export type Variants = keyof typeof variants;

export const intents = styleVariants({
  success: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [`${colorVar}`]: vars.color['green-700'],
        },
      },
        color: vars.color['green-700'],
      [`${variants.outlined}&`]: {
        vars: {
          [`${colorVar}`]: vars.color['green-700'],
        },
      },
        color: vars.color['green-900'],
      [`${variants.subtle}&`]: {
        vars: {
          [`${colorVar}`]: vars.color['green-200'],
        },
      },
    },
  },

  danger: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [`${colorVar}`]: vars.color['red-700'],
        },
      },
      [`${variants.outlined}&`]: {
        color: vars.color['red-700'],
        vars: {
          [`${colorVar}`]: vars.color['red-700'],
        },
      },
      [`${variants.subtle}&`]: {
        color: vars.color['red-900'],
        vars: {
          [`${colorVar}`]: vars.color['red-200'],
        },
      },
    },
  },

  warning: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [`${colorVar}`]: vars.color['yellow-600'],
        },
      },
        color: vars.color['yellow-600'],
      [`${variants.outlined}&`]: {
        vars: {
          [`${colorVar}`]: vars.color['yellow-600'],
        },
      },
        color: vars.color['yellow-900'],
      [`${variants.subtle}&`]: {
        vars: {
          [`${colorVar}`]: vars.color['yellow-200'],
        },
      },
    },
  },

  info: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [`${colorVar}`]: vars.color['blue-600'],
        },
      },
      [`${variants.outlined}&`]: {
        color: vars.color['blue-600'],
        vars: {
          [`${colorVar}`]: vars.color['blue-600'],
        },
      },
      [`${variants.subtle}&`]: {
        color: vars.color['blue-900'],
        vars: {
          [`${colorVar}`]: vars.color['blue-200'],
        },
      },
    },
  },

  none: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [`${colorVar}`]: vars.color['gray-600'],
        },
      },
      [`${variants.outlined}&`]: {
        color: vars.color['gray-600'],
        vars: {
          [`${colorVar}`]: vars.color['gray-600'],
        },
      },
      [`${variants.subtle}&`]: {
        color: vars.color['gray-900'],
        vars: {
          [`${colorVar}`]: vars.color['gray-200'],
        },
      },
    },
  },
});

export type Intents = keyof typeof intents;
