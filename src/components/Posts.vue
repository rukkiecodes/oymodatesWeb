<script setup>
import { useSigninStore } from '../stores/auth'

const auth = useSigninStore()

const height = 500
</script>

<template>
  <v-container>
    <v-card flat>
      <v-card-text>
        <v-row align="start" justify="space-between">
          <v-col cols="1" sm="1" md="1" lg="1" xl="1">
            <v-avatar size="large">
              <v-img :src="auth?.user?.photoURL" />
            </v-avatar>
          </v-col>
          <v-col cols="11" sm="11" md="11" lg="11" xl="11" class="mt-n1 pt-0">
            <v-list-item lines="three">
              <v-list-item-header>
                <v-list-item-title class="font-weight-bold">Username</v-list-item-title>
                <v-list-item-subtitle>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati blanditiis numquam
                  temporibus? Accusantium sed dolorem distinctio perspiciatis ullam?
                </v-list-item-subtitle>
              </v-list-item-header>
            </v-list-item>

            <v-card class="d-flex justify-start align-end video-container" :max-height="height" flat>
              <video class="reels-video" style="border-radius: 12px; max-height: 500px; max-width: 500px;"
                src="../assets/2.webm" />
              <div class="ml-5 d-flex flex-column">
                <v-btn elevation="0" icon size="small" class="mb-4 bg-grey-lighten-4">
                  <v-icon size="small" icon="mdi-heart" />
                </v-btn>
                <v-btn elevation="0" icon size="small" class="mb-4 bg-grey-lighten-4">
                  <v-icon size="small" icon="mdi-comment-text-outline" />
                </v-btn>
                <v-btn elevation="0" icon size="small" class="bg-grey-lighten-4">
                  <v-icon size="small" icon="mdi-share" />
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
