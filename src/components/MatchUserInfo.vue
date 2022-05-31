<script>
import { MatchStore } from '../stores/match'
import { useSigninStore } from '../stores/auth'
import { followingStore } from '../stores/following'
import { postStore } from '../stores/posts'

import { mapActions, mapState } from 'pinia'
export default {
  mounted () {
    this.getFollowing(this.userInfo, this.userProfile)

    this.getAllFollowing(this.userInfo)
    this.getUserPosts(this.userInfo)
  },

  methods: {
    ...mapActions(MatchStore, ["swipeRight"]),
    ...mapActions(followingStore, ["getFollowing", "handleUpdateLike", "getAllFollowing"]),
    ...mapActions(postStore, ["getUserPosts"])
  },

  computed: {
    ...mapState(MatchStore, ["userInfo"]),
    ...mapState(followingStore, ["followState", "followers", "disableFollow"]),
    ...mapState(useSigninStore, ["userProfile"]),
    ...mapState(postStore, ["userPosts"])
  }
}
</script>

<template>
  <v-row align="start" justify="start">
    <v-col v-if="userInfo" cols="12" sm="12" md="3" lg="3">
      <v-img class="rounded-circle" :src="userInfo.photoURL" />
    </v-col>

    <v-col v-if="userInfo" cols="12" sm="12" md="9" lg="9" class="d-flex">
      <v-row align="start" justify="start">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
          <div class="left d-flex flex-column">
            <span class="text-h4 text font-weight-bold">{{ userInfo.username }}</span>
            <span class="text text-body-1 mt-1">{{ userInfo.displayName }}</span>
            <div class="d-flex">
              <v-btn @click="handleUpdateLike(userInfo, userProfile)" :disabled="disableFollow" rounded="lg"
                variant="outlined" class="text-capitalize mt-3" width="100" color="#ff4040">
                {{
                    !followState ? 'Follow' : 'Unfollow'
                }}
              </v-btn>

              <v-btn rounded="lg" @click="swipeRight(userInfo, userProfile)" elevation="0"
                class="text-capitalize mt-3 text-white ml-4" width="100" color="#ff4040">
                Match
                <v-tooltip activator="parent" location="bottom">
                  This user will be removed from this list after match
                </v-tooltip>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <div class="d-flex">
        <span class="text-grey-darken-4 font-weight-bold text-body-1">{{ followers.length }} <span
            class="text-body-2 text-grey-darken-3">{{ followers.length == 1 ? 'Follower' : 'Followers' }}</span></span>
        <span class="text-grey-darken-4 font-weight-bold text-body-1 ml-5">10 <span
            class="text-body-2 text-grey-darken-3">Likes</span></span>
      </div>
    </v-col>
  </v-row>

  <div align="start" justify="start" class="reel_cards mt-5">
    <div cols="12" sm="6" md="4" v-for="(feed, i) in userPosts[0]" :key="i" class="reel_cards_card pa-0 px-1">
      <video class="reels-video ma-0" :src="feed?.media" />
    </div>
  </div>
</template>

<style scoped>
video {
  border-radius: 10px;
  max-width: 100%;
}

.reel_cards {
  width: 100%;
  height: 100%;
  column-count: 3;
  column-gap: 0;
}

.reel_cards_card {
  width: 100%;
  break-inside: avoid;
}
</style>