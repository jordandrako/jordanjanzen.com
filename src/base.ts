import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as rebase from 're-base';

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
const database = firebase.database(app);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const base = rebase.createClass(database);

const isLoggedIn = () => {
  return !!firebase.auth().currentUser;
};

export { auth, database, provider, base, isLoggedIn };
