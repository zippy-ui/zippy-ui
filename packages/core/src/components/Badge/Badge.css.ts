import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { rgbVar, vars } from '../../styles/vars.css';

const textColorVar = createVar();
const bgColorVar = createVar();
const bgOpacityVar = createVar();

export const root = style({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  borderRadius: '.25rem',
  lineHeight: 1,
  padding: '.45em .65em',
  fontWeight: 700,
  border: 0,
  color: rgbVar(textColorVar),
  backgroundColor: rgbVar(bgColorVar, bgOpacityVar),

  selectors: {
    [`.dark &&`]: {
      vars: {
        [textColorVar]: vars.color.white,
      },
    },
  },
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

export const variants = styleVariants({
  solid: {
    vars: {
      [textColorVar]: vars.color.white,
      [bgOpacityVar]: '1',
    },
  },
  outlined: {
    boxShadow: `inset 0 0 0 1px ${rgbVar(bgColorVar)}`,
    vars: {
      [bgOpacityVar]: '0',
    },
  },
  subtle: {
    vars: {
      [bgOpacityVar]: '0.2',
    },
    selectors: {
      [`.dark &`]: {
        vars: {
          [bgOpacityVar]: '0.4',
        },
      },
    },
  },
});

export type Variants = keyof typeof variants;

export const intents = styleVariants({
  success: {
    vars: {
      [bgColorVar]: vars.color['emerald-700'],
    },
    selectors: {
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['emerald-800'],
        },
      },

      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['emerald-900'],
        },
      },
    },
  },

  danger: {
    vars: {
      [bgColorVar]: vars.color['red-600'],
    },
    selectors: {
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['red-700'],
        },
      },

      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['red-900'],
        },
      },
    },
  },

  warning: {
    vars: {
      [bgColorVar]: vars.color['amber-600'],
    },
    selectors: {
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['amber-700'],
        },
      },

      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['amber-900'],
        },
      },
    },
  },

  info: {
    vars: {
      [bgColorVar]: vars.color['blue-600'],
    },
    selectors: {
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['blue-700'],
        },
      },

      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['blue-900'],
        },
      },
    },
  },

  none: {
    vars: {
      [bgColorVar]: vars.color['coolGray-500'],
    },
    selectors: {
      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-600'],
        },
      },

      [`${variants.subtle}&`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-900'],
        },
      },
    },
  },
});

export type Intents = keyof typeof intents;
