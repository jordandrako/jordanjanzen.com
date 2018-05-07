import { ITheme } from "../theme/theme.types";

export interface IObject {
  [key: string]:
    | string
    | number
    | boolean
    | Array<string | number>
    | any[]
    | IObject
    | null
    | undefined;
}

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

export interface IAppState {
  isMobile: boolean;
  isLoggedIn: boolean | null;
  projects: IProject[];
  secrets: ISecret[];
  skills: ISkill[];
  theme: ITheme;
  todos: ITodo[];
}

interface IBindToStateOptions {
  context: {};
  state: string;
  asArray?: boolean;
  queries?: {};
  then?: () => void;
  onFailure?: () => void;
}

interface ISyncStateOptions {
  context: {};
  state: string;
  asArray?: boolean;
  isNullable?: boolean;
  keepKeys?: boolean;
  queries?: {};
  then?: () => void;
  onFailure?: () => void;
}

interface IRebaseBinding {}

export interface IRebase {
  syncState(endpoint: string, options: ISyncStateOptions): IRebaseBinding;
  bindToState(endpoint: string, options: IBindToStateOptions): IRebaseBinding;
}
