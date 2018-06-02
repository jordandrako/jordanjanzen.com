import { auth, base, database, isLoggedIn, provider } from 'base';
import * as firebase from 'firebase/app';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getTheme, ITheme, screenSizesPx } from 'styling';
import { RebaseBinding } from 'typings/re-base';
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
    this.getBinding('sync').then(() => {
      const localEmpty = Object.keys(localItems).every(
        key => localItems[key] === null
      );
      setTimeout(() => {
        setLocalStorage('projects', { ...this.state.projects });
        setLocalStorage('skills', { ...this.state.skills });
        setLocalStorage('todos', { ...this.state.todos });
        localEmpty && this.updatePage();
      }, 2000);
    });
    auth.onAuthStateChanged(
      (user: firebase.User | null) => user && this.authHandler(user),
      (error: any) => console.error(error)
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

  public getBinding = (type: 'sync' | 'bind'): Promise<RebaseBinding[]> => {
    return new Promise(resolve => {
      const bind = (state: string): RebaseBinding => {
        return base.bindToState(state, {
          context: this,
          state,
        });
      };

      const sync = (state: string): RebaseBinding => {
        return type === 'sync' && isLoggedIn()
          ? base.syncState(state, {
              context: this,
              onFailure: () => {
                bind(state);
              },
              state,
            })
          : bind(state);
      };

      resolve([sync('projects'), sync('skills'), sync('todos')]);
    });
  };

  public updatePage = (): void => {
    this.props.history.push(location.pathname);
  };

  public authHandler = (authData: any): Promise<any> => {
    const { uid } = authData;
    const rootRef = database.ref();
    const successfulLogin = () => {
      this.getBinding('sync').then(() => this.updatePage());
    };
    return new Promise((resolve, reject) => {
      rootRef.once('value').then(snapshot => {
        const data = snapshot.val() || {};

        if (!data.owner) {
          rootRef
            .set({
              ...data,
              owner: uid,
            })
            .then(() => resolve(successfulLogin()))
            .catch((error: any) => {
              console.error(error);
            });
        } else if (data.owner === uid) {
          resolve(successfulLogin());
        } else {
          reject('Log in denied. You are not the owner of this site.');
        }
      });
    });
  };

  public login = (): void => {
    auth
      .signInWithPopup(provider)
      .then(result => this.authHandler(result.user))
      .catch((error: any) => console.error(error));
  };

  public logout = (): void => {
    this.getBinding('bind').then(result => {
      auth
        .signOut()
        .then(() => this.updatePage())
        .catch((error: any) => console.error(error));
    });
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
    // },
  };

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

  private _updateContext = (state: string, data: IProjects | ISkills): void => {
    setLocalStorage(state, data);
    this.setState((prevState, props) => ({
      ...prevState,
      [state]: { ...data },
      // },
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
