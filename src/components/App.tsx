import * as React from 'react';
import { auth, base, database, provider } from '../base';
import { slugify } from '../helpers';
import {
  globalStyles,
  loadTheme,
  mediaMax,
  sizes,
  styled,
} from '../theme/index';
import {
  IAppState,
  ILocalStorage,
  IObject,
  IProject,
  ISkill,
  ITodo,
} from './App.types';
import AppRouter from './AppRouter';
import Footer from './Footer';
import Sidebar from './Sidebar';

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

export default class App extends React.Component<{}, IAppState> {
  private _ref?: any[];
  private _localStorage: ILocalStorage;

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

    this._ref = undefined;

    this._localStorage = {
      projects: localStorage.getItem('projects'),
      skills: localStorage.getItem('skills'),
      todos: localStorage.getItem('todos'),
    };

    this.state = {
      addProject: this._addProject,
      addSkill: this._addSkill,
      addTodo: this._addTodo,
      isLoggedIn: false,
      isMobile: window.innerWidth <= sizes.tablet,
      projects: this._localStorage.projects
        ? JSON.parse(this._localStorage.projects)
        : {},
      removeProject: this._removeProject,
      removeSkill: this._removeSkill,
      removeTodo: this._removeTodo,
      secrets: {},
      skills: this._localStorage.skills
        ? JSON.parse(this._localStorage.skills)
        : {},
      theme: appTheme,
      todos: this._localStorage.todos
        ? JSON.parse(this._localStorage.todos)
        : {},
      updateProject: this._updateProject,
      updateSkill: this._updateSkill,
      updateTodo: this._updateTodo,
    };
  }

  public componentDidMount(): void {
    this._setRef('unauthRef').catch((err: any) => {
      throw err;
    });

    window.addEventListener('resize', this._updateSize);

    auth.onAuthStateChanged(user => {
      if (user) {
        this._authHandler({ user });
      }
    });
  }

  public componentDidUpdate(): void {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    localStorage.setItem('projects', JSON.stringify(this.state.projects));
    localStorage.setItem('skills', JSON.stringify(this.state.skills));
  }

  public componentWillUnmount(): void {
    base.removeBinding(this._ref);
    window.removeEventListener('resize', this._updateSize);
  }

  public render(): JSX.Element {
    return (
      <Wrapper className="App wrapper">
        <Sidebar
          isLoggedIn={this.state.isLoggedIn}
          isMobile={this.state.isMobile}
          login={this._authenticate}
          logout={this._logout}
        />
        <AppRouter {...this.state} />
        {this.state.isMobile ? (
          <Footer
            isLoggedIn={this.state.isLoggedIn}
            isMobile={this.state.isMobile}
            login={this._authenticate}
            logout={this._logout}
          />
        ) : null}
      </Wrapper>
    );
  }

  private _setRef(ref: 'unauthRef' | 'authRef'): Promise<any[] | string> {
    return new Promise((resolve, reject) => {
      if (ref !== 'unauthRef' && ref !== 'authRef') {
        reject(
          `Ref is not correctly defined. Must be either 'unauthRef' or 'authRef'. Was: ${ref}`
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
            then(data: IObject[]) {
              this.setState({ secrets: data });
            },
          }),
        ];
      }
      resolve('Ref (re)set');
    });
  }

  private _updateSize(): void {
    if (window.innerWidth <= sizes.tablet) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  private _authenticate(): void {
    auth
      .signInWithPopup(provider)
      .then(result => this._authHandler(result))
      .catch((error: any) => {
        throw error;
      });
  }

  private _logout(): void {
    this._setRef('unauthRef')
      .then(() =>
        auth.signOut().then(() => {
          this.setState({
            isLoggedIn: false,
            secrets: {},
          });
        })
      )
      .catch((error: any) => {
        throw error;
      });
  }

  private _authHandler(authData: any): void {
    const uid = authData.user.uid || authData.uid;
    const rootRef = database.ref();
    const successfulLogin = () => {
      this._setRef('authRef');
      this.setState({ isLoggedIn: true });
    };
    rootRef.once('value').then(snapshot => {
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
          .catch((error: any) => {
            throw error;
          });
      } else if (data.owner === uid) {
        successfulLogin();
      } else {
        throw new Error('Log in denied. You are not the owner of this site.');
      }
    });
  }

  // update our state
  private _addTodo(todo: ITodo): void {
    const todos = { ...this.state.todos };
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = { ...todo };
    this.setState({ todos }); // same as this.setState({ todos: todos })
  }

  private _updateTodo(key: string, updatedProp: ITodo): void {
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

  private _removeTodo(key: string): void {
    const todos = { ...this.state.todos };
    // TODO: make sure delete works
    delete todos[key];
    this.setState({ todos });
  }

  private _addProject(project: IProject): void {
    const projects = { ...this.state.projects };
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    // set state
    this.setState({ projects });
  }

  private _updateProject(key: string, updatedProject: IProject): void {
    const projects = { ...this.state.projects };
    projects[key] = updatedProject;
    this.setState({
      projects,
    });
  }

  private _removeProject(key: string): void {
    const projects = { ...this.state.projects };
    // TODO: make sure delete works
    delete projects[key];
    this.setState({ projects });
  }

  private _addSkill(skill: ISkill): void {
    const skills = { ...this.state.skills };
    const name = slugify(skill.name);
    skills[`skill-${name}`] = skill;
    this.setState({ skills });
  }

  private _updateSkill(key: string, updatedSkill: ISkill): void {
    const skills = { ...this.state.skills };
    skills[key] = updatedSkill;
    this.setState({
      skills,
    });
  }

  private _removeSkill(key: string): void {
    const skills = { ...this.state.skills };
    // TODO: make sure delete works
    delete skills[key];
    this.setState({ skills });
  }
}
