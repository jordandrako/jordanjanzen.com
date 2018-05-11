import { ITheme } from '../styling';

export interface IObject {
  [key: string]:
    | string
    | number
    | boolean
    | (string | number)[]
    | any[]
    | IObject
    | null
    | undefined;
}

export type TChildren =
  | string
  | JSX.Element
  | (string | JSX.Element)[]
  | (() => string | JSX.Element)
  | (() => (string | JSX.Element)[]);

export interface IImage extends IObject {
  format: string;
  id: string;
  name: string;
  url: string;
}

export interface IProjectObject extends IObject {
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
  // skills: {
  //   [key: number]: string;
  // };
  skills: string[];
}

export interface ISkillObject extends IObject {
  category: string;
  name: string;
}

export interface ISecretObject extends IObject {
  cloudinary?: {
    api?: string;
    secret?: string;
  };
}

export interface ITodoObject extends IObject {
  category: string;
  complete: boolean;
  desc: string | string[];
  link?: string;
  name: string;
  priority: string;
}

export interface ILocalStorage extends IObject {
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
  updateProject: TUpdateProject;
  updateSkill: TUpdateSkill;
  updateTodo: TUpdateTodo;
  removeProject: TRemoveProject;
  removeSkill: TRemoveSkill;
  removeTodo: TRemoveTodo;
}

export interface IAppState extends IAppActions {
  isMobile: boolean;
  isLoggedIn: boolean;
  projects: { [key: string]: IProjectObject };
  secrets: { [key: string]: ISecretObject };
  skills: { [key: string]: ISkillObject };
  theme: ITheme;
  todos: { [key: string]: ITodoObject };
}
