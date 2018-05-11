import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { asyncLoader } from '../../utilities';
import Loading from '../containers/Loading';
import { IAppRouterProps, IHomeProps } from './AppRouter.types';

const asyncLoaderOptions = {
  delay: 300,
  loading: Loading,
  timeout: 5000,
};

const AsyncNotFound = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/NotFound'),
  // render(loaded) {
  //   const NotFound = loaded.default;
  //   return <NotFound />;
  // },
});

const AsyncUnauthenticated = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/Unauthenticated'),
  // render(loaded) {
  //   const Unathenticated = loaded.default;
  //   return <Unathenticated />;
  // },
});

const AsyncHome = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/Home'),
  // render(loaded, props) {
  //   const Home = loaded.default;
  //   return <Home {...props} />;
  // },
});

const AsyncAbout = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/About'),
  // render(loaded, props) {
  //   const About = loaded.default;
  //   return <About {...props} />;
  // },
});

const AsyncPortfolio = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/Portfolio'),
  // render(loaded, props) {
  //   const Portfolio = loaded.default;
  //   return <Portfolio {...props} />;
  // },
});

const AsyncTodoList = asyncLoader({
  ...asyncLoaderOptions,
  loader: () => import('../containers/TodoList'),
  // render(loaded, props) {
  //   const TodoList = loaded.default;
  //   return props.isLoggedIn ? (
  //     <TodoList {...props} />
  //   ) : (
  //     <AsyncUnauthenticated />
  //   );
  // },
});

const Home = (props: IHomeProps): JSX.Element => (
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

const TodoList = (props: Partial<IAppRouterProps>): JSX.Element =>
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
    <Route exact={true} path="/todo" component={TodoList} />
    {/* Unmatched URLs */}
    <Route component={AsyncNotFound} />
  </Switch>
);

export default withRouter(AppRouter);
