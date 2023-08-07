import { createApp } from "vue";
import App from "./App.vue";
import "./css/global.css";
import router from "./routers/index.js";
// import message from "./utils/message";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIlHQ9zj_1HOXT7cHtWliLMHuk8bIRX64",
  authDomain: "friends-nearby-liiv.firebaseapp.com",
  projectId: "friends-nearby-liiv",
  storageBucket: "friends-nearby-liiv.appspot.com",
  messagingSenderId: "740577207754",
  appId: "1:740577207754:web:1ac78d70715e7dc0d9db33",
  measurementId: "G-MKEJLR6KZC",
  databaseURL:
    "https://friends-nearby-liiv-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Realtime Database and get a reference to the service
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { database };

createApp(App).use(router).mount("#app");
