import { Link } from 'react-router-dom';
import {
  fonts,
  mediaMax,
  palette,
  semanticColors,
  styled,
} from '../../../../styling';
import { Row } from '../../../containers/Grid/grid';

export const ClickOutside = styled(Link)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  width: 100%;
  z-index: 999;
  border-bottom: 0;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
`;

export const Single = styled.div`
  width: 84vw;
  max-width: 760px;
  height: 84vh;
  margin: 30px;
  background: ${semanticColors.siteBackground};
  box-shadow: 0 -3px 0 ${semanticColors.primaryColor}, 0 0 9px #000;
  z-index: 1000;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${mediaMax.tablet`
    width: 90vw;
    max-width: 420px;
    height: 90vh;
  `};
`;

export const Frame = styled.div`
  width: 100%;
  padding: 0.5em;
  background: ${palette.black};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  &:first-child {
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
  }

  &:last-child {
    box-shadow: 0 -1px 3px 1px rgba(0, 0, 0, 0.3);
    margin-top: auto;
  }

  a {
    border-bottom: none;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.monospace};
  color: ${palette.lightwhite};
  font-size: 1.15rem;
  margin: 0;
  line-height: 1;
`;

export const Content = styled(Row)`
  overflow-y: scroll;
  margin: 0;
  padding: 1em;
  flex-grow: 1;
  max-width: none;
`;
