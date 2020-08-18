import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdKDKgGZ9ejJ6b3g7LlQRJ_xhzT7OSoXk",
  authDomain: "slack-clone-4644f.firebaseapp.com",
  databaseURL: "https://slack-clone-4644f.firebaseio.com",
  projectId: "slack-clone-4644f",
  storageBucket: "slack-clone-4644f.appspot.com",
  messagingSenderId: "297452613113",
  appId: "1:297452613113:web:af33ba43f0d33a29292128",
  measurementId: "G-SPJNVTPZJ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
