/* tslint:disable */
import * as firebase from 'firebase';
// import * as reBase from 're-base';
const rebase = require('re-base');

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
