export interface IImage extends Object {
  format: string;
  id: string;
  name: string;
  url: string;
}

// Data types and interfaces
export interface IProject extends Object {
  category: string;
  client: {
    industry: string;
    name: string;
  };
  images: IImage[];
  link?: string;
  long_desc: string | string[];
  name: string;
  repo?: string;
  short_desc?: string | string[];
  skills: string[];
}

export interface IProjects {
  [key: string]: IProject;
}

export interface ISkill extends Object {
  category: string;
  name: string;
}

export interface ISkills {
  [key: string]: ISkill;
}

export interface ITodo extends Object {
  category: string;
  complete: boolean;
  desc: string | string[];
  link?: string;
  name: string;
  priority: string;
}

export interface ITodos {
  [key: string]: ITodo;
}

export interface IData {
  projects: IProjects;
  skills: ISkills;
  todos: ITodos;
}

export type TAddProject = (project: IProject) => void;
export type TAddSkill = (skill: ISkill) => void;
export type TAddTodo = (todo: ITodo) => void;
export type TUpdateTodo = (key: string, todo: ITodo) => void;
export type TRemoveProject = (key: string) => void;
export type TRemoveSkill = (key: string) => void;
export type TRemoveTodo = (key: string) => void;
export type TUndo = (prevData: IData, nextData: IData) => void;

export interface ILocalStorage extends Object {
  projects: string | null;
  skills: string | null;
  todos: string | null;
}

export interface IAppActions {
  addProject: TAddProject;
  addSkill: TAddSkill;
  addTodo: TAddTodo;
  updateTodo: TUpdateTodo;
  removeProject: TRemoveProject;
  removeSkill: TRemoveSkill;
  removeTodo: TRemoveTodo;
}

export interface IHomeProps {
  isMobile: boolean;
  projects: IProjects;
}

export interface IAboutProps {
  addSkill: TAddSkill;
  removeSkill: TRemoveSkill;
  skills: ISkills;
}

export interface IPortfolioProps {
  isMobile: boolean;
  projects: IProjects;
  skills: ISkills;
  addProject: TAddProject;
  removeProject: TRemoveProject;
}

export interface ITodoListProps {
  todos: ITodos;
  addTodo: TAddTodo;
  updateTodo: TUpdateTodo;
  removeTodo: TRemoveTodo;
}
