import * as React from 'react';
// import { isLoggedIn } from '../../../base';
// import Button from '../../components/Button';
import Footer from '../Footer';
import * as Styled from './Sidebar.styles';
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
      <Styled.leftColumn>
        <Styled.top>
          <Styled.logoLink to="/">
            <Styled.logo>
              <span>JORDAN</span>
              <span>JANZEN</span>
            </Styled.logo>
          </Styled.logoLink>
          <Styled.tagline>Never Stop Learning</Styled.tagline>
        </Styled.top>
        {!this.props.isMobile && <Footer isMobile={this.props.isMobile} />}
        {/* {!this.props.isMobile &&
          isLoggedIn() && <Button text="Undo" onClick={this.props.undo} />} */}
      </Styled.leftColumn>
    );
  }
}
