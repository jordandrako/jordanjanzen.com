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

export interface IPalette {
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

export interface ISemanticColors {
  buttonColor: string;
  buttonText: string;
  linkColor: string;
  primaryColor: string;
  secondaryColor: string;
  siteBackground: string;
  textColor: string;
}

export interface IFonts {
  fontFamily: string;
  monospace: string;
}
