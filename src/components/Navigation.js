import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

import { palette, fonts } from '../theme/variables';
import { mediaMax, mediaMin } from '../theme/style-utils';

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${mediaMax.tablet`
    display: flex;
    justify-content: space-around;
  `} li {
    ${mediaMax.tablet`
      display: inline-block;
    `};

    ${mediaMin.tablet`
      background: ${palette.black};
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    `};
  }
`;

const Link = styled(NavLink) `
  display: block;
  color: ${palette.white};
  font-family: Roboto, ${fonts.monospace};
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

  ${mediaMin.tablet`
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
      content: '==';
      padding-right: 0.25em;
      transform: translateX(100%);
    }
    &:after {
      content: '=>';
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
  `};
`;

const Navigation = (props) => (
  <nav>
    <NavList>
      <li>
        <Link exact to="/">
          <i className="fa fa-usd" aria-hidden="true" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <i className="fa fa-info" aria-hidden="true" />
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link to="/portfolio">
          <i className="fa fa-code" aria-hidden="true" />
          <span>Portfolio</span>
        </Link>
      </li>
      {props.uid ? (
        <li>
          <Link to="/todo">
            <i className="fa fa-check-square-o" aria-hidden="true" />
            <span>Todo</span>
          </Link>
        </li>
      ) : null}
    </NavList>
  </nav>
);

Navigation.propTypes = {
  uid: PropTypes.string,
};

Navigation.defaultProps = {
  uid: null,
};

export default Navigation;
