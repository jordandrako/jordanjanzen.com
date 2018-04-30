import React from 'react';
import { PropTypes } from 'prop-types';

import { database, base, auth, authProvider } from '../../../base';
import { sizes } from '../../../theme/style-utils';
import { slugify } from '../../../helpers';

const DataContext = React.createContext();

class DataProvider extends React.Component {
  setRef(ref) {
    return new Promise((resolve, reject) => {
      if (ref !== 'unauthRef' && ref !== 'authRef') {
        reject(
          `Ref is not correctly defined. Must be either 'unauthRef' or 'authRef'. Was: ${ref}`
        );
      }
      if (this.ref) {
        base.removeBinding(this.ref);
        this.ref = undefined;
      }
      if (ref === 'unauthRef') {
        this.ref = [
          base.bindToState('todos', {
            context: this,
            state: 'todos'
          }),
          base.bindToState('projects', {
            context: this,
            state: 'projects'
          }),
          base.bindToState('skills', {
            context: this,
            state: 'skills'
          })
        ];
      }

      if (ref === 'authRef') {
        this.ref = [
          base.syncState('todos', {
            context: this,
            state: 'todos'
          }),
          base.syncState('projects', {
            context: this,
            state: 'projects'
          }),
          base.syncState('skills', {
            context: this,
            state: 'skills'
          }),
          base.fetch('secrets', {
            context: this,
            then(data) {
              this.setState({ secrets: data });
            }
          })
        ];
      }
      resolve('Ref (re)set');
    });
  }

  updateSize() {
    if (window.innerWidth <= sizes.tablet) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  authenticate() {
    auth
      .signInWithPopup(authProvider)
      .then((result) => this.authHandler(result))
      .catch((error) => console.error(error));
  }

  async logout() {
    await this.setRef('unauthRef')
      .then(
        await auth.signOut().then(() => {
          this.setState({
            uid: null,
            secrets: {}
          });
        })
      )
      .catch((error) => console.error(error));
  }

  authHandler(authData) {
    const uid = authData.user.uid || authData.uid;
    const rootRef = database.ref();
    const successfulLogin = () => {
      this.setRef('authRef');
      this.setState({ uid });
    };
    rootRef.once('value').then((snapshot) => {
      const data = snapshot.val() || {};

      if (!data.owner) {
        rootRef
          .set({
            ...data,
            owner: uid
          })
          .then(() => {
            successfulLogin();
          })
          .catch((error) => console.error(error));
      } else if (data.owner === uid) {
        successfulLogin();
      } else {
        console.error('You are not the owner of this site.');
      }
    });
  }

  // update our state
  addTodo(todo) {
    const todos = { ...this.state.todos };
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = { ...todo };
    this.setState({ todos }); // same as this.setState({ todos: todos })
  }

  updateTodo(key, updatedProp) {
    const todos = { ...this.state.todos };
    const todo = todos[key];
    const updatedTodo = {
      ...todo,
      ...updatedProp
    };
    todos[key] = updatedTodo;
    this.setState({
      todos
    });
  }

  removeTodo(key) {
    const todos = { ...this.state.todos };
    todos[key] = null;
    this.setState({ todos });
  }

  addProject(project) {
    const projects = { ...this.state.projects };
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    // set state
    this.setState({ projects });
  }

  updateProject(key, updatedProject) {
    const projects = { ...this.state.projects };
    projects[key] = updatedProject;
    this.setState({
      projects
    });
  }

  removeProject(key) {
    const projects = { ...this.state.projects };
    projects[key] = null;
    this.setState({ projects });
  }

  addSkill(skill) {
    const skills = { ...this.state.skills };
    const name = slugify(skill.name);
    skills[`skill-${name}`] = skill;
    this.setState({ skills });
  }

  updateSkill(key, updatedSkill) {
    const skills = { ...this.state.skills };
    skills[key] = updatedSkill;
    this.setState({
      skills
    });
  }

  removeSkill(key) {
    const skills = { ...this.state.skills };
    skills[key] = null;
    this.setState({ skills });
  }

  state = {
    isLoggedIn: false,
    isMobile: false,

    projects: {},
    skills: {},
    todos: {},

    login: [],
    logout: [],
    addProject: [],
    addSkill: [],
    addTodo: [],
    updateProject: [],
    updateSize: [],
    updateTodo: [],
    removeProject: [],
    removeSkill: [],
    removeTodo: []
  };

  render() {
    return <DataContext value={this.state}>{this.props.children}</DataContext>;
  }
}

DataProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default DataProvider;
