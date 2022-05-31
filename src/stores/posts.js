import { defineStore } from "pinia"

import { collection, query, where, getDocs, doc, onSnapshot, orderBy } from "firebase/firestore"
import { db } from "../service/firebase"

export const postStore = defineStore({
  id: 'posts',

  state: () => ({
    posts: [],
    myPosts: [],
    userPosts: []
  }),

  actions: {
    async getPosts () {
      this.posts = []

      const post = await getDocs(collection(db, 'reels'), orderBy('timestamp', 'desc'))

      this.posts.push(
        post.docs?.map(doc => ({
          id: doc?.id,
          ...doc?.data()
        }))
      )
    },

    async getMyPosts (user) {
      this.myPosts = []

      const post = await getDocs(query(collection(db, 'reels'),
        where('user.id', '==', user.id, orderBy('timestamp', 'desc'))))

      this.myPosts.push(
        post.docs?.map(doc => ({
          id: doc?.id,
          ...doc?.data()
        }))
      )
    },

    async getUserPosts (user) {
      this.userPosts = []

      const post = await getDocs(query(collection(db, 'reels'),
        where('user.id', '==', user.id, orderBy('timestamp', 'desc'))))

      this.userPosts.push(
        post.docs?.map(doc => ({
          id: doc?.id,
          ...doc?.data()
        }))
      )
    }
  }
})