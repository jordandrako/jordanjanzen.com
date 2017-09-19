import styled from 'styled-components';

import { layout } from '../theme/variables';

export const MainColumn = styled.div`
  flex: ${layout.mainFlex};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: ${layout.mainPadding};
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.section`max-width: 1000px;`;
