import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi5HwxR5Qf-4sBzsZ1a62qxT_SUu5Cqc4",
    authDomain: "linkedin-clone-decbb.firebaseapp.com",
    projectId: "linkedin-clone-decbb",
    storageBucket: "linkedin-clone-decbb.appspot.com",
    messagingSenderId: "227223126003",
    appId: "1:227223126003:web:6a1c514d0de1d925a21c86",
    measurementId: "G-WTJHCFX2FG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};