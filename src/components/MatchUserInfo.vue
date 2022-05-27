<script>
import { MatchStore } from '../stores/match'
import { useSigninStore } from '../stores/auth'
import { mapActions, mapState } from 'pinia'
export default {
  methods: {
    ...mapActions(MatchStore, ["swipeRight"])
  },

  computed: {
    ...mapState(MatchStore, ["userInfo"]),
    ...mapState(useSigninStore, ["userProfile"])
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
              <v-btn rounded="lg" variant="outlined" class="text-capitalize mt-3" width="100" color="#ff4040">
                Follow
              </v-btn>
              <v-btn rounded="lg" @click="swipeRight(userInfo, userProfile)" elevation="0"
                class="text-capitalize mt-3 text-white ml-4" width="100" color="#ff4040">
                Match
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
