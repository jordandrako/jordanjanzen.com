import { auth as fAuth, database as fDatabase, initializeApp } from 'firebase';
// TODO: remove re-base.ts and replace with import after re-base PR is merged in @types.
import REBASE from './typings/re-base';
const rebase = require('re-base') as REBASE;

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
const app = initializeApp(appDatabase);
export const database = fDatabase(app);
export const auth = fAuth();
export const provider = new fAuth.GoogleAuthProvider();
export const base = rebase.createClass(database);

export const isLoggedIn = () => {
  return !!fAuth().currentUser;
};
