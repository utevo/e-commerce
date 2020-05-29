import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB8Hbr9xQNkE15HOdjE4b74dXp0xZY2SGs",
  authDomain: "e-commerce-192d9.firebaseapp.com",
  databaseURL: "https://e-commerce-192d9.firebaseio.com",
  projectId: "e-commerce-192d9",
  storageBucket: "e-commerce-192d9.appspot.com",
  messagingSenderId: "155415201657",
  appId: "1:155415201657:web:f137b442999a1aa6e151a8",
  measurementId: "G-5Y4Y1R46HQ"
}

export const provideUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnapshot = await userRef.get()

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase