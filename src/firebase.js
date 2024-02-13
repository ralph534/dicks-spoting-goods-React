import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxqCxtZ6vFyCaUplDtTMdmSw9GXtJszzg",
    authDomain: "dicks-sporting-goods-3bf29.firebaseapp.com",
    projectId: "dicks-sporting-goods-3bf29",
    storageBucket: "dicks-sporting-goods-3bf29.appspot.com",
    messagingSenderId: "757494839564",
    appId: "1:757494839564:web:52d31b4a1ef08c721b7129",
    measurementId: "G-GPTFZTC6VZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };