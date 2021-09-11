import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rgbVar, vars } from '../../styles/vars.css';
import { root as buttonGroupRoot } from '../ButtonGroup/ButtonGroup.css';

const bgColorVar = createVar();
const textColorVar = createVar();
const borderColorVar = createVar();
const focusBorderColorVar = createVar();
const bgOpacityVar = createVar();

export const root = recipe({
  base: {
    padding: '.4rem .8rem',
    display: 'inline-flex',
    lineHeight: 1.5,
    fontSize: '16px',
    backgroundColor: rgbVar(bgColorVar, bgOpacityVar),
    borderRadius: '0.2em',
    color: rgbVar(textColorVar),
    border: `1px solid ${rgbVar(borderColorVar)}`,
    alignItems: 'center',

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
  },

  defaultVariants: {
    size: 'default',
    variant: 'solid',
    intent: 'none',
  },

  variants: {
    size: {
      small: {
        fontSize: '.75rem',
      },
      default: {
        fontSize: '1rem',
      },
      large: {
        fontSize: '1.25rem',
      },
    },

    variant: {
      solid: style({
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '1',
          [borderColorVar]: bgColorVar,
        },
      }),
      outlined: style({
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
      }),
    },

    intent: {
      info: style({
        vars: {
          [bgColorVar]: vars.color['blue-600'],
        },
      }),

      warning: style({
        vars: {
          [bgColorVar]: vars.color['amber-600'],
        },
      }),

      danger: style({
        vars: {
          [bgColorVar]: vars.color['red-600'],
        },
      }),

      success: style({
        vars: {
          [bgColorVar]: vars.color['emerald-700'],
        },
      }),

      none: style({
        vars: {
          [bgColorVar]: vars.color['coolGray-500'],
        },
      }),
    },
  },

  compoundVariants: [
    {
      variants: {
        intent: 'none',
        variant: 'solid',
      },
      style: {
        ':hover': {
          vars: {
            [bgColorVar]: vars.color['coolGray-600'],
          },
        },
        ':active': {
          vars: {
            [bgColorVar]: vars.color['coolGray-700'],
          },
        },
      },
    },
    {
      variants: {
        intent: 'none',
        variant: 'outlined',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['coolGray-700'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['coolGray-100'],
            },
          },
        },
      },
    },

    {
      variants: {
        intent: 'success',
        variant: 'solid',
      },
      style: {
        ':hover': {
          vars: {
            [bgColorVar]: vars.color['emerald-800'],
          },
        },
        ':active': {
          vars: {
            [bgColorVar]: vars.color['emerald-900'],
          },
        },
      },
    },
    {
      variants: {
        intent: 'success',
        variant: 'outlined',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['emerald-700'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['emerald-100'],
            },
          },
        },
      },
    },

    {
      variants: {
        intent: 'danger',
        variant: 'solid',
      },
      style: {
        ':hover': {
          vars: {
            [bgColorVar]: vars.color['red-700'],
          },
        },
        ':active': {
          vars: {
            [bgColorVar]: vars.color['red-800'],
          },
        },
      },
    },
    {
      variants: {
        intent: 'danger',
        variant: 'outlined',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['red-600'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['red-100'],
            },
          },
        },
      },
    },

    {
      variants: {
        intent: 'warning',
        variant: 'solid',
      },
      style: {
        ':hover': {
          vars: {
            [bgColorVar]: vars.color['amber-700'],
          },
        },
        ':active': {
          vars: {
            [bgColorVar]: vars.color['amber-800'],
          },
        },
      },
    },
    {
      variants: {
        intent: 'warning',
        variant: 'outlined',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['amber-600'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['amber-100'],
            },
          },
        },
      },
    },

    {
      variants: {
        intent: 'info',
        variant: 'solid',
      },
      style: {
        ':hover': {
          vars: {
            [bgColorVar]: vars.color['blue-700'],
          },
        },
        ':active': {
          vars: {
            [bgColorVar]: vars.color['blue-800'],
          },
        },
      },
    },
    {
      variants: {
        intent: 'info',
        variant: 'outlined',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['blue-700'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['blue-100'],
            },
          },
        },
      },
    },
  ],
});

export type Variants = Parameters<typeof root>[0];

export const text = style({});

export const icon = style({});

export const iconStart = style({
  margin: '0 .4rem 0 -.2rem',
});

export const iconEnd = style({
  margin: '0 -.2rem 0 .4rem',
});
