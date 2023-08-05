import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // apiKey: 'AIzaSyAYr6QFc2mmkr5LErM49wtlrsle6XhurYk',
  // authDomain: 'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN',
  // projectId: 'auth-development-d3782',
  // storageBucket: 'auth-development-d3782.appspot.com',
  // messagingSenderId: '1058090785698',
  // appId: '1:1058090785698:web:0949a65835277a1b44f0fb',
});

export const auth = app.auth();

export default app;






