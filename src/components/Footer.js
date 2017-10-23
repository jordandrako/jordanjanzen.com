import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { Transition } from 'react-transition-group';

import { colors } from '../theme/variables';
import { mediaMin, mediaMax } from '../theme/style-utils';
import Navigation from './Navigation';
import Button from './Button';
import SocialButton from './SocialButton';

const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background: ${darken(0.05, colors.black)};
  justify-content: space-between;

  ${mediaMax.tablet`
    box-shadow: 0 -4px ${darken(0.05, colors.black)};
    max-height: 50px;
    padding-right: 40px;
    overflow: hidden;
    z-index: 10;
  `};
`;

const OverflowButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 50px;
  padding: 0.75em 1em;
  display: flex;
  background: transparent;
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  outline: none;

  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.lightwhite};
  }
`;

const OverflowOverlay = styled.div`
  display: none;

  ${mediaMax.tablet`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    width: 100%;
  `};
`;

const OverflowMenu = styled.div`
  background: ${colors.black};
  position: absolute;
  bottom: 54px;
  right: -60px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 1em;

    li {
      margin-bottom: 0.5em;
    }
  }

  &.entering,
  &.exited {
    right: -60px;
    opacity: 0;
  }

  &.entered,
  &.exiting {
    right: 0;
    opacity: 1;
  }

  ${mediaMin.tablet`
    position: relative;
    bottom: auto;
    padding: 0;
    background: transparent;
  `};
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.toggleOverflow = this.toggleOverflow.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderLogout = this.renderLogout.bind(this);

    this.state = {
      overflowOpen: !this.props.isMobile,
      activePage: null,
    };
  }

  toggleOverflow() {
    this.setState({ overflowOpen: !this.state.overflowOpen });
  }

  renderLogin() {
    return (
      <Button
        className="log-button login"
        small
        type="login"
        wide
        onClick={() => this.props.login()}
      >
        Log In with Google
      </Button>
    );
  }

  renderLogout() {
    return (
      <Button
        className="log-button logout"
        small
        type="login"
        wide
        onClick={() => this.props.logout()}
      >
        Log Out
      </Button>
    );
  }

  render() {
    const loginButton = !this.props.uid
      ? this.renderLogin()
      : this.renderLogout();
    const { overflowOpen } = this.state;

    return (
      <Bottom>
        <Navigation uid={this.props.uid} />
        {overflowOpen ? (
          <OverflowOverlay onClick={() => this.toggleOverflow()} />
        ) : null}
        <Transition timeout={200} in={overflowOpen} mountOnEnter unmountOnExit>
          {(status) => (
            <OverflowMenu className={status}>
              <ul>
                <li>
                  <SocialButton social="github" wide />
                </li>
                <li>
                  <SocialButton social="twitter" wide />
                </li>
                <li>
                  <SocialButton social="linkedin" wide />
                </li>
                <li>{loginButton}</li>
              </ul>
            </OverflowMenu>
          )}
        </Transition>
        {this.props.isMobile ? (
          <OverflowButton onClick={() => this.toggleOverflow()}>
            <span />
            <span />
            <span />
          </OverflowButton>
        ) : null}
      </Bottom>
    );
  }
}

Footer.propTypes = {
  uid: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  uid: null,
};

export default Footer;
