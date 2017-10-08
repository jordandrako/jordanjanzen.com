import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { auth, provider } from '../../base';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import Button from '../Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.renderLogin = this.renderLogin.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      uid: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((uid) => {
      if (uid) {
        this.setState({ uid });
      }
    });
  }

  handleChange() {
    //
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const uid = result.user.uid;
      this.setState({
        uid,
      });
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({ uid: null });
      console.log('logout');
    });
  }

  renderLogin() {
    return (
      <Row>
        <p>Sign in to manage your store's inventory.</p>
        <Button onClick={() => this.login()}>Log In with Google</Button>
      </Row>
    );
  }

  renderLogout() {
    return (
      <Row>
        <p>You are logged in. Do you want to log out?</p>
        <Button className="logout" onClick={this.logout()}>
          Log Out
        </Button>
      </Row>
    );
  }

  render() {
    return (
      <DocumentTitle title="Jordan Janzen | Login">
        <MainContainer>
          <PageTitle title="Login" />
          <Main>
            {!this.state.uid ? this.renderLogin() : this.renderLogout()}
          </Main>
        </MainContainer>
      </DocumentTitle>
    );
  }
}

Login.propTypes = {};

export default Login;
