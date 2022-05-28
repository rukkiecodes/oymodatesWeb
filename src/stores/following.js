import { collection, getDocs } from "firebase/firestore"
import { defineStore } from "pinia"
import { db } from "../service/firebase"

import { getFollowingById, updateFollowing } from "../service/following"

export const followingStore = defineStore({
  id: 'following',

  state: () => ({
    followState: false,
    currentFollowingState: {
      state: false
    },

    followers: []
  }),

  actions: {
    getFollowing (user, currentUser) {
      getFollowingById(user.id, currentUser)
        .then(res => {
          this.followState = res
          this.currentFollowingState = this.currentFollowingState
          this.currentFollowingState.state = res
        })
    },

    handleUpdateLike (user, currentUser) {
      updateFollowing(user.id, currentUser, this.currentFollowingState.state)
      this.getFollowing(user, currentUser)
      this.followers = []
      this.getAllFollowing(user)
      console.log('refetch following')
    },

    async getAllFollowing (user) {
      const querySnapshot = await getDocs(collection(db, 'users', user.id, 'following'))

      querySnapshot.forEach(doc => {
        this.followers = []
        this.followers.push(doc.data())
      })
    }
  }
})