import * as React from 'react';
import Button, { ButtonType, IButtonProps } from '../index';

interface ILoginButtonProps extends IButtonProps {
  icon?: boolean;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

interface ILoginButtonState {
  isLoggedIn: boolean;
}

export class LoginButton extends React.Component<
  ILoginButtonProps,
  ILoginButtonState
> {
  public static defaultProps = {
    icon: false,
  };

  constructor(props: ILoginButtonProps) {
    super(props);
    this._handleAuth = this._handleAuth.bind(this);

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    };
  }

  public render() {
    const { isLoggedIn, ...props } = this.props;
    return (
      <Button
        buttonType={ButtonType.login}
        className={`log-button ${isLoggedIn ? 'logout' : 'login'}`}
        small={true}
        wide={true}
        onClick={this._handleAuth}
        {...props}
      >
        {this._buttonText}
      </Button>
    );
  }

  private _buttonText(): JSX.Element {
    const { isLoggedIn } = this.state;
    const Icon = <i className="fa fa-google" aria-hidden="true" />;
    const text = this.props.text || isLoggedIn ? Icon + 'Log Out' : 'Log In';
    const ButtonText = this.props.icon ? (
      <span>
        {Icon} {text}
      </span>
    ) : (
      <span>{text}</span>
    );
    return ButtonText;
  }

  private _handleAuth(): void {
    this.props.isLoggedIn ? this.props.logout() : this.props.login();
  }
}
