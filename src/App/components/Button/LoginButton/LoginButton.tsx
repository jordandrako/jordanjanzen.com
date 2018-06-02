import { withAuth } from 'App/AppContext';
import { isLoggedIn } from 'base';
import * as React from 'react';
import Button, { ButtonType, IButtonProps } from '../index';

interface ILoginButtonProps extends IButtonProps {
  icon?: boolean;
  login: () => void;
  logout: () => void;
}

class LoginButton extends React.Component<ILoginButtonProps, {}> {
  public static defaultProps = {
    icon: 'google',
  };

  public render() {
    return (
      <Button
        buttonType={ButtonType.Login}
        className={`log-button ${isLoggedIn() ? 'logout' : 'login'}`}
        small={true}
        onClick={this._handleAuth}
        {...this.props}
      >
        {this.props.text || isLoggedIn() ? 'Log Out' : 'Log In'}
      </Button>
    );
  }

  private _handleAuth = (): void => {
    if (!this.props.disabled) {
      isLoggedIn() ? this.props.logout() : this.props.login();
    }
  };
}

export default withAuth(LoginButton);
