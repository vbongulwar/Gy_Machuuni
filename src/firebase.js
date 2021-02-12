import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApEAIxv8cHCgHx1xeM1FmMF9EZyxl6TIg",
  authDomain: "machuuni-ff07c.firebaseapp.com",
  projectId: "machuuni-ff07c",
  storageBucket: "machuuni-ff07c.appspot.com",
  messagingSenderId: "970330003929",
  appId: "1:970330003929:web:a79591c643534d0676e1c8"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };