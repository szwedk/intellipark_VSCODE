import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCe-3jVqmFOr15FDzJw-r1XCLxe69unNjU",
    authDomain: "intellitest-7d3a9.firebaseapp.com",
    projectId: "intellitest-7d3a9",
    storageBucket: "intellitest-7d3a9.appspot.com",
    messagingSenderId: "710269923733",
    appId: "1:710269923733:web:36bf1163ac78544137069c",
    measurementId: "G-ZZ3Q7YCHXR"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
