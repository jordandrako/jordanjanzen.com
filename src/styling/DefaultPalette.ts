import { IPalette, IPaletteColors } from './theme.types';

const colors: IPaletteColors = {
  black: '#282c34',
  blue: '#1167ae',
  cyan: '#56b6c2',
  darkblack: '#111215',
  green: '#98c379',
  grey: '#848d9f',
  lightblack: '#848d9f',
  lightblue: '#61afef',
  lightwhite: '#E1E9F0',
  lightyellow: '#F2C249',
  magenta: '#c678dd',
  red: '#e06c75',
  white: '#D3DAE0',
  yellow: '#d19a66',
};

const DefaultPalette: IPalette = {
  ...colors,
  themeDark: colors.black,
  themeDarker: colors.darkblack,
  themeLight: colors.white,
  themeLighter: colors.lightwhite,
  themePrimary: colors.lightblue,
  themeSecondary: colors.red,
  themeTertiary: colors.blue,
};

export default DefaultPalette;
