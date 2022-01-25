// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO9Wmq8ONeKAqaNpRRtGwXEQFMaq_UfKw",
  authDomain: "relvnz-push-notifications.firebaseapp.com",
  projectId: "relvnz-push-notifications",
  storageBucket: "relvnz-push-notifications.appspot.com",
  messagingSenderId: "66487122200",
  appId: "1:66487122200:web:366a60aa62b8a456ac466d",
  measurementId: "G-RZK789TB4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);