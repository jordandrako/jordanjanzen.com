import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { isLoggedIn } from '../../base';
import { asyncLoader } from '../../utilities';
import {
  IAboutProps,
  IHomeProps,
  IPortfolioProps,
  IProjects,
  ISkills,
  ITodoListProps,
  ITodos,
} from '../App.types';
import Loading from '../containers/Loading';
import { IAppRouterProps } from './AppRouter.types';

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

const AsyncHome = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/Home'),
});

const AsyncAbout = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/About'),
});

const AsyncPortfolio = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/Portfolio'),
});

const AsyncTodoList = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/TodoList'),
});

class AppRouter extends React.Component<
  IAppRouterProps & RouteComponentProps<any>
> {
  private _homeProps: IHomeProps;
  private _aboutProps: IAboutProps;
  private _portfolioProps: IPortfolioProps;
  private _todoListProps: ITodoListProps;

  public constructor(props: IAppRouterProps & RouteComponentProps<any>) {
    super(props);
  }

  public render() {
    this._homeProps = {
      isMobile: this.props.isMobile,
      projects: this.props.projects as IProjects,
    };

    this._aboutProps = {
      addSkill: this.props.addSkill,
      removeSkill: this.props.removeSkill,
      skills: this.props.skills as ISkills,
    };

    this._portfolioProps = {
      addProject: this.props.addProject,
      isMobile: this.props.isMobile,
      projects: this.props.projects as IProjects,
      removeProject: this.props.removeProject,
      skills: this.props.skills as ISkills,
    };

    this._todoListProps = {
      addTodo: this.props.addTodo,
      removeTodo: this.props.removeTodo,
      todos: this.props.todos as ITodos,
      updateTodo: this.props.updateTodo,
    };

    return (
      <Switch>
        <Route exact={true} path="/" render={this._renderHome} />
        <Route path="/about" render={this._renderAbout} />
        <Route path="/portfolio" render={this._renderPortfolio} />
        <Route exact={true} path="/todo" render={this._renderTodoList} />
        {/* Unmatched URLs */}
        <Route component={AsyncNotFound} />
      </Switch>
    );
  }

  private _renderHome = (): JSX.Element => <AsyncHome {...this._homeProps} />;

  private _renderAbout = (): JSX.Element => (
    <AsyncAbout {...this._aboutProps} />
  );

  private _renderPortfolio = (): JSX.Element => (
    <AsyncPortfolio {...this._portfolioProps} />
  );

  private _renderTodoList = (): JSX.Element =>
    isLoggedIn() ? (
      <AsyncTodoList {...this._todoListProps} />
    ) : (
      <AsyncUnauthenticated />
    );
}

export default withRouter(AppRouter);
