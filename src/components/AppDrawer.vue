<script setup>
import { HomeIcon, HeartIcon, UsersIcon } from '@heroicons/vue/outline'
import { useSigninStore } from '../stores/auth'

const auth = useSigninStore()

const users = [
  { displayName: 'destinyetikto999', username: 'dramadoll', photoURL: auth.user?.photoURL },
  { displayName: 'davido', username: 'davido', photoURL: auth.user?.photoURL },
  { displayName: 'iyaboojo', username: 'Iyabo Ojo', photoURL: auth.user?.photoURL },
  { displayName: 'yemialadeofficial', username: 'Yemi Alade', photoURL: auth.user?.photoURL },
  { displayName: 'iamnadiabuhari1', username: 'Nadia Buhari', photoURL: auth.user?.photoURL },
]

const following = [
  { displayName: 'opensea', username: 'openSea and NFTs', photoURL: auth.user?.photoURL },
  { displayName: 'adamw', username: 'adam W', photoURL: auth.user?.photoURL },
  { displayName: 'animehunter04', username: 'animeHunter04', photoURL: auth.user?.photoURL }
]
</script>


<template>
  <v-navigation-drawer width="300" permanent :border="0">
    <v-list nav dense width="100%">
      <v-list-item active-color="#ff4040" rounded="lg" to="/">
        <HomeIcon style="width: 24px;" class="mr-3" />

        <v-list-item-title class="text">For you</v-list-item-title>
      </v-list-item>

      <v-list-item active-color="#ff4040" rounded="lg" to="/match">
        <HeartIcon style="width: 24px;" class="mr-3" />

        <v-list-item-title class="text">Match</v-list-item-title>
      </v-list-item>

      <v-list-item active-color="#ff4040" rounded="lg" to="/following">
        <UsersIcon style="width: 24px;" class="mr-3" />

        <v-list-item-title class="text">Following</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider />
    <v-list density="compact">
      <v-list-subheader>Suggested accounts</v-list-subheader>
      <v-menu v-for="(user, i) in users" :key="i" open-on-hover anchor="end" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :value="user" active-color="grey" class="mb-1" lines="two" rounded="lg">
            <v-list-item-avatar start>
              <v-avatar size="small">
                <v-img :src="user.photoURL" />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title v-text="user.displayName" class="text-body-2 font-weight-bold"></v-list-item-title>
              <v-list-item-subtitle class="text-caption" v-text="user.username" />
            </v-list-item-header>
          </v-list-item>
        </template>

        <v-card rounded="lg">
          <v-card-header>
            <v-avatar>
              <v-img :src="user.photoURL" />
            </v-avatar>
            <v-spacer />
            <v-btn elevation="0" rounded="lg" color="#ff4040" class="text-white text-capitalize">Follow</v-btn>
          </v-card-header>

          <v-list-item lines="two">
            <v-list-item-header>
              <v-list-item-title class="text-body-1 font-weight-bold" v-text="user.displayName" />
              <v-list-item-subtitle class="text-caption" v-text="user.username" />
            </v-list-item-header>
          </v-list-item>

          <v-card-actions>
            <div class="mr-4">
              <span class="mr-1 font-weight-bold">20k</span>
              <span>Followers</span>
            </div>
            <div>
              <span class="mr-1 font-weight-bold">400k</span>
              <span>Likes</span>
            </div>
          </v-card-actions>
        </v-card>
      </v-menu>
      <v-list-item-action>
        <v-btn variant="text" class="text-capitalize" color="#ff4040">See all</v-btn>
      </v-list-item-action>
    </v-list>

    <v-divider />
    <v-list density="compact">
      <v-list-subheader>Following accounts</v-list-subheader>
      <v-list-item v-for="(user, i) in following" :key="i" :value="user" active-color="grey" class="mb-1" lines="two"
        rounded="lg">
        <v-list-item-avatar start>
          <v-avatar size="small">
            <v-img :src="user.photoURL" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title v-text="user.displayName" class="text-body-2 font-weight-bold"></v-list-item-title>
          <v-list-item-subtitle class="text-caption" v-text="user.username" />
        </v-list-item-header>
      </v-list-item>
      <v-list-item-action>
        <v-btn variant="text" class="text-capitalize" color="#ff4040">See all</v-btn>
      </v-list-item-action>
    </v-list>
  </v-navigation-drawer>
</template>
