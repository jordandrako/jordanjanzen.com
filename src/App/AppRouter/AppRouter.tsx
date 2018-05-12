import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
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

// tslint:disable jsx-no-lambda
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
      isLoggedIn: this.props.isLoggedIn,
      removeSkill: this.props.removeSkill,
      skills: this.props.skills as ISkills,
      updateSkill: this.props.updateSkill,
    };

    this._portfolioProps = {
      addProject: this.props.addProject,
      isLoggedIn: this.props.isLoggedIn,
      isMobile: this.props.isMobile,
      projects: this.props.projects as IProjects,
      removeProject: this.props.removeProject,
      secrets: this.props.secrets,
      skills: this.props.skills as ISkills,
      // updateProject: this.props.updateProject,
    };

    this._todoListProps = {
      addTodo: this.props.addTodo,
      removeTodo: this.props.removeTodo,
      todos: this.props.todos as ITodos,
      updateTodo: this.props.updateTodo,
    };
    return (
      <Switch>
        <Route
          exact={true}
          path="/"
          render={(props: RouteComponentProps<IHomeProps> & IHomeProps) => (
            <AsyncHome {...this._homeProps} />
          )}
        />
        <Route
          path="/about"
          render={(props: RouteComponentProps<IAboutProps> & IAboutProps) => (
            <AsyncAbout {...this._aboutProps} />
          )}
        />
        <Route
          path="/portfolio"
          render={(
            props: RouteComponentProps<IPortfolioProps> & IPortfolioProps
          ) => <AsyncPortfolio {...this._portfolioProps} />}
        />
        <Route
          exact={true}
          path="/todo"
          render={(
            props: RouteComponentProps<ITodoListProps> & ITodoListProps
          ) =>
            this.props.isLoggedIn ? (
              <AsyncTodoList {...this._todoListProps} />
            ) : (
              <AsyncUnauthenticated />
            )
          }
        />
        {/* Unmatched URLs */}
        <Route component={AsyncNotFound} />
      </Switch>
    );
  }
}

export default withRouter(AppRouter);
