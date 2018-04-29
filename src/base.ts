import Rebase from 're-base';
import firebase from 'firebase';

const production = {
  apiKey: 'AIzaSyA7SAPJlv0S3xHWvb-UpUIC9CaVkOMLdFo',
  authDomain: 'jordan-janzen.firebaseapp.com',
  databaseURL: 'https://jordan-janzen.firebaseio.com',
};

const staging = {
  apiKey: 'AIzaSyDwVQkapFHWKYRwXxOt8Sqmm18LiXet628',
  authDomain: 'jordan-janzen-staging.firebaseapp.com',
  databaseURL: 'https://jordan-janzen-staging.firebaseio.com',
};

const env = () => {
  if (process.env.REACT_APP_DATABASE === 'production') {
    return production;
  }
  return staging;
}

const app = firebase.initializeApp(env());

export const database = firebase.database(app);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const base = Rebase.createClass(database);
