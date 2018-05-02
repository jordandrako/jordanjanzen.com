import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import TodoList from './containers/TodoList';
import NotFound from './containers/NotFound';
import Unauthenticated from './containers/Unauthenticated';

import { AppContext } from './App';
import { withProjects, withSkills, withTodos } from './context';

import { MyLoadable } from './MyLoadable';

// const AsyncHome = MyLoadable({
//   loader: () => import('./containers/Home')
// });
// const AsyncAbout = MyLoadable({
//   loader: () => import('./containers/About')
// });
// const AsyncPortfolio = MyLoadable({
//   loader: () => import('./containers/Portfolio')
// });
// const AsyncTodoList = MyLoadable({
//   loader: () => import('./containers/TodoList')
// });
// const AsyncNotFound = MyLoadable({
//   loader: () => import('./containers/NotFound')
// });
// const AsyncUnauthenticated = MyLoadable({
//   loader: () => import('./containers/Unauthenticated')
// });

// const Home = () => withProjects(Home);
// const About = () => withSkills(About);
// const Portfolio = () => withSkills(withProjects(Portfolio));
// const TodoList = () => withSkills(withTodos(TodoList));
// const NotFound = () => NotFound;
// const Unauthenticated = () => Unauthenticated;

const Router = () => (
  <AppContext>
    {(appContext) => (
      <Switch>
        <Route exact path="/" component={withProjects(Home)} />
        <Route path="/about" component={withSkills(About)} />
        <Route
          path="/portfolio"
          component={withSkills(withProjects(Portfolio))}
        />
        <Route
          exact
          path="/todo"
          render={() =>
            appContext.isLoggedIn ? (
              withSkills(withTodos(TodoList))
            ) : (
              <Unauthenticated />
            )}
        />
        {/* Unmatched URLs */}
        <Route component={NotFound} />
      </Switch>
    )}
  </AppContext>
);

Router.contextTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default withRouter(Router);
