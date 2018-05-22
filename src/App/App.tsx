import * as React from 'react';
import {
  globalStyles,
  loadTheme,
  screenSizes,
  screenSizesPx,
  styled,
} from '../styling';
import { AppContext, AppProvider } from './AppContext';
import AppRoutes from './AppRoutes';
import Footer from './containers/Footer';
import Sidebar from './containers/Sidebar';

const appTheme = loadTheme({});
const { palette } = appTheme;
globalStyles(appTheme);

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  border-top: 2px solid ${palette.darkblack};
  flex-wrap: wrap;

  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
  }
`;

interface IAppState {
  isMobile: boolean;
}

export default class App extends React.Component<{}, IAppState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= screenSizesPx.tablet,
    };
  }

  public componentDidMount(): void {
    window.addEventListener('resize', this._updateSize);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this._updateSize);
  }

  public render(): JSX.Element {
    const { isMobile } = this.state;

    return (
      <AppProvider>
        <AppContext.Consumer>
          {context => (
            <Wrapper className="App wrapper">
              <Sidebar isMobile={isMobile} />
              <AppRoutes isMobile={isMobile} />
              {isMobile ? <Footer isMobile={isMobile} /> : null}
            </Wrapper>
          )}
        </AppContext.Consumer>
      </AppProvider>
    );
  }

  private _updateSize = (): void => {
    if (window.innerWidth <= screenSizesPx.tablet) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };
}
