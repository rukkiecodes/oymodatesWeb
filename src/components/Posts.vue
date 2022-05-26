<script setup>
const height = 500
</script>

<template>
  <v-container>
    <v-card flat>
      <v-card-text>
        <v-row align="start" justify="space-between">
          <v-col cols="1" sm="1" md="1" lg="1" xl="1">
            <v-avatar size="large">
              <v-img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8db34985871517d38c7ef045e63c9524~c5_100x100.jpeg?x-expires=1653613200&x-signature=LtIRIcCxBF4A6Bro9wXLJZxXjSI%3D" />
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
              <video class="reels-video" :height="height" style="border-radius: 12px; max-height: 500px; max-width: 500px;" src="../assets/1.mp4" />  
              <div class="ml-5 d-flex flex-column">
                <v-btn elevation="0" icon class="mb-4 bg-grey-lighten-3">
                  <v-icon icon="mdi-heart" />
                </v-btn>
                <v-btn elevation="0" icon class="mb-4 bg-grey-lighten-3">
                  <v-icon icon="mdi-comment-text-outline" />
                </v-btn>
                <v-btn elevation="0" icon class="bg-grey-lighten-3">
                  <v-icon icon="mdi-share" />
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
