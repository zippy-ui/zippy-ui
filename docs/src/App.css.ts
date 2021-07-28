import { style } from '@vanilla-extract/css';

export const cos = style({
  display: 'flex',
  border: '0',
  background: '#fff',
  fontFamily: 'sans-serif',
  padding: '10px 14px',
  margin: '300px 0 300px 300px',
  boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, .2), 0 1px 2px rgba(0, 0, 0, .1)',
  fontSize: '14px',
  borderRadius: '4px',
  lineHeight: 1,

  ':active': {
    boxShadow:
      'inset 0 0 0 1px rgba(0, 0, 0, .2), inset 0 1px 2px rgba(0, 0, 0, .2)',
    background: '#d8e1e8',
  },
});

export const a = style({
  opacity: 0.1,
});
