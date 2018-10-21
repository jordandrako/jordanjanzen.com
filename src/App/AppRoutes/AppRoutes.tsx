import { isLoggedIn } from 'base';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { asyncLoader } from 'utilities';
import { withProjects, withSkills, withTodos } from '../AppContext';
import Loading from '../containers/Loading';
import { IAppRoutesProps } from './AppRoutes.types';

const asyncLoaderOptions = {
  delay: 300,
  loading: Loading,
  timeout: 5000,
};

const AsyncNotFound = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/NotFound'),
});

const AsyncUnauthenticated = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/Unauthenticated'),
});

const AsyncHome = withProjects(
  asyncLoader({
    ...asyncLoaderOptions,
    loader: () => import('../containers/Home'),
  }),
);

const AsyncAbout = withSkills(
  asyncLoader({
    ...asyncLoaderOptions,
    loader: () => import('../containers/About'),
  }),
);

const AsyncPortfolio = withProjects(
  withSkills(
    asyncLoader({
      ...asyncLoaderOptions,
      loader: () => import('../containers/Portfolio'),
    }),
  ),
);

const AsyncTodoList = withTodos(
  withSkills(
    asyncLoader({
      ...asyncLoaderOptions,
      loader: () => import('../containers/TodoList'),
    }),
  ),
);

class AppRoutes extends React.Component<IAppRoutesProps> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' render={this._renderHome} />
        <Route path='/about' render={this._renderAbout} />
        <Route path='/portfolio' render={this._renderPortfolio} />
        <Route exact={true} path='/todo' render={this._renderTodoList} />
        <Route exact={true} path='/loadTest' render={this._renderLoad} />
        {/* Unmatched URLs */}
        <Route component={AsyncNotFound} />
      </Switch>
    );
  }

  private _renderHome = (): JSX.Element => (
    <AsyncHome isMobile={this.props.isMobile} />
  );

  private _renderAbout = (): JSX.Element => (
    <AsyncAbout isMobile={this.props.isMobile} />
  );

  private _renderPortfolio = (): JSX.Element => (
    <AsyncPortfolio isMobile={this.props.isMobile} />
  );

  private _renderLoad = (): JSX.Element => <Loading isLoading={true} />;

  private _renderTodoList = (): JSX.Element =>
    isLoggedIn() ? (
      <AsyncTodoList isMobile={this.props.isMobile} />
    ) : (
      <AsyncUnauthenticated />
    );
}

export default AppRoutes;
