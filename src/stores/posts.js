import { defineStore } from "pinia"

import { collection, query, where, getDocs, doc, onSnapshot, orderBy } from "firebase/firestore"
import { db } from "../service/firebase"

export const postStore = defineStore({
  id: 'posts',

  state: () => ({
    posts: []
  }),

  actions: {
    async getPosts () {
      const querySnapshot = await getDocs(collection(db, 'reels'), orderBy('timestamp', 'desc'))
      this.posts.push(
        querySnapshot.docs?.map(doc => ({
          id: doc?.id,
          ...doc?.data()
        }))
      )
    }
  }
})