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

            <v-card class="d-flex justify-start align-end" flat>
              <video style="border-radius: 12px; min-width: 200px; width: 50%;"
                src="https://v16-webapp.tiktok.com/be9d1ebc4e9de6a41666ef63de7427b1/628df725/video/tos/maliva/tos-maliva-ve-0068c799-us/0f9740522a1c45f092da7b8eb42a0ef3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1948&bt=974&cs=0&ds=3&ft=eXd.6HF2Myq8ZDuSTwe2NRzJyl7Gb&mime_type=video_mp4&qs=0&rc=OTk3aGk4M2U2Z2kzPDtmNEBpM3M4PDw6Zjw2PDMzZzczNEA2YWFfMGItXi0xXzU0Ml5iYSMxNWAvcjRvamJgLS1kMS9zcw%3D%3D&l=2022052503282201022308014927056358" />
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

<script setup>

</script>
