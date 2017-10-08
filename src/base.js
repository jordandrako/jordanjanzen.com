import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA7SAPJlv0S3xHWvb-UpUIC9CaVkOMLdFo',
  authDomain: 'jordan-janzen.firebaseapp.com',
  databaseURL: 'https://jordan-janzen.firebaseio.com',
});

export const database = firebase.database(app);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const base = Rebase.createClass(database);
