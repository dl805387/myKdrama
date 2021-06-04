import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAOPofQdhnNr7m71shZHs9t4TPpwa5-A-8",
    authDomain: "mykdrama-9be57.firebaseapp.com",
    projectId: "mykdrama-9be57",
    storageBucket: "mykdrama-9be57.appspot.com",
    messagingSenderId: "586699840037",
    appId: "1:586699840037:web:1138081ab56927c9f33dcc",
    measurementId: "G-FB6SGSGKVK"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;