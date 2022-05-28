import { defineStore } from "pinia"

import { getFollowingById, updateFollowing } from "../service/following"

export const followingStore = defineStore({
  id: 'following',

  state: () => ({
    followState: false,
    currentFollowingState: {
      state: false,
      counter: 0
    }
  }),

  actions: {
    getFollowing (user, currentUser) {
      getFollowingById(user.id, currentUser)
        .then(res => {
          this.followState = res
          this.currentFollowingState = this.currentFollowingState
          this.currentFollowingState.state = res
          console.log(this.currentFollowingState.state)
          console.log(this.followState)
        })
    },

    handleUpdateLike (user, currentUser) {
      // this.currentFollowingState.counter = this.currentFollowingState.state ? -1 : 1

      updateFollowing(user.id, currentUser, this.currentFollowingState.state)
      this.getFollowing(user, currentUser)
      console.log('refetch following')
      this.followState = !this.followState
    }
  }
})