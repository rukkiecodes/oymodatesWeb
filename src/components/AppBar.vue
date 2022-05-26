<script setup>
import { useSigninStore } from '../stores/auth'
import { HeartIcon, PlusCircleIcon, UserIcon, CogIcon, LogoutIcon } from '@heroicons/vue/outline'
const auth = useSigninStore()
</script>

<template>
  <v-app-bar flat>
    <span class="logo mr-md-10 mt-n2 text-h5">Oymodates</span>

    <v-spacer />
    <v-text-field hide-details density="compact" variant="plain" clearable placeholder="Search videos" class="bg-grey-lighten-4 px-3 rounded-lg"
      prepend-inner-icon="mdi-magnify" />
    <v-spacer />

    <v-btn v-if="auth.user" class="text-capitalize mr-4" icon rounded="lg" size="x-small">
      <PlusCircleIcon style="width: 24px;" />
    </v-btn>
    <v-btn v-if="auth.user" class="text-capitalize mr-4" icon rounded="lg" size="x-small">
      <v-icon>mdi-telegram</v-icon>
    </v-btn>
    <v-btn v-if="auth.user" class="text-capitalize mr-4" icon rounded="lg" size="x-small">
      <HeartIcon style="width: 24px;" />
    </v-btn>

    <v-btn v-if="!auth.user" @click="auth.openDialog" v-bind="props" class="text-capitalize red-bg" rounded="lg">
      <span class="text-white">
        Log in
      </span>
    </v-btn>
    <v-menu v-else open-on-hover anchor="start" transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-avatar v-bind="props" class="ml-md-4" size="small">
          <v-img :src="auth.userProfile?.photoURL ? auth.userProfile.photoURL : auth.user?.photoURL" />
        </v-avatar>
      </template>

      <v-list min-width="200" density="compact">
        <v-list-item density="compact"
          :to="auth.userProfile?.username ? `/@${auth.userProfile?.username}` : `/@${auth.user?.displayName}`">
          <UserIcon style="width: 22px;" class="mr-3" />
          <v-list-item-title class="text-body-2">View profile</v-list-item-title>
        </v-list-item>

        <v-list-item density="compact" to="/settings">
          <CogIcon style="width: 22px;" class="mr-3" />
          <v-list-item-title class="text-body-2">Settings</v-list-item-title>
        </v-list-item>

        <v-list-item @click="auth.signoutUser" density="compact">
          <LogoutIcon style="width: 22px;" class="mr-3" />
          <v-list-item-title class="text-body-2">Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>


<style>
@import url(../assets/base.css);
</style>