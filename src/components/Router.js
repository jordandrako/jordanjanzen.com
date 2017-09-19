import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import TodoList from './containers/TodoList';
import NotFound from './containers/NotFound';

// import MyLoadable from './MyLoadable';
// import Loading from './containers/Loading';

// const AsyncHome = MyLoadable({
//   loader: () => import('./containers/Home'),
// });
// const AsyncAbout = MyLoadable({
//   loader: () => import('./containers/About'),
// });
// const AsyncPortfolio = MyLoadable({
//   loader: () => import('./containers/Portfolio'),
// });
// const AsyncTodoList = MyLoadable({
//   loader: () => import('./containers/TodoList'),
// });
// const AsyncNotFound = MyLoadable({
//   loader: () => import('./containers/NotFound'),
// });

const Router = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/about"
      render={() => (
        <About
          skills={props.skills}
          addSkill={props.addSkill}
          updateSkill={props.updateSkill}
          removeSkill={props.removeSkill}
        />
      )}
    />
    <Route
      path="/portfolio"
      render={() => (
        <Portfolio
          projects={props.projects}
          addProject={props.addProject}
          updateProject={props.updateProject}
          removeProject={props.removeProject}
        />
      )}
    />
    <Route
      exact
      path="/todo"
      render={() => (
        <TodoList
          todos={props.todos}
          addTodo={props.addTodo}
          updateTodo={props.updateTodo}
          removeTodo={props.removeTodo}
        />
      )}
    />
    {/* Unmatched URLs */}
    <Route component={NotFound} />
  </Switch>
);

Router.propTypes = {
  todos: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,
  addSkill: PropTypes.func.isRequired,
  updateSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
};

export default withRouter(Router);
