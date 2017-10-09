import React, { Component } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '../theme/variables';
import { sizes, mediaMax } from '../theme/style-utils';
import Navigation from './Navigation';
import Button from './Button';
import SocialButton from './SocialButton';

const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  order: 2;
  flex-grow: 1;
  overflow-y: auto;
  background: ${darken(0.05, colors.black)};
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  .end {
    align-self: center;
    margin: 1em;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5em 1.5em;
      }
    }
  }

  ${mediaMax.tablet`
    box-shadow: 0 -4px ${darken(0.05, colors.black)};
    order: 3;
    z-index: 10;
    max-height: 60px;
    padding-right: 40px;
    overflow: hidden;

    .end {
      background: ${colors.black};
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 0;
      width: 2em;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.open {
        flex-direction: column;
        align-items: flex-end;
        width: auto;
        height: auto;
        padding-top: 1em;
      }

      .overflow-menu {
        width: 10px;
        height: 60px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${colors.lightwhite};
        }
      }
    }
  `};
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderLogout = this.renderLogout.bind(this);

    this.state = {
      open: false,
      activePage: null,
    };
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
    return (
      <Bottom>
        <Navigation
          navType="main-nav"
          uid={this.props.uid}
          onClick={() => this.setState({ open: false })}
        />
        <div className={this.state.open ? 'open end' : 'end'}>
          {this.state.open ? (
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
          ) : null}

          <div
            className="overflow-menu"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </Bottom>
    );
  }
}

export default Footer;
