import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { vars } from '../../vars.css';

const bgColorVar = createVar();

export const root = style({
  padding: '.375rem .75rem',
  display: 'inline-flex',
  lineHeight: 1.5,
  fontSize: '16px',
  backgroundColor: fallbackVar(bgColorVar, 'none'),
  borderRadius: '0.2em',
});

const borderColorVar = createVar();

export const variants = styleVariants({
  solid: {},
  outlined: {
    boxShadow: `inset 0 0 0 1px ${borderColorVar}`,
  },
  subtle: {},
});

export const text = style({});

export const intents = styleVariants({
  success: {
    selectors: {
      [`${variants.solid}&`]: {
        color: vars.color.white,
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-700'],
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-800'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-900'],
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .2rem ${vars.color['emerald-200']}`,
      },

      [`${variants.outlined}&`]: {
        color: vars.color['emerald-700'],
        vars: {
          [`${borderColorVar}`]: vars.color['emerald-700'],
        },
      },
      [`${variants.outlined}&:hover`]: {
        color: vars.color['emerald-800'],
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-100'],
        },
      },
      [`${variants.outlined}&:active`]: {
        color: vars.color['emerald-800'],
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-200'],
        },
      },

      [`${variants.subtle}&`]: {
        color: vars.color['emerald-700'],
      },
      [`${variants.subtle}&:hover`]: {
        color: vars.color['emerald-800'],
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-100'],
        },
      },
      [`${variants.subtle}&:active`]: {
        color: vars.color['emerald-800'],
        vars: {
          [`${bgColorVar}`]: vars.color['emerald-200'],
        },
      },
    },
  },

  none: {
    selectors: {
      [`${variants.solid}&`]: {
        color: vars.color.white,
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-500'],
        },
      },
      [`${variants.solid}&:hover`]: {
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-600'],
        },
      },
      [`${variants.solid}&:active`]: {
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-700'],
        },
      },
      [`${variants.solid}&:focus`]: {
        boxShadow: `0 0 0 .2rem ${vars.color['coolGray-300']}`,
      },

      [`${variants.outlined}&`]: {
        color: vars.color['coolGray-700'],
        vars: {
          [`${borderColorVar}`]: vars.color['coolGray-500'],
        },
      },
      [`${variants.outlined}&:hover`]: {
        color: vars.color['coolGray-800'],
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-200'],
        },
      },
      [`${variants.outlined}&:active`]: {
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-300'],
        },
      },

      [`${variants.subtle}&`]: {
        color: vars.color['coolGray-700'],
      },
      [`${variants.subtle}&:hover`]: {
        color: vars.color['coolGray-800'],
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-200'],
        },
      },
      [`${variants.subtle}&:active`]: {
        vars: {
          [`${bgColorVar}`]: vars.color['coolGray-300'],
        },
      },
    },
  },
});
