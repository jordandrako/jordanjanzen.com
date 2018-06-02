// TODO: remove re-base.ts and replace with import after re-base PR is merged in @types.
import REBASE from './typings/re-base';
const rebase = require('re-base') as REBASE;
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const {
  REACT_APP_DATABASE,
  REACT_APP_PROD_KEY,
  REACT_APP_STAGING_KEY,
} = process.env;

const production = {
  apiKey: `${REACT_APP_PROD_KEY}`,
  authDomain: 'jordan-janzen.firebaseapp.com',
  databaseURL: 'https://jordan-janzen.firebaseio.com',
};

const staging = {
  apiKey: `${REACT_APP_STAGING_KEY}`,
  authDomain: 'jordan-janzen-staging.firebaseapp.com',
  databaseURL: 'https://jordan-janzen-staging.firebaseio.com',
};

const appDatabase = REACT_APP_DATABASE === 'production' ? production : staging;
const app = firebase.initializeApp(appDatabase);
export const database = firebase.database(app);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const base = rebase.createClass(database);

export const isLoggedIn = () => {
  return !!firebase.auth().currentUser;
};
