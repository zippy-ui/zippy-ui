import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { rgbVar, vars } from '../../styles/vars.css';

const textColorVar = createVar();

export const root = style({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  borderRadius: '.25rem',
  lineHeight: 1,
  padding: '.45em .65em',
  fontWeight: 700,
  border: 0,
  color: rgbVar(textColorVar),
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

const bgColorVar = createVar();
const bgOpacityVar = createVar();

export const variants = styleVariants({
  solid: {
    backgroundColor: rgbVar(bgColorVar),
  },
  outlined: {
    boxShadow: `inset 0 0 0 1px ${rgbVar(bgColorVar)}`,
  },
  subtle: {
    backgroundColor: rgbVar(bgColorVar, bgOpacityVar),
  },
});

export type Variants = keyof typeof variants;

export const intents = styleVariants({
  success: {
    selectors: {
      [`${variants.solid}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgColorVar]: vars.color['emerald-700'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
        },
      },
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['emerald-800'],
          [bgColorVar]: vars.color['emerald-700'],
        },
      },
      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['emerald-900'],
          [bgColorVar]: vars.color['emerald-700'],
          [bgOpacityVar]: '0.2',
        },
      },
      [`.dark ${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '0.4',
        },
      },
    },
  },

  danger: {
    selectors: {
      [`${variants.solid}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgColorVar]: vars.color['red-600'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
        },
      },
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['red-700'],
          [bgColorVar]: vars.color['red-600'],
        },
      },
      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['red-900'],
          [bgColorVar]: vars.color['red-600'],
          [bgOpacityVar]: '0.2',
        },
      },
      [`.dark ${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '0.4',
        },
      },
    },
  },

  warning: {
    selectors: {
      [`${variants.solid}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgColorVar]: vars.color['amber-600'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
        },
      },
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['amber-700'],
          [bgColorVar]: vars.color['amber-600'],
        },
      },
      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['amber-900'],
          [bgColorVar]: vars.color['amber-600'],
          [bgOpacityVar]: '0.2',
        },
      },
      [`.dark ${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '0.4',
        },
      },
    },
  },

  info: {
    selectors: {
      [`${variants.solid}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgColorVar]: vars.color['blue-600'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
        },
      },
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['blue-700'],
          [bgColorVar]: vars.color['blue-600'],
        },
      },
      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['blue-900'],
          [bgColorVar]: vars.color['blue-600'],
          [bgOpacityVar]: '0.2',
        },
      },
      [`.dark ${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '0.4',
        },
      },
    },
  },

  none: {
    selectors: {
      [`${variants.solid}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgColorVar]: vars.color['coolGray-500'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
        },
      },
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-600'],
          [bgColorVar]: vars.color['coolGray-500'],
        },
      },
      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-900'],
          [bgColorVar]: vars.color['coolGray-500'],
          [bgOpacityVar]: '0.2',
        },
      },
      [`.dark ${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '0.4',
        },
      },
    },
  },
});

export type Intents = keyof typeof intents;
