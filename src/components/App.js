import React, { Component } from 'react';
import styled from 'styled-components';

import { database, base, auth, provider } from '../base';
import Sidebar from './Sidebar';
import Router from './Router';
import Footer from './Footer';

import { palette } from '../theme/variables';
import { sizes, mediaMax } from '../theme/style-utils';
import { slugify } from '../helpers';

const Wrapper = styled.div`
  display: flex;
  ${mediaMax.tablet`flex-direction: column`};
  height: 100%;
  border-top: 2px solid ${palette.darkblack};
  flex-wrap: wrap;
`;

class App extends Component {
  constructor() {
    super();
    this.updateSize = this.updateSize.bind(this);

    // Authentication
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.changeRef = this.setRef.bind(this);

    // Database management
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.addProject = this.addProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.removeProject = this.removeProject.bind(this);

    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);

    this.state = {
      todos: {},
      projects: {},
      skills: {},
      secrets: {},
      uid: null,
      isMobile: window.innerWidth <= sizes.tablet
    };

    this.ref = undefined;
  }

  componentWillMount() {
    this.setRef('unauthRef').catch((err) => console.error(err));

    const localStorageRef = {
      todos: localStorage.getItem('todos'),
      projects: localStorage.getItem('projects'),
      skills: localStorage.getItem('skills')
    };

    if (localStorageRef) {
      this.setState({
        todos: JSON.parse(localStorageRef.todos),
        projects: JSON.parse(localStorageRef.projects),
        skills: JSON.parse(localStorageRef.skills)
      });
    }

    window.addEventListener('resize', this.updateSize);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todos', JSON.stringify(nextState.todos));
    localStorage.setItem('projects', JSON.stringify(nextState.projects));
    localStorage.setItem('skills', JSON.stringify(nextState.skills));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    window.removeEventListener('resize');
  }

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
      .signInWithPopup(provider)
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

  render() {
    return (
      <Wrapper className="App wrapper">
        <Sidebar
          uid={this.state.uid}
          isMobile={this.state.isMobile}
          login={this.authenticate}
          logout={this.logout}
          updateSize={this.updateSize}
        />
        <Router
          {...this.state}
          addTodo={this.addTodo}
          updateTodo={this.updateTodo}
          removeTodo={this.removeTodo}
          addProject={this.addProject}
          updateProject={this.updateProject}
          removeProject={this.removeProject}
          addSkill={this.addSkill}
          updateSkill={this.updateSkill}
          removeSkill={this.removeSkill}
          isMobile={this.state.isMobile}
          cloudinary={this.state.secrets.cloudinary}
        />
        {this.state.isMobile ? (
          <Footer
            uid={this.state.uid}
            isMobile={this.state.isMobile}
            login={this.authenticate}
            logout={this.logout}
          />
        ) : null}
      </Wrapper>
    );
  }
}

export default App;
