import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD_fos1eL2Yr8vf0qzVNnHlcG6I1_l8TI0",
    authDomain: "sparta-react-basic-47f86.firebaseapp.com",
    databaseURL: "https://sparta-react-basic-47f86-default-rtdb.firebaseio.com",
    projectId: "sparta-react-basic-47f86",
    storageBucket: "sparta-react-basic-47f86.appspot.com",
    messagingSenderId: "1067099749487",
    appId: "1:1067099749487:web:20dadb2fa1e19260f1619a",
    measurementId: "G-NL79JS90EW"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
//const auth = firebase.auth();
const firestore =firebase.firestore();
const storage =firebase.storage();

export { apiKey, firestore, storage};