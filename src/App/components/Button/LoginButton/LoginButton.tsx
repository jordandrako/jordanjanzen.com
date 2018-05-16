import * as React from 'react';
import { isLoggedIn } from '../../../../base';
import Button, { ButtonType, IButtonProps } from '../index';

interface ILoginButtonProps extends IButtonProps {
  icon?: boolean;
  login: () => void;
  logout: () => void;
}

interface ILoginButtonState {}

export class LoginButton extends React.Component<
  ILoginButtonProps,
  ILoginButtonState
> {
  public static defaultProps = {
    icon: true,
  };

  constructor(props: ILoginButtonProps) {
    super(props);
  }

  public render() {
    return (
      <Button
        buttonType={ButtonType.Login}
        className={`log-button ${isLoggedIn() ? 'logout' : 'login'}`}
        small={true}
        wide={true}
        onClick={this._handleAuth}
        {...this.props}
      >
        {this._buttonText()}
      </Button>
    );
  }

  private _buttonText = (): JSX.Element | string => {
    const icon = <i className="fa fa-google" aria-hidden="true" />;
    const text = this.props.text || isLoggedIn() ? 'Log Out' : 'Log In';
    const iconText = (
      <>
        {icon}
        {text}
      </>
    );
    const ButtonText = this.props.icon ? iconText : text;
    return ButtonText;
  };

  private _handleAuth = (): void => {
    isLoggedIn() ? this.props.logout() : this.props.login();
  };
}
