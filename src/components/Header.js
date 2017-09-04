import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../theme/variables';
import Navigation from './Navigation';

const SiteHeader = styled.header`
  flex: 1;
  height: 100%;
  max-width: 300px;
  padding-top: 30px;
  background: ${colors.black};
  color: ${colors.white};
`;

const Logo = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  text-align: center;
  line-height: 1.2;

  span:first-child {
    letter-spacing: 1px;
  }

  span:last-child {
    letter-spacing: 1.6px;
  }
`;

const Header = props => (
  <SiteHeader>
    <Logo>
      <span>JORDAN</span>
      <br />
      <span>JANZEN</span>
    </Logo>
    {props.tagline}
    <Navigation navType="main-nav" inline />
  </SiteHeader>
);

Header.propTypes = {
  tagline: PropTypes.func.isRequired,
};

export default Header;
