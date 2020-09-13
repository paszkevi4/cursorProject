import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA6iqq4vvKN0xir5OLsSr5ItDH4KDMlnU8',
  authDomain: 'money-tr4cker.firebaseapp.com',
  databaseURL: 'https://money-tr4cker.firebaseio.com',
  projectId: 'money-tr4cker',
  storageBucket: 'money-tr4cker.appspot.com',
  messagingSenderId: '166713825950',
  appId: '1:166713825950:web:f89759e0d5b9519714398f',
  measurementId: 'G-CN13J7CNRP',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
