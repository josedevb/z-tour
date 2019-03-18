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

export const createFirebaseAccount = (email, password, name, lastname) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            database.ref('usuario/' + user.user.uid).set({
                name,
                lastname,
                email,
                logros1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                logros2: 0,
                logros3: [false, false, false, false, false, false, false, false, false, false],
                logros4: false,
                likes: [false, false, false, false, false, false, false, false, false, false],
                // profile_picture: imageUrl
            });
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('This email address is already taken');
                    break;
                case 'auth/invalid-email':
                    alert('Invalid e-mail address format');
                    break;
                case 'auth/weak-password':
                    alert('Password is too weak');
                    break;
                default:
                    return null
            }
        })