<script setup>
import { MatchStore } from '../stores/match'

const match = MatchStore()
</script>

<template>
  <v-row align="start" justify="start">
    <v-col v-if="match.userInfo" cols="12" sm="12" md="3" lg="3">
      <v-img class="rounded-circle" :src="match.userInfo.photoURL" />
    </v-col>

    <v-col v-if="match.userInfo" cols="12" sm="12" md="9" lg="9" class="d-flex">
      <v-row align="start" justify="start">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
          <div class="left d-flex flex-column">
            <span class="text-h4 text font-weight-bold">{{ match.userInfo.username }}</span>
            <span class="text text-body-1 mt-1">{{ match.userInfo.displayName }}</span>
            <div class="d-flex">
              <v-btn variant="outlined" class="text-capitalize mt-3" width="100" color="#ff4040">
                Follow
              </v-btn>
              <v-btn elevation="0" class="text-capitalize mt-3 text-white ml-4" width="100" color="#ff4040">
                 Match
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
