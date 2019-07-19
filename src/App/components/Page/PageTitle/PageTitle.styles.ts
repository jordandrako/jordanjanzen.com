import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';
import { fonts, palette, screenSizes, styled } from '../../../../styling';

export const titleBar = styled.header`
  background: ${darken(0.05, palette.black)};
  border-bottom: 2px solid ${palette.darkblack};
  width: 100%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
`;

export const titleList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
`;

export const titleItem = styled.li`
  align-items: center;
  background: ${lighten(0.05, palette.black)};
  color: ${palette.white};
  box-shadow: 2px 0 0 ${palette.darkblack};
  border-left: 1px solid ${palette.darkblack};
  border-right: 1px solid ${palette.darkblack};
  display: none;

  @media screen and (min-width: ${screenSizes.tablet}) {
    display: inline-flex;
  }
`;

export const titleText = styled.h1`
  display: inline-block;
  padding: 10px 1em;
  margin: 0;
  font-family: ${fonts.monospace};
  font-size: 1rem;
  font-weight: 300;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);
`;

export const currentItem = styled(titleItem)`
  color: ${palette.lightwhite};
  padding: 0 15px;
  border-top: 3px solid ${palette.lightblue};
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);

  @media (max-width: ${screenSizes.tablet}) {
    display: inline-flex;
    background: transparent;
    border: none;
    width: 100%;
    padding: 6px 8px;
    justify-content: space-between;
  }
`;

export const currentText = styled(titleText)`
  font-size: 1.15rem;
  @media (max-width: ${screenSizes.tablet}) {
    font-size: 1rem;
  }
`;

export const titleIcon = styled.i`
  color: ${palette.yellow};
`;

export const devItem = styled(titleItem)`
  margin-left: auto;
  background: transparent;
  padding: 0 10px;
`;

export const breadCrumb = styled(Link)`
  color: ${palette.white};
  text-shadow: none;
  border-bottom: 0;
`;
