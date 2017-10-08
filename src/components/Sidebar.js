import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors, typography } from '../theme/variables';
import Navigation from './Navigation';
import Button from './Button';

const LeftColumn = styled.aside`
  padding-top: 30px;
  background: ${colors.black};
  color: ${colors.white};
  height: 100%;
  min-width: 260px;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  border-top: 3px solid ${colors.lightblue};
  box-shadow: 2px 0 0 ${colors.darkblack};
`;

const Top = styled.section`
  flex-shrink: 0;
`;

const Bottom = styled.section`
  flex-grow: 1;
  overflow-y: auto;
  background: ${darken(0.05, colors.black)};
`;

const Logo = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  color: ${colors.brightwhite};
  margin: 0;
  text-align: center;
  line-height: 1.2;
  font-size: 2.5rem;

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
  font-size: 1.1rem;
  text-transform: lowercase;
  margin: 15px 0 0;
`;

const renderLogin = (props) => (
  <Button className="login" small type="login" onClick={() => props.login()}>
    Log In with Google
  </Button>
);

const renderLogout = (props) => (
  <Button className="logout" small onClick={props.logout()}>
    Log Out
  </Button>
);

const Sidebar = (props) => (
  <LeftColumn>
    <Top>
      <Logo>
        <span>JORDAN</span>
        <br />
        <span>JANZEN</span>
      </Logo>
      <Tagline>Never Stop Learning</Tagline>
    </Top>
    <Bottom>
      <Navigation navType="main-nav" user={props.user} />
      {!props.user ? renderLogin(props) : renderLogout(props)}
    </Bottom>
  </LeftColumn>
);

Sidebar.propTypes = {
  user: PropTypes.object,
};

Sidebar.defaultProps = {
  user: null,
};

export default Sidebar;
