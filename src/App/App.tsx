import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  globalStyles,
  loadTheme,
  screenSizes,
  screenSizesPx,
  styled,
} from 'styling';
import AppProvider, { AppContext } from './AppContext';
import AppRoutes from './AppRoutes';
import { Page } from './components/Page';
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

export enum routeNames {
  home = 'Home',
  about = 'About',
  portfolio = 'Portfolio',
  todo = 'Todo List',
  load = 'Loading...',
  notFound = '404',
}

const getTitle = (path: string): string => {
  const route = path && path.split('/')[1];
  switch (route) {
    case '':
      return routeNames.home;
    case 'about':
      return routeNames.about;
    case 'portfolio':
      return routeNames.portfolio;
    case 'todo':
      return routeNames.todo;
    case 'loadTest':
      return routeNames.load;
    default:
      return routeNames.notFound;
  }
};

interface IAppState {
  currentPage: string | null;
  isMobile: boolean;
  prevPage: {
    name: string;
    path: string;
  } | null;
}

interface IAppProps extends RouteComponentProps<any> {}

class App extends React.Component<IAppProps, IAppState> {
  public static getDerivedStateFromProps(
    nextProps: IAppProps,
    prevState: IAppState
  ): object | null {
    const nextRoute = nextProps.location.pathname.split('/')[1];
    const prevRoute =
      prevState.currentPage && prevState.currentPage.split('/')[1];
    if (nextRoute !== prevRoute) {
      return {
        currentPage: nextProps.location.pathname,
        prevPage: {
          name: getTitle(prevState.currentPage as string),
          path: prevState.currentPage,
        },
      };
    }
    return null;
  }

  public constructor(props: IAppProps) {
    super(props);
    this.state = {
      currentPage: null,
      isMobile: window.innerWidth <= screenSizesPx.tablet,
      prevPage: null,
    };
  }

  public componentDidMount(): void {
    window.addEventListener('resize', this._updateSize);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this._updateSize);
  }

  public render(): JSX.Element {
    const { isMobile, prevPage } = this.state;
    const title = getTitle(this.props.location.pathname);

    return (
      <AppProvider>
        <AppContext.Consumer>
          {context => (
            <Wrapper className="App wrapper">
              <Sidebar isMobile={isMobile} />
              <Page title={title} prevPage={prevPage}>
                <AppRoutes isMobile={isMobile} />
              </Page>
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

export default withRouter(App);
