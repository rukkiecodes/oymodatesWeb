<script setup>
import { XIcon } from '@heroicons/vue/outline'
import { useSigninStore } from '../stores/auth';

const auth = useSigninStore()
</script>

<template>
  <v-menu anchor="start" open-on-hover transition="slide-x-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="text-capitalize red-bg" rounded="lg">
        <span class="text-white">
          Log in
        </span>
      </v-btn>
    </template>

    <v-card min-width="400" max-width="400" rounded="xl">
      <v-card-text>
        <v-card-text class="text-h5 text-center font-weight-bold mt-n4">Get started</v-card-text>
        <v-card-text class="text-body-2 text-center text-grey-darken-4">
          By clicking Log in, you agree to our
          <router-link class="text-decoration-none text-indigo" to="/terms">Terms</router-link>
          . Learn how we process your data in our
          <router-link class="text-decoration-none text-indigo" to="/policy">Privacy Policy</router-link>
          and
          <router-link class="text-decoration-none text-indigo" to="/cookiePolicy">Cookie Policy</router-link>
        </v-card-text>

        <v-card-actions class="mt-4">
          <v-btn @click="auth.googleLogin" size="large" style="position: relative" block color="grey lighten-1"
            class="text-capitalize" variant="outlined" rounded="xl">
            <img style="position: absolute; left: 10px;" class="mr-5" width="25" src="../assets/img/google.png" />
            <span class="text-grey-darken-4">
              {{
                  auth.googleLoading ? 'Loading...' : 'Continue with google'
              }}
            </span>
          </v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-btn @click="auth.facebookLogin" size="large" style="position: relative" block color="grey lighten-1"
            class="text-capitalize" variant="outlined" rounded="xl">
            <img style="position: absolute; left: 10px;" class="mr-5" width="25" src="../assets/img/facebook.png" />
            <span class="text-grey-darken-4">
              {{
                  auth.facebookLoading ? 'Loading...' : 'Continue with facebook'
              }}
            </span>
          </v-btn>
        </v-card-actions>

        <v-card-text class="text-center">
          <router-link class="text-decoration-none text-indigo" to="/troubleLoggingIn">Trouble
            logging
            in?</router-link>
        </v-card-text>

        <v-divider class="mx-10" />

        <v-card-text class="text-center text-uppercase font-weight-bold text-h5">
          Get the app!
        </v-card-text>
      </v-card-text>

      <v-card-actions>
        <v-btn size="large" style="position: relative;" block color="black" theme="dark"
          class="text-capitalize bg-black" rounded="xl">
          <img style="position: absolute; left: 15px;" class="mr-5" width="22" src="../assets/img/playstore.png"
            alt="John" />
          <span class="text-white">get it on googleplay</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<style>
@import url(../assets/base.css);
</style>