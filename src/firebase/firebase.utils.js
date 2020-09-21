import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLHKTtsLp_x6LO9ocqVtuftu7MKqkJQIw",
    authDomain: "crwn-db-25440.firebaseapp.com",
    databaseURL: "https://crwn-db-25440.firebaseio.com",
    projectId: "crwn-db-25440",
    storageBucket: "crwn-db-25440.appspot.com",
    messagingSenderId: "504950297675",
    appId: "1:504950297675:web:de0ddfde587545532c69ce",
    measurementId: "G-EQ5Q07S7TJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;