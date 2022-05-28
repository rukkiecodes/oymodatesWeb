import { defineStore } from "pinia"

import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import { db } from '../service/firebase'

import VueCookies from 'vue-cookies'

import generateId from '../lib/generateId'

import router from '../router'

export const MatchStore = defineStore({
  id: 'match',
  state: () => ({
    users: [],
    userInfo: null,
    userSwiped: null
  }),

  getters: {
    renderUsers: state => state.users
  },

  actions: {
    async getUsers () {
      let unsub

      const user = await VueCookies.get('oymoUser')
      const passes = await getDocs(collection(db, 'users', user.uid, 'passes'))
        .then(snapshot => snapshot.docs.map(doc => doc.id))

      const passedUserId = (await passes).length > 0 ? passes : ['test']

      const swipes = await getDocs(collection(db, 'users', user.uid, 'swipes'))
        .then(snapshot => snapshot.docs.map(doc => doc.id))

      const swipedUserId = (await swipes).length > 0 ? swipes : ['test']

      onSnapshot(query(collection(db, 'users'),
        where('id', 'not-in', [...passedUserId, ...swipedUserId])
      ),
        snapshot => {
          this.users.push(
            snapshot.docs.filter(doc => doc.id !== user.uid)
              .map(doc => ({
                id: doc.id,
                ...doc.data()
              }))
          )
        })
    },

    async remount () {
      console.log("remount")
      this.users = []
      this.userInfo = null
      await this.getUsers()
    },

    viewUser (user) {
      this.userInfo = user
    },

    async swipeRight (userSwiped, currentUser) {
      const user = await VueCookies.get('oymoUser')

      getDoc(doc(db, 'users', userSwiped.id, 'swipes', user.uid))
        .then(documentSnapshot => {
          if (documentSnapshot.exists()) {
            console.log(`Hooray, you matched with ${userSwiped.displayName}`)

            setDoc(doc(db, 'users', user.uid, 'swipes', userSwiped.id), userSwiped)
            this.remount()

            // CREATE A MATCH
            setDoc(doc(db, 'matches', generateId(user.uid, userSwiped.id)), {
              users: {
                [user.uid]: currentUser,
                [userSwiped.id]: userSwiped
              },
              usersMatched: [user.uid, userSwiped.id],
              timestamp: serverTimestamp()
            }).finally(async () => {
              await deleteDoc(doc(db, 'users', user.uid, 'pendingSwipes', userSwiped.id))
              await deleteDoc(doc(db, 'users', userSwiped.id, 'pendingSwipes', user.uid))
              this.remount()
            })

            router.push('/newMatch')
            this.userSwiped = userSwiped
            this.remount()
          } else {
            console.log(`You swiped on ${userSwiped.displayName}`)
            this.getUsers()

            setDoc(doc(db, 'users', user.uid, 'swipes', userSwiped.id), userSwiped)

            this.remount()
          }
        })

      setDoc(doc(db, 'users', userSwiped.id, 'pendingSwipes', user.uid), currentUser)
      setDoc(doc(db, 'users', user.uid, 'swipes', userSwiped.id), userSwiped)
    }
  }
})