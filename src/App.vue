<template>
  <v-app>
    <AppBar />
    <AppDrawer />
    <ChatDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './components/AppBar.vue'
import AppDrawer from './components/AppDrawer.vue'
import ChatDrawer from './components/ChatDrawer.vue'
</script>

<style>
@import url(./assets/base.css);
@import url(./assets/icon/css/line-awesome.min.css);
</style>