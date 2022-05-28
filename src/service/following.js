import { collection, deleteDoc, updateDoc, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, setDoc, where, increment } from 'firebase/firestore'
import { db } from './firebase'

export const getFollowingById = (user, uid) => new Promise((resolve, reject) => {
  getDoc(doc(db, 'users', user, 'following', uid.id))
    .then(res => resolve(res.exists()))
})

export const updateFollowing = (user, uid, currentFollowingState) => new Promise(async (resolve, reject) => {
  if (currentFollowingState) {
    console.log('unfollow: ', currentFollowingState)
    await deleteDoc(doc(db, 'users', user, 'following', uid.id))
    await updateDoc(doc(db, 'users', user), {
      followersCount: increment(-1)
    })
  } else {
    console.log('follow: ', currentFollowingState)
    await setDoc(doc(db, 'users', user, 'following', uid.id), {
      id: uid.id,
      photoURL: uid.photoURL,
      displayName: uid.displayName
    })
    await updateDoc(doc(db, 'users', user), {
      followersCount: increment(1)
    })
  }
})