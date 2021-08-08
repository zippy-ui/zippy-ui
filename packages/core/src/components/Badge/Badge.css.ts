import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { rgbVar, vars } from '../../styles/vars.css';

export const root = style({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  borderRadius: '.25rem',
  lineHeight: 1,
  padding: '.45em .65em',
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

const bgColorVar = createVar();

export const variants = styleVariants({
  solid: {
    backgroundColor: bgColorVar,
  },
  outlined: {
    boxShadow: `inset 0 0 0 1px ${bgColorVar}`,
  },
  subtle: {
    backgroundColor: bgColorVar,
  },
});

export type Variants = keyof typeof variants;

export const intents = styleVariants({
  success: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700']),
        },
      },
      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['emerald-700']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700']),
        },
      },
      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['emerald-900']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['emerald-700'], 0.2),
        },
      },
    },
  },

  danger: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600']),
        },
      },
      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['red-600']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600']),
        },
      },
      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['red-900']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['red-600'], 0.2),
        },
      },
    },
  },

  warning: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600']),
        },
      },
      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['amber-600']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600']),
        },
      },
      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['amber-900']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['amber-600'], 0.2),
        },
      },
    },
  },

  info: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600']),
        },
      },
      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['blue-600']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600']),
        },
      },
      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['blue-900']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['blue-600'], 0.2),
        },
      },
    },
  },

  none: {
    selectors: {
      [`${variants.solid}&`]: {
        color: '#fff',
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500']),
        },
      },
      [`${variants.outlined}&`]: {
        color: rgbVar(vars.color['coolGray-500']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500']),
        },
      },
      [`${variants.subtle}&`]: {
        color: rgbVar(vars.color['coolGray-900']),
        vars: {
          [bgColorVar]: rgbVar(vars.color['coolGray-500'], 0.2),
        },
      },
    },
  },
});

export type Intents = keyof typeof intents;
