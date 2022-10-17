import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA38tB_xSDNPp2Z1_OC1Bc1yn1dpEfiCBY",
  authDomain: "los-eso-brad-55193.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/los-eso-brad-55193/storage/los-eso-brad-55193.appspot.com/files",
  projectId: "los-eso-brad-55193",
  storageBucket: "los-eso-brad-55193.appspot.com",
  messagingSenderId: "146957609760",
  appId: "1:146957609760:web:378d963718ebd870e2c545",
  measurementId: "G-P154D4MHSB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth() 

const firebaseStorage = getStorage(app);

//const analytics = getAnalytics(app);

export { app, auth, firebaseStorage }