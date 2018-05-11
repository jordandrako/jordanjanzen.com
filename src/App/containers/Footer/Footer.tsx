import * as React from 'react';
import { Transition } from 'react-transition-group';
import {
  LoginButton,
  SocialButton,
  SocialSites,
} from '../../components/Button';
import Navigation from '../../components/Navigation/Navigation';
import * as Styled from './Footer.styles';
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
      <Styled.root>
        <Navigation isLoggedIn={this.props.isLoggedIn} />
        {overflowOpen ? (
          /* tslint:disable-next-line jsx-no-lambda */
          <Styled.overlay onClick={() => this._toggleOverflow()} />
        ) : null}
        <Transition
          timeout={200}
          in={overflowOpen}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {(status: string) => (
            <Styled.overflowMenu className={status}>
              <ul>
                <li>
                  <SocialButton social={SocialSites.github} wide={true} />
                </li>
                <li>
                  <SocialButton social={SocialSites.twitter} wide={true} />
                </li>
                <li>
                  <SocialButton social={SocialSites.linkedin} wide={true} />
                </li>
                <li>
                  <LoginButton
                    isLoggedIn={this.props.isLoggedIn}
                    login={this.props.login}
                    logout={this.props.logout}
                  />
                </li>
              </ul>
            </Styled.overflowMenu>
          )}
        </Transition>
        {this.props.isMobile ? (
          /* tslint:disable-next-line jsx-no-lambda */
          <Styled.overflowButton onClick={() => this._toggleOverflow()}>
            <span />
            <span />
            <span />
          </Styled.overflowButton>
        ) : null}
      </Styled.root>
    );
  }

  private _toggleOverflow(): void {
    this.setState({ overflowOpen: !this.state.overflowOpen });
  }
}
