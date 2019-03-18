import firebase from "firebase";

class Firebase {

  userLogin = (email, password) => {
    return new Promise(resolve => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              console.warn('Invalid email address format.');
              break;
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              console.warn('Invalid email address or password');
              break;
            default:
              console.warn('Check your internet connection');
          }
          resolve(null);
        }).then(user => {
        if (user) {
          resolve(user);
        }
      });
    })
  };

  createFirebaseAccount = (name, email, password) => {
    return new Promise(resolve => {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.warn('This email address is already taken');
            break;
          case 'auth/invalid-email':
            console.warn('Invalid e-mail address format');
            break;
          case 'auth/weak-password':
            console.warn('Password is too weak');
            break;
          default:
            console.warn('Check your internet connection');
        }
        resolve(false);
      }).then(info => {
        if (info) {
          firebase.auth().currentUser.updateProfile({
            displayName: name
          });
          resolve(true);
        }
      });
    });
  };

  sendEmailWithPassword = (email) => {
    return new Promise(resolve => {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          alert('Email con el nuevo password fue enviado.');
          resolve(true);
        }).catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('Formato de email no valido');
              break;
            case 'auth/user-not-found':
              alert('El usuario de este email no existe.');
              break;
            default:
              alert('Check your internet connection');
          }
          resolve(false);
        });
    })
  };

}

export default new Firebase();
