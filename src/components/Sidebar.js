import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors, typography } from '../theme/variables';
import { sizes, media } from '../theme/style-utils';
import Navigation from './Navigation';
import Button from './Button';

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
  ${media.tablet`
    flex: none;
    height: auto;
  `};
`;

const Top = styled.section`
  flex-shrink: 0;
  ${media.tablet`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `};
`;

const Bottom = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background: ${darken(0.05, colors.black)};
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  .end {
    align-self: center;
    margin-bottom: 1em;
  }
`;

const Hamburger = styled.div`
  display: none;
  ${media.tablet`display: flex`};
  width: 30px;
  height: 30px;
  padding: 4px;
  margin: 8px;
  flex-direction: column;
  justify-content: space-around;
  background: ${colors.black};
  border: 2px solid ${colors.white};
  cursor: pointer;

  div {
    display: block
    width: 100%;
    height: 15%;
    background: ${colors.white};
  }
`;

const Logo = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  color: ${colors.brightwhite};
  margin: 1em 0;
  text-align: center;
  line-height: 1.2;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    margin: 0;
    font-size: 1.5rem;
    flex-direction: row;
  `};

  div {
    padding: 0 1em;
    ${media.tablet`padding: 0 .2em`};
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
  ${media.tablet`display: none`};
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.updateSize = this.updateSize.bind(this);

    this.state = {
      open: window.innerWidth > sizes.tablet,
    };
  }

  updateSize() {
    if (window.innerWidth > sizes.tablet) {
      this.setState({ open: true });
    }
  }

  toggleOpen() {
    console.log('toggle open');
    const isOpen = this.state.open;
    this.setState({
      open: !isOpen,
    });
  }

  renderLogin() {
    return (
      <Button
        className="log-button login"
        small
        type="login"
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
        onClick={() => this.props.logout()}
      >
        Log Out
      </Button>
    );
  }

  render() {
    window.addEventListener('resize', () => this.updateSize());
    return (
      <LeftColumn>
        <Top>
          <Hamburger onClick={() => this.toggleOpen()}>
            <div />
            <div />
            <div />
          </Hamburger>
          <Logo>
            <div>JORDAN</div>
            <div>JANZEN</div>
          </Logo>
          <Tagline>Never Stop Learning</Tagline>
        </Top>
        {this.state.open ? (
          <Bottom className={this.state.open ? 'open' : null}>
            <Navigation
              navType="main-nav"
              uid={this.props.uid}
              onClick={() => this.setState({ open: false })}
            />
            <div className="end">
              {!this.props.uid ? this.renderLogin() : this.renderLogout()}
            </div>
          </Bottom>
        ) : null}
      </LeftColumn>
    );
  }
}

Sidebar.propTypes = {
  uid: PropTypes.string,
};

Sidebar.defaultProps = {
  uid: null,
};

export default Sidebar;
