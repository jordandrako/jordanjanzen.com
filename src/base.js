import Rebase from 're-base';
import firebase from 'firebase';

// eslint-disable-next-line
const production = {
  apiKey: 'AIzaSyA7SAPJlv0S3xHWvb-UpUIC9CaVkOMLdFo',
  authDomain: 'jordan-janzen.firebaseapp.com',
  databaseURL: 'https://jordan-janzen.firebaseio.com',
};

// eslint-disable-next-line
const staging = {
  apiKey: 'AIzaSyDwVQkapFHWKYRwXxOt8Sqmm18LiXet628',
  authDomain: 'jordan-janzen-staging.firebaseapp.com',
  databaseURL: 'https://jordan-janzen-staging.firebaseio.com',
};

const app = firebase.initializeApp(staging);

export const database = firebase.database(app);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const base = Rebase.createClass(database);
