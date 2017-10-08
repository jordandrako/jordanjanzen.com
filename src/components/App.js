import React, { Component } from 'react';
import styled from 'styled-components';

import { database, base, auth, provider } from '../base';
import Sidebar from './Sidebar';
import Router from './Router';

import { colors } from '../theme/variables';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  border-top: 2px solid ${colors.darkblack};
`;

class App extends Component {
  constructor() {
    super();
    // Authentication
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
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
      uid: null,
      owner: null,
    };
  }

  componentWillMount() {
    this.ref = [
      base.syncState('todos', {
        context: this,
        state: 'todos',
      }),
      base.syncState('projects', {
        context: this,
        state: 'projects',
      }),
      base.syncState('skills', {
        context: this,
        state: 'skills',
      }),
    ];

    const localStorageRef = {
      todos: localStorage.getItem('todos'),
      projects: localStorage.getItem('projects'),
      skills: localStorage.getItem('skills'),
    };
    if (localStorageRef) {
      this.setState({
        todos: JSON.parse(localStorageRef.todos),
        projects: JSON.parse(localStorageRef.projects),
        skills: JSON.parse(localStorageRef.skills),
      });
    }
  }

  componentDidMount() {
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ uid: user.uid });
    //   }
    // });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todos', JSON.stringify(nextState.todos));
    localStorage.setItem('projects', JSON.stringify(nextState.projects));
    localStorage.setItem('skills', JSON.stringify(nextState.skills));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  authenticate() {
    auth.signInWithPopup(provider).then((result) => this.authHandler(result));
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({ uid: null });
      console.log('Logout');
    });
  }

  authHandler(authData) {
    const rootRef = database.ref();
    rootRef.once('value').then((snapshot) => {
      const data = snapshot.val() || {};

      if (!data.owner) {
        rootRef.set({
          ...data,
          owner: authData.user.uid,
        });
        this.setState({
          uid: authData.user.uid,
          owner: data.owner || authData.user.uid,
        });
      }
      if (data.owner === authData.user.uid) {
        this.setState({
          uid: authData.user.uid,
          owner: data.owner || authData.user.uid,
        });
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
      ...updatedProp,
    };
    todos[key] = updatedTodo;
    this.setState({
      todos,
    });
  }

  removeTodo(key) {
    const todos = { ...this.state.todos };
    // delete todos[key];
    todos[key] = null;
    this.setState({ todos });
  }

  addProject(project) {
    // update our state
    // copy our state
    const projects = { ...this.state.projects };
    // add in our new project
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    // set state
    this.setState({ projects }); // same as this.setState({ projects: projects })
  }

  updateProject(key, updatedProject) {
    const projects = { ...this.state.projects };
    projects[key] = updatedProject;
    this.setState({
      projects,
    });
  }

  removeProject(key) {
    const projects = { ...this.state.projects };
    projects[key] = null;
    this.setState({ projects });
  }

  addSkill(skill) {
    // update our state
    // copy our state
    const skills = { ...this.state.skills };
    // add in our new skill
    const timestamp = Date.now();
    skills[`skill-${timestamp}`] = skill;
    // set state
    this.setState({ skills }); // same as this.setState({ skills: skills })
  }

  updateSkill(key, updatedSkill) {
    const skills = { ...this.state.skills };
    skills[key] = updatedSkill;
    this.setState({
      skills,
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
          className="Sidebar"
          uid={this.state.uid}
          login={this.authenticate}
          logout={this.logout}
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
          login={this.authenticate}
          logout={this.logout}
        />
      </Wrapper>
    );
  }
}

export default App;
