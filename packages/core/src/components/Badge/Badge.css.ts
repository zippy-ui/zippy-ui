import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rgbVar, vars } from '../../styles/vars.css';

const textColorVar = createVar();
const bgColorVar = createVar();
const bgOpacityVar = createVar();

export const root = recipe({
  base: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    borderRadius: '.25rem',
    lineHeight: 1,
    padding: '.45em .65em',
    fontWeight: 700,
    border: 0,
    color: rgbVar(textColorVar),
    backgroundColor: rgbVar(bgColorVar, bgOpacityVar),
  },

  defaultVariants: {
    size: 'default',
    intent: 'success',
    variant: 'solid',
  },

  variants: {
    size: {
      small: {
        fontSize: '.5em',
      },
      default: {
        fontSize: '.75em',
      },
      large: {
        fontSize: '1em',
      },
    },

    variant: {
      solid: style({
        vars: {
          [textColorVar]: vars.color.white,
          [bgOpacityVar]: '1',
        },
      }),
      outlined: style({
        boxShadow: `inset 0 0 0 1px ${rgbVar(bgColorVar)}`,
        vars: {
          [bgOpacityVar]: '0',
        },
      }),
      subtle: style({
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
      }),
    },

    intent: {
      success: style({
        vars: {
          [bgColorVar]: vars.color['emerald-700'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['emerald-100'],
            },
          },
        },
      }),

      danger: style({
        vars: {
          [bgColorVar]: vars.color['red-600'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['red-100'],
            },
          },
        },
      }),

      warning: style({
        vars: {
          [bgColorVar]: vars.color['amber-600'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['amber-100'],
            },
          },
        },
      }),

      info: style({
        vars: {
          [bgColorVar]: vars.color['blue-600'],
        },
        selectors: {
          [`.dark &`]: {
            vars: {
              [textColorVar]: vars.color['blue-100'],
            },
          },
        },
      }),

      none: style({
        vars: {
          [bgColorVar]: vars.color['coolGray-500'],
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

  compoundVariants: [
    {
      variants: {
        variant: 'outlined',
        intent: 'success',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['emerald-800'],
        },
      },
    },

    {
      variants: {
        variant: 'subtle',
        intent: 'success',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['emerald-900'],
        },
      },
    },

    {
      variants: {
        variant: 'outlined',
        intent: 'danger',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['red-700'],
        },
      },
    },
    {
      variants: {
        variant: 'subtle',
        intent: 'danger',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['red-900'],
        },
      },
    },

    {
      variants: {
        variant: 'outlined',
        intent: 'warning',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['amber-700'],
        },
      },
    },
    {
      variants: {
        variant: 'subtle',
        intent: 'warning',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['amber-900'],
        },
      },
    },

    {
      variants: {
        variant: 'outlined',
        intent: 'info',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['blue-700'],
        },
      },
    },
    {
      variants: {
        variant: 'subtle',
        intent: 'info',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['blue-900'],
        },
      },
    },

    {
      variants: {
        variant: 'outlined',
        intent: 'none',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['coolGray-600'],
        },
      },
    },
    {
      variants: {
        variant: 'subtle',
        intent: 'none',
      },
      style: {
        vars: {
          [textColorVar]: vars.color['coolGray-900'],
        },
      },
    },
  ],
});

export type Variants = Parameters<typeof root>[0];
