import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import base from '../base';
import { colors, typography } from '../theme/variables';

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-top: 1px inset ${colors.darkblack};
    border-bottom: 1px inset ${colors.lightblack};
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
  transition: all 0.2s ease-in-out;

  &.active {
    color: ${colors.red};
    font-size: 1.15em;
    padding: 15px;

    &:before {
      content: '==';
      display: inline-block;
      padding-right: 0.2em;
    }
    &:after {
      content: '=>';
      display: inline-block;
      padding-left: 0.2em;
    }
  }
`;
// TODO: Hide todo page unless logged in
const Navigation = props => (
  <nav>
    <NavList className={props.navType}>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </NavList>
  </nav>
);

Navigation.propTypes = {
  navType: PropTypes.string.isRequired,
};

export default Navigation;
