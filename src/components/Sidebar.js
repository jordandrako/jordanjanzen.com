import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors, typography } from '../theme/variables';
import { sizes, mediaMax } from '../theme/style-utils';
import Footer from './Footer';
import Navigation from './Navigation';
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

// const Bottom = styled.section`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   overflow-y: auto;
//   background: ${darken(0.05, colors.black)};
//   justify-content: space-between;
//   transition: all 0.3s ease-in-out;

//   .end {
//     align-self: center;
//     margin: 1em;
//   }

//   ${mediaMax.tablet`
//     box-shadow: 0 -4px ${darken(0.05, colors.black)};
//     position: fixed;
//     bottom: 0;
//     z-index: 10;
//     width: 100%;
//   `};
// `;

const Logo = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  color: ${colors.brightwhite};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  margin: 1em 0;
  text-align: center;
  line-height: 1.2;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    position: absolute;
    max-width: 6em;
    max-height: 3.5em;
    margin: -0.5em 1em;
    z-index: 0;
    opacity: 0.25;
  }

  ${mediaMax.tablet`
    width: 100%;
    margin: .2em 0;
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: center;

    img {
      top: 2px;
      left: 16px;
      max-width: 2em;
      max-height: 1em;
      margin: 0;
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
          <Logo>
            <img src={JJMark} alt="Jordan Janzen Logo mark" />
            <div>JORDAN</div>
            <div>JANZEN</div>
          </Logo>
          <Tagline>Never Stop Learning</Tagline>
        </Top>
        {!this.props.isMobile ? (
          <Footer
            uid={this.props.uid}
            login={this.props.login}
            logout={this.props.logout}
          />
        ) : null}
        {/* <Bottom className={this.state.open ? 'open' : null}>
          <Navigation
            navType="main-nav"
            uid={this.props.uid}
            onClick={() => this.setState({ open: false })}
          />
          <div className="end">
            {!this.props.uid ? this.renderLogin() : this.renderLogout()}
          </div>
        </Bottom> */}
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
