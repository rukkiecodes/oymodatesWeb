<script setup>
import { MatchStore } from '../../stores/match'
import MatchUserInfoVue from '../../components/MatchUserInfo.vue';

const match = MatchStore()

</script>

<template>
  <v-container>
    <v-row align="start" justify="start">
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex flex-column">
        <v-list nav dense>
          <v-list-item v-for="(user, i) in match.users[1]" :key="i" active-color="primary" @click="match.viewUser(user)"
            lines="2">
            <v-list-item-avatar start>
              <v-img :src="user?.photoURL" class="rounded-circle" style="cursor: pointer;" v-ripple width="50" />
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title v-text="user.username" />
              <v-list-item-subtitle v-text="user.displayName" />
            </v-list-item-header>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <MatchUserInfoVue />
      </v-col>
    </v-row>
  </v-container>
</template>
