// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD3-JJhM1Ivf4QD3_L6SGbnwCdXgpjaqo",
  authDomain: "books-store-dfd37.firebaseapp.com",
  projectId: "books-store-dfd37",
  storageBucket: "books-store-dfd37.appspot.com",
  messagingSenderId: "790205000269",
  appId: "1:790205000269:web:478a4933da5ec8f523ca04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
