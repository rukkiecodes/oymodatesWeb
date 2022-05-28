<script setup>
import { useSigninStore } from '../stores/auth'
import { MatchStore } from '../stores/match'
import { HeartIcon, PlusCircleIcon, UserIcon, CogIcon, LogoutIcon } from '@heroicons/vue/outline'
import AuthDialogVue from './AuthDialog.vue'

const match = MatchStore()
const auth = useSigninStore()

match.getUsers()
</script>

<template>
  <v-app-bar flat>
    <span id="logo" class="logo mr-md-10 mt-n2 text-h5">Oymodates</span>

    <v-spacer />
    <v-text-field hide-details density="compact" variant="plain" clearable placeholder="Search videos"
      class="bg-grey-lighten-4 px-3 rounded-lg" prepend-inner-icon="mdi-magnify" />
    <v-spacer />

    <div v-if="auth.auth">
      <v-btn v-if="auth.user" class="text-capitalize mr-4" icon rounded="lg" size="x-small">
        <PlusCircleIcon class="icon" />
      </v-btn>
      <v-btn v-if="auth.user" class="text-capitalize mr-4" icon rounded="lg" size="x-small">
        <v-icon>mdi-telegram</v-icon>
      </v-btn>
      <v-btn v-if="auth.user" class="text-capitalize mr-4" icon rounded="lg" size="x-small">
        <HeartIcon class="icon" />
      </v-btn>
      <AuthDialogVue v-if="!auth.user" />

      <v-menu v-else open-on-hover anchor="start" transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-avatar v-bind="props" class="ml-md-4" size="small">
            <v-img :src="auth.userProfile ? auth.userProfile?.photoURL : auth.user?.photoURL" />
          </v-avatar>
        </template>

        <v-list min-width="200" density="compact" rounded="lg" class="py-0">
          <v-list-item density="compact"
            :to="auth.userProfile?.username ? `/@${auth.userProfile?.username}` : `/@${auth.user?.displayName}`">
            <UserIcon style="width: 22px;" class="mr-3" />
            <v-list-item-title class="text-body-2">View profile</v-list-item-title>
          </v-list-item>

          <v-list-item density="compact" to="/settings">
            <CogIcon style="width: 22px;" class="mr-3" />
            <v-list-item-title class="text-body-2">Settings</v-list-item-title>
          </v-list-item>

          <v-divider />
          <v-list-item @click="auth.signoutUser" density="compact">
            <LogoutIcon style="width: 22px;" class="mr-3" />
            <v-list-item-title class="text-body-2">Log out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>


<style>
@import url(../assets/base.css);
</style>