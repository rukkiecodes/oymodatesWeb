import { defineStore } from "pinia"

import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

import VueCookies from 'vue-cookies'

export const MatchStore = defineStore({
  id: 'match',
  state: () => ({
    users: [],
    userInfo: null
  }),

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

      unsub =
        onSnapshot(query(collection(db, 'users'), where('id', 'not-in', [...passedUserId, ...swipedUserId])),
          snapshot => {
            this.users.push(
              snapshot.docs.filter(doc => doc.id !== user.uid)
                .map(doc => ({
                  id: doc.id,
                  ...doc.data()
                }))
            )
          })
      return unsub
    },

    viewUser (user) {
      this.userInfo = user
    }
  }
})