import { auth, base, database, provider } from 'base';
import * as firebase from 'firebase/app';
import { RebaseBinding } from 're-base';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getTheme, ITheme, screenSizesPx } from 'styling';
import { setLocalStorage, slugify } from 'utilities';
import {
  ILocalStorage,
  IProject,
  IProjects,
  ISkill,
  ISkills,
  ITodo,
  ITodos,
  TAddProject,
  TAddSkill,
  TAddTodo,
  TRemoveProject,
  TRemoveSkill,
  TRemoveTodo,
  TUpdateTodo,
} from './App.types';

interface IAppContextState {
  auth: {
    login?: () => void;
    logout?: () => void;
  };
  addProject?: TAddProject;
  addSkill?: TAddSkill;
  addTodo?: TAddTodo;
  isMobile: boolean;
  bindType: string;
  projects: IProjects;
  removeProject?: TRemoveProject;
  removeSkill?: TRemoveSkill;
  removeTodo?: TRemoveTodo;
  skills: ISkills;
  theme: ITheme;
  todos: ITodos;
  updateTodo?: TUpdateTodo;
}

interface IAppContextProps extends RouteComponentProps<any> {}

const localItems: ILocalStorage = {
  projects: localStorage.getItem('projects'),
  skills: localStorage.getItem('skills'),
  todos: localStorage.getItem('todos'),
};

const defaultState: IAppContextState = {
  auth: {},
  bindType: 'none',
  isMobile: window.innerWidth <= screenSizesPx.tablet,
  projects: localItems.projects ? JSON.parse(localItems.projects) : {},
  skills: localItems.skills ? JSON.parse(localItems.skills) : {},
  theme: getTheme(),
  todos: localItems.todos ? JSON.parse(localItems.todos) : {},
};

export const AppContext = React.createContext(defaultState);

class AppProvider extends React.Component<IAppContextProps, IAppContextState> {
  public componentDidMount(): void {
    this._getBinding('bind').catch(() => console.error);

    auth.onAuthStateChanged(
      (user: firebase.User | null) =>
        user &&
        this._authHandler(user)
          .then(this._updatePage)
          .catch(() => console.error)
    );
  }

  public addProject = (project: IProject): void => {
    const projects = { ...this.state.projects };
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    this._updateContext('projects', { ...projects });
  };

  public addSkill = (skill: ISkill): void => {
    const skills = { ...this.state.skills };
    const name = slugify(skill.name);
    skills[`skill-${name}`] = skill;
    this._updateContext('skills', { ...skills });
  };

  public addTodo = (todo: ITodo): void => {
    const todos = { ...this.state.todos };
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = { ...todo };
    this._updateContext('todos', { ...todos });
  };

  public removeProject = (key: string): void => {
    const projects = { ...this.state.projects };
    projects[key] = null;
    this._updateContext('projects', { ...projects });
  };

  public removeSkill = (key: string): void => {
    const skills = { ...this.state.skills };
    skills[key] = null;
    this._updateContext('skills', { ...skills });
  };

  public removeTodo = (key: string): void => {
    const todos = { ...this.state.todos };
    todos[key] = null;
    this._updateContext('todos', { ...todos });
  };

  public updateTodo = (key: string, updatedProp: ITodo): void => {
    const todos: ITodos = { ...this.state.todos };
    const todo = todos[key];
    const updatedTodo = {
      ...todo,
      ...updatedProp,
    };
    todos[key] = updatedTodo;
    this._updateContext('todos', todos);
  };

  public login = async (): Promise<any> => {
    const result = await auth
      .signInWithPopup(provider)
      .catch(() => console.error);
    await this._authHandler(result.user).catch(() => console.error);
  };

  public logout = async (): Promise<any> => {
    await this._getBinding('bind').catch(() => console.error);
    await auth.signOut().catch(() => console.error);
    this._updatePage();
  };

  // tslint:disable-next-line:member-ordering
  public state: IAppContextState = {
    ...defaultState,
    addProject: this.addProject,
    addSkill: this.addSkill,
    addTodo: this.addTodo,
    auth: {
      ...defaultState.auth,
      login: this.login,
      logout: this.logout,
    },
    removeProject: this.removeProject,
    removeSkill: this.removeSkill,
    removeTodo: this.removeTodo,
    updateTodo: this.updateTodo,
  };

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

  private _updatePage = (): void => {
    this.props.history.push(location.pathname);
  };

  private _authHandler = (authData: any): Promise<any> => {
    const { uid } = authData;
    const rootRef = database.ref();
    return new Promise((resolve, reject) => {
      rootRef.once('value').then(snapshot => {
        const data = snapshot.val() || {};

        if (!data.owner) {
          rootRef
            .set({
              ...data,
              owner: uid,
            })
            .then(() => resolve(this._successfulLogin()))
            .catch(() => console.error);
        } else if (data.owner === uid) {
          resolve(this._successfulLogin());
        } else {
          auth.signOut();
          reject(
            new Error('Log in denied. You are not the owner of this site.')
          );
        }
      });
    });
  };

  private _successfulLogin = async () => {
    await this._getBinding('sync').catch(() => console.error);
    this._updatePage();
  };

  private _getBinding = async (
    type: 'sync' | 'bind'
  ): Promise<RebaseBinding[]> => {
    const bindOrSync = (state: string): Promise<RebaseBinding> => {
      return new Promise((resolve, reject) => {
        if (type === 'bind') {
          resolve(
            base.bindToState(state, {
              context: this,
              state,
              then: () => setLocalStorage(state, this.state[state]),
            })
          );
        }
        if (type === 'sync') {
          this.setState({ bindType: 'sync' });
          resolve(
            base.syncState(state, {
              context: this,
              state,
              then: () => setLocalStorage(state, this.state[state]),
            })
          );
        }
        reject(new Error('You must pass "bind" or "sync" to this method.'));
      });
    };

    const binding = await Promise.all([
      bindOrSync('projects'),
      bindOrSync('skills'),
      bindOrSync('todos'),
    ]);

    return binding;
  };

  private _updateContext = (state: string, data: IProjects | ISkills): void => {
    setLocalStorage(state, data);
    this.setState((prevState, props) => ({
      ...prevState,
      [state]: { ...data },
    }));
  };
}

export default withRouter(AppProvider);

export function withProjects(Component: any) {
  return function ComponentWithProjects(props: any) {
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <Component
              {...props}
              projects={context.projects}
              addProject={context.addProject}
              removeProject={context.removeProject}
            />
          );
        }}
      </AppContext.Consumer>
    );
  };
}

export function withSkills(Component: any) {
  return function ComponentWithSkills(props: any) {
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <Component
              {...props}
              skills={context.skills}
              addSkill={context.addSkill}
              removeSkill={context.removeSkill}
            />
          );
        }}
      </AppContext.Consumer>
    );
  };
}

export function withTodos(Component: any) {
  return function ComponentWithTodos(props: any) {
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <Component
              {...props}
              todos={context.todos}
              addTodo={context.addTodo}
              removeTodo={context.removeTodo}
              updateTodo={context.updateTodo}
            />
          );
        }}
      </AppContext.Consumer>
    );
  };
}

export function withAuth(Component: any) {
  return function ComponentWithAuth(props: any) {
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <Component
              {...props}
              login={context.auth.login}
              logout={context.auth.logout}
            />
          );
        }}
      </AppContext.Consumer>
    );
  };
}
