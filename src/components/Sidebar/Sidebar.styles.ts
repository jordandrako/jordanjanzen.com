import { adjustHue } from 'polished';
import { Link } from 'react-router-dom';
import {
  fonts,
  mediaMax,
  palette,
  semanticColors,
  styled,
} from '../../styling/index';

export const LeftColumn = styled.aside`
  background: ${palette.black};
  color: ${palette.white};
  height: 100%;
  min-width: 280px;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  border-top: 3px solid ${palette.lightblue};
  box-shadow: 2px 0 0 ${palette.darkblack};
  ${mediaMax.tablet`
    flex: none;
    height: auto;
  `};
`;

export const Top = styled.section`
  flex-shrink: 0;
  ${mediaMax.tablet`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `};
`;

export const Logo = styled.h2`
  text-transform: uppercase;
  font-family: ${fonts.monospace};
  font-weight: 700;
  color: ${palette.lightwhite};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  padding: 1em 0;
  margin: 0;
  text-align: center;
  line-height: 1.2;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: '';
    display: block;
    background: url('../../images/JJMark.svg') no-repeat;
    background-position: center;
    background-size: 4em;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  ${mediaMax.tablet`
    width: 100%;
    padding: .2em 0;
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: center;

    &:after {
      background-position: 1rem;
      background-size: 1.5em;
      opacity: 1;
    }
  `};

  span {
    letter-spacing: 0.1em;
    padding: 0 1em;
    z-index: 1;
    ${mediaMax.tablet`padding: 0 .2em`};
  }
`;

export const Tagline = styled.h3`
  font-family: ${fonts.monospace};
  color: ${palette.black};
  background: ${palette.lightblue};
  background: linear-gradient(
    135deg,
    ${adjustHue(-20, semanticColors.primaryColor)} 0,
    ${semanticColors.primaryColor} 100%
  );
  padding: 4px 1em;
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
  letter-spacing: 0;
  text-transform: lowercase;
  margin: 0;
  white-space: nowrap;
  ${mediaMax.tablet`display: none`};
`;

export const LogoLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
  border-bottom: none;
`;
