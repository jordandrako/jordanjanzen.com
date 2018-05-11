import * as React from 'react';
import { Transition } from 'react-transition-group';
import { LoginButton } from '../../App/components/Button';
import Navigation from '../Navigation';
import SocialButton from '../SocialButton';
import * as styled from './Footer.styles';
import { IFooterProps } from './Footer.types';

interface IFooterState {
  activePage?: string | null;
  overflowOpen: boolean;
}

export default class Footer extends React.Component<
  IFooterProps,
  IFooterState
> {
  constructor(props: IFooterProps) {
    super(props);
    this._toggleOverflow = this._toggleOverflow.bind(this);

    this.state = {
      activePage: null,
      overflowOpen: !this.props.isMobile,
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
                <li>
                  <LoginButton
                    isLoggedIn={this.props.isLoggedIn}
                    login={this.props.login}
                    logout={this.props.logout}
                  />
                </li>
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
}
