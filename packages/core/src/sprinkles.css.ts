import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

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

export const atoms = createAtomsFn(colorAtoms);

export type Atoms = Parameters<typeof atoms>[0];
