import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rgbVar, vars } from '../../styles/vars.css';

const colorVar = createVar();
const textColorVar = createVar();

export const root = recipe({
  base: {
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
  },

  defaultVariants: {
    size: 'default',
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

    intent: {
      info: style({
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
      }),

      warning: style({
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
      }),

      danger: style({
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
      }),

      success: style({
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
      }),

      none: style({
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
      }),
    },
  },
});

export type Variants = Parameters<typeof root>[0];

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
  fontSize: '1.2em',
  lineHeight: 1,
});

export const text = style({});
