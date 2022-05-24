<template>
  <v-container fluid class="pa-0 auth">
    <Bar />
    <div class="head">
      <p class="text-h1 font-weight-bold mt-md-n12 mb-md-8 text-black">Oymodates</p>
      <span class="text-black text-body-1">Find love on your own terms. Tell stories</span>
      <v-btn @click="signin.openDialog" elevation="0" color="#ff4040" class="text-capitalize mt-10" rounded="xl" theme="dark" size="large">
        Create account
      </v-btn>
    </div>
    <AuthDialog />
  </v-container>
</template>

<script setup>
import Bar from '../components/Bar.vue'
import AuthDialog from '../components/AuthDialog.vue'
import { useSigninStore } from '../stores/signin'

const signin = useSigninStore()
</script>

<style>
@import url(../assets/style/auth.css);
</style>