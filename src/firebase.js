import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgVylpLOFSWoo2sL8bjCz6AOPC-6Tm3JA",
  authDomain: "disney-plus-clone-26f97.firebaseapp.com",
  projectId: "disney-plus-clone-26f97",
  storageBucket: "disney-plus-clone-26f97.appspot.com",
  messagingSenderId: "1010907576994",
  appId: "1:1010907576994:web:67734496035360019af5fb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
