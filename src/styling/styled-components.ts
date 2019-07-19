import * as styledComponents from 'styled-components';
// tslint:disable-next-line no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';

import { ITheme } from './theme.types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, styled, ThemeProvider };
export default styled;
