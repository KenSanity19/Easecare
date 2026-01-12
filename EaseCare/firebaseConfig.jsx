import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAgnDr2LiHpWD8NklUlcqIFftdJqTpPaAo",
    authDomain: "easecare-b2f60.firebaseapp.com",
    projectId: "easecare-b2f60",
    storageBucket: "easecare-b2f60.firebasestorage.app",
    messagingSenderId: "378767833735",
    appId: "1:378767833735:android:ebca79a1dc330906c85622",
    databaseURL: "https://easecare-b2f60-default-rtdb.firebaseio.com/",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
export const app = firebase.app();

export default firebaseConfig;
