import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { app, base } from '../../base';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';

class Login extends Component {
  constructor(props) {
    super(props);

    this.renderLogin = this.renderLogin.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);

    this.state = {
      uid: null,
      owner: null,
    };
  }

  componentDidMount() {
    app.auth().onAuthStatechanged((user) => {
      if (user) {
        this.authHandler(null, { user });
      }
    });
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    app.signInWithPopup(provider).then(this.authHandler);
  }

  logout() {
    app.unauth();
    this.setState({ uid: null });
    console.log('logout');
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    // grab the store info
    const siteRef = base.database().ref('jordan-janzen');

    // query the firebase once for the store data
    siteRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      // claim it as our own if there is no owner already
      if (!data.owner) {
        siteRef.set({
          owner: authData.user.uid,
        });
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid,
      });
    });
  }

  renderLogin() {
    return (
      <Row>
        <nav className="login">
          <p>Sign in to manage your store's inventory.</p>
          <button
            className="google"
            onClick={() => this.authenticate('google')}
          >
            Log In with Google
          </button>
          <button
            className="github"
            onClick={() => this.authenticate('github')}
          >
            Log In with Github
          </button>
        </nav>
      </Row>
    );
  }
  renderLogout() {
    return (
      <Row>
        <nav className="login">
          <p>Sign in to manage your store's inventory.</p>
          <button
            className="google"
            onClick={() => this.authenticate('google')}
          >
            Log In with Google
          </button>
          <button
            className="github"
            onClick={() => this.authenticate('github')}
          >
            Log In with Github
          </button>
        </nav>
      </Row>
    );
  }

  render() {
    return (
      <DocumentTitle title="Jordan Janzen | Login">
        <MainColumn>
          <PageTitle title="Login" />
          <Main>
            {this.renderLogin}
            {this.renderLogout}
          </Main>
        </MainColumn>
      </DocumentTitle>
    );
  }
}

Login.propTypes = {};

export default Login;
