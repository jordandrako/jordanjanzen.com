import * as firebase from 'firebase';

interface IQueryOptions {}

interface ISyncStateOptions {
  context: {};
  state: string;
  asArray?: boolean;
  asString?: boolean;
  isNullable?: boolean;
  keepKeys?: boolean;
  queries?: IQueryOptions;
  then?: () => void;
  onFailure?: () => void;
}

interface IBindToStateOptions {
  context: {};
  state: string;
  asArray?: boolean;
  queries?: IQueryOptions;
  then?: () => void;
  onFailure?: () => void;
}

interface IListenToOptions {
  context: {};
  asArray?: boolean;
  then: (result: any) => void;
  onFailure?: (error: any) => void;
  queries?: IQueryOptions;
}

interface IFetchOptions {
  context: {};
  asArray?: boolean;
  then?: (result: any) => void;
  onFailure?: () => void;
  queries?: IQueryOptions;
}

interface IPostOptions {
  data: any;
  then?: (result: any) => void;
}
interface IPushOptions {
  data: any;
  then?: (result: any) => void;
}

interface IUpdateOptions {
  data: any;
  then?: (result: any) => void;
}

interface IRebaseBinding {}

interface IRebase {
  name: string;
  storage: firebase.storage.Storage;
  database: firebase.database.Database;
  auth: firebase.auth.Auth;
  messaging: firebase.messaging.Messaging;
  app: firebase.app.App;
  initializedApp: firebase.app.App;
  delete(callback?: () => void): void;

  syncState(endpoint: string, options: ISyncStateOptions): IRebaseBinding;

  bindToState(endpoint: string, options: IBindToStateOptions): IRebaseBinding;

  listenTo(endpoint: string, options: IListenToOptions): IRebaseBinding;

  fetch(endpoint: string, options: IFetchOptions): Promise<any>;

  post(endpoint: string, options: IPostOptions): Promise<any>;

  push(endpoint: string, options: IPushOptions): Promise<any>;

  update(endpoint: string, options: IUpdateOptions): Promise<any>;

  remove(
    endpoint: string,
    callback?: (result: Promise<any>) => void
  ): Promise<any>;

  removeBinding(ref: IRebaseBinding): void;

  reset(): void;
}

export default interface IREBASE {
  /**
   * Accepts a firebase configuration object as the first argument
   * and an optional 'name' for the app as the second
   * @param {firebaseConfig} configuration: .
   * @return {IRebase}
   */
  createClass(
    firebaseConfig: firebase.database.Database,
    name?: string
  ): IRebase;
}
