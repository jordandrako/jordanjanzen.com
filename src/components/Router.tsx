import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import myLoadable from './myLoadable';

const AsyncHome = myLoadable({
  loader: () => import('./containers/Home')
});
const AsyncAbout = myLoadable({
  loader: () => import('./containers/About')
});
const AsyncPortfolio = myLoadable({
  loader: () => import('./containers/Portfolio')
});
const AsyncTodoList = myLoadable({
  loader: () => import('./containers/TodoList')
});
const AsyncNotFound = myLoadable({
  loader: () => import('./containers/NotFound')
});
const AsyncUnauthenticated = myLoadable({
  loader: () => import('./containers/Unauthenticated')
});

const Home = props => (
  <AsyncHome isMobile={props.isMobile} projects={props.projects} />
);

const About = props => (
  <AsyncAbout
    uid={props.uid}
    skills={props.skills}
    addSkill={props.addSkill}
    removeSkill={props.removeSkill}
  />
);

const Portfolio = props => (
  <AsyncPortfolio
    uid={props.uid}
    skills={props.skills}
    projects={props.projects}
    addProject={props.addProject}
    updateProject={props.updateProject}
    removeProject={props.removeProject}
    isMobile={props.isMobile}
    cloudinary={props.cloudinary}
  />
);

const Todo = props =>
  props.uid ? (
    <AsyncTodoList
      todos={props.todos}
      addTodo={props.addTodo}
      updateTodo={props.updateTodo}
      removeTodo={props.removeTodo}
    />
  ) : (
    <AsyncUnauthenticated />
  );

const Router = props => (
  <Switch>
    <Route
      exact={true}
      path="/"
      component={Home}
      // render={() => (
      //   <AsyncHome isMobile={props.isMobile} projects={props.projects} />
      // )}
    />
    <Route
      path="/about"
      component={About}
      // render={() => (
      //   <AsyncAbout
      //     uid={props.uid}
      //     skills={props.skills}
      //     addSkill={props.addSkill}
      //     removeSkill={props.removeSkill}
      //   />
      // )}
    />
    <Route
      path="/portfolio"
      component={Portfolio}
      //   render={() => (
      //   <AsyncPortfolio
      //     uid={props.uid}
      //     skills={props.skills}
      //     projects={props.projects}
      //     addProject={props.addProject}
      //     updateProject={props.updateProject}
      //     removeProject={props.removeProject}
      //     isMobile={props.isMobile}
      //     cloudinary={props.cloudinary}
      //   />
      // )}
    />
    <Route
      exact={true}
      path="/todo"
      component={Todo}
      // render={() =>
      //   props.uid ? (
      //     <AsyncTodoList
      //       todos={props.todos}
      //       addTodo={props.addTodo}
      //       updateTodo={props.updateTodo}
      //       removeTodo={props.removeTodo}
      //     />
      //   ) : (
      //     <AsyncUnauthenticated />
      //   )}
    />
    {/* Unmatched URLs */}
    <Route component={AsyncNotFound} />
  </Switch>
);

Router.propTypes = {
  uid: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  todos: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,

  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,

  addSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,

  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  cloudinary: PropTypes.shape({
    key: PropTypes.string,
    secret: PropTypes.string
  })
};

Router.defaultProps = {
  uid: null,
  cloudinary: {
    key: undefined,
    secrect: undefined
  }
};

export default withRouter(Router);
