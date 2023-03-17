import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAkBvh5KmHHGnGYpx1Cd6ZKFUQKx9jOw_0",
    authDomain: "linkedin-clone-ak-41f75.firebaseapp.com",
    projectId: "linkedin-clone-ak-41f75",
    storageBucket: "linkedin-clone-ak-41f75.appspot.com",
    messagingSenderId: "141691643784",
    appId: "1:141691643784:web:372648d261d9b763837c3d"
  };

//   connects evthg
  const firebaseApp=firebase.initializeApp(firebaseConfig)

// get
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};