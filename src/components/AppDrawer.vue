<script setup>
import { HomeIcon, HeartIcon, UsersIcon } from '@heroicons/vue/outline'

const users = [
  { displayName: 'destinyetikto999', username: 'dramadoll', photoURL: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662525218840582~c5_100x100.jpeg?x-expires=1653598800&x-signature=bgl64YF8vkdm2f%2BYZgkcPryJFdQ%3D' },
  { displayName: 'davido', username: 'davido', photoURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d8bccd7361423d34a53d4d698e40c1ab.jpeg?x-expires=1653613200&x-signature=XKBcayrX9VZtFQxnT%2F2w8MOAbF4%3D' },
  { displayName: 'iyaboojo', username: 'Iyabo Ojo', photoURL: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/955ab41fa76072e6aceebdbf7cfaa60d.jpeg?x-expires=1653613200&x-signature=gahzGWnX6xRkDcjXthjNbWao1uo%3D' },
  { displayName: 'yemialadeofficial', username: 'Yemi Alade', photoURL: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1655638538515462~c5_100x100.jpeg?x-expires=1653613200&x-signature=2IuLtubLCEA6dJNoH%2F%2Fck6BZjo8%3D' },
  { displayName: 'iamnadiabuhari1', username: 'Nadia Buhari', photoURL: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662219344498693~c5_100x100.jpeg?x-expires=1653613200&x-signature=32J0qkyMSn9qAP0YVCyMONzfC%2BA%3D' },
]

const following = [
  { displayName: 'opensea', username: 'openSea and NFTs', photoURL: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d67ae6597f05593b9349bb5bf97254c5~c5_100x100.jpeg?x-expires=1653613200&x-signature=yQb38idI3ZcGmHVOF%2BsFBTTO9Dk%3D' },
  { displayName: 'adamw', username: 'adam W', photoURL: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1618517764315142~c5_100x100.jpeg?x-expires=1653613200&x-signature=1I5aK0ZXrBmFBHSX3wHnXuHDVpU%3D' },
  { displayName: 'animehunter04', username: 'animeHunter04', photoURL: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cbe2627c68b25e5ab352a6c026c6c29b~c5_100x100.jpeg?x-expires=1653613200&x-signature=tP2njqPM4%2F4quVoisTircdta9K8%3D' }
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
