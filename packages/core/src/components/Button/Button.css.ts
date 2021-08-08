import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { rgbVar, vars } from '../../styles/vars.css';

const bgColorVar = createVar();

export const root = style({
  padding: '.375rem .75rem',
  display: 'inline-flex',
  lineHeight: 1.5,
  fontSize: '16px',
  backgroundColor: fallbackVar(bgColorVar, 'none'),
  borderRadius: '0.2em',

  ':focus': {
    outline: 0,
  },
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

const borderColorVar = createVar();

export const variants = styleVariants({
  solid: {},
  outlined: {
    boxShadow: `inset 0 0 0 1px ${borderColorVar}`,
  },
  subtle: {},
});

export type Variants = keyof typeof variants;

export const text = style({});

export const intents = styleVariants({
  info: {
    selectors: {
      [`${variants.solid}&`]: {
        color: rgbVar(vars.color.white),
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600']),
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-700']),
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-800']),
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['blue-600'],
        )}`,
      },

      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['blue-600']),
        vars: {
          [borderColorVar]: rgbVar(vars.color['blue-600']),
        },
      },
      [`${variants.outlined}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600'], 0.1),
        },
      },
      [`${variants.outlined}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600'], 0.2),
        },
      },
      [`${variants.outlined}&:focus`]: {
        boxShadow: `inset 0 0 0 1px ${borderColorVar}, 0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['blue-600'],
        )}`,
      },

      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['blue-600']),
      },
      [`${variants.subtle}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600'], 0.1),
        },
      },
      [`${variants.subtle}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600'], 0.2),
        },
      },
      [`${variants.subtle}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['blue-600'],
        )}`,
      },
    },
  },

  warning: {
    selectors: {
      [`${variants.solid}&`]: {
        color: rgbVar(vars.color.white),

        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600']),
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-700']),
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-800']),
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['amber-600'],
        )}`,
      },

      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['amber-600']),
        vars: {
          [borderColorVar]: rgbVar(vars.color['amber-600']),
        },
      },
      [`${variants.outlined}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600'], 0.1),
        },
      },
      [`${variants.outlined}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600'], 0.2),
        },
      },
      [`${variants.outlined}&:focus`]: {
        boxShadow: `inset 0 0 0 1px ${borderColorVar}, 0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['amber-600'],
        )}`,
      },

      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['amber-600']),
      },
      [`${variants.subtle}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600'], 0.1),
        },
      },
      [`${variants.subtle}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600'], 0.2),
        },
      },
      [`${variants.subtle}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['amber-600'],
        )}`,
      },
    },
  },

  danger: {
    selectors: {
      [`${variants.solid}&`]: {
        color: rgbVar(vars.color.white),

        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600']),
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-700']),
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-800']),
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['red-600'],
        )}`,
      },

      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['red-600']),
        vars: {
          [borderColorVar]: rgbVar(vars.color['red-600']),
        },
      },
      [`${variants.outlined}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600'], 0.1),
        },
      },
      [`${variants.outlined}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600'], 0.2),
        },
      },
      [`${variants.outlined}&:focus`]: {
        boxShadow: `inset 0 0 0 1px ${borderColorVar}, 0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['red-600'],
        )}`,
      },

      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['red-600']),
      },
      [`${variants.subtle}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600'], 0.1),
        },
      },
      [`${variants.subtle}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600'], 0.2),
        },
      },
      [`${variants.subtle}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['red-600'],
        )}`,
      },
    },
  },

  success: {
    selectors: {
      [`${variants.solid}&`]: {
        color: rgbVar(vars.color.white),

        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700']),
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-800']),
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-900']),
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['emerald-700'],
        )}`,
      },

      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['emerald-700']),
        vars: {
          [borderColorVar]: rgbVar(vars.color['emerald-700']),
        },
      },
      [`${variants.outlined}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700'], 0.1),
        },
      },
      [`${variants.outlined}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700'], 0.2),
        },
      },
      [`${variants.outlined}&:focus`]: {
        boxShadow: `inset 0 0 0 1px ${borderColorVar}, 0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['emerald-700'],
        )}`,
      },

      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['emerald-700']),
      },
      [`${variants.subtle}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700'], 0.1),
        },
      },
      [`${variants.subtle}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700'], 0.2),
        },
      },
      [`${variants.subtle}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['emerald-700'],
        )}`,
      },
    },
  },

  none: {
    selectors: {
      [`${variants.solid}&`]: {
        color: rgbVar(vars.color.white),
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500']),
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-600']),
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-700']),
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['coolGray-500'],
        )}`,
      },

      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['coolGray-700']),
        vars: {
          [borderColorVar]: rgbVar(vars.color['coolGray-500']),
        },
      },
      [`${variants.outlined}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500'], 0.1),
        },
      },
      [`${variants.outlined}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500'], 0.2),
        },
      },
      [`${variants.outlined}&:focus`]: {
        boxShadow: `inset 0 0 0 1px ${borderColorVar}, 0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['coolGray-500'],
        )}`,
      },

      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['coolGray-700']),
      },
      [`${variants.subtle}&:hover`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500'], 0.1),
        },
      },
      [`${variants.subtle}&:active`]: {
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500'], 0.2),
        },
      },
      [`${variants.subtle}&:focus`]: {
        boxShadow: `0 0 0 .1rem #fff, 0 0 0 .25rem ${rgbVar(
          vars.color['coolGray-500'],
        )}`,
      },
    },
  },
});

export type Intents = keyof typeof intents;
