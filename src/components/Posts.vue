<script setup>
import { storeToRefs } from 'pinia'
import { useSigninStore } from '../stores/auth'
import { postStore } from '../stores/posts'
import { PlayIcon } from '@heroicons/vue/outline'

const auth = useSigninStore()
const post = postStore()

post.getPosts()

let video = document.querySelectorAll('.reels-video')

const playVideo = (e) => {
  let video = e.target.querySelector('video')
  video.play()
}
const stopVideo = (e) => {
  let video = e.target.querySelector('video')
  video.pause()
}
</script>

<template>
  <v-container>
    <div v-for="(feed, i) in post.posts[0]" :key="i">
      <v-card flat class="post" @mouseenter="playVideo" @mouseleave="stopVideo">
        <v-card-text>
          <v-row align="start" justify="space-between">
            <v-col cols="1" sm="1" md="1" lg="1" xl="1">
              <v-avatar size="large">
                <v-img :src="feed?.user?.photoURL" />
              </v-avatar>
            </v-col>
            <v-col cols="11" sm="11" md="11" lg="11" xl="11" class="mt-n1 pt-0">
              <v-list-item lines="three">
                <v-list-item-header>
                  <v-list-item-title class="font-weight-bold">{{ feed?.user?.username }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ feed?.description }}
                  </v-list-item-subtitle>
                </v-list-item-header>
              </v-list-item>

              <v-card class="d-flex justify-start align-end video-container" :max-height="500" flat>
                <div class="pa-0 ma-0" style="position: relative; overflow: hidden; border-radius: 20px;">
                  <video class="reels-video ma-0" loop disablePictureInPicture controls
                    controlsList="nofullscreen nodownload noplaybackrate" :src="feed?.media" />
                </div>
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
      <v-divider inset class="my-5 mx-auto bg-grey-lighten-5" />
    </div>
  </v-container>
</template>

<style scoped>
video::-webkit-media-controls-fullscreen-button {
  display: none;
}

video::-webkit-media-controls-play-button {}

video::-webkit-media-controls-timeline {
  display: none;
}

video::-webkit-media-controls-current-time-display {
  display: none;
}

video::-webkit-media-controls-time-remaining-display {
  display: none;
}

video::-webkit-media-controls-mute-button {}

video::-webkit-media-controls-toggle-closed-captions-button {}

video::-webkit-media-controls-volume-slider {}

video {
  border-radius: 12px;
  max-height: 500px;
  max-width: 500px;
}
</style>