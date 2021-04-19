import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "123456"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)