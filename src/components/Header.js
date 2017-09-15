import React from 'react';
import styled from 'styled-components';

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
    <Tagline>Never Stop Learning</Tagline>
    <Navigation navType="main-nav" />
  </SiteHeader>
);

export default Header;
