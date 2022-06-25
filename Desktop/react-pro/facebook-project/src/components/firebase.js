import firebase from "firebase";


const firebaseConfig =firebase.initializeApp( {
  apiKey: "AIzaSyCVeiAKOY4_b-LXjGLIwdREZh_xp7p3eD4",
  authDomain: "fb-clone-824aa.firebaseapp.com",
  projectId: "fb-clone-824aa",
  storageBucket: "fb-clone-824aa.appspot.com",
  messagingSenderId: "238726128353",
  appId: "1:238726128353:web:0ff49dda2cb47ea9c64da0"
});

const auth =  firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseConfig.firestore();
const storage = firebase.storage();

export {auth, provider , db , storage}