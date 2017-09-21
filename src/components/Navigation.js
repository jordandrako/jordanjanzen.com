import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors, typography } from '../theme/variables';

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background: ${colors.black};
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${colors.white};
  text-align: center;
  padding: 10px 15px;
  width: 100%;

  font-family: ${typography.monospace};
  text-transform: lowercase;
  transition: all 0.3s ease-in-out;

  span {
    background: ${colors.black};
    position: relative;
    z-index: 2;
  }

  &:before,
  &:after {
    display: inline-block;
    color: ${colors.red};
    opacity: 0;
    transition: all 0.5s ease-in-out;
    z-index: 1;
  }

  &:before {
    content: '==';
    transform: translateX(100%);
  }
  &:after {
    content: '=>';
    transform: translateX(-100%);
  }

  &.active {
    color: ${colors.red};
    font-size: 1.15em;
    padding: 15px;

    &:before,
    &:after {
      transform: translateX(0);
      opacity: 1;
    }
  }
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
      <li>
        <Link to="/todo">
          <span>Todo</span>
        </Link>
      </li>
    </NavList>
  </nav>
);

Navigation.propTypes = {
  navType: PropTypes.string.isRequired,
};

export default Navigation;
