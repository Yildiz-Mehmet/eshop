import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZwn-Mzv3xjVn3JsJohMy48dncDrzsjC4",
  authDomain: "eshop-bf4f6.firebaseapp.com",
  projectId: "eshop-bf4f6",
  storageBucket: "eshop-bf4f6.appspot.com",
  messagingSenderId: "941705979733",
  appId: "1:941705979733:web:e07dc23ba3bc29d77431dc",
  measurementId: "G-BJ7KHFJRF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
