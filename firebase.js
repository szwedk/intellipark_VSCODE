// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBElIGOIZ1AbUQb_MkEyhbKVbvZ_TngeM4",
  authDomain: "intellipark-cd7ee.firebaseapp.com",
  projectId: "intellipark-cd7ee",
  storageBucket: "intellipark-cd7ee.appspot.com",
  messagingSenderId: "937943778163",
  appId: "1:937943778163:web:6ddab8f971cbd7c8387b06",
  measurementId: "G-ETZXL5RNVN"
};
export const auth = getAuth(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);