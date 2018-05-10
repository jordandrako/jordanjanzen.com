import { ITheme } from '../theme/theme.types';

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

export interface IProject extends IObject {
  [key: string]: {
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
    skills: {
      [key: number]: string;
    };
  };
}

export interface ISkill extends IObject {
  category: string;
  name: string;
}

export interface ISecret extends IObject {
  cloudinary?: {
    api?: string;
    secret?: string;
  };
}

export interface ITodo extends IObject {
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

export interface IAppActions {
  addProject: (project: IProject) => void;
  addSkill: (skill: ISkill) => void;
  addTodo: (todo: ITodo) => void;
  updateProject: (key: string, project: IProject) => void;
  updateSkill: (key: string, skill: ISkill) => void;
  updateTodo: (key: string, todo: ITodo) => void;
  removeProject: (key: string) => void;
  removeSkill: (key: string) => void;
  removeTodo: (key: string) => void;
}

export interface IAppState extends IAppActions {
  isMobile: boolean;
  isLoggedIn: boolean;
  projects: { [key: string]: IProject };
  secrets: { [key: string]: ISecret };
  skills: { [key: string]: ISkill };
  theme: ITheme;
  todos: { [key: string]: ITodo };
}
