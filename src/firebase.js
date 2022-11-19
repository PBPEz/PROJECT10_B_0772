import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  //tambahkan firebaseConfig project
  apiKey: "AIzaSyBiEgt_UjpRLyffUEPbktTFyFW31N7oG1g",
  authDomain: "vuefire0772.firebaseapp.com",
  projectId: "vuefire0772",
  storageBucket: "vuefire0772.appspot.com",
  messagingSenderId: "390633593689",
  appId: "1:390633593689:web:96bea81d61655b2107ca48"
}

//tambahkan code untuk menginisialisasikan Firebase
const firebaseApp = initializeApp(firebaseConfig);
//tambahkan code untuk menginisialisasikan Realtime Database 
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp);
