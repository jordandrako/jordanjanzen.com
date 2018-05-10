import * as styledComponents from 'styled-components';
// tslint:disable-next-line no-duplicate-imports
import {
  StyledFunction,
  ThemedStyledComponentsModule,
} from 'styled-components';

import { ITheme } from './theme.types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, styled, StyledFunction, ThemeProvider };
export default styled;
