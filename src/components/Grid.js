import styled from 'styled-components';

import { layout } from '../theme/variables';
import { mediaMax } from '../theme/style-utils';

export const MainContainer = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  ${mediaMax.tablet`overflow-y: auto`};
`;

export const Main = styled.main`
  padding: 1em;
  flex-grow: 1;
  overflow-y: auto;
  ${mediaMax.tablet`overflow-y: initial`};
  display: flex;
  flex-direction: column;
`;

export const Row = styled.section`
  max-width: 1000px;
`;
