import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../theme/variables';

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: ${props => (props.navType === 'main-nav' ? 'block' : 'inline-block')};
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${theme.primaryColor};
`;

const Navigation = props => (
  <nav>
    <NavList className={props.navType}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </NavList>
  </nav>
);

Navigation.propTypes = {
  navType: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired,
};

export default Navigation;
