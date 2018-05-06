import { Component } from 'react';
import styled from 'styled-components';

import { auth, base, database, provider } from '../base';
import Footer from './Footer';
import Router from './Router';
import Sidebar from './Sidebar';

import { slugify } from '../helpers';
import globalStyles from '../theme/globalStyles';
import { mediaMax, sizes } from '../theme/style-utils';
import { loadTheme } from '../theme/theme';
import { colors } from '../theme/variables';

const appTheme = loadTheme({});
const { palette } = appTheme;
globalStyles(appTheme);

const Wrapper = styled.div`
  display: flex;
  ${mediaMax.tablet`flex-direction: column`};
  height: 100%;
  border-top: 2px solid ${palette.darkblack};
  flex-wrap: wrap;
`;

class App extends Component {
  private _ref;

  public constructor(props: any) {
    super(props);
    this._updateSize = this._updateSize.bind(this);

    // Authentication
    this._authenticate = this._authenticate.bind(this);
    this._authHandler = this._authHandler.bind(this);
    this._logout = this._logout.bind(this);
    this._setRef = this._setRef.bind(this);

    // Database management
    this._addTodo = this._addTodo.bind(this);
    this._updateTodo = this._updateTodo.bind(this);
    this._removeTodo = this._removeTodo.bind(this);

    this._addProject = this._addProject.bind(this);
    this._updateProject = this._updateProject.bind(this);
    this._removeProject = this._removeProject.bind(this);

    this._addSkill = this._addSkill.bind(this);
    this._removeSkill = this._removeSkill.bind(this);

    this.ref = undefined;

    this.localStorage = {
      todos: localStorage.getItem('todos'),
      projects: localStorage.getItem('projects'),
      skills: localStorage.getItem('skills'),
      todos: localStorage.getItem('todos'),
    };

    this.state = {
      todos: this.localStorage ? JSON.parse(this.localStorage.todos) : {},
      projects: this.localStorage ? JSON.parse(this.localStorage.projects) : {},
      skills: this.localStorage ? JSON.parse(this.localStorage.skills) : {},
      secrets: {},
      uid: null,
      isMobile: window.innerWidth <= sizes.tablet,
      theme: appTheme
    };
  }

  componentDidMount() {
    this.setRef('unauthRef').catch((err) => console.error(err));

    window.addEventListener('resize', this.updateSize);

    auth.onAuthStateChanged((user) => {
      if (user) {
        this._authHandler({ user });
      }
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    localStorage.setItem('projects', JSON.stringify(this.state.projects));
    localStorage.setItem('skills', JSON.stringify(this.state.skills));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    window.removeEventListener('resize', this.updateSize);
  }

  public render(): JSX.Element {
    return (
      <Wrapper className="App wrapper">
        <Sidebar
          uid={this.state.uid}
          isMobile={this.state.isMobile}
          login={this._authenticate}
          logout={this._logout}
          updateSize={this._updateSize}
        />
        <Router
          {...this.state}
          addTodo={this._addTodo}
          updateTodo={this._updateTodo}
          removeTodo={this._removeTodo}
          addProject={this._addProject}
          updateProject={this._updateProject}
          removeProject={this._removeProject}
          addSkill={this._addSkill}
          updateSkill={this._updateSkill}
          removeSkill={this._removeSkill}
          isMobile={this.state.isMobile}
          cloudinary={this.state.secrets.cloudinary}
        />
        {this.state.isMobile ? (
          <Footer
            uid={this.state.uid}
            isMobile={this.state.isMobile}
            login={this._authenticate}
            logout={this._logout}
          />
        ) : null}
      </Wrapper>
    );
  }

  private _setRef(ref) {
    return new Promise((resolve, reject) => {
      if (ref !== 'unauthRef' && ref !== 'authRef') {
        reject(
          `Ref is not correctly defined. Must be either 'unauthRef' or 'authRef'. Was: ${ref}`,
        );
      }
      if (this._ref) {
        base.removeBinding(this._ref);
        this._ref = undefined;
      }
      if (ref === 'unauthRef') {
        this._ref = [
          base.bindToState('todos', {
            context: this,
            state: 'todos',
          }),
          base.bindToState('projects', {
            context: this,
            state: 'projects',
          }),
          base.bindToState('skills', {
            context: this,
            state: 'skills',
          }),
        ];
      }

      if (ref === 'authRef') {
        this._ref = [
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
          base.fetch('secrets', {
            context: this,
            then(data) {
              this.setState({ secrets: data });
            },
          }),
        ];
      }
      resolve('Ref (re)set');
    });
  }

  private _updateSize() {
    if (window.innerWidth <= sizes.tablet) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  private _authenticate() {
    auth
      .signInWithPopup(provider)
      .then(result => this._authHandler(result))
      .catch(error => console.error(error));
  }

  private async _logout(): Promise<any> {
    await this._setRef('unauthRef')
      .then(
        await auth.signOut().then(() => {
          this.setState({
            uid: null,
            secrets: {},
          });
        }),
      )
      .catch(error => console.error(error));
  }

  private _authHandler(authData) {
    const uid = authData.user.uid || authData.uid;
    const rootRef = database.ref();
    const successfulLogin = () => {
      this._setRef('authRef');
      this.setState({ uid });
    };
    rootRef.once('value').then((snapshot) => {
      const data = snapshot.val() || {};

      if (!data.owner) {
        rootRef
          .set({
            ...data,
            owner: uid,
          })
          .then(() => {
            successfulLogin();
          })
          .catch(error => console.error(error));
      } else if (data.owner === uid) {
        successfulLogin();
      } else {
        console.error('You are not the owner of this site.');
      }
    });
  }

  // update our state
  private _addTodo(todo) {
    const todos = { ...this.state.todos };
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = { ...todo };
    this.setState({ todos }); // same as this.setState({ todos: todos })
  }

  private _updateTodo(key, updatedProp) {
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

  private _removeTodo(key) {
    const todos = { ...this.state.todos };
    todos[key] = null;
    this.setState({ todos });
  }

  private _addProject(project) {
    const projects = { ...this.state.projects };
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    // set state
    this.setState({ projects });
  }

  private _updateProject(key, updatedProject) {
    const projects = { ...this.state.projects };
    projects[key] = updatedProject;
    this.setState({
      projects,
    });
  }

  private _removeProject(key) {
    const projects = { ...this.state.projects };
    projects[key] = null;
    this.setState({ projects });
  }

  private _addSkill(skill) {
    const skills = { ...this.state.skills };
    const name = slugify(skill.name);
    skills[`skill-${name}`] = skill;
    this.setState({ skills });
  }

  private _updateSkill(key, updatedSkill) {
    const skills = { ...this.state.skills };
    skills[key] = updatedSkill;
    this.setState({
      skills,
    });
  }

  private _removeSkill(key) {
    const skills = { ...this.state.skills };
    skills[key] = null;
    this.setState({ skills });
  }
}

export default App;
