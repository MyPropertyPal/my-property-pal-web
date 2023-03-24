// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLOemS_I1VO-2FztJW2Tiqz81lKjms7ag",
  authDomain: "my-property-pal-337e2.firebaseapp.com",
  projectId: "my-property-pal-337e2",
  storageBucket: "my-property-pal-337e2.appspot.com",
  messagingSenderId: "735822899863",
  appId: "1:735822899863:web:35f0f70698a74349ed17d2",
  measurementId: "G-JF26VZSKL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const db = getFirestore();

export { auth, db}
