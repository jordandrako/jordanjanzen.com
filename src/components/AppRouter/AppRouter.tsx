import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import myLoadable from '../myLoadable';
import { IAppRouterProps } from './AppRouter.types';

const AsyncHome = myLoadable({
  loader: () => import('../containers/Home'),
});
const AsyncAbout = myLoadable({
  loader: () => import('../containers/About'),
});
const AsyncPortfolio = myLoadable({
  loader: () => import('../containers/Portfolio'),
});
const AsyncTodoList = myLoadable({
  loader: () => import('../containers/TodoList'),
});
const AsyncNotFound = myLoadable({
  loader: () => import('../containers/NotFound'),
});
const AsyncUnauthenticated = myLoadable({
  loader: () => import('../containers/Unauthenticated'),
});

const Home = (props: Partial<IAppRouterProps>): JSX.Element => (
  <AsyncHome isMobile={props.isMobile} projects={props.projects} />
);

const About = (props: Partial<IAppRouterProps>): JSX.Element => (
  <AsyncAbout
    isLoggedIn={props.isLoggedIn}
    skills={props.skills}
    addSkill={props.addSkill}
    updateSkill={props.updateSkill}
    removeSkill={props.removeSkill}
  />
);

const Portfolio = (props: Partial<IAppRouterProps>): JSX.Element => (
  <AsyncPortfolio
    isLoggedIn={props.isLoggedIn}
    skills={props.skills}
    projects={props.projects}
    addProject={props.addProject}
    updateProject={props.updateProject}
    removeProject={props.removeProject}
    isMobile={props.isMobile}
    cloudinary={props.secrets!.cloudinary}
  />
);

const Todo = (props: Partial<IAppRouterProps>): JSX.Element =>
  props.isLoggedIn ? (
    <AsyncTodoList
      todos={props.todos}
      addTodo={props.addTodo}
      updateTodo={props.updateTodo}
      removeTodo={props.removeTodo}
    />
  ) : (
    <AsyncUnauthenticated />
  );

// class AppRouter extends React.Component<RouteComponentProps<any>> {
//   public render() {
//     return (
//       <Switch>
//         <Route exact={true} path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/portfolio" component={Portfolio} />
//         <Route exact={true} path="/todo" component={Todo} />
//         {/* Unmatched URLs */}
//         <Route component={AsyncNotFound} />
//       </Switch>
//     );
//   }
// }

const AppRouter: React.StatelessComponent<
  IAppRouterProps & RouteComponentProps<any>
> = (props: IAppRouterProps) => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route exact={true} path="/todo" component={Todo} />
    {/* Unmatched URLs */}
    <Route component={AsyncNotFound} />
  </Switch>
);

export default withRouter(AppRouter);
