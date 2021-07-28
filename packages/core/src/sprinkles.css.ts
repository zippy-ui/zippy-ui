import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

const space = {
  '0': '0px',
  px: '1px',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
};

const spaceAtoms = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    paddingTop: space,
    paddingBottom: space,
    paddingRight: space,
    paddingLeft: space,
    marginTop: space,
    marginBottom: space,
    marginRight: space,
    marginLeft: space,
  },
  shorthands: {
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    pt: ['paddingTop'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
  },
});

const colorAtoms = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    background: vars.color,
    color: vars.color,
    borderColor: vars.color,
  },
  shorthands: {
    bg: ['background'],
  },
});

export const atoms = createAtomsFn(colorAtoms, spaceAtoms);

export type Atoms = Parameters<typeof atoms>[0];
