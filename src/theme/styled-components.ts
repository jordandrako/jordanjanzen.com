import * as styledComponents from "styled-components";
import {
  StyledFunction,
  ThemedStyledComponentsModule
} from "styled-components";

import { ITheme } from "./theme.types";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, StyledFunction, ThemeProvider };
export default styled;
