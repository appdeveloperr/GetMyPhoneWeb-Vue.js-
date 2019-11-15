import store from "@/store";
import firebase from 'firebase';
import { async } from "q";
 

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
const database =  firebase.initializeApp(firebaseConfig);

database.signUp = async (email,password) =>{
 
      try{
        
        await firebase.auth().createUserWithEmailAndPassword(email,password)

        store.commit('setCurrentUser',firebase.auth().currentUser);
        return true;
      }
      catch (error){
        return error;
      }

}



database.signIn = async (email,password) =>{
 
  try{
    await firebase.auth().signInWithEmailAndPassword(email,password)

    store.commit('setCurrentUser',firebase.auth().currentUser);
    return true;
  }
  catch (error){
    return error;
  }

}



database.signOut = 
(async () => {
 
  try{
    await firebase.auth().signOut();
    store.commit('setCurrentUser',null);
    return true;
  }

catch (error){
  return error;
}

})();


export const db = database.database()

export default database
