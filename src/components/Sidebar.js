import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, typography } from '../theme/variables';
import { mediaMax } from '../theme/style-utils';
import Footer from './Footer';
import Button from './Button';

import JJMark from '../theme/images/JJMark.svg';

const LeftColumn = styled.aside`
  background: ${colors.black};
  color: ${colors.white};
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  border-top: 3px solid ${colors.lightblue};
  box-shadow: 2px 0 0 ${colors.darkblack};
  ${mediaMax.tablet`
    flex: none;
    height: auto;
  `};
`;

const Top = styled.section`
  flex-shrink: 0;
  ${mediaMax.tablet`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `};
`;

const Logo = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  color: ${colors.brightwhite};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  padding: 1em 0;
  margin: 0;
  text-align: center;
  line-height: 1.2;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: '';
    display: block;
    background: url(${JJMark}) no-repeat;
    background-position: center;
    background-size: 4em;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  ${mediaMax.tablet`
    width: 100%;
    padding: .2em 0;
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: center;

    &:after {
      background-position: 1rem;
      background-size: 1.5em;
      opacity: 1;
    }
  `};

  div {
    padding: 0 1em;
    z-index: 1;
    ${mediaMax.tablet`padding: 0 .2em`};
  }

  div:first-child {
    letter-spacing: 1px;
  }

  div:last-child {
    letter-spacing: 1.6px;
  }
`;

const Tagline = styled.h3`
  font-family: ${typography.monospace};
  color: ${colors.black};
  background: ${colors.lightblue};
  padding: 4px 2em;
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
  text-transform: lowercase;
  margin: 0;
  white-space: nowrap;
  ${mediaMax.tablet`display: none`};
`;

const LogoLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderLogout = this.renderLogout.bind(this);

    this.state = {
      activePage: null,
    };
  }

  renderLogin() {
    return (
      <Button
        className="log-button login"
        small
        type="login"
        onClick={() => this.props.login()}
      >
        Log In
      </Button>
    );
  }

  renderLogout() {
    return (
      <Button
        className="log-button logout"
        small
        type="login"
        onClick={() => this.props.logout()}
      >
        Log Out
      </Button>
    );
  }

  render() {
    return (
      <LeftColumn>
        <Top>
          <LogoLink to="/">
            <Logo>
              <div>JORDAN</div>
              <div>JANZEN</div>
            </Logo>
          </LogoLink>
          <Tagline>Never Stop Learning</Tagline>
        </Top>
        {!this.props.isMobile ? (
          <Footer
            uid={this.props.uid}
            login={this.props.login}
            logout={this.props.logout}
          />
        ) : null}
      </LeftColumn>
    );
  }
}

Sidebar.propTypes = {
  uid: PropTypes.string,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  uid: null,
};

export default Sidebar;
