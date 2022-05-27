<script setup>
import { useSigninStore } from "../../stores/auth"
import { MatchStore } from "../../stores/match"

const match = MatchStore()
const auth = useSigninStore()
</script>

<template>
  <v-container>
    <v-card elevation="0" rounded="xl" class="mx-auto" width="400" max-height="500"
      style="overflow: hidden; position: relative;">
      <v-img :src="match.userSwiped?.photoURL" />

      <div class="d-flex flex-column justify-end align-center"
        style="position: absolute; z-index: 1; top: 0; left: 0; background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)); width: 100%; height: 100%;">
        <p class="text-white text" style="font-size: 1.3rem;">It's a</p>
        <p class="text text-teal-accent-3" style="font-size: 3rem;">Match</p>
        <v-card class="mb-5" density="compact" rounded="pill">
          <v-card-text class="py-3 px-10">Say hi to {{ match.userSwiped?.username ? match.userSwiped?.username :
              match.userSwiped?.displayName
          }}</v-card-text>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>
