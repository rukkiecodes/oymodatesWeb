<script setup>
import { PencilAltIcon, XIcon } from '@heroicons/vue/outline'
import { useSigninStore } from '../stores/auth'

const auth = useSigninStore()
</script>

<template>
  <v-btn @click="auth.toggleEditProfileDialog" variant="outlined" class="text-capitalize mt-3" width="140"
    color="grey-darken-3">
    <PencilAltIcon style="width: 24px;" />
    Edit profile
  </v-btn>
  <v-dialog v-model="auth.editProfileDialog" persistent scrollable>
    <v-card rounded="lg" width="600">
      <v-card-title class="text-h6 grey-lighten-2">
        Edit profile

        <v-spacer />
        <v-btn @click="auth.toggleEditProfileDialog" icon elevation="0">
          <XIcon style="width: 24px;" />
        </v-btn>
      </v-card-title>

      <v-card-text style="height: 500px;">
        <v-card elevation="0" width="410" class="mx-auto">
          <v-card-text class="d-flex justify-center align-center">
            <v-progress-circular size="115" :model-value="auth.pictureUploadProgress" color="#ff4040" rotate="180">
              <v-card-avatar style="position: relative;">
                <v-img width="100" class="rounded-circle"
                  :src="auth.userProfile?.photoURL ? auth.userProfile?.photoURL : auth.user?.photoURL" />

                <v-btn v-if="auth.userProfile?.username" @click="auth.updateProfilePicture" icon elevation="0"
                  size="x-small" style="position: absolute; bottom: 8px; right: 6px;" color="grey-lighten-2">
                  <PencilAltIcon style="width: 16px;" />
                </v-btn>
              </v-card-avatar>
            </v-progress-circular>
          </v-card-text>
          <v-card-text>
            <v-text-field v-model="auth.userProfileCredential.username" class="bg-grey-lighten-4 rounded-lg px-4 mb-5"
              variant="plain" density="compact" placeholder="Username" hide-details />
            <span class="text-grey-darken-2" style="font-size: 12px;">www.oymodates.com/@{{ auth.userProfile?.username ?
                auth.userProfile?.username : auth.user?.displayName
            }}</span>
            <br />
            <span class="text-grey-darken-2" style="font-size: 12px;">
              Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also
              change
              your profile link.
            </span>
          </v-card-text>
          <v-card-text>
            <v-text-field v-model="auth.userProfileCredential.job" class="bg-grey-lighten-4 rounded-lg px-4"
              variant="plain" density="compact" placeholder="Job" hide-details />
            <v-divider class="my-5" />
            <v-text-field v-model="auth.userProfileCredential.company" class="bg-grey-lighten-4 rounded-lg px-4"
              variant="plain" density="compact" placeholder="Company" hide-details />
            <v-divider class="my-5" />
            <v-text-field v-model="auth.userProfileCredential.school" class="bg-grey-lighten-4 rounded-lg px-4"
              variant="plain" density="compact" placeholder="School" hide-details />
            <v-divider class="my-5" />
            <v-text-field v-model="auth.userProfileCredential.city" class="bg-grey-lighten-4 rounded-lg px-4"
              variant="plain" density="compact" placeholder="City" hide-details />
            <v-divider class="my-5" />
            <v-text-field v-model="auth.userProfileCredential.gender" class="bg-grey-lighten-4 rounded-lg px-4"
              variant="plain" density="compact" placeholder="Gender" hide-details />
          </v-card-text>
        </v-card>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn class="text-capitalize" color="grey-darken-3" @click="auth.toggleEditProfileDialog">
          Cancel
        </v-btn>
        <v-btn @click="auth.updateProfile" class="text-capitalize" color="#ff4040">
          {{
              auth.updateProfileLoading ? 'Loading.....' : 'Save'
          }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
