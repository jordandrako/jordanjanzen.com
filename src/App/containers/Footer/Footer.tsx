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

    this.state = {
      activePage: null,
      overflowOpen: !this.props.isMobile,
    };
  }

  public render(): JSX.Element {
    const { overflowOpen } = this.state;

    return (
      <Styled.root>
        <Navigation />
        {overflowOpen ? (
          <Styled.overlay onClick={this._toggleOverflow} />
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
                    login={this.props.login}
                    logout={this.props.logout}
                    wide={true}
                  />
                </li>
              </ul>
            </Styled.overflowMenu>
          )}
        </Transition>
        {this.props.isMobile ? (
          <Styled.overflowButton onClick={this._toggleOverflow}>
            <span />
            <span />
            <span />
          </Styled.overflowButton>
        ) : null}
      </Styled.root>
    );
  }

  private _toggleOverflow = (): void => {
    this.setState({ overflowOpen: !this.state.overflowOpen });
  };
}
