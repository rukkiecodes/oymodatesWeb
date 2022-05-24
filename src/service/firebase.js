import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.APPID,
  measurementId: import.meta.env.MEASUREMENTID
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }