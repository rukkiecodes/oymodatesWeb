<script setup>
import { PencilAltIcon, ShareIcon } from "@heroicons/vue/outline"
import EditProfile from "../../components/EditProfile.vue";

import { useSigninStore } from "../../stores/auth"
const auth = useSigninStore()
</script>

<template>
  <v-container>
    <v-row align="start" justify="start">
      <v-col cols="12" sm="12" md="3" lg="3">
        <v-img class="rounded-circle"
          :src="auth.userProfile?.photoURL ? auth.userProfile.photoURL : auth.user?.photoURL" />
      </v-col>
      <v-col cols="12" sm="12" md="9" lg="9" class="d-flex">
        <v-row align="start" justify="start">
          <v-col cols="12" sm="12" md="8" lg="8" xl="8">
            <div class="left d-flex flex-column">
              <span class="text-h4 text font-weight-bold">{{ auth.userProfile?.username ? auth.userProfile?.username :
                  'username'
              }}</span>
              <span class="text text-body-1 mt-1">{{ auth.user?.displayName }}</span>
              <div class="d-flex align-center mt-3">
                <EditProfile />
                <span class="text-grey-darken-4 font-weight-bold text-body-1 ml-4">{{ auth.userProfile.followersCount }}
                  <span class="text-body-2 text-grey-darken-3">{{ auth.userProfile.followersCount == 1 ? 'Follower' :
                      'Followers'
                  }}</span></span>
                <span class="text-grey-darken-4 font-weight-bold text-body-1 ml-4">10 <span
                    class="text-body-2 text-grey-darken-3">Likes</span></span>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-btn icon elevation="0">
              <ShareIcon class="icon" />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
