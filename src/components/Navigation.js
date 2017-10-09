import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors, typography } from '../theme/variables';
import { mediaMax, mediaMin } from '../theme/style-utils';

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${mediaMax.tablet`
    display: flex;
    justify-content: space-evenly
  `} li {
    ${mediaMax.tablet`
      display: inline-block;
    `};

    ${mediaMin.desktop`
      background: ${colors.black};
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    `};
  }
`;

const Link = styled(NavLink)`
  display: block;
  color: ${colors.white};
  font-family: Roboto, ${typography.monospace};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding: 0.6em 1em;
  border-top: 4px solid ${darken(0.05, colors.black)};
  text-transform: uppercase;
  font-size: 1rem;

  &.active {
    border-color: ${colors.lightblue};
  }

  ${mediaMin.desktop`
    text-transform: lowercase;
    text-align: center;
    padding: 10px 15px;
    width: 100%;
    border: none;
    font-size: 1.15em;
    font-family: ${typography.monospace};

    span {
      position: relative;
      z-index: 2;
      background: ${colors.black};
    }

    &:before,
    &:after {
      display: inline-block;
      color: ${colors.red};
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
      color: ${colors.red};

      &:before,
      &:after {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `};
`;
// TODO: Hide todo page unless logged in
const Navigation = (props) => (
  <nav>
    <NavList className={props.navType}>
      <li>
        <Link exact to="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link to="/portfolio">
          <span>Portfolio</span>
        </Link>
      </li>
      {props.uid ? (
        <li>
          <Link to="/todo">
            <span>Todo</span>
          </Link>
        </li>
      ) : null}
    </NavList>
  </nav>
);

Navigation.propTypes = {
  navType: PropTypes.string.isRequired,
  uid: PropTypes.string,
};

Navigation.defaultProps = {
  uid: null,
};

export default Navigation;
