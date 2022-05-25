<script setup>
import { PencilAltIcon, ShareIcon } from "@heroicons/vue/outline";
import { useSigninStore } from "../../stores/auth"
const auth = useSigninStore()
</script>

<template>
  <v-container>
    <v-row align="start" justify="start">
      <v-col cols="12" sm="12" md="3" lg="3">
        <v-img class="rounded-circle" :src="auth.userProfile ? auth.userProfile.photoURL : auth.user?.photoURL" />
      </v-col>
      <v-col cols="12" sm="12" md="9" lg="9" class="d-flex">
        <v-row align="start" justify="start">
          <v-col cols="12" sm="12" md="8" lg="8" xl="8">
            <div class="left d-flex flex-column">
              <span class="text-h4 text font-weight-bold">{{ auth.userProfile?.username ? auth.userProfile?.username :
                  'username'
              }}</span>
              <span class="text text-body-1 mt-1">{{ auth.user?.displayName }}</span>
              <v-btn variant="outlined" class="text-capitalize mt-3" width="140" color="grey-darken-3">
                <PencilAltIcon style="width: 24px;" />
                Edit profile
              </v-btn>
            </div>
          </v-col>
          <v-col>
            <v-btn icon elevation="0">
              <ShareIcon style="width: 24px;" />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
