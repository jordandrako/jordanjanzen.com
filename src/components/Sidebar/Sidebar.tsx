import * as React from 'react';
import Footer from '../Footer';
import * as styled from './Sidebar.styles';
import { ISidebarProps } from './Sidebar.types';

interface ISidebarState {
  activePage: string | null;
}

export default class Sidebar extends React.Component<
  ISidebarProps,
  ISidebarState
> {
  constructor(props: ISidebarProps) {
    super(props);

    this.state = {
      activePage: null,
    };
  }

  public render(): JSX.Element {
    return (
      <styled.LeftColumn>
        <styled.Top>
          <styled.LogoLink to="/">
            <styled.Logo>
              <span>JORDAN</span>
              <span>JANZEN</span>
            </styled.Logo>
          </styled.LogoLink>
          <styled.Tagline>Never Stop Learning</styled.Tagline>
        </styled.Top>
        {!this.props.isMobile ? (
          <Footer
            isLoggedIn={this.props.isLoggedIn}
            isMobile={this.props.isMobile}
            login={this.props.login}
            logout={this.props.logout}
          />
        ) : null}
      </styled.LeftColumn>
    );
  }
}
