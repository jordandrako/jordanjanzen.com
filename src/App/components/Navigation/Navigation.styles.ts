import { darken } from 'polished';
import { NavLink } from 'react-router-dom';
import { fonts, palette, screenSizes, styled } from 'styling';

export const navList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${screenSizes.tablet}) {
    display: flex;
    justify-content: space-around;

    li {
      display: inline-block;
    }
  }

  @media (min-width: ${screenSizes.tablet}) {
    li {
      background: ${palette.black};
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

export const link = styled(NavLink)`
  display: block;
  color: ${palette.white};
  font-family: Roboto, ${fonts.fontFamily}, sans-serif;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding: 1em 0.5em;
  border-top: 4px solid ${darken(0.05, palette.black)};
  border-bottom: none;
  text-transform: uppercase;
  font-size: 0.7rem;
  opacity: 0.8;

  i.fa {
    padding-right: 0.5em;
    font-size: 1.15rem;
    color: ${palette.blue};
  }

  &.active {
    color: ${palette.lightwhite};
    border-color: ${palette.lightblue};
    opacity: 1;

    i.fa {
      color: ${palette.lightblue};
    }
  }

  @media (min-width: ${screenSizes.tablet}) {
    text-transform: lowercase;
    text-align: center;
    padding: 10px 15px;
    width: 100%;
    border: none;
    font-size: 1.15rem;
    font-family: ${fonts.monospace};
    opacity: 1;

    i.fa {
      display: none;
    }

    span {
      position: relative;
      z-index: 2;
      background: ${palette.black};
    }

    &:before,
    &:after {
      display: inline-block;
      color: ${palette.red};
      opacity: 0;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }

    &:before {
      content: "==";
      padding-right: 0.25em;
      transform: translateX(100%);
    }
    &:after {
      content: "=>";
      padding-left: 0.25em;
      transform: translateX(-100%);
    }

    &.active {
      color: ${palette.red};

      &:before,
      &:after {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;
