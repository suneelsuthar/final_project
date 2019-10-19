import firebase from 'firebase'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlz0Ws2mMXLtoiPGgn_lHtpQsDf-RIyE0",
  authDomain: "react-assignment-61cf0.firebaseapp.com",
  databaseURL: "https://react-assignment-61cf0.firebaseio.com",
  projectId: "react-assignment-61cf0",
  storageBucket: "react-assignment-61cf0.appspot.com",
  messagingSenderId: "371217614794",
  appId: "1:371217614794:web:4cdfe2f48334c8b100b133",
  measurementId: "G-JNQK4XL4S3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();
export {
  firebaseApp,
  provider
}

