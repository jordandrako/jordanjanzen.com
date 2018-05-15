export interface ITheme {
  fonts: IFonts;
  isInverted: boolean;
  palette: IPalette;
  semanticColors: ISemanticColors;
}

export interface IPartialTheme {
  fonts?: Partial<IFonts>;
  isInverted?: boolean;
  palette?: Partial<IPalette>;
  semanticColors?: Partial<ISemanticColors>;
}

export interface IPaletteColors {
  black: string;
  blue: string;
  cyan: string;
  darkblack: string;
  green: string;
  grey: string;
  lightblack: string;
  lightblue: string;
  lightwhite: string;
  lightyellow: string;
  magenta: string;
  red: string;
  white: string;
  yellow: string;
}

export interface IPalette extends IPaletteColors {
  themeDark: string;
  themeDarker: string;
  themePrimary: string;
  themeSecondary: string;
  themeTertiary: string;
  themeLight: string;
  themeLighter: string;
}

export interface ISemanticColors {
  buttonBackground: string;
  buttonText: string;
  imageBorder: string;
  linkColor: string;
  siteBackground: string;
  textColor: string;
}

export interface IFonts {
  fontFamily: string;
  monospace: string;
}
