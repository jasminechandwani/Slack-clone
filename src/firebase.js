import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXku6EC8CLkB1488hm8iMYXxlQwrvEIxM",
  authDomain: "slack-clone-974de.firebaseapp.com",
  projectId: "slack-clone-974de",
  storageBucket: "slack-clone-974de.appspot.com",
  messagingSenderId: "717535420557",
  appId: "1:717535420557:web:bbe746f287d59abf0742c4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, db, provider };