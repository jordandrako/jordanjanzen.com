import * as React from "react";
import { Transition } from "react-transition-group";
import Button, { ButtonType } from "../Button/index";
import Navigation from "../Navigation";
import SocialButton from "../SocialButton";
import * as styled from "./Footer.styles";
import { IFooterProps } from "./Footer.types";

interface IFooterState {
  activePage?: string | null;
  overflowOpen: boolean;
}

class Footer extends React.Component<IFooterProps, IFooterState> {
  private _isLoggedIn: boolean;
  constructor(props: IFooterProps) {
    super(props);
    this._toggleOverflow = this._toggleOverflow.bind(this);
    this._loginButton = this._loginButton.bind(this);

    this._isLoggedIn = this.props.isLoggedIn;

    this.state = {
      activePage: null,
      overflowOpen: !this.props.isMobile
    };
  }

  public render(): JSX.Element {
    const { overflowOpen } = this.state;

    return (
      <styled.Bottom>
        <Navigation isLoggedIn={this.props.isLoggedIn} />
        {overflowOpen ? (
          /* tslint:disable-next-line jsx-no-lambda */
          <styled.ClickOutside onClick={() => this._toggleOverflow()} />
        ) : null}
        <Transition
          timeout={200}
          in={overflowOpen}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {(status: string) => (
            <styled.OverflowMenu className={status}>
              <ul>
                <li>
                  <SocialButton social="github" wide={true} />
                </li>
                <li>
                  <SocialButton social="twitter" wide={true} />
                </li>
                <li>
                  <SocialButton social="linkedin" wide={true} />
                </li>
                <li>{this._loginButton}</li>
              </ul>
            </styled.OverflowMenu>
          )}
        </Transition>
        {this.props.isMobile ? (
          /* tslint:disable-next-line jsx-no-lambda */
          <styled.OverflowButton onClick={() => this._toggleOverflow()}>
            <span />
            <span />
            <span />
          </styled.OverflowButton>
        ) : null}
      </styled.Bottom>
    );
  }

  private _toggleOverflow(): void {
    this.setState({ overflowOpen: !this.state.overflowOpen });
  }

  private _loginButton(): JSX.Element {
    return (
      <Button
        className={`log-button ${this._isLoggedIn ? "logout" : "login"}`}
        small={true}
        buttonType={ButtonType.login}
        wide={true}
        onClick={() =>
          this._isLoggedIn ? this.props.logout() : this.props.login()
        }
      >
        <i className="fa fa-google" aria-hidden="true" /> Log{" "}
        {this._isLoggedIn ? "Out" : "In"}
      </Button>
    );
  }
}

export default Footer;
