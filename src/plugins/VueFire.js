import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyB4_JJHpFzgvVz6tj5mw6ypWEIArK9DnZU",
  authDomain: "cshs-4-year-plan.firebaseapp.com",
  projectId: "cshs-4-year-plan",
  storageBucket: "cshs-4-year-plan.appspot.com",
  messagingSenderId: "156113638066",
  appId: "1:156113638066:web:37bb6e1628c46abe726fab",
  measurementId: "G-LZ7WWH4HM1"
})


// used for the firestore refs
export const db = getFirestore(firebaseApp)


// here we can export reusable database references
export const classesRef = collection(db, '/classes')

