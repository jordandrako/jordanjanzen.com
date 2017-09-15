import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import base from '../base';
import { colors, typography } from '../theme/variables';
import Button from './Button';

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    text-align: center;
    padding: 15px;
    width: 100%;

    font-family: ${typography.monospace};
    text-transform: lowercase;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};
  &.active {
    color: ${colors.red};
    font-size: 1.15em;

    &:before {
      content: '==';
      display: inline-block;
      padding-right: 0.2em;
    }
    &:after {
      content: '=>';
      display: inline-block;
      padding-left: 0.2em;
    }
  }
`;

class Navigation extends Component {
  constructor() {
    super();

    // this.renderLogin = this.renderLogin.bind(this);
    // this.logout = this.logout.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.authenticate = this.authenticate.bind(this);
    // this.authHandler = this.authHandler.bind(this);

    this.state = {
      uid: null,
      owner: null,
    };
  }

  componentDidMount() {
    // base.onAuth((user) => {
    //   if (user) {
    //     this.authHandler(null, { user });
    //   }
    // });
  }

  // authenticate(provider) {
  //   console.log(`Trying to log in with ${provider}`);
  //   // base.authWithOAuthPopup(provider, this.authHandler);
  // }

  // logout() {
  //   // base.unauth();
  //   this.setState({ uid: null });
  //   console.log('logout');
  // }

  // authHandler(err, authData) {
  //   console.log(authData);
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }

  // grab the store info
  // const storeRef = base.database().ref(this.props.storeId);

  // query the firebase once for the store data
  // storeRef.once('value', (snapshot) => {
  //   const data = snapshot.val() || {};

  //   // claim it as our own if there is no owner already
  //   if (!data.owner) {
  //     storeRef.set({
  //       owner: authData.user.uid,
  //     });
  //   }

  //   this.setState({
  //     uid: authData.user.uid,
  //     owner: data.owner || authData.user.uid,
  //   });
  // });
  // }
  render() {
    return (
      <nav>
        <NavList className={this.props.navType}>
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Button
              type="login"
              arrows
              onClick={() => {
                this.authenticate('google');
              }}
            >
              {!this.state.uid ? 'Log In' : 'Log Out'}
            </Button>
          </li>
        </NavList>
      </nav>
    );
  }
}

Navigation.propTypes = {
  navType: PropTypes.string.isRequired,
};

export default Navigation;
