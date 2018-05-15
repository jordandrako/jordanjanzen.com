import DefaultPalette from './DefaultPalette';
import { DefaultFonts } from './fonts';
import {
  IPalette,
  IPartialTheme,
  ISemanticColors,
  ITheme,
} from './theme.types';

function _makeSemanticColorsFromPalette(p: IPalette, isInverted: boolean) {
  const toReturn: ISemanticColors = {
    buttonBackground: p.themePrimary,
    buttonText: isInverted ? p.lightwhite : p.black,
    imageBorder: isInverted ? p.lightwhite : p.black,
    linkColor: isInverted ? p.lightwhite : p.black,
    siteBackground: isInverted ? p.black : p.lightwhite,
    textColor: isInverted ? p.lightwhite : p.black,
  };

  return toReturn;
}

let _theme: ITheme = {
  fonts: DefaultFonts,
  isInverted: false,
  palette: DefaultPalette,
  semanticColors: _makeSemanticColorsFromPalette(DefaultPalette, false),
};

export const palette = _theme.palette;
export const semanticColors = _theme.semanticColors;

export const fonts = {
  fontFamily: 'Roboto, sans-serif',
  monospace: 'FiraCode, monospace',
};

export function createTheme(theme: IPartialTheme) {
  const newPalette = { ...DefaultPalette, ...theme.palette };
  const newSemanticColors = {
    ..._makeSemanticColorsFromPalette(newPalette, !!theme.isInverted),
    ...theme.semanticColors,
  };

  return {
    fonts: {
      ...DefaultFonts,
      ...theme.fonts,
    },
    isInverted: !!theme.isInverted,
    palette: newPalette,
    semanticColors: newSemanticColors,
  };
}

export function getTheme() {
  return _theme;
}

export function loadTheme(theme: IPartialTheme) {
  _theme = createTheme(theme);
  return _theme;
}
