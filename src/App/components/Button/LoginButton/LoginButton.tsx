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
    icon: true,
  };

  public static getDerivedStateFromProps(
    nextProps: ILoginButtonProps,
    prevState: ILoginButtonState
  ) {
    if (nextProps.isLoggedIn !== prevState.isLoggedIn) {
      return { isLoggedIn: nextProps.isLoggedIn };
    }
    return null;
  }

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
        buttonType={ButtonType.Login}
        className={`log-button ${isLoggedIn ? 'logout' : 'login'}`}
        small={true}
        wide={true}
        // tslint:disable-next-line
        onClick={this._handleAuth}
        {...props}
      >
        {this._buttonText()}
      </Button>
    );
  }

  private _buttonText = (): JSX.Element | string => {
    const { isLoggedIn } = this.state;
    const icon = <i className="fa fa-google" aria-hidden="true" />;
    const text = this.props.text || isLoggedIn ? 'Log Out' : 'Log In';
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
    this.props.isLoggedIn ? this.props.logout() : this.props.login();
  };
}
