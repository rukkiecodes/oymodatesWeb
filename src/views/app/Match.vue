<script>
import { MatchStore } from '../../stores/match'
import { mapActions, mapState } from 'pinia'
import MatchUserInfoVue from '../../components/MatchUserInfo.vue'
export default {
  components: {
    MatchUserInfoVue
  },

  mounted () {
    this.getUsers()
  },

  methods: {
    ...mapActions(MatchStore, ["getUsers", "viewUser"])
  },

  computed: {
    ...mapState(MatchStore, ["renderUsers", "userInfo"])
  }
}
</script>

<template>
  <v-container>
    <v-row align="start" justify="start">
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex flex-column">
        <v-list nav dense>
          <v-list-item v-for="(user, i) in renderUsers[1]" :key="i" active-color="#ff4040" @click="viewUser(user)"
            lines="2" class="rounded-lg">
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
        <MatchUserInfoVue v-if="userInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>
