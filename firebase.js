
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


export const firebaseConfig = {
   apiKey: "AIzaSyCRi3k_hT2LDBNeHUmBKJ7Qotp-OB0FfRs",
   authDomain: "onrstproject-cda99.firebaseapp.com",
   projectId: "onrstproject-cda99",
   storageBucket: "onrstproject-cda99.appspot.com",
   messagingSenderId: "850900164646",
   appId: "1:850900164646:web:84474898fb97eed40586e7"
 };

 let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();
let database = firebase.database();

export { db, auth, database };