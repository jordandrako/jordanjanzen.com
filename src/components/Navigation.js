import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <ul className={props.navType}>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </li>
  </ul>
);

Header.propTypes = {
  navType: PropTypes.string.isRequired,
};

export default Header;
