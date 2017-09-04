import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import { colors, typography } from '../theme/variables';
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
  color: ${colors.brightwhite};
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

const Tagline = styled.h3`
  font-family: ${typography.monospace};
  color: ${colors.black};
  background: ${colors.lightblue};
  padding: 4px 0;
  text-align: center;
  width: 100%;
  font-size: 0.8em;
  text-transform: lowercase;
`;

const Header = () => (
  <SiteHeader>
    <Logo>
      <span>JORDAN</span>
      <br />
      <span>JANZEN</span>
    </Logo>
    <Tagline>
      Never&nbsp;
      <FontAwesome name="caret-right" />
      &nbsp;Stop&nbsp;
      <FontAwesome name="caret-right" />
      &nbsp;Learning&nbsp;
      <FontAwesome name="caret-right" />
    </Tagline>
    <Navigation navType="main-nav" />
  </SiteHeader>
);

Header.propTypes = {
  tagline: PropTypes.func.isRequired,
};

export default Header;
