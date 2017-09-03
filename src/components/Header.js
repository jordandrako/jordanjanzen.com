import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

const Header = props => (
  <header>
    <h1>JORDAN JANZEN</h1>
    {props.tagline}
    <Navigation navType="main-nav" />
  </header>
);

Header.propTypes = {
  // tagline: PropTypes.func.isRequired,
};

export default Header;
