import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { rgbVar, vars } from '../../styles/vars.css';
import { root as buttonGroupRoot } from '../ButtonGroup/ButtonGroup.css';

const bgColorVar = createVar();
const textColorVar = createVar();
const borderColorVar = createVar();
const focusBorderColorVar = createVar();
const bgOpacityVar = createVar();

export const root = style({
  padding: '.375rem .75rem',
  display: 'inline-flex',
  lineHeight: 1.5,
  fontSize: '16px',
  backgroundColor: rgbVar(bgColorVar, bgOpacityVar),
  borderRadius: '0.2em',
  color: rgbVar(textColorVar),
  border: `1px solid ${rgbVar(borderColorVar)}`,

  ':focus': {
    outline: 0,
    boxShadow: `0 0 0 .2rem ${rgbVar(focusBorderColorVar)}`,
  },

  // TODO: figure out if this is the best way to style buttons in a group
  selectors: {
    [`${buttonGroupRoot} > &`]: {
      position: 'relative',
      flex: '1 1 auto',
    },

    [`${buttonGroupRoot} > &:hover, ${buttonGroupRoot} > &:focus, ${buttonGroupRoot} > &:active`]:
      {
        zIndex: 1,
      },

    [`${buttonGroupRoot}> &:not(:first-child)`]: {
      marginLeft: '-1px',
    },

    [`${buttonGroupRoot} > &:not(:last-child)`]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },

    [`${buttonGroupRoot} > &:nth-child(n+3), ${buttonGroupRoot} > & + &`]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
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

export const variants = styleVariants({
  solid: {
    vars: {
      [textColorVar]: vars.color.white,
      [bgOpacityVar]: '1',
      [borderColorVar]: bgColorVar,
    },
  },
  outlined: {
    vars: {
      [bgOpacityVar]: '0',
      [borderColorVar]: bgColorVar,
    },

    ':hover': {
      vars: {
        [bgOpacityVar]: '0.1',
      },
    },
    ':active': {
      vars: {
        [bgOpacityVar]: '0.2',
      },
    },

    selectors: {
      [`.dark &:hover`]: {
        vars: {
          [bgOpacityVar]: '0.4',
        },
      },
      [`.dark &:active`]: {
        vars: {
          [bgOpacityVar]: '0.5',
        },
      },
    },
  },
});

export type Variants = keyof typeof variants;

export const text = style({});

export const intents = styleVariants({
  info: {
    vars: {
      [bgColorVar]: vars.color['blue-600'],
    },
    selectors: {
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: vars.color['blue-700'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: vars.color['blue-800'],
        },
      },

      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['blue-700'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['blue-100'],
        },
      },
    },
  },

  warning: {
    vars: {
      [bgColorVar]: vars.color['amber-600'],
    },
    selectors: {
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: vars.color['amber-700'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: vars.color['amber-800'],
        },
      },

      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['amber-600'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['amber-100'],
        },
      },
    },
  },

  danger: {
    vars: {
      [bgColorVar]: vars.color['red-600'],
    },
    selectors: {
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: vars.color['red-700'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: vars.color['red-800'],
        },
      },

      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['red-600'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['red-100'],
        },
      },
    },
  },

  success: {
    vars: {
      [bgColorVar]: vars.color['emerald-700'],
    },
    selectors: {
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: vars.color['emerald-800'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: vars.color['emerald-900'],
        },
      },

      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['emerald-700'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['emerald-100'],
        },
      },
    },
  },

  none: {
    vars: {
      [bgColorVar]: vars.color['coolGray-500'],
    },
    selectors: {
      [`${variants.solid}&:hover`]: {
        vars: {
          [bgColorVar]: vars.color['coolGray-600'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [bgColorVar]: vars.color['coolGray-700'],
        },
      },

      [`${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-700'],
        },
      },
      [`.dark ${variants.outlined}&`]: {
        vars: {
          [textColorVar]: vars.color['coolGray-100'],
        },
      },
    },
  },
});

export type Intents = keyof typeof intents;
