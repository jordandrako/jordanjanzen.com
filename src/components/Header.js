import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

const Header = props => (
  <header>
    <h1>Jordan Janzen</h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
    <Navigation className="main-nav" />
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
