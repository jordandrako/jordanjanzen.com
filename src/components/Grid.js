import styled from 'styled-components';

import { layout } from '../theme/variables';
import { media } from '../theme/style-utils';

export const MainContainer = styled.div`
  flex: ${layout.mainFlex};
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  ${media.tablet`overflow-y: auto`};
`;

export const Main = styled.main`
  padding: ${layout.mainPadding};
  flex-grow: 1;
  overflow-y: auto;
  ${media.tablet`overflow-y: initial`};
  display: flex;
  flex-direction: column;
`;

export const Row = styled.section`
  max-width: 1000px;
`;
