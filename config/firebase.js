import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDZuURgH4fcW04KHFIC7FKn8iwvBQQcwg8",
    authDomain: "ztourapp-8df03.firebaseapp.com",
    databaseURL: "https://ztourapp-8df03.firebaseio.com",
    projectId: "ztourapp-8df03",
    storageBucket: "ztourapp-8df03.appspot.com",
    messagingSenderId: "203447013094"
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();