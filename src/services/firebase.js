
import * as firebase from "firebase";

 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBHOPPXLx4bHHZ8R6yt6xTFGzLV_2I4qto",
    authDomain: "getmyphone-4fa44.firebaseapp.com",
    databaseURL: "https://getmyphone-4fa44.firebaseio.com",
    projectId: "getmyphone-4fa44",
    storageBucket: "getmyphone-4fa44.appspot.com",
    messagingSenderId: "636459233423",
    appId: "1:636459233423:web:40956e5955f0d7db"
  };

  // Initialize Firebase
  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  //  let app =  firebase.initializeApp(firebaseConfig);
 // export const db = app.database()
