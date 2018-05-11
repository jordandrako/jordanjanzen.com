import * as firebase from 'firebase';

interface FirebaseConfiguration {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

interface QueryOptions {}

interface SyncStateOptions {
  context: {};
  state: string;
  asArray?: boolean;
  asString?: boolean;
  isNullable?: boolean;
  keepKeys?: boolean;
  queries?: QueryOptions;
  then?: () => void;
  onFailure?: () => void;
}

interface BindToStateOptions {
  context: {};
  state: string;
  asArray?: boolean;
  queries?: QueryOptions;
  then?: () => void;
  onFailure?: () => void;
}

interface ListenToOptions {
  context: {};
  asArray?: boolean;
  then: (result: any) => void;
  onFailure?: (error: any) => void;
  queries?: QueryOptions;
}

interface FetchOptions {
  context: {};
  asArray?: boolean;
  then?: (result: any) => void;
  onFailure?: () => void;
  queries?: QueryOptions;
}

interface PostOptions {
  data: any;
  then?: (result: any) => void;
}
interface PushOptions {
  data: any;
  then?: (result: any) => void;
}

interface UpdateOptions {
  data: any;
  then?: (result: any) => void;
}

interface RebaseBinding {}

interface Rebase {
  delete(callback?: () => void): void;

  syncState(endpoint: string, options: SyncStateOptions): RebaseBinding;

  bindToState(endpoint: string, options: BindToStateOptions): RebaseBinding;

  listenTo(endpoint: string, options: ListenToOptions): RebaseBinding;

  fetch(endpoint: string, options: FetchOptions): Promise<any>;

  post(endpoint: string, options: PostOptions): Promise<any>;

  push(endpoint: string, options: PushOptions): Promise<any>;

  update(endpoint: string, options: UpdateOptions): Promise<any>;

  remove(
    endpoint: string,
    callback?: (result: Promise<any>) => void
  ): Promise<any>;

  removeBinding(ref: RebaseBinding): void;

  reset(): void;

  name: string;
  storage: firebase.storage.Storage;
  database: firebase.database.Database;
  auth: firebase.auth.Auth;
  messaging: firebase.messaging.Messaging;
  app: firebase.app.App;
  initializedApp: firebase.app.App;
}

declare module 're-base' {
  /**
   * Accepts a firebase configuration object as the first argument
   * and an optional 'name' for the app as the second
   * @param {firebaseConfig} configuration: .
   * @return Rebase
   */
  export function createClass(
    firebaseConfig: firebase.database.Database,
    name?: string
  ): Rebase;
}
