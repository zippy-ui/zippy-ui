import { globalStyle } from '@vanilla-extract/css';
import { darkMode } from './sprinkles.css';
import { vars } from './vars.css';

globalStyle(`.${darkMode}`, {
  backgroundColor: vars.color['gray-900'],
  color: '#fff',
});
