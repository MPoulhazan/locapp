// Config file
import * as firebase from "firebase";

export const config = {
    apiKey: "AIzaSyCx_gWV2xxULZeA9WrSCzYi21xRTb7UMCk",
    authDomain: "locapp-c4de3.firebaseapp.com",
    databaseURL: "https://locapp-c4de3.firebaseio.com",
    projectId: "locapp-c4de3",
    storageBucket: "locapp-c4de3.appspot.com",
    messagingSenderId: "212401663290",
    appId: "1:212401663290:web:4680cca23dd90abb60f403",
    measurementId: "G-1P8F0ZRMNC"
};

export default !firebase.apps.length
    ? firebase.initializeApp(config)
    : firebase.app();

export const google_provider = new firebase.auth.GoogleAuthProvider();
export const facebook_provider = new firebase.auth.FacebookAuthProvider();
