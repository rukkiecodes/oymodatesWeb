<template>
  <v-navigation-drawer width="350" permanent :border="0" position="right">
    <v-list nav dense width="100%">
      <v-list-item v-for="(route, i) in firstRoutes" :key="i" :value="route" active-color="#ff4040" :to="route.to">
        <v-icon class="mr-4" :icon="route.icon" />

        <v-list-item-title v-text="route.name" class="text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const firstRoutes = [
  { icon: 'mdi-home', to: '/', name: 'For you' },
  { icon: 'mdi-heart-multiple-outline', to: '/match', name: 'Match' },
  { icon: 'mdi-account-multiple-outline', to: '/following', name: 'Following' },
]
</script>

<style>
@import url(../assets/base.css);
</style>