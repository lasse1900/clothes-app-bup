import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCdKSE68fBBXWCV4qM7rrnCLfbJD5t3RY0",
  authDomain: "crwn-db-dd6cb.firebaseapp.com",
  databaseURL: "https://crwn-db-dd6cb.firebaseio.com",
  projectId: "crwn-db-dd6cb",
  storageBucket: "crwn-db-dd6cb.appspot.com",
  messagingSenderId: "370836143103",
  appId: "1:370836143103:web:d8e0111bdb7c3252b1c5ca",
  measurementId: "G-SE5PCXX1L7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // console.log('------')
  // console.log(snapShot);

  // console.log(firestore.get('users/647236lasse'))
  // console.log('Succeeded Auth')

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

