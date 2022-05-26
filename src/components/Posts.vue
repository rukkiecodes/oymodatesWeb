<script setup>
const height = 500
const vidHeight = height + 'px'
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
              <video class="reels-video"
                style="border-radius: 12px; width: auto !important; height:  vidHeight !important;"
                src="https://v16-webapp.tiktok.com/a81155681636e6d5184837ca63b627a7/628f534a/video/tos/useast2a/tos-useast2a-ve-0068c001/2596bae7543344459accd39eb2f2ce4e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3064&bt=1532&btag=80000&cs=0&ds=3&ft=eXd.6HF2Myq8ZXizTwe2NFn3yl7Gb&mime_type=video_mp4&qs=0&rc=M2dlNDc7O2dmZDk2aWdnZkBpMzw0M2s2NGZsNDMzNzczM0AvXjUtYzZgXzYxMjRhYjVjYSMtZmxwbmY0NW1gLS1kMTZzcw%3D%3D&l=202205260415290102170872091803FAEC" />
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
