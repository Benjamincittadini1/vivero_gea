import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDztggJbgmKAKQGMZedcTqJ8jDpORrlGM",
    authDomain: "vivero-gea.firebaseapp.com",
    projectId: "vivero-gea",
    storageBucket: "vivero-gea.appspot.com",
    messagingSenderId: "1003653798186",
    appId: "1:1003653798186:web:11bb909b81d06ebb34e653"
  };
  
const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)

