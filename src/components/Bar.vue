<template>
  <v-app-bar flat>
    <span class="logo mr-md-10 mt-n2 text-h4">Oymodates</span>

    <v-btn class="text-capitalize" to="/products">Products</v-btn>
    <v-btn class="text-capitalize" to="/products">Learn</v-btn>
    <v-btn class="text-capitalize" to="/products">Safety</v-btn>
    <v-btn class="text-capitalize" to="/products">Support</v-btn>
    <v-btn class="text-capitalize" to="/products">Download</v-btn>

    <v-spacer />

    <v-btn @click="signin.openDialog" color="#ff4040" class="text-capitalize">
      Login
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useSigninStore } from '../stores/signin'
const signin = useSigninStore()

signin.loginUser()
</script>

<style>
</style>