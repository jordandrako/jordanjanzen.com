import DefaultPalette from './DefaultPalette';
import DefaultFonts from './fonts';

function _makeSemanticColorsFromPalette(p, isInverted) {
  const toReturn = {
    siteBackground: isInverted ? p.black : p.lightwhite,
    primaryColor: p.lightblue,
    secondaryColor: p.red,
    textColor: isInverted ? p.lightwhite : p.black,
    linkColor: isInverted ? p.lightwhite : p.black,
    buttonColor: p.lightblue,
    buttonText: isInverted ? p.lightwhite : p.black
  };

  return toReturn;
}

let _theme = {
  palette: DefaultPalette,
  semanticColors: _makeSemanticColorsFromPalette(DefaultPalette, false),
  fonts: DefaultFonts,
  isInverted: false
};

export const palette = _theme.palette;

export const semanticColors = _theme.semanticColors;

export const fonts = {
  fontFamily: 'Roboto, sans-serif',
  monospace: 'FiraCode, monospace'
};

export function createTheme(theme) {
  const newPalette = { ...DefaultPalette, ...theme.palette };
  const newSemanticColors = {
    ..._makeSemanticColorsFromPalette(newPalette, !!theme.isInverted),
    ...theme.semanticColors
  };

  return {
    palette: newPalette,
    fonts: {
      ...DefaultFonts,
      ...theme.fonts
    },
    semanticColors: newSemanticColors,
    isInverted: !!theme.isInverted
  };
}

export function getTheme() {
  return _theme;
}

export function loadTheme(theme) {
  _theme = createTheme(theme);
  return _theme;
}
