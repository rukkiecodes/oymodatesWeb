<script setup>
import { XIcon } from '@heroicons/vue/outline'
import { useSigninStore } from '../stores/signin';

const signin = useSigninStore()
</script>

<template>
  <v-dialog v-model="signin.dialog">
    <v-card min-width="400" max-width="400" rounded="xl">
      <v-card-header>
        <v-card-title class="logo text-h5 text-center">Oymodates</v-card-title>
        <v-spacer />
        <v-btn @click="signin.openDialog" elevation="0" icon>
          <XIcon style="width: 25px" />
        </v-btn>
      </v-card-header>
      <v-card-text class="text-h5 text-center font-weight-bold mt-n4">Get started</v-card-text>
      <v-card-text class="text-body-2 text-center" style="color: rgba(0,0,0,0.8)">
        By clicking Log in, you agree to our
        <router-link class="text-decoration-none" to="/terms">Terms</router-link>
        . Learn how we process your data in our
        <router-link class="text-decoration-none" to="/policy">Privacy Policy</router-link>
        and
        <router-link class="text-decoration-none" to="/cookiePolicy">Cookie Policy</router-link>
      </v-card-text>

      <v-card-actions class="mt-4">
        <v-btn @click="signin.googleLogin" size="large" style="position: relative" block color="grey lighten-1" variant="outlined" rounded="xl">
          <img style="position: absolute; left: 10px;" class="mr-5" width="25" src="../assets/img/google.png"
            alt="John" />
          <span style="color:rgba(0,0,0,0.8)">signin wigh google</span>
        </v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-btn @click="signin.facebookLogin" size="large" style="position: relative" block color="grey lighten-1" variant="outlined" rounded="xl">
          <img style="position: absolute; left: 10px;" class="mr-5" width="25" src="../assets/img/facebook.png"
            alt="John" />
          <span style="color:rgba(0,0,0,0.8)">signin wigh facebook</span>
        </v-btn>
      </v-card-actions>

      <v-card-text class="text-center">
        <router-link class="text-decoration-none" style="color: rgba(0,0,0,0.6)" to="/troubleLoggingIn">Trouble logging
          in?</router-link>
      </v-card-text>

      <v-divider class="mx-10" />

      <v-card-text class="text-center text-uppercase font-weight-bold text-h5">
        Get the app!
      </v-card-text>

      <v-card-actions>
        <v-btn size="large" style="position: relative; background-color: black;" block color="black" theme="dark"
          class="text-capitalize" rounded="xl">
          <img style="position: absolute; left: 10px;" class="mr-5" width="25" src="../assets/img/playstore.png"
            alt="John" />
          <span style="color:#fff">get in on googleplay</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
@import url(../assets/style/auth.css);
</style>