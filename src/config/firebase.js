import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb79D0LvWDnc_gfWqBKYd3gLMg8ruTZV8",
  authDomain: "slack-clone-8f228.firebaseapp.com",
  databaseURL: "https://slack-clone-8f228.firebaseio.com",
  projectId: "slack-clone-8f228",
  storageBucket: "slack-clone-8f228.appspot.com",
  messagingSenderId: "963780365872",
  appId: "1:963780365872:web:46ceaa9cccdec1879fe7f5",
  measurementId: "G-WGCXGTB7P8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
