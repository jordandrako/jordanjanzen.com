import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as rebase from 're-base';

const {
  REACT_APP_DATABASE,
  REACT_APP_PROD_KEY,
  REACT_APP_STAGING_KEY,
} = process.env;

let config = {};

switch (REACT_APP_DATABASE) {
  case 'production':
    config = {
      ...config,
      apiKey: `${REACT_APP_PROD_KEY}`,
      authDomain: 'jordan-janzen.firebaseapp.com',
      databaseURL: 'https://jordan-janzen.firebaseio.com',
    };
    break;

  default:
    config = {
      ...config,
      apiKey: `${REACT_APP_STAGING_KEY}`,
      authDomain: 'jordan-janzen-staging.firebaseapp.com',
      databaseURL: 'https://jordan-janzen-staging.firebaseio.com',
    };
    break;
}

const app = firebase.initializeApp(config);

export const database = firebase.database(app);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const base = rebase.createClass(database);

export const isLoggedIn = () => !!firebase.auth().currentUser;
