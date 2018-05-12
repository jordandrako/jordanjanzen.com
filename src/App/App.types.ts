import { ITheme } from '../styling';

export type TChildren =
  | string
  | JSX.Element
  | (string | JSX.Element | null | undefined)[]
  | (() => string | JSX.Element)
  | (() => (string | JSX.Element)[])
  | null
  | undefined
  | any;

export interface IImage extends Object {
  format: string;
  id: string;
  name: string;
  url: string;
}

export interface IProjectObject extends Object {
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

export type TProject = IProjectObject;

export interface IProjects {
  [key: string]: TProject;
}

export interface ISkillObject extends Object {
  category: string;
  name: string;
}

export type TSkill = ISkillObject;

export interface ISkills {
  [key: string]: TSkill;
}

export interface ITodoObject extends Object {
  category: string;
  complete: boolean;
  desc: string | string[];
  link?: string;
  name: string;
  priority: string;
}

export type TTodo = ITodoObject;

export interface ITodos {
  [key: string]: TTodo;
}

export interface ILocalStorage extends Object {
  projects: string | null;
  skills: string | null;
  todos: string | null;
}

export type TAddProject = (project: IProjectObject) => void;
export type TAddSkill = (skill: ISkillObject) => void;
export type TAddTodo = (todo: ITodoObject) => void;
export type TUpdateProject = (key: string, project: IProjectObject) => void;
export type TUpdateSkill = (key: string, skill: ISkillObject) => void;
export type TUpdateTodo = (key: string, todo: ITodoObject) => void;
export type TRemoveProject = (key: string) => void;
export type TRemoveSkill = (key: string) => void;
export type TRemoveTodo = (key: string) => void;

export interface IAppActions {
  addProject: TAddProject;
  addSkill: TAddSkill;
  addTodo: TAddTodo;
  updateProject?: TUpdateProject;
  updateSkill: TUpdateSkill;
  updateTodo: TUpdateTodo;
  removeProject: TRemoveProject;
  removeSkill: TRemoveSkill;
  removeTodo: TRemoveTodo;
}

export interface ISecrets extends Object {
  cloudinary?: {
    api?: string;
    secret?: string;
  };
}

export interface IAppState extends IAppActions {
  isMobile: boolean;
  secrets: ISecrets;
  theme: ITheme;
  projects: {
    [key: string]: TProject | null;
  };
  skills: {
    [key: string]: TSkill | null;
  };
  todos: {
    [key: string]: TTodo | null;
  };
}

export interface IHomeProps {
  isMobile: boolean;
  projects: IProjects;
}

export interface IAboutProps {
  isLoggedIn: boolean;
  addSkill: TAddSkill;
  removeSkill: TRemoveSkill;
  skills: ISkills;
  updateSkill: TUpdateSkill;
}

export interface IPortfolioProps {
  isLoggedIn: boolean;
  isMobile: boolean;
  projects: IProjects;
  skills: ISkills;
  addProject: TAddProject;
  removeProject: TRemoveProject;
  // updateProject: TUpdateProject;
  secrets: ISecrets;
}

export interface ITodoListProps {
  todos: ITodos;
  addTodo: TAddTodo;
  updateTodo: TUpdateTodo;
  removeTodo: TRemoveTodo;
}
