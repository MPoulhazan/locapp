// Config file
import * as firebase from "firebase";

export const config = {
  apiKey: "AIzaSyAZvVWXK6ol1WYr1XKz9q8L16-QtdLlRmg",
  authDomain: "jardin-facile.firebaseapp.com",
  databaseURL: "https://jardin-facile.firebaseio.com",
  projectId: "jardin-facile",
  storageBucket: "",
  messagingSenderId: "118814528060",
  appId: "1:118814528060:web:0a051c17f39982d9"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

export const google_provider = new firebase.auth.GoogleAuthProvider();
export const facebook_provider = new firebase.auth.FacebookAuthProvider();
